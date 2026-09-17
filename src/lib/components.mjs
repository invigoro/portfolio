/**
 * The shared building blocks every page is assembled from. The important one is
 * stripes(): the alternating two-column rows, where each row flips which side
 * the media sits on. Rows carry .is-alt from the build so the pattern holds
 * without JavaScript; site.js only recomputes it when the filter hides rows.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

/** Intrinsic sizes written by tools/optimize-media.mjs, so images reserve their space. */
let sizes = {};
try {
  sizes = JSON.parse(readFileSync(join(root, 'src', 'data', 'media.json'), 'utf8'));
} catch {
  console.warn('  (no media.json — images will build without width/height)');
}

/** Copy is written as plain prose with inline HTML allowed, so only bare & needs fixing. */
export const amp = (s = '') => String(s).replace(/&(?![a-zA-Z#][a-zA-Z0-9]*;)/g, '&amp;');

const dims = (path) => {
  const size = sizes[path];
  return size ? ` width="${size.w}" height="${size.h}"` : '';
};

export const img = (name, alt = '', { className = '', eager = false } = {}) => {
  const path = `img/${name}.webp`;
  return `<img src="/assets/${path}"${dims(path)} alt="${amp(alt)}"${className ? ` class="${className}"` : ''} loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
};

const link = (href, inner) => (href ? `<a href="${href}" class="media__link">${inner}</a>` : inner);

function video({ video: name, alt = '', autoplay = false }) {
  const poster = `video/${name}.webp`;
  return `<video class="media__video"${dims(poster)} poster="/assets/${poster}" preload="none" controls playsinline${
    autoplay ? ' muted loop data-autoplay' : ''
  } aria-label="${amp(alt)}">
          <source src="/assets/video/${name}.mp4" type="video/mp4">
          <p>Your browser cannot play this video. <a href="/assets/video/${name}.mp4">Download it instead.</a></p>
        </video>`;
}

const embed = ({ src, title, ratio = '16 / 9' }) =>
  `<div class="media__embed" style="--ratio: ${ratio}">
          <iframe src="${src}" title="${amp(title)}" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;

/** media can hold any combination of a video, an image, an image grid, and embeds. */
export function mediaBlock(media = {}) {
  if (!media) return '';
  const parts = [];

  if (media.video) parts.push(video(media));
  if (media.image) parts.push(link(media.href, img(media.image, media.alt, { className: 'media__img' })));
  if (media.images) {
    parts.push(
      `<div class="media__grid" data-count="${media.images.length}">
          ${media.images.map((i) => link(i.href, img(i.image, i.alt, { className: 'media__img' }))).join('\n          ')}
        </div>`,
    );
  }
  if (media.embed) parts.push(embed(media.embed));
  if (media.embeds) parts.push(media.embeds.map(embed).join('\n        '));

  return parts.join('\n        ');
}

const actions = (links = []) =>
  links.length
    ? `<p class="actions">${links
        .map((l) => `<a class="btn${l.primary ? '' : ' btn--ghost'}" href="${l.href}">${amp(l.label)}</a>`)
        .join('\n            ')}</p>`
    : '';

const stack = (items = []) =>
  items.length ? `<ul class="stack">${items.map((s) => `<li>${amp(s)}</li>`).join('')}</ul>` : '';

/** One row of the alternating layout. */
export function stripe(item, index) {
  const meta = [item.role, item.year].filter(Boolean).join(' · ');
  return `      <article class="stripe${index % 2 ? ' is-alt' : ''}" id="${item.id}"${
    item.tags ? ` data-tags="${item.tags.join(' ')}"` : ''
  }>
        <div class="stripe__text">
          <h2 class="stripe__title">${amp(item.title)}</h2>
          ${meta ? `<p class="stripe__meta">${amp(meta)}</p>` : ''}
          ${item.badge ? `<p class="stripe__badge">${img(item.badge.image, item.badge.alt)}</p>` : ''}
          <p class="lede">${amp(item.summary)}</p>
          ${(item.body ?? []).map((p) => `<p>${amp(p)}</p>`).join('\n          ')}
          ${stack(item.stack)}
          ${actions(item.links)}
        </div>
        <div class="stripe__media">
        ${mediaBlock(item.media)}
        </div>
      </article>`;
}

export const stripes = (items) =>
  `<div class="stripes">
${items.map(stripe).join('\n')}
    </div>`;

/** Page title block that sits under the nav. */
export const pageHeader = ({ eyebrow, title, lede, children = '' }) => `<header class="page-header">
      <div class="wrap">
        ${eyebrow ? `<p class="eyebrow">${amp(eyebrow)}</p>` : ''}
        <h1>${amp(title)}</h1>
        ${lede ? `<p class="lede">${amp(lede)}</p>` : ''}
        ${children}
      </div>
    </header>`;

/** The filter chips above a set of stripes. */
export const filters = (categories) => `<div class="filters" data-filters>
          ${categories
            .map(
              (c) =>
                `<button type="button" class="chip" data-filter="${c.key}"${c.key === 'all' ? ' aria-pressed="true"' : ' aria-pressed="false"'}>${amp(c.label)}</button>`,
            )
            .join('\n          ')}
        </div>`;

export const section = (className, inner) => `<section class="${className}">
      <div class="wrap">
${inner}
      </div>
    </section>`;
