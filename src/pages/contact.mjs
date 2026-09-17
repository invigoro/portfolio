import { img, pageHeader, section } from '../lib/components.mjs';

export default (site) => ({
  title: 'Contact',
  description: 'Get in touch with Timothy Wells — email, GitHub, LinkedIn, and social links.',
  body: `${pageHeader({
    eyebrow: 'Contact',
    title: 'Get in touch',
    lede: 'Email is the surest way to reach me. I am always glad to hear about collaborations, research, or anyone who wants to help build a game.',
  })}

    ${section(
      'section',
      `        <div class="hero__inner">
          ${img('profilepic', 'Timothy Wells', { className: 'hero__portrait' })}
          <div>
            <ul class="contact-list">
${site.contact
  .map((c) => {
    const inner = `<strong>${c.label}</strong><span class="value">${c.value}</span>`;
    return `              <li>${c.href ? `<a href="${c.href}">${inner}</a>` : `<span>${inner}</span>`}</li>`;
  })
  .join('\n')}
            </ul>
            <p class="actions">
              <a class="btn" href="mailto:${site.email}">Send an email</a>
              <a class="btn btn--ghost" href="${site.cv}">Download résumé (PDF)</a>
            </p>
          </div>
        </div>`,
    )}`,
});
