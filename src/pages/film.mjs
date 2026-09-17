import { films } from '../data/films.mjs';
import { stripes, pageHeader } from '../lib/components.mjs';

export default () => ({
  title: 'Film',
  description:
    'Film and video work by Timothy Wells, including the award-winning short western The Territory\'s Best and production work for MontanaPBS.',
  body: `${pageHeader({
    eyebrow: 'Film & video',
    title: 'The other half of the degree',
    lede: 'I studied film and photography alongside computer science at Montana State. Here is what came out of it — narrative shorts, public television, and live broadcast graphics.',
  })}

    ${stripes(films)}`,
});
