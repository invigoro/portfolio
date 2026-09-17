import { projects } from '../data/projects.mjs';
import { films } from '../data/films.mjs';
import { img, stripes, section } from '../lib/components.mjs';

const featured = [
  ...projects.filter((p) => p.featured),
  ...films.filter((f) => f.featured),
];

const gallery = [
  ['xmas1', 'Christmas in the desert, Santa hats and all'],
  ['alps1', 'Goofing around on a stone wall in the Alps'],
  ['glacier2', 'A mountain goat wandering past on a trail in Glacier National Park'],
  ['pisa1', 'Holding up the Leaning Tower of Pisa'],
  ['glacier1', 'Backpacking above the lakes in Glacier National Park'],
  ['spartan1', 'Hauling a log up a hill during a Spartan Race'],
  ['wedding1', 'Standing with the couple after officiating their wedding'],
];

const cards = [
  {
    href: '/projects.html',
    title: 'Projects',
    text: 'Graphics demos, games, computer vision, web apps, and a robot or two.',
    more: 'Browse the work',
  },
  {
    href: '/film.html',
    title: 'Film',
    text: 'An award-winning short western, public television work, and whatever else got made.',
    more: 'Watch something',
  },
  {
    href: '/resume.html',
    title: 'Résumé',
    text: 'Four years building APIs and data systems at Amazon and Tadpull, now back in research.',
    more: 'See the history',
  },
];

export default (site) => ({
  title: 'About',
  description: site.description,
  body: `<section class="hero">
      <div class="wrap hero__inner">
        ${img('profilepic2', 'Timothy Wells', { className: 'hero__portrait', eager: true })}
        <div>
          <h1>Timothy M. Wells</h1>
          <p class="hero__roles">PhD student · Software engineer · Filmmaker · Ordained minister</p>
          <p class="lede">I am a software engineer and a computer science PhD student at the University of New Mexico, where I work on humanoid robots — teaching them to move with reinforcement learning, aimed at putting them to work in pharmaceutical manufacturing.</p>
          <p>More broadly, my research interests are computer graphics, extended reality, human-computer interaction, and the places they overlap with robotics.</p>
          <p>Before pursuing my PhD, I spent four years shipping production software — APIs, search infrastructure, and data pipelines at Amazon and IMDb, and e-commerce analytics at Tadpull. Outside of that I build video games, write, and cut video. I am also ordained with the Universal Life Church, so I officiate weddings, and I suppose funerals are on the table too.</p>
          <p class="actions">
            <a class="btn" href="/projects.html">See my work</a>
            <a class="btn btn--ghost" href="${site.cv}">Download résumé (PDF)</a>
          </p>
        </div>
      </div>
    </section>

    ${section(
      'section',
      `        <ul class="cards">
${cards
  .map(
    (c) => `          <li>
            <a class="card" href="${c.href}">
              <h3>${c.title}</h3>
              <p>${c.text}</p>
              <span class="card__more">${c.more} &rarr;</span>
            </a>
          </li>`,
  )
  .join('\n')}
        </ul>`,
    )}

    <section class="section--tight">
      <div class="wrap section__head">
        <p class="eyebrow">Selected work</p>
        <h2>A few things worth starting with</h2>
      </div>
      ${stripes(featured)}
      <div class="wrap actions" style="margin-top:2rem">
        <a class="btn btn--ghost" href="/projects.html">All projects</a>
        <a class="btn btn--ghost" href="/film.html">All film work</a>
      </div>
    </section>

    ${section(
      'section',
      `        <div class="section__head">
          <p class="eyebrow">Away from the desk</p>
          <h2>Elsewhere</h2>
          <p class="lede">Mountains, races, weddings, and the occasional leaning tower.</p>
        </div>
        <div class="gallery">
${gallery.map(([name, alt]) => `          ${img(name, alt)}`).join('\n')}
        </div>`,
    )}`,
});
