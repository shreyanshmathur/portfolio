// Single source of truth for every fact on the site.
// Only facts confirmed by Shreyansh or stated on his resume belong here.

export const profile = {
  name: 'Shreyansh Mathur',
  role: 'Strategy & Delivery',
  location: 'Gurgaon, India',
  email: 'shreyanshmathur12@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shreyanshmathur',
  github: 'https://github.com/shreyanshmathur',
  summary:
    'I led a 60-member delivery team across 11 enterprise accounts at TrueFan AI, where I helped close the largest deal in the company’s history. Before that, I did strategy consulting at PwC.',
}

export const headlineStats = [
  { num: '₹12 Cr', unit: '/ year', label: 'Bajaj Finance contract', sub: 'Largest deal in TrueFan AI history' },
  { num: '60', unit: 'people', label: 'Delivery team led', sub: '11 enterprise accounts at once' },
  { num: '10x', unit: '', label: 'Flipkart account growth', sub: '₹20L to ₹2Cr' },
  { num: '~10%', unit: '', label: 'Lift in company profits', sub: 'From the content-at-scale service line' },
]

/* ── TrueFan AI ─────────────────────────────────────────── */
export const truefan = {
  company: 'TrueFan AI',
  role: 'Project Delivery Manager',
  period: 'May 2026 – Nov 2026',
  what: 'TrueFan AI makes personalised AI video for enterprises.',
  sectors: [
    'BFSI', 'NBFC', 'Fashion', 'FMCG',
    'Real estate', 'Agribusiness', 'Logistics', 'Mobility',
  ],
  accountGrowth: [
    { client: 'Flipkart', fromL: 20, toL: 200, from: '₹20L', to: '₹2Cr', mult: '10x' },
    { client: 'Canara HSBC Life', fromL: 25, toL: 125, from: '₹25L', to: '₹1.25Cr', mult: '5x' },
    { client: 'PhonePe', fromL: 10, toL: 35, from: '₹10L', to: '₹35L', mult: '3.5x' },
  ],
  otherClients: ['IndusInd Bank', 'HSBC', 'HDFC', 'Equifax', 'Kissht', 'BirlaNu'],
}

/* ── Full career, newest first ──────────────────────────── */
export const roles = [
  {
    id: 'truefan',
    org: 'TrueFan AI',
    role: 'Project Delivery Manager',
    period: 'May 2026 – Nov 2026',
    start: 2026 + 4 / 12, end: 2026 + 10 / 12,
    track: 'Delivery',
    points: [
      'Led a 60-member delivery team running 11 enterprise accounts at once across BFSI, NBFC, fashion, FMCG, real estate, agribusiness, logistics and mobility, with no missed deadlines.',
      'Worked with the tech team to build, and helped close, the largest deal in company history: a ₹12 Cr a year Bajaj Finance contract for a real-time explainer-video engine.',
      'Grew key accounts: Flipkart ₹20L to ₹2Cr (10x), Canara HSBC Life ₹25L to ₹1.25Cr (5x), PhonePe ₹10L to ₹35L (3.5x).',
      'Set up a content-at-scale service line that runs AI pipelines to deliver client content at volume, opening a new revenue stream and lifting company profits by about 10%.',
      'First point of contact between the founders and clients, including IndusInd Bank, HSBC, HDFC, Equifax, Kissht and BirlaNu.',
    ],
  },
  {
    id: 'pwc',
    org: 'PwC',
    role: 'Strategy Associate',
    period: 'Aug 2025 – May 2026',
    start: 2025 + 7 / 12, end: 2026 + 4 / 12,
    track: 'Consulting',
    points: [
      'Led GCC strategy for a global FMCG client: defined the operating model, planned transitions and hired 35+ key roles for the India Tech Hub’s multi-year transformation, enabling 20% faster market entry for new products.',
      'Redesigned the IT operating model for a national cement leader with a hub-and-spoke structure across 15+ states. Mapped functional overlaps and defined governance, enabling 25% faster incident dispatch.',
      'Authored the 5-year India Tech Hub Strategy and Activation Plan, with phased transition roadmaps scaling headcount from 27 to 108 FTEs across France, Spain, Poland and India.',
    ],
  },
  {
    id: 'pwc-intern',
    org: 'PwC',
    role: 'Advisory Intern',
    period: 'Jan 2025 – Aug 2025',
    start: 2025, end: 2025 + 7 / 12,
    track: 'Consulting',
    points: [
      'Worked with a paint manufacturer’s C-suite on SAP FICO/MM optimisation, cutting processing time by 10% and supporting 500+ users with training and executive dashboards.',
      'Built project-management tracking for 15+ initiatives, recognised for zero issue slippage and real-time executive reporting.',
      'Mapped process pain points with Lean Six Sigma and automated reporting with VBA and Python, cutting reporting cycle time by 20%.',
    ],
  },
  {
    id: 'bellevidco',
    org: 'BelleVidCo',
    role: 'Co-Founder & CEO',
    period: 'Feb 2023 – Dec 2024',
    start: 2023 + 1 / 12, end: 2024 + 11 / 12,
    track: 'Venture',
    points: [
      'Built operational systems for clients across logistics, fashion and PE advisory, including an ML-based SKU placement algorithm (~35% reduction in pick travel) and a live-data AI pricing engine for a fashion retailer.',
      'Led a lean team of 8 and launched 200+ growth campaigns.',
    ],
  },
  {
    id: 'recover',
    org: 'Recover Media',
    role: 'Marketing Team Lead',
    period: 'Aug 2020 – Jan 2023',
    start: 2020 + 7 / 12, end: 2023,
    track: 'Venture',
    points: [
      'Led a 12-member marketing team, growing the subscriber base by 8,000+ in six months and lifting engagement by 50%.',
      'Built multi-platform campaign frameworks that drove a 20% increase in brand awareness.',
    ],
  },
]

export const education = {
  school: 'Vellore Institute of Technology (VIT)',
  degree: 'B.Tech, Computer Science and Engineering',
  period: '2021 – 2025',
  start: 2021 + 7 / 12, end: 2025 + 7 / 12,
}

export const extracurricular = [
  {
    org: 'Riviera, VIT',
    role: 'Sponsorship Coordinator',
    period: 'Jan 2024 – Mar 2024',
    text: 'Analysed sponsorship proposals and managed ₹1.25 Cr+ in budgets across 250 events, securing Pepsi as title sponsor.',
  },
  {
    org: 'graVITas, VIT',
    role: 'Finance & Sponsorship Manager',
    period: 'Aug 2024 – Sep 2024',
    text: 'Negotiated ₹75L+ in sponsorship deals with Altium, Autodesk, Nestlé and EaseMyTrip.',
  },
]

export const certifications = [
  'Financial Markets, Yale University (Coursera)',
  'Generative AI Leader, Google',
  'Tableau, Power BI, SAP Advanced User',
  'BCG Consulting and JPMorgan IB job simulations',
  'Business Analysis & Process Management, Coursera',
  'AI Fluency: Framework & Foundations, Anthropic',
]

export const skills = [
  { group: 'Strategy & finance', items: ['Operating model design', 'GCC strategy', 'DCF and valuation', 'KPI design', 'Risk assessment', 'Stakeholder management'] },
  { group: 'Delivery & leadership', items: ['Multi-account delivery', 'Leading a 60-member team', 'Agile', 'Asana', 'Notion', 'Team mentoring'] },
  { group: 'Data & automation', items: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel VBA', 'AI pipelines'] },
]

/* ── Deck-style flow: executive summary, then four sections, oldest first ── */
export const chapters = [
  {
    id: 'ch1', short: 'Leadership', n: '01', years: '2020 – 2023', roleIds: ['recover'],
    title: 'Led a 12-member marketing team and grew its audience',
    bridge: 'Recover Media, Marketing Team Lead, alongside a B.Tech in Computer Science at VIT.',
    summary: 'Led a 12-member marketing team at Recover Media, adding 8,000+ subscribers in six months.',
  },
  {
    id: 'ch2', short: 'Entrepreneurship', n: '02', years: '2023 – 2024', roleIds: ['bellevidco'],
    title: 'Co-founded a digital agency and built operating systems for its clients',
    bridge: 'BelleVidCo, Co-Founder & CEO, with a lean team of 8.',
    summary: 'Co-founded BelleVidCo and ran it as CEO, launching 200+ growth campaigns.',
  },
  {
    id: 'ch3', short: 'Consulting', n: '03', years: '2025 – 2026', roleIds: ['pwc-intern', 'pwc'],
    title: 'Built strategy and operating-model depth at PwC',
    bridge: 'PwC, Advisory Intern and then Strategy Associate: GCC strategy, operating models and process improvement.',
    summary: 'Strategy consulting at PwC: GCC strategy and operating model design, including a hub scaling from 27 to 108 FTEs.',
  },
  {
    id: 'ch4', short: 'Delivery', n: '04', years: '2026', roleIds: ['truefan'],
    title: 'Scaled enterprise delivery and closed the largest deal in TrueFan AI’s history',
    bridge: 'TrueFan AI, Project Delivery Manager: a 60-member team across 11 enterprise accounts.',
    summary: 'Led enterprise delivery at TrueFan AI: 60 people, 11 accounts, and a ₹12 Cr a year Bajaj Finance contract.',
  },
]

/* ── Logos ──────────────────────────────────────────────── */
export const companies = [
  { name: 'TrueFan AI', text: true },
  { name: 'PwC', src: '/logos/brands/pwc.png' },
  { name: 'BelleVidCo', text: true },
  { name: 'Recover Media', src: '/logos/recover-media.png', square: true, label: true },
]

export const clientLogos = [
  { name: 'Bajaj Finance', src: '/logos/brands/bajaj-finance.png' },
  { name: 'Flipkart', src: '/logos/brands/flipkart.png' },
  { name: 'PhonePe', src: '/logos/brands/phonepe.png' },
  { name: 'Canara HSBC Life', src: '/logos/brands/canara-hsbc-life.png' },
  { name: 'IndusInd Bank', src: '/logos/brands/indusind.png' },
  { name: 'HSBC', src: '/logos/brands/hsbc.png' },
  { name: 'HDFC Bank', src: '/logos/brands/hdfc.png' },
  { name: 'Equifax', src: '/logos/brands/equifax.png' },
  { name: 'Kissht', src: '/logos/brands/kissht.png', square: true, label: true },
  { name: 'BirlaNu', text: true },
]
