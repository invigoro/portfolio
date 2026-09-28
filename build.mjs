/**
 * Static site builder. No dependencies, no framework: every page in src/pages
 * is a module that returns HTML, which gets dropped into a layout from
 * src/layouts (base.html unless the page names another one) and written to the
 * repo root so GitHub Pages can serve it directly.
 *
 *   node build.mjs
 *   node build.mjs --watch   rebuild whenever src/ changes
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { watch } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const SRC = join(root, 'src');

/** Pages that used to live under /html/, so old links and bookmarks still land somewhere. */
const REDIRECTS = {
  'html/coding.html': 'projects.html',
  'html/games.html': 'projects.html?filter=games',
  'html/films.html': 'film.html',
  'html/other.html': 'projects.html',
  'html/contact.html': 'contact.html',
  'html/terms.html': 'terms.html',
  'html/privacy.html': 'privacy.html',
};

const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function buildPage(layouts, site, file) {
  const slug = file.replace(/\.mjs$/, '');
  const mod = await import(`${pathToFileURL(join(SRC, 'pages', file)).href}?v=${Date.now()}`);
  const page = typeof mod.default === 'function' ? await mod.default(site) : mod.default;
  const out = slug === 'home' ? 'index.html' : `${slug}.html`;

  const layout = layouts[page.layout ?? 'base'];
  if (!layout) throw new Error(`${file}: no layout named ${page.layout}`);

  const html = layout.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, key) => {
    switch (key) {
      case 'title': return escape(page.title ? `${page.title} · ${site.name}` : site.name);
      case 'description': return escape(page.description ?? site.description);
      case 'canonical': return `${site.url}/${out === 'index.html' ? '' : out}`;
      case 'nav': return nav(site, out);
      case 'footer': return footer(site);
      case 'body': return page.body;
      case 'bodyClass': return page.bodyClass ?? '';
      case 'year': return String(new Date().getFullYear());
      default: return '';
    }
  });

  await writeFile(join(root, out), html);
  return out;
}

const nav = (site, current) => `
      <a class="nav__brand" href="/">${site.name}</a>
      <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-menu">
        <span class="nav__bars" aria-hidden="true"></span>
        <span class="visually-hidden">Menu</span>
      </button>
      <ul class="nav__menu" id="nav-menu">
${site.nav.map((item) => `        <li><a href="/${item.href}"${item.href === current ? ' aria-current="page"' : ''}>${item.label}</a></li>`).join('\n')}
      </ul>
      <button class="theme-toggle" type="button" title="Switch between light and dark">
        <span class="visually-hidden">Toggle dark mode</span>
        <svg class="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>
        <svg class="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>
      </button>`;

const footer = (site) => `
      <p class="footer__name">${site.name}</p>
      <ul class="footer__links">
${site.social.map((s) => `        <li><a href="${s.href}">${s.label}</a></li>`).join('\n')}
      </ul>
      ${site.footerNote ? `<p class="footer__aside">${site.footerNote.before} <a href="${site.footerNote.href}">${site.footerNote.label}</a>.</p>` : ''}
      <p class="footer__legal">
        &copy; <span data-year>${new Date().getFullYear()}</span> ${site.name} &middot;
        <a href="/terms.html">Terms of Use</a> &middot; <a href="/privacy.html">Privacy Policy</a>
      </p>`;

const redirectPage = (to) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Page moved</title>
  <link rel="canonical" href="/${to}">
  <meta http-equiv="refresh" content="0; url=/${to}">
  <meta name="robots" content="noindex">
</head>
<body>
  <p>This page has moved to <a href="/${to}">/${to}</a>.</p>
</body>
</html>
`;

async function build() {
  const started = Date.now();
  const layoutFiles = (await readdir(join(SRC, 'layouts'))).filter((f) => f.endsWith('.html'));
  const layouts = Object.fromEntries(
    await Promise.all(
      layoutFiles.map(async (f) => [f.replace(/\.html$/, ''), await readFile(join(SRC, 'layouts', f), 'utf8')]),
    ),
  );
  const { site } = await import(`${pathToFileURL(join(SRC, 'data', 'site.mjs')).href}?v=${Date.now()}`);
  const files = (await readdir(join(SRC, 'pages'))).filter((f) => f.endsWith('.mjs'));

  const written = await Promise.all(files.map((f) => buildPage(layouts, site, f)));

  await mkdir(join(root, 'html'), { recursive: true });
  for (const [from, to] of Object.entries(REDIRECTS)) {
    await writeFile(join(root, from), redirectPage(to));
  }

  console.log(`built ${written.length} pages + ${Object.keys(REDIRECTS).length} redirects in ${Date.now() - started}ms`);
  console.log(`  ${written.sort().join('  ')}`);
}

await build();

if (process.argv.includes('--watch')) {
  let queued;
  watch(SRC, { recursive: true }, () => {
    clearTimeout(queued);
    queued = setTimeout(() => build().catch((err) => console.error(err.message)), 50);
  });
  console.log('watching src/ ...');
}
