export const employment = [
  {
    employer: 'University of New Mexico',
    title: 'Graduate Research Assistant',
    place: 'Albuquerque, NM',
    dates: '2025 – present',
    points: [
      'Building software for humanoid robots, with the goal of putting them to work in pharmaceutical manufacturing.',
      'Most of the current work is reinforcement learning on the robot itself — teaching locomotion, retargeting human motion onto the robot, and the training infrastructure around both.',
    ],
  },
  {
    employer: 'Amazon / IMDb',
    title: 'Software Development Engineer',
    place: 'Seattle, WA',
    dates: '2021 – 2024',
    points: [
      'Built features for and maintained several internal and external APIs, covering schema review, scaling, and load testing.',
      'Designed solutions for querying large datasets, monitoring metrics across cloud compute systems, and controlling API access.',
      'Cut the operating cost of a search cluster by 50% through sustained experimentation with node configuration, index distribution, and resharding.',
      'Shipped changes safely through automated pipelines, monitoring the results to keep customer impact at zero; reviewed teammates\' changes and mentored engineers.',
      'Deprecated legacy features and services still carrying live customers, including building the missing functionality needed to migrate users between unrelated systems.',
      'Ran sprint planning and retrospectives, scoped and estimated project timelines, and organized design reviews with impacted teams and customers.',
      'Diagnosed and resolved high-severity operational issues on call, working directly with affected customers.',
    ],
  },
  {
    employer: 'Tadpull, Inc.',
    title: 'Software Development Engineer',
    place: 'Bozeman, MT',
    dates: '2019 – 2021',
    points: [
      'Designed, built, and maintained function and web applications in .NET Core and .NET Framework.',
      'Integrated Google Analytics, Google Maps, Mautic, Browserless.io, Bronto, and Klaviyo to sync e-commerce data across ERP, ESP, CRM, marketing automation, and behavior platforms.',
      'Built a customizable dashboard builder that pulled key e-commerce metrics from multiple data sources.',
      'Developed real-time alerts and recurring reports driven by anomalies in client data.',
      'Improved the team\'s internal review and QA process for new features and changes.',
      'Worked directly with e-commerce businesses on tracking and predictive analytics that measurably moved sales, retention, conversion rate, campaign effectiveness, and net promoter score.',
    ],
  },
];

export const education = [
  {
    school: 'University of New Mexico',
    place: 'Albuquerque, NM',
    dates: 'In progress',
    points: ['Ph.D. in Computer Science'],
  },
  {
    school: 'Montana State University',
    place: 'Bozeman, MT',
    dates: 'Graduated May 2019',
    points: [
      'B.S. in Computer Science',
      'B.A. in Film & Photography',
      'Minor in Mathematics',
      'Honors College degree',
      'GPA 3.82',
    ],
  },
];

export const awards = [
  { year: '2019', award: "Best Short Western Film (<i>The Territory's Best</i>)", status: 'Recipient', from: 'Olympus International Film Festival' },
  { year: '2019', award: "Official Selection (<i>The Territory's Best</i>)", status: 'Recipient', from: 'Bigfork Independent Film Festival' },
  { year: '2018', award: "Tracy Awards (<i>The Territory's Best</i>)", status: 'Nominated, 9 categories', from: 'MSU School of Film & Photography' },
  { year: '2018', award: 'Fred Gerber Scholarship in the Creative Art of Television', status: 'Recipient', from: 'Montana State University' },
  { year: '2018', award: 'Carl B. Swartz Memorial Scholarship', status: 'Recipient', from: 'Montana State University' },
  { year: '2017–18', award: 'Undergraduate Scholarship Program', status: 'Two-time recipient', from: 'Montana State University' },
  { year: '2014', award: 'Provost Scholarship', status: 'Recipient', from: 'Montana State University' },
  { year: '2014', award: 'National Merit Scholarship', status: 'Recipient', from: 'National Merit Scholarship Corporation' },
];

export const skills = [
  { group: 'Languages', items: ['C#', 'Java', 'C++', 'JavaScript & TypeScript', 'Python', 'HTML & CSS', 'SQL'] },
  { group: 'Frameworks & platforms', items: ['.NET & .NET Core', 'Entity Framework', 'AWS & AWS CDK', 'Unity', 'React Native', 'Firebase', 'Git'] },
  { group: 'Libraries', items: ['WebGL', 'OpenCV', 'D3', 'Angular Material', 'Bootstrap', 'jQuery'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MSSQL'] },
  { group: 'APIs', items: ['Google Analytics', 'Google Ads', 'Google Maps', 'Expo', 'Facebook', 'TMDb'] },
  { group: 'Tools', items: ['Visual Studio & VS Code', 'IntelliJ', 'Android Studio', 'NetBeans'] },
  { group: 'Media', items: ['Adobe Creative Suite', 'Vegas Pro', 'Ross XPression', 'Microsoft Office', 'Google Workspace'] },
];

/* Order matters: the home page hero quotes the first four. */
export const research = [
  'Robotics',
  'Reinforcement learning',
  'Computer graphics',
  'Virtual, augmented & extended reality',
  'Human-computer interaction',
  'Algorithms',
];
