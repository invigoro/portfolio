/**
 * One-off media optimizer for the source assets in media/.
 *
 * Re-encodes the videos to web-friendly H.264 (faststart, capped width) with a
 * still frame for each one, and converts every image to WebP at a sane display
 * size. Sources are read from $MEDIA_SRC (default `media/`, expected to hold
 * `img/` and `vid/` subfolders of untouched originals) and written to
 * `assets/img/` and `assets/video/`. The originals are never modified.
 *
 * Needs two tools that the site itself does not: run
 *   npm install --no-save sharp ffmpeg-static
 * before `node tools/optimize-media.mjs`. Set MEDIA_TOOLS to resolve those two
 * packages from somewhere other than this project. Pass --manifest to skip
 * encoding and only refresh src/data/media.json from what is already in assets/.
 */
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(join(process.env.MEDIA_TOOLS || root, 'index.js'));
const sharp = require('sharp');
const ffmpeg = require('ffmpeg-static');

const SRC = process.env.MEDIA_SRC || join(root, 'media');
const IMG_OUT = join(root, 'assets', 'img');
const VID_OUT = join(root, 'assets', 'video');

/** width: max output width. crf: quality, higher is smaller. poster: seconds into the clip. */
const VIDEOS = {
  'storydemo1.mov': { out: 'novateria', width: 1280, crf: 26, poster: 3, mute: true },
  'mechdemo1.mov': { out: 'novateria-combat', width: 1280, crf: 26, poster: 4, mute: true },
  'racing vid.mp4': { out: 'racing-game', width: 1280, crf: 26, poster: 6 },
  'graphics vid.mp4': { out: 'graphics-demo', width: 900, crf: 26, poster: 4 },
  'fp1.mp4': { out: 'frame-generator', width: 1280, crf: 26, poster: 1, mute: true },
  'cluest.mp4': { out: 'cluest', width: 852, crf: 28, poster: 12 },
};

/** Display width of each image at its largest breakpoint, doubled for retina. */
const IMAGE_WIDTHS = {
  'profilepic.jpg': 720,
  'profilepic2.png': 720,
  'icon.png': 180,
  default: 1400,
};

const run = (args) => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args]);
const kb = (p) => (statSync(p).size / 1024).toFixed(0).padStart(6) + ' KB';

function encodeVideo(file, opts) {
  const src = join(SRC, 'vid', file);
  const mp4 = join(VID_OUT, `${opts.out}.mp4`);
  const poster = join(VID_OUT, `${opts.out}.webp`);
  const scale = `scale='min(${opts.width},iw)':-2:flags=lanczos`;

  run([
    '-i', src,
    '-vf', scale,
    '-c:v', 'libx264', '-profile:v', 'high', '-preset', 'slow', '-crf', String(opts.crf),
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    ...(opts.mute ? ['-an'] : ['-c:a', 'aac', '-b:a', '96k', '-ac', '2']),
    '-map_metadata', '-1', '-map', '0:v:0', ...(opts.mute ? [] : ['-map', '0:a:0?']),
    mp4,
  ]);
  run(['-ss', String(opts.poster), '-i', src, '-frames:v', '1', '-vf', scale, '-c:v', 'libwebp', '-quality', '72', poster]);

  console.log(`  ${file.padEnd(20)} ${kb(src)} -> ${kb(mp4)}  (+${kb(poster)} poster)`);
}

async function encodeImage(file) {
  const src = join(SRC, 'img', file);
  const name = basename(file, extname(file)).toLowerCase();
  const width = IMAGE_WIDTHS[file] ?? IMAGE_WIDTHS.default;
  const out = join(IMG_OUT, `${name}.webp`);

  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(out);

  console.log(`  ${file.padEnd(28)} ${kb(src)} -> ${kb(out)}`);
}

/** Intrinsic sizes for every optimized asset, so build.mjs can emit width/height. */
async function writeManifest() {
  const manifest = {};
  for (const dir of ['img', 'video']) {
    const folder = join(root, 'assets', dir);
    if (!existsSync(folder)) continue;
    for (const file of readdirSync(folder)) {
      if (!/\.(webp|png|jpe?g)$/i.test(file)) continue;
      const { width, height } = await sharp(join(folder, file)).metadata();
      manifest[`${dir}/${file}`] = { w: width, h: height };
    }
  }
  writeFileSync(join(root, 'src', 'data', 'media.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`manifest: ${Object.keys(manifest).length} assets -> src/data/media.json`);
}

if (process.argv.includes('--manifest')) {
  await writeManifest();
  process.exit(0);
}

mkdirSync(IMG_OUT, { recursive: true });
mkdirSync(VID_OUT, { recursive: true });

console.log('images');
for (const file of readdirSync(join(SRC, 'img'))) await encodeImage(file);

// The favicon stays a PNG so it works everywhere a .ico would.
await sharp(join(SRC, 'img', 'icon.png')).resize({ width: 180 }).png({ compressionLevel: 9 }).toFile(join(IMG_OUT, 'icon.png'));

console.log('videos');
for (const [file, opts] of Object.entries(VIDEOS)) {
  if (!existsSync(join(SRC, 'vid', file))) continue;
  encodeVideo(file, opts);
}

await writeManifest();
