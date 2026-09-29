/**
 * The tools on /dm-tools.html. Each shelf is a group of cards.
 *
 * shot   image name under assets/img (without the .webp)
 * focus  object-position for the card crop, when top left is not the good bit
 * tag    the small gold label in the corner of the card
 */

export const shelves = [
  {
    id: 'table',
    title: 'For any table',
    note: 'System-agnostic — useful whatever you are running.',
    tools: [
      {
        name: 'Stele',
        tag: 'Handouts',
        href: 'https://stele.invigoro.me',
        shot: 'stele',
        focus: 'center right',
        alt: 'The Stele editor with a carved marble epitaph',
        body: [
          'Turns text into a weathered handout: carved marble and sandstone, bronze plaques, clay tablets, burnt letters, water-stained papyrus.',
          'Pick the medium, the script — Roman capitals through blackletter, runes, and cuneiform — then age it with chips, cracks, lichen, burns, and fading, or paint the damage on by hand. Export at 300 DPI, transparent for a virtual tabletop, or as a PDF.',
        ],
      },
      {
        name: 'Jabberwock',
        tag: 'Filler text',
        href: 'https://jabberwock.invigoro.me',
        shot: 'dm-jabberwock',
        alt: 'The Jabberwock generator with a passage of invented Elvish',
        body: [
          'Lorem ipsum for the table. Text in real languages and fantasy ones — Elvish out of French, Dwarvish out of Old Norse — where the words are invented but the rhythm, punctuation, and little words are real, so it reads as that language and means nothing.',
          'Prose, conversation, inscriptions, or names; a respelling under each word for reading aloud; and a button that drops the finished text straight into Stele.',
        ],
      },
      {
        name: 'Sator',
        tag: 'Puzzles',
        href: 'https://sator.invigoro.me',
        shot: 'dm-sator',
        alt: 'A Sator puzzle card: the answer, the clue laid out in letter tiles, and the hints beneath it',
        body: [
          'Named for the Roman word square whose letters rearrange into PATER NOSTER. Scrambles a password, a name, or a clue into letters the players have to work back — easy keeps the words and their first letters, hard runs everything together, moves every letter, and parts any two that used to sit side by side. It finds real-word anagrams too (DORMITORY gives DIRTY ROOM), or helps you write one by hand.',
          'Any line becomes a puzzle card: how much the clue gives away, what else its letters spell, a riddle, hints that ladder out a letter at a time, then a player link, tiles to print and scatter, or the clue carved into granite in Stele.',
        ],
      },
      {
        name: 'RPG MegaMart',
        tag: 'Magic items',
        href: 'https://www.rpgmegamart.com',
        shot: 'dm-megamart',
        alt: 'A shop page of magic items, each with a price and a description',
        body: [
          'A shop your players can browse. Build magic items with their own art, price, and rules text, gather them into a store, and hand the players the link instead of reading a list aloud.',
        ],
      },
    ],
  },
  {
    id: 'four-horsemen',
    title: 'Four Horsemen',
    note: 'Four Horsemen is my worldbuilding game, in the vein of <i>The Quiet Year</i>: the table writes the history of a world one age at a time.',
    tools: [
      {
        name: 'Age Deck',
        tag: 'Four Horsemen',
        href: 'https://fourhorsemen.invigoro.me/',
        shot: 'dm-fourhorsemen',
        alt: 'The Age Deck showing a drawn Age of Calamity: Pestilence card beside the history of earlier ages',
        body: [
          'Draws the deck the game runs on. Each card is the next age to befall the world, the calamities shuffle themselves in as you play so nobody knows which turn one arrives on, and every age drawn so far stays listed beside the deck.',
          'The full deck list is there too, behind a spoiler warning, for whoever is running the table.',
        ],
      },
    ],
  },
  {
    id: 'new-world',
    title: 'New World',
    note: 'New World is my homebrew game — a colonial-era fantasy setting with its own rules, so these only make sense at that table.',
    tools: [
      {
        name: 'Dice Roller',
        tag: 'New World',
        href: 'https://invigoro.github.io/website-test/roller-v3.html',
        shot: 'dm-roller',
        alt: 'The New World dice roller showing a failed Endurance check',
        body: [
          'Rolls a New World check: choose the stat, set the value, dial advantage or disadvantage up and down, and the dice tumble out with the result and every die that went into it.',
        ],
      },
    ],
  },
];
