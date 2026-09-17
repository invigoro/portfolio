import { projects, CATEGORIES } from '../data/projects.mjs';
import { stripes, pageHeader, filters } from '../lib/components.mjs';

export default () => ({
  title: 'Projects',
  description:
    'Software projects by Timothy Wells — real-time graphics, games, computer vision, robotics, and web applications.',
  body: `${pageHeader({
    eyebrow: 'Projects',
    title: 'Things I have built',
    lede: 'Graphics and game engines written from scratch, computer vision on real hardware, and web apps people actually use. Video games live here too — filter for them below.',
  })}

    <div class="filter-bar">
      <div class="wrap">
        ${filters(CATEGORIES)}
      </div>
    </div>

    ${stripes(projects)}

    <p class="empty-state is-hidden" data-empty>Nothing in that category yet.</p>`,
});
