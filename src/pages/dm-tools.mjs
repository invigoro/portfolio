import { shelves } from '../data/dm-tools.mjs';
import { amp, img } from '../lib/components.mjs';

const card = (tool) => `          <li>
            <article class="tool"${tool.focus ? ` style="--focus: ${tool.focus}"` : ''}>
              ${img(tool.shot, tool.alt, { className: 'tool__shot' })}
              <div class="tool__body">
                <div class="tool__title">
                  <h3>${amp(tool.name)}</h3>
                  <span class="tool__tag">${amp(tool.tag)}</span>
                </div>
                ${tool.body.map((p) => `<p>${amp(p)}</p>`).join('\n                ')}
                <a class="tool__link" href="${tool.href}">Open<span class="arrow" aria-hidden="true">&rarr;</span></a>
              </div>
            </article>
          </li>`;

const shelf = (s) => `    <section class="shelf" id="${s.id}">
      <div class="wrap">
        <div class="shelf__head">
          <h2>${amp(s.title)}</h2>
          ${s.note ? `<p class="shelf__note">${amp(s.note)}</p>` : ''}
        </div>
        <ul class="tools">
${s.tools.map(card).join('\n')}
        </ul>
      </div>
    </section>`;

export default () => ({
  title: 'DM Tools',
  description:
    'A shelf of tools for running tabletop games: a weathered handout generator, a magic item shop, an anagram generator, and a dice roller for the New World system.',
  layout: 'dm-tools',
  body: `<header class="masthead">
      <div class="wrap">
        <h1>DM Tools</h1>
        <p class="masthead__sub">Things I built to run my own games, parked somewhere I can find them again. Take what is useful.</p>
        <p class="rule"><span>&#10022;</span></p>
      </div>
    </header>

${shelves.map(shelf).join('\n\n')}`,
});
