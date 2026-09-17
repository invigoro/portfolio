/** Film and video work on /film.html, in display order. Same row shape as projects.mjs. */

export const films = [
  {
    id: 'ttb',
    title: "The Territory's Best",
    role: 'Writer & director',
    year: '2018',
    featured: true,
    badge: { image: 'olympuswinnertransparent', alt: 'Olympus International Film Festival — Best Short Western' },
    summary:
      'A short western about an outlaw hunting down the legendary fastest gun in Montana Territory, shot on a historic homestead in Harrison, Montana.',
    body: [
      'I wrote the script with the Montana State University Screenwriting Club, pitched it to the MSU faculty as a senior film, and directed the production. We shot on location in February — the coldest month Montana has to offer, and a windy one.',
      'It went on to win Best Short Western at the Olympus International Film Festival, screen as an official selection at the Bigfork Independent Film Festival, and pick up nine Tracy Award nominations.',
    ],
    media: { embed: { src: 'https://www.youtube.com/embed/jX76zodJi6U', title: "The Territory's Best" } },
    links: [
      { href: 'https://youtu.be/jX76zodJi6U?si=IISbk2AsCnmxoNP8', label: 'Watch it', primary: true },
      { href: 'https://www.imdb.com/title/tt7960290/', label: 'IMDb' },
    ],
  },
  {
    id: '24h',
    title: '24 Hour Film Challenge',
    role: 'Writer, director & colorist',
    summary: 'A dark comedy written, shot, cut, and colored inside a single day, from a prompt handed out at the start.',
    body: [
      'One frantic writing session, then a production team scrambling to turn the pages into something real before the clock ran out. Short on time and shorter on sleep, we got it finished.',
    ],
    media: { embed: { src: 'https://player.vimeo.com/video/277827491', title: '24 Hour Film Challenge entry' } },
  },
  {
    id: 'ndd',
    title: 'MontanaPBS',
    role: 'Writer, producer & editor',
    summary: 'Short documentary and promotional pieces produced for MontanaPBS — a couple of them are here.',
    media: {
      embeds: [
        { src: 'https://www.youtube.com/embed/JVpjDpP2f6Y', title: 'MontanaPBS short' },
        {
          src: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FMontanaPBS%2Fvideos%2F2053197101659720%2F&width=360&show_text=false&appId=729498537445728&height=360',
          title: 'MontanaPBS short',
          ratio: '1 / 1',
        },
      ],
    },
  },
  {
    id: 'mpbsa',
    title: 'Montana State Athletics',
    role: 'Graphics operator, MontanaPBS',
    summary:
      'Live broadcast graphics for MSU Athletics, on the stadium and fieldhouse video boards and on the Big Sky Conference stream.',
    body: [
      'I built and ran graphics in Adobe Photoshop and Illustrator and Ross XPression as part of the MontanaPBS television crew, cutting them live during games for the boards in the building and for the broadcast on <a href="https://pluto.tv/tv/big-sky-conference">Pluto TV</a>.',
    ],
    media: {
      images: [
        { image: 'pbs1', alt: 'Broadcast graphics on the stadium video board' },
        { image: 'pbs2', alt: 'Graphics operation during a live game' },
      ],
    },
  },
  {
    id: 'lucid',
    title: 'Lucid',
    role: 'Producer',
    summary: 'My first time producing a short film. It is not available online, so these stills will have to do.',
    media: {
      images: [
        { image: 'lucid1', alt: 'Still from Lucid' },
        { image: 'lucid2', alt: 'Still from Lucid' },
        { image: 'lucid3', alt: 'On set during the production of Lucid' },
      ],
    },
  },
  {
    id: 'youtube',
    title: 'YouTube Channel',
    role: 'Everything',
    summary: 'The small stuff — odds and ends that never belonged to a bigger production.',
    media: {
      image: 'youchewb',
      alt: 'The MrBobertsays YouTube channel',
      href: 'https://www.youtube.com/user/MrBobertsays/featured',
    },
    links: [{ href: 'https://www.youtube.com/user/MrBobertsays/featured', label: 'Visit the channel', primary: true }],
  },
];
