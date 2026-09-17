/**
 * Every software project on /projects.html, in display order.
 *
 * id        anchor for the row, kept stable so old deep links still work
 * tags      keys from CATEGORIES below; drives the filter chips
 * media     { video } or { image } or { images: [] } or { embed }
 * links     first link is the primary call to action
 */

export const CATEGORIES = [
  { key: 'all', label: 'Everything' },
  { key: 'games', label: 'Video games' },
  { key: 'graphics', label: 'Graphics' },
  { key: 'web', label: 'Web & Apps' },
  { key: 'vision', label: 'Vision & Robotics' },
];

export const projects = [
  {
    id: 'newworld',
    title: 'Novateria: The New World',
    role: 'Game designer & developer',
    tags: ['games'],
    stack: ['Unity', 'C#'],
    featured: true,
    summary:
      'A party-based, turn-based RPG set in a fantasy version of the colonial New World — and the largest game project I have taken on.',
    body: [
      'Novateria follows a company of adventurers across dangerous, half-mapped territory in search of a lost colony. It takes its cues from <i>Divinity: Original Sin</i> and <i>Baldur\'s Gate</i>: you control up to four characters at once, and combat is turn-based with a deep pool of items and abilities.',
      'The project is in active development in Unity. I am looking for volunteers on every front — art, code, and design — so <a href="/contact.html">get in touch</a> if you would like to be part of it.',
    ],
    media: { video: 'novateria', autoplay: true, alt: 'Exploring a village in Novateria' },
    links: [
      { href: 'https://novateria.invigoro.me', label: 'Project site', primary: true },
    ],
  },
  {
    id: 'racinggame',
    title: 'Kart Racing Game',
    role: 'Game designer & developer',
    tags: ['games', 'graphics'],
    stack: ['WebGL', 'JavaScript'],
    featured: true,
    summary:
      'A browser kart racer through a procedurally generated world, written in raw WebGL with no game engine underneath it.',
    body: [
      'Everything runs in the browser and everything is built from the ground up: primitives, hierarchical modeling, Blinn-Phong lighting, texture and bump mapping, plus collision detection, kart physics, and particle effects.',
      'Each level is generated with randomized terrain, trees, obstacles, orbs, road segments, and clouds. Clear a level and the next one raises the difficulty by scattering more orbs to collect and more obstacles to dodge.',
    ],
    media: { video: 'racing-game', alt: 'Driving a kart through a procedurally generated level' },
    links: [
      { href: 'https://tinyurl.com/Finalcs512', label: 'Play it', primary: true },
      { href: 'https://github.com/invigoro/cs512-FinalProject', label: 'Source' },
    ],
  },
  {
    id: 'graphics',
    title: 'Interactive Graphics Demo',
    role: 'Programmer',
    tags: ['graphics'],
    stack: ['WebGL', 'JavaScript'],
    summary:
      'A hands-on WebGL scene for poking at computer graphics fundamentals — every part of it is adjustable from the page.',
    body: [
      'The scene supports a range of primitives that can be added, scaled, rotated, and translated freely. Objects can be parented to one another, so changing a rotation speed moves an entire hierarchy at once.',
      'It also implements the Blinn-Phong lighting model with two light sources, while the stars behind the scene read as a third. Objects carry textures, bump maps, and in some cases animated textures, all swappable at runtime.',
    ],
    media: { video: 'graphics-demo', alt: 'Textured, lit primitives orbiting in the graphics demo' },
    links: [
      { href: 'https://invigoro.github.io/cs512-hw5/index.html', label: 'Try the demo', primary: true },
      { href: 'https://github.com/invigoro/cs512-hw5', label: 'Source' },
    ],
  },
  {
    id: 'ray-tracing',
    title: 'Ray Tracing Demo',
    role: 'Programmer',
    tags: ['graphics'],
    stack: ['WebGL'],
    summary: 'A compact ray tracer in WebGL, covering materials, reflection, and refraction.',
    body: [
      'An interactive page that walks through the basic principles of ray tracing: how rays meet surfaces, how different materials respond, and what reflection and refraction do to the image.',
    ],
    media: { image: 'raytracing', alt: 'Reflective and refractive spheres rendered by the ray tracer', href: 'https://invigoro.github.io/cs512-hw6/index.html' },
    links: [
      { href: 'https://invigoro.github.io/cs512-hw6/index.html', label: 'Try the demo', primary: true },
      { href: 'https://github.com/invigoro/cs512-hw6', label: 'Source' },
    ],
  },
  {
    id: 'framegenerator',
    title: 'Artificial Frame Generator',
    role: 'Software developer',
    tags: ['vision', 'graphics'],
    stack: ['OpenCV', 'Optical flow'],
    summary: 'Software that invents the frames between frames, interpolating new video from the footage around it.',
    body: [
      'The generator estimates interstitial frames from neighboring ones using Farneback optical flow, Canny edge detection, and motion blur.',
      'Testing it was pleasantly self-checking: pull frames out of an existing clip, regenerate them, then compare the reconstruction against the originals mathematically.',
    ],
    media: { video: 'frame-generator', autoplay: true, alt: 'Interpolated frames generated from source video' },
    links: [{ href: 'https://github.com/invigoro/ArtificialFrameGenerator', label: 'Source', primary: true }],
  },
  {
    id: 'rpg-v3',
    title: 'RPG MegaMart v3',
    role: 'Software developer',
    tags: ['web'],
    stack: ['HTML', 'JavaScript', 'GitHub Pages'],
    summary: 'An open-source rewrite of RPG MegaMart as a static site anyone can fork and run for free.',
    body: [
      'V3 strips the shop down to HTML and JavaScript. Fork the repository, fill in your items from the template, and you have a storefront for your table — hosted on GitHub Pages at no cost, with no account or backend to maintain.',
    ],
    media: { image: 'rpgmegamart3', alt: 'RPG MegaMart v3 storefront template', href: 'https://invigoro.github.io/rpg-megamartv3/template.html' },
    links: [
      { href: 'https://invigoro.github.io/rpg-megamartv3/template.html', label: 'See an example', primary: true },
      { href: 'https://github.com/invigoro/rpg-megamartv3', label: 'Source' },
    ],
  },
  {
    id: 'rpg-v2',
    title: 'RPG MegaMart v2',
    role: 'Software developer',
    tags: ['web'],
    stack: ['.NET Core', 'PostgreSQL', 'MVC'],
    summary:
      'A live web app where tabletop players design magic items, publish them, and sell them to each other in shared stores.',
    body: [
      'Anyone can build items for their game — Dungeons & Dragons, Monster of the Week, Uncharted Worlds — customize them fully, and make them public for other groups to browse. Gather the items you want into a store, add your players, and let them shop.',
      'The first version of this was a PHP prototype running off a laptop on my local network. V2 rebuilt it properly on .NET Core with an MVC structure and a PostgreSQL database.',
    ],
    media: { image: 'rpgmegamart2', alt: 'The RPG MegaMart item catalog', href: 'https://www.rpgmegamart.com' },
    links: [{ href: 'https://www.rpgmegamart.com', label: 'Visit the site', primary: true }],
  },
  {
    id: 'filmpitchbot',
    title: 'Film Pitch Bot',
    role: 'Software developer',
    tags: ['web'],
    stack: ['TMDb API', 'OpenAI', 'DALL·E'],
    summary: 'A bot that pitches movies that do not exist, complete with a cast list and a poster.',
    body: [
      'The bot samples real films from <a href="https://www.themoviedb.org/">TMDb\'s free API</a>, runs text prediction over that small sample to assemble a title, logline, and short cast list, then rewrites the result with OpenAI and generates a poster through Craiyon or DALL·E. Occasionally the poster request gets rejected for whatever the description managed to say. The survivors get posted.',
    ],
    media: { image: 'fpb', alt: 'A generated film pitch with poster art', href: 'https://x.com/FilmPitchBotV2' },
    links: [
      { href: 'https://x.com/FilmPitchBotV2', label: 'Read the pitches', primary: true },
      { href: 'https://github.com/invigoro/FilmPitchBotV2', label: 'Source' },
    ],
  },
  {
    id: 'juicepress',
    title: 'The Juice Press',
    role: 'Software developer',
    tags: ['web'],
    summary: 'A satire publication with a stable of writers and, yes, a custom quiz builder.',
    body: [
      'The Juice Press gives contributors a place to draft, edit, and publish satirical articles and quizzes, with the quiz format built from scratch rather than bolted on.',
    ],
    media: { image: 'thejuicepress1', alt: 'The Juice Press home page', href: 'https://thejuicepress.invigoro.me' },
    links: [{ href: 'https://thejuicepress.invigoro.me', label: 'Visit the site', primary: true }],
  },
  {
    id: 'cluest',
    title: 'Cluest',
    role: 'Lead engineer, project manager & game designer',
    tags: ['games', 'web'],
    stack: ['React Native', 'Firebase', 'Facebook API'],
    summary: 'A mobile treasure hunting game that turns the places around you into clues for your friends to chase.',
    body: [
      'Cluest uses the phone\'s location services to build hunts out of real places. Save a spot, attach a hint, and it becomes a <i>clue</i>; string enough clues together and you have a <i>treasure hunt</i> to send to a friend. They enter hunt mode, and each clue they find points toward the next. New players are matched with friends automatically through Facebook.',
      'Choosing the stack took longer than I expected — Android Studio, AWS, and Apache were all on the table. React Native won because it meant a single simultaneous release on Android and iOS, and Firebase handled the backend, scaling, and authentication. Learning all of it at once over a couple of months was a slog, and worth it.',
    ],
    media: { video: 'cluest', alt: 'Walkthrough of the Cluest mobile app' },
    links: [{ href: 'https://github.com/invigoro/Cluest-Prototype', label: 'Source', primary: true }],
  },
  {
    id: 'opencv',
    title: 'Robot Vision with OpenCV',
    role: 'Programmer & team lead',
    tags: ['vision'],
    stack: ['Python', 'OpenCV', 'Java'],
    summary:
      'A run of projects on teaching a robot to see: image manipulation from scratch, then object detection, then robots acting on what they find.',
    body: [
      'The groundwork was writing the algorithms by hand in Java — rotations, translations, blurs, masks, edge detection, along with color correction, detection, equalization, grayscaling, and histograms.',
      'From there we moved to OpenCV in Python. First color detection with runtime-adjustable HSV tolerances, then differencing a rolling average of recent frames to pick out motion as it happened. Then object detection with Canny edges and contours, which we tested by counting Skittles and M&Ms by color — genuinely hard when a candy matches the background or overlaps another of the same color, and a useful lesson in how much tolerance tuning real vision takes.',
      'The last stretch put it on hardware in MSU\'s robotics lab. Blur, edges, and thresholding got a robot following a solid line quickly; a dotted line took adding center-of-mass tracking of the filtered objects in frame, and a 180° sweep at the end of the trail to confirm it had actually finished. Next it searched for a human face, adjusted its distance until it was comfortable conversational range, greeted the person, and tracked their face — restarting the hunt if they left frame for more than fifteen seconds. The final program combined everything: navigate an obstacle course by distinguishing obstacles from safe path, find a person, take an item from them, and retrace the route.',
    ],
    media: {
      images: [
        { image: 'imgproc1', alt: 'Color detection with adjustable tolerances' },
        { image: 'imgproc2', alt: 'Counting candy by color with contour detection' },
        { image: 'imgproc3', alt: 'The lab robot running a vision program' },
      ],
    },
    links: [
      { href: 'https://github.com/invigoro/ImageProcessing', label: 'Image processing I', primary: true },
      { href: 'https://github.com/invigoro/ImageProcessing2', label: 'Image processing II' },
      { href: 'https://github.com/invigoro/robot-chase', label: 'Line following' },
      { href: 'https://github.com/Cory-Pete/RobotFace', label: 'Face finding' },
    ],
  },
  {
    id: 'cc',
    title: "Cat's Conundrum",
    role: 'Programmer & project lead',
    tags: ['vision'],
    stack: ['Java', 'Android', 'Arduino C++'],
    summary:
      'Four months, two mechanical engineers, one electrical engineer, a $200 cap, and a remote-controlled vehicle built from nothing to run an obstacle course.',
    body: [
      'The Cat\'s Conundrum course is about twenty interchangeable tiles with an obstacle on each, scored on a base value plus multipliers for how hard a line you take through them. Our job was a vehicle inside strict size limits that could take as many points as possible in ten minutes.',
      'Testing pushed us to treads over wheels, and to Bluetooth for control so the app could run on several phones as a hedge against failure. Four motors working in pairs let the treads skid-steer through tight turns.',
      'I wrote the controller app in Java with Android Studio and kept it deliberately plain: two vertical sliders, one per side of the vehicle, snapping back to zero when released, plus a handful of buttons. On the other end an Arduino Nano ran my C++, decoding the character arrays the app pushed over a Bluetooth module against the vehicle\'s current state.',
      'It paid off on the day. The run went better than any of our tests — light, nimble, and rugged enough for the terrain, with batteries that never sagged enough to cost us torque. The precision of those two sliders turned out to be the real edge: fine speed adjustments none of the competing vehicles could make, on exactly the obstacles that were worth the most.',
    ],
    media: {
      images: [
        { image: 'catcon3', alt: 'The second prototype of the vehicle' },
        { image: 'catcon1', alt: 'The vehicle running the obstacle course' },
        { image: 'catcon2', alt: 'Early sketch of the controller app layout' },
      ],
      embed: { src: 'https://www.youtube.com/embed/hX2RI3wGOeU', title: "Cat's Conundrum course run" },
    },
    links: [{ href: 'https://github.com/invigoro/Arduino_Controller', label: 'App & Arduino source', primary: true }],
  },
];
