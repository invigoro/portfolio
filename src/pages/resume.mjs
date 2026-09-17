import { employment, education, awards, skills, research } from '../data/resume.mjs';
import { amp, pageHeader, section } from '../lib/components.mjs';

const entry = ({ head, title, when, points }) => `        <article class="job">
          <div class="job__head">
            <h3>${amp(head)}</h3>
            ${title ? `<p class="job__title">${amp(title)}</p>` : ''}
            <p class="job__when">${amp(when)}</p>
          </div>
          <ul>
${points.map((p) => `            <li>${amp(p)}</li>`).join('\n')}
          </ul>
        </article>`;

export default (site) => ({
  title: 'Résumé',
  description:
    'The professional history of Timothy Wells — humanoid robotics research at UNM, software engineering at Amazon and Tadpull, education, and awards.',
  body: `${pageHeader({
    eyebrow: 'Résumé',
    title: 'Where I\'ve worked',
    lede: 'Four years of production software engineering, a film degree, and now doing research.',
    children: `<p class="actions"><a class="btn" href="${site.cv}">Download the full CV (PDF)</a></p>`,
  })}

    ${section(
      'section',
      `        <div class="section__head">
          <p class="eyebrow">Experience</p>
          <h2>Employment</h2>
        </div>
${employment
  .map((job) =>
    entry({
      head: job.employer,
      title: job.title,
      when: `${job.place} · ${job.dates}`,
      points: job.points,
    }),
  )
  .join('\n')}`,
    )}

    ${section(
      'section',
      `        <div class="section__head">
          <p class="eyebrow">Education</p>
          <h2>Degrees</h2>
        </div>
${education
  .map((school) => entry({ head: school.school, when: `${school.place} · ${school.dates}`, points: school.points }))
  .join('\n')}
        <div style="margin-top:2.5rem">
          <h3 class="eyebrow">Research interests</h3>
          <ul class="stack">${research.map((r) => `<li>${amp(r)}</li>`).join('')}</ul>
        </div>`,
    )}

    ${section(
      'section',
      `        <div class="section__head">
          <p class="eyebrow">Toolkit</p>
          <h2>Skills</h2>
        </div>
        <div class="skill-groups">
${skills
  .map(
    (group) => `          <div>
            <h3>${amp(group.group)}</h3>
            <ul class="stack">${group.items.map((i) => `<li>${amp(i)}</li>`).join('')}</ul>
          </div>`,
  )
  .join('\n')}
        </div>`,
    )}

    ${section(
      'section',
      `        <div class="section__head">
          <p class="eyebrow">Recognition</p>
          <h2>Honors &amp; awards</h2>
        </div>
        <div class="table-scroll">
          <table class="table">
            <thead>
              <tr><th>Year</th><th>Award</th><th>Result</th><th>Awarded by</th></tr>
            </thead>
            <tbody>
${awards
  .map(
    (a) =>
      `              <tr><td>${a.year}</td><td>${a.award}</td><td>${a.status}</td><td>${amp(a.from)}</td></tr>`,
  )
  .join('\n')}
            </tbody>
          </table>
        </div>`,
    )}`,
});
