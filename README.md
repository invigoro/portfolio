# invigoro.me

Personal portfolio for Timothy Wells. Plain static HTML served straight from this
repo by GitHub Pages — no runtime, no framework, no dependencies.

## How it works

Pages are assembled at build time from templates and data in `src/`, and written
as finished HTML to the repo root. GitHub Pages then serves those files as-is.

```
build.mjs              the whole build: ~100 lines, no dependencies
src/
  layouts/base.html    <head>, nav, and footer — the shell the portfolio shares
  layouts/dm-tools.html  the shell for /dm-tools.html, which has its own look
  lib/components.mjs   stripes(), mediaBlock(), buttons, page headers
  data/
    site.mjs           name, nav, social and contact links
    projects.mjs       one entry per software project
    films.mjs          one entry per film or video project
    resume.mjs         employment, education, awards, skills
    dm-tools.mjs       the tool shelves on /dm-tools.html
    media.json         image dimensions, generated — do not edit by hand
  pages/*.mjs          one module per page, returns { title, description, body }
assets/
  css/site.css         portfolio styles; the palette lives in the tokens at the top
  css/dm-tools.css     the parchment theme, shared with nothing else
  js/site.js           menu, dark mode, project filter, lazy video
  img/ video/          optimized media (WebP, H.264)
tools/optimize-media.mjs   re-encodes originals into assets/
```

Everything at the repo root ending in `.html`, plus `html/*.html`, is **generated**.
Edit `src/`, not the output.

## Working on it

```sh
node build.mjs          # build once
node build.mjs --watch  # rebuild on every change under src/
```

Then open the files directly, or serve the folder (`npx serve .`) so that the
root-relative `/assets/...` paths resolve the way they do in production.

Commit the generated HTML along with your `src/` changes — that is what Pages
publishes.

A page picks its shell with `layout: '<name>'`, matching a file in
`src/layouts`; leave it out and it gets `base`. That is how /dm-tools.html —
a shelf of tabletop tools, deliberately styled nothing like the portfolio —
lives in the same build.

### Adding a project

Add an entry to `src/data/projects.mjs` and rebuild. `tags` decides which filter
chips it appears under, `id` is its anchor, and `media` takes a video, an image,
a grid of images, or an embed. Rows alternate sides automatically.

## Media

Source images and videos are **not** kept in the repo; `assets/` holds optimized
derivatives only (originals live in git history, and wherever you keep them).
A few images are screenshots captured straight from a live site rather than
derivatives of anything — re-running the optimizer leaves those alone.
To re-optimize a fresh batch, put the originals in `media/img` and `media/vid` and run:

```sh
npm install --no-save sharp ffmpeg-static
node tools/optimize-media.mjs
```

That writes WebP images, H.264 MP4s with poster frames, and refreshes
`src/data/media.json` (the width/height values that keep pages from shifting as
images load). The current pass took the site from 179 MB of media to 18 MB.

## Old URLs

Pages that used to live under `/html/` are kept as redirect stubs pointing at
their new homes, so existing links and bookmarks still work.
