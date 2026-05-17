import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

const logos = {
  'PwC India':         '/logos/pwc.png',
  'EY':                '/logos/ey.png',
  'BelleVidCo':        '/logos/bellevidco.png',
  'Recover Media':     '/logos/recover-media.png',
  'Webminix':          '/logos/webminix.png',
  'Social Eyes':       '/logos/social-eyes.png',
  'graVITas':          '/logos/gravitas.png',
  'Riviera, VIT':      '/logos/riviera.png',
  'Dream Merchants':   '/logos/dream-merchants.png',
}

const experiences = [
  {
    index: '01',
    firm: 'PwC India',
    role: 'Associate, Strategy',
    period: 'Aug 2025 - Present',
    type: 'Full-time',
    metric: { num: '12', label: 'enterprise tools' },
    bullets: [
      'GCC strategy for a global FMCG client: operating model, transitions, 35+ key hires.',
      'National AI Accelerator co-lead: 12 tools, governance, +15% adoption in 90 days.',
      'IT operating model redesign for a cement leader across 15+ states: 25% faster dispatch.',
    ],
    context: 'Promoted to Associate after the advisory internship. Currently leading three concurrent engagement streams: GCC strategy, AI transformation, and IT restructuring, across FMCG, cement, and chemicals sectors.',
    engagements: [
      {
        title: 'Five-year India Tech Hub Strategy',
        client: 'Global FMCG client',
        description: 'Designed the full operating model for scaling an India Tech Hub from 27 to 108 FTEs across four geographies. Covered capability mapping, role architecture, governance, and phased hiring roadmap. Managed C-suite stakeholder alignment across India, Singapore, and Dubai.',
        outcome: '27 → 108 FTEs scaled across 4 geographies within the 5-year plan window.',
      },
      {
        title: 'National AI Accelerator: 12 Enterprise Tools',
        client: 'National programme',
        description: 'Co-led a national programme that shipped 12 enterprise AI tools to clients. Wrote product requirement documents, defined AI governance frameworks, and ran adoption sprints. Tools spanned document intelligence, process automation, and analytics dashboards.',
        outcome: '+15% tool adoption in 90 days post-launch. Zero governance incidents.',
      },
      {
        title: 'IT Operating Model Redesign',
        client: 'National cement leader',
        description: 'Redesigned the IT operating model across 15+ states using a hub-and-spoke architecture. Mapped 120+ processes, defined SLAs, and restructured the incident management workflow. Delivered within a 14-week engagement.',
        outcome: '25% faster incident dispatch. Unified reporting across all state clusters.',
      },
    ],
    tools: ['Power BI', 'Python', 'SAP FICO/MM', 'Excel VBA', 'Miro', 'Jira'],
  },
  {
    index: '02',
    firm: 'PwC India',
    role: 'Advisory Intern',
    period: 'Jan - Aug 2025',
    type: 'Internship',
    metric: { num: '20%', label: 'cycle time cut' },
    bullets: [
      'C-suite SAP FICO/MM optimisation for a paint manufacturer: 500+ users trained.',
      'PM tracker for 15+ initiatives, zero slippage, real-time exec reporting.',
      'Lean Six Sigma process mapping and VBA/Python automation: 20% cycle reduction.',
    ],
    context: 'Advisory internship across technology and operations consulting. Embedded in two client engagements simultaneously, with direct exposure to senior partner delivery.',
    engagements: [
      {
        title: 'SAP FICO/MM Optimisation',
        client: 'Major paint manufacturer',
        description: 'Supported SAP FICO/MM optimisation programme for a national paint manufacturer. Developed training materials, ran user-acceptance testing, and documented process changes across 500+ end users. Delivered in collaboration with the ERP team.',
        outcome: '500+ users trained. Adoption target hit in first 30 days post-go-live.',
      },
      {
        title: 'Programme Management Dashboard',
        client: 'Internal PwC delivery',
        description: 'Built a real-time programme tracker for 15+ concurrent client initiatives. Python-automated data pulls from project systems into a Power BI dashboard used by the engagement director for weekly reporting.',
        outcome: 'Zero delivery slippage across 15+ initiatives. Exec visibility improved materially.',
      },
      {
        title: 'Lean Six Sigma Process Automation',
        client: 'Multiple engagements',
        description: 'Ran process mapping workshops, identified 8 high-impact automation opportunities, and delivered VBA/Python scripts that eliminated manual steps in reporting cycles.',
        outcome: '20% cycle time reduction across targeted processes.',
      },
    ],
    tools: ['SAP FICO/MM', 'Power BI', 'Python', 'Excel VBA', 'Lean Six Sigma methodology'],
  },
  {
    index: '03',
    firm: 'EY',
    role: 'GCC Research Intern',
    period: 'Aug - Dec 2023',
    type: 'Internship',
    metric: { num: '75%', label: 'prospecting cut' },
    bullets: [
      'AI sales pipeline deployed across four city offices: 75% manual prospecting cut.',
      'Tableau and Power BI dashboards for acquisition metrics and pipeline KPIs.',
      'GCC benchmarking research informing Fortune 500 client strategy.',
    ],
    context: "Placed in EY's GCC Research practice, supporting business development and strategy research for the India market. Built and deployed the team's first AI-assisted sales tooling.",
    engagements: [
      {
        title: 'AI Sales Pipeline',
        client: 'EY GCC Research team',
        description: 'Designed and deployed an AI-assisted sales pipeline tool used across Bengaluru, Mumbai, Hyderabad, and Delhi offices. The tool automated lead scoring, company profiling, and outreach sequencing, cutting manual prospecting work by 75%.',
        outcome: '75% reduction in manual prospecting hours across four offices.',
      },
      {
        title: 'Acquisition Dashboards',
        client: 'EY BD function',
        description: 'Built Tableau and Power BI dashboards tracking pipeline KPIs, conversion rates, and market acquisition metrics. Used weekly by the BD leadership team.',
        outcome: 'Real-time pipeline visibility for 4-city operation. Replaced manual Excel reporting.',
      },
      {
        title: 'GCC Benchmarking Research',
        client: 'Fortune 500 clients',
        description: 'Conducted benchmarking research on GCC operating models, talent strategies, and cost structures for Fortune 500 clients evaluating India market entry.',
        outcome: 'Research cited in client strategy decks across multiple GCC pitches.',
      },
    ],
    tools: ['Tableau', 'Power BI', 'Python', 'Excel', 'Research databases'],
  },
  {
    index: '04',
    firm: 'Social Eyes',
    role: 'Business Development Intern',
    period: 'Jun 2023 - Aug 2023',
    type: 'Internship',
    metric: { num: '20%', label: 'lead conversion lift' },
    bullets: [
      'Implemented targeted sales strategies, lifting lead conversion rate by 20%.',
      'Customer behaviour analysis optimised marketing efforts; boosted market penetration by 10%.',
      'Tailored BD approaches for hospitality and fashion verticals to enhance client retention.',
    ],
    context: 'Business development internship focused on sales strategy, market analysis, and client acquisition across key industry verticals including hospitality and fashion.',
    engagements: [
      {
        title: 'Sales Strategy and Lead Conversion',
        client: 'Social Eyes',
        description: 'Designed and implemented targeted sales strategies to improve lead qualification and conversion. Analysed conversion funnel data to identify and address drop-off points across the sales pipeline.',
        outcome: '20% improvement in lead conversion rate across targeted verticals.',
      },
      {
        title: 'Customer Behaviour Analysis',
        client: 'Social Eyes',
        description: 'Conducted structured customer behaviour analysis to identify market penetration opportunities. Findings used to refocus marketing efforts on highest-value segments in hospitality and fashion.',
        outcome: '10% market penetration increase. Improved client retention through tailored BD approaches.',
      },
    ],
    tools: ['CRM', 'Excel', 'Market Research', 'Sales Strategy'],
  },
  {
    index: '05',
    firm: 'BelleVidCo',
    role: 'Co-founder and CEO',
    period: 'Feb 2023 - Dec 2024',
    type: 'Founder',
    metric: { num: '12', label: 'engagements · 8 sectors' },
    bullets: [
      '12 client engagements across 8 sectors: logistics, PE, healthcare, retail AI, events, fashion, fintech, construction.',
      'AI pricing engine processing 3,500+ garments/month; warehouse AI cutting pick travel ~35%.',
      '5× ROI on automation builds; 15+ clients; 5-person specialist team.',
    ],
    context: 'Co-founded BelleVidCo (operating as MSC Consultancy) to deliver AI-enabled operations, growth systems, and digital infrastructure for agencies and SMBs. Role: strategy, scoping, AI system design, and client engagement. Ran the business end-to-end: acquisition, delivery, and a 5-person specialist team across strategy, engineering, brand, and automation.',
    engagements: [
      {
        title: 'Robinsons Global Logistics: AI Warehouse Ops',
        client: '3PL warehousing · Bhiwandi',
        description: 'AI SKU placement algorithm using velocity data to score and re-slot inventory. Smart CRM layer unifying all customer and order data. Real-time safety monitoring replacing manual compliance checks. Full discovery phase on-site before any build.',
        outcome: '~35% pick travel reduced. 60%+ data visibility gained. 4-week deployment. Zero compliance violations post-launch.',
      },
      {
        title: 'Bombay Closet Cleanse: AI Pricing Engine',
        client: 'Pre-loved fashion · Mumbai',
        description: 'Photo-based AI pricing engine (brand, condition, rarity analysis + live market scrape from Depop and Vinted). Self-improving: every staff override retrains the model. WhatsApp seller intake bot. Per-item inventory tracking with Shopify sync.',
        outcome: '~5 seconds per item. 3,500+ units/month processed. Zero manual pricing required. Live in 4 weeks.',
      },
      {
        title: 'SPACES by Welspun: AI Shopping Experience',
        client: 'Premium home textiles D2C',
        description: '5 AI features across the full customer journey: intent-aware discovery engine, AI colour harmony logic for whole-room looks, real-time style personalisation, room visualiser, and post-purchase brand content triggered by purchase.',
        outcome: '5 AI features live discovery to post-purchase. Zero keyword mismatches. Generic recommendations eliminated.',
      },
      {
        title: 'Surya Hospitals: AI Coordination Layer',
        client: 'Mother and child hospitals',
        description: 'Call intelligence engine capturing and structuring every patient call. Doctor pre-brief system assembling full patient history in 60 seconds. Drop-off detection flagging disengaged families. WhatsApp community content pipeline across 4 languages. Human-first governance: AI proposes, human reviews, human sends.',
        outcome: '60-second doctor pre-brief. 6 Phase 1 capabilities deployed. Zero auto-sent communications.',
      },
      {
        title: 'Milestone Search Capital: Deal Infrastructure',
        client: 'Search fund · private equity',
        description: 'Institutional website establishing fund credibility before the first conversation. Deal pipeline CRM replacing spreadsheets with structured stages and zero-gap follow-up. Curated intermediary network of 50+ contacts with systematised outreach. Target research framework.',
        outcome: 'Full build live in 8 weeks. 50+ intermediaries activated. 50%+ research time saved. 100% pipeline systematised.',
      },
      {
        title: 'Jakota: Brand and AI Command Board',
        client: 'Engineered formwork and scaffolds',
        description: 'Full website rebuild aligning digital presence to Jakota\'s actual engineering authority. AI command board consolidating all operational data streams: project status, resource allocation, equipment tracking, and financial visibility in one interface.',
        outcome: 'Digital presence rebuilt end-to-end. 1 unified command board. Zero data silos. Real-time ops intelligence live.',
      },
      {
        title: 'Bread Butter: Operations and Growth Systems',
        client: 'Creative talent marketplace · Mumbai',
        description: 'End-to-end SOP library covering every deliverable type, removing the founder from the approval loop entirely. CRM pipeline replacing WhatsApp-based booking chaos. First offline community event for the Mumbai creative sector launched as a new growth channel.',
        outcome: '70% manual work hours reduced. 3× faster sales cycle. Founder exits delivery loop entirely.',
      },
      {
        title: 'Guwahati Comedy Festival: Event Systematisation',
        client: 'Live entertainment · Northeast India',
        description: 'Centralised vendor coordination playbook replacing WhatsApp-scattered contacts and ad-hoc briefing. Post-event follow-up automation targeting the 48-hour engagement window with sponsors and buyers. Repeat client conversion framework.',
        outcome: '100% vendor ops standardised. 3× post-event follow-up rate. Zero coordination breakdowns.',
      },
      {
        title: 'Kicks 24: Event Operations',
        client: 'Sneaker culture events · India',
        description: 'Standardised vendor onboarding playbook with rate cards and accountability checklists. Sponsor ROI reporting framework making value explicit for internal stakeholder sign-off. Attendance and retention campaign systems across editions.',
        outcome: '60% ops time saved per event. 2× sponsor retention within 2 editions. Zero vendor fallouts.',
      },
      {
        title: 'BizDateUp: Investor Onboarding Redesign',
        client: 'Investment platform · fintech',
        description: 'End-to-end audit of the investor sign-up flow. Redesigned complex multi-step process into single-action screens with logical sequencing. Trust signal architecture at sensitive data moments. Completion momentum built through early quick-win steps.',
        outcome: 'Drop-off significantly reduced. Onboarding time cut. Trust scores higher at sensitive data moments.',
      },
      {
        title: 'Tibaska: Sustainability Brand Experience',
        client: 'Sustainable fashion',
        description: 'Integrated sustainability storytelling across every product page: origin, material, and practice evidence embedded in the shopping experience rather than segregated to an "about" page. Brand voice defined as honest, specific, and evidence-led.',
        outcome: 'Conversion lift in conscious consumer segment. Zero unsupported claims. Loyal audience built on trust.',
      },
      {
        title: 'FIKAA: Financial Education Platform',
        client: 'Financial education · EdTech',
        description: 'Content strategy redesign breaking dense financial topics into focused, completable learning units. Visual engagement formats alongside text. Plain language replacing expert terminology without losing authority. Full UX redesign of the learner journey.',
        outcome: 'Engagement scores up across all modules. Completion rate increased significantly from first cohort.',
      },
    ],
    tools: ['Python', 'scikit-learn', 'React', 'FastAPI', 'Groq', 'WhatsApp API', 'Shopify API', 'PostgreSQL'],
  },
  {
    index: '06',
    firm: 'Webminix',
    role: 'Business Development Intern',
    period: 'Mar 2022 - Apr 2022',
    type: 'Internship',
    metric: { num: '20%', label: 'monthly revenue increase' },
    bullets: [
      'Identified and pursued new sales opportunities, increasing monthly revenue by 20%.',
      'Secured strategic partnerships with local gyms, boosting client acquisition by 15%.',
      'Managed a 5,000+ contact marketing database, improving data accuracy by 20%.',
    ],
    context: 'Early-career business development internship. Responsible for sales prospecting, partnership development, and marketing database management for a digital agency.',
    engagements: [
      {
        title: 'Sales Prospecting and Revenue Growth',
        client: 'Webminix',
        description: 'Identified and pursued new sales opportunities through structured outreach and prospecting. Built a pipeline of qualified leads across local and regional markets, directly contributing to a measurable revenue increase within the internship window.',
        outcome: '20% increase in monthly revenue attributed to new opportunities sourced.',
      },
      {
        title: 'Partnership Development',
        client: 'Webminix',
        description: 'Secured strategic partnerships with local gyms and fitness businesses as part of a vertical expansion initiative. Negotiated partnership terms and managed onboarding of new partner accounts.',
        outcome: '15% boost in client acquisition through gym partnership channel.',
      },
      {
        title: 'Marketing Database Management',
        client: 'Webminix',
        description: 'Audited and cleaned a 5,000+ contact marketing database. Standardised contact records, removed duplicates, and improved data accuracy to enable more effective segmentation and campaign targeting.',
        outcome: '20% improvement in data accuracy across the 5,000+ contact database.',
      },
    ],
    tools: ['CRM', 'Excel', 'Email Marketing', 'Sales Outreach'],
  },
  {
    index: '07',
    firm: 'Recover Media',
    role: 'Marketing Team Lead',
    period: 'Aug 2020 - Jan 2023',
    type: 'Full-time',
    metric: { num: '8K+', label: 'subscribers in 6mo' },
    bullets: [
      'Led a 12-person team. Grew subscriber base by 8K+ in six months.',
      'Multi-platform campaign frameworks lifted brand awareness 20%.',
    ],
    context: 'First professional role out of school. Joined as a junior and was promoted to team lead within six months. Responsible for content strategy, campaign execution, and team management across multiple platforms.',
    engagements: [
      {
        title: 'Subscriber Growth Programme',
        client: 'Recover Media',
        description: "Led the team's subscriber acquisition strategy across YouTube, Instagram, and email. Redesigned content calendar, A/B tested formats, and built a referral loop that compounded growth month-on-month.",
        outcome: '8K+ net new subscribers in six months. Best growth quarter in company history at the time.',
      },
      {
        title: 'Multi-Platform Brand Campaign',
        client: 'Recover Media',
        description: 'Designed and executed a brand awareness campaign framework deployed across six platforms simultaneously. Created the briefing process, content templates, and performance reporting structure used by the 12-person team.',
        outcome: '20% lift in brand awareness metrics. Framework adopted as standard process.',
      },
    ],
    tools: ['Meta Ads', 'Google Analytics', 'Mailchimp', 'Canva', 'Notion'],
  },
]

const extracurriculars = [
  {
    index: 'A1',
    org: 'graVITas',
    role: 'Sponsorship Manager',
    period: 'Aug – Sep 2024',
    metric: { num: '₹75L+', label: 'sponsorship secured' },
    bullets: [
      'Negotiated and closed sponsorship deals worth ₹75L+ for the annual tech fest.',
      'Secured partnerships with Altium, Autodesk, Nestlé, and EaseMyTrip.',
      'Managed sponsor relations, deliverables, and on-ground activations end-to-end.',
    ],
  },
  {
    index: 'A2',
    org: 'Riviera, VIT',
    role: 'Sponsorship Coordinator',
    period: 'Jan – Mar 2024',
    metric: { num: '₹1.25Cr+', label: 'deals closed' },
    bullets: [
      'Closed ₹1.25Cr+ in sponsorship for South India\'s largest cultural festival.',
      'Secured national brands: Pepsi and Safe Express as lead sponsors.',
      'Coordinated sponsor logistics across 250+ events over a 3-day festival.',
    ],
  },
  {
    index: 'A3',
    org: 'Dream Merchants',
    role: 'Financial Mentor',
    period: 'Mar 2022 – Aug 2024',
    metric: { num: '2yr+', label: 'mentorship tenure' },
    bullets: [
      'Mentored student entrepreneurs on financial planning and budget management.',
      'Raised sponsorship to fund financial literacy programmes across VIT campus.',
      'Guided teams through pitch preparation, valuation exercises, and fundraising strategy.',
    ],
  },
]

export default function Experience() {
  const [openIdx, setOpenIdx] = useState(null)
  const r1 = useReveal()
  const r2 = useReveal()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenIdx(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = openIdx !== null ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx])

  const open = openIdx !== null ? experiences[openIdx] : null

  return (
    <>
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">02 / Experience</span>
          </div>
          <h1 className="ph-title">Experience.<br /><em>One consistent thread.</em></h1>
          <p className="ph-kicker">
            Three firms, five roles, one thread: strategy that gets implemented,
            measured against an outcome the client can quote.
          </p>
        </div>
      </div>

      {/* ── TIMELINE ───────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="exp-list">
            {experiences.map((e, i) => (
              <div key={i} className="exp-item">
                <button
                  className={`exp-row reveal d${Math.min(i + 1, 5)}`}
                  onClick={() => setOpenIdx(i)}
                >
                  <span className="exp-index">{e.index}</span>
                  <div>
                    <div className="exp-firm-row">
                      {logos[e.firm] && (
                        <img
                          className="exp-firm-logo"
                          src={logos[e.firm]}
                          alt={`${e.firm} logo`}
                        />
                      )}
                      <span className="exp-firm">{e.firm}</span>
                      <span className="exp-type">{e.type}</span>
                    </div>
                    <h3 className="exp-role">{e.role}</h3>
                    <span className="exp-period">{e.period}</span>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                  <div className="exp-metric">
                    <div className="exp-metric-num">{e.metric.num}</div>
                    <span className="exp-metric-label">{e.metric.label}</span>
                  </div>
                  <span className="exp-toggle">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTRACURRICULARS ───────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Campus leadership</span>
            </div>
            <h2 className="reveal d2">Beyond the office.<br /><em>On the ground.</em></h2>
          </div>
          <div className="extra-grid">
            {extracurriculars.map((e, i) => (
              <div key={i} className={`extra-card reveal d${i + 2}`}>
                <div className="extra-card-head">
                  <div className="extra-firm-row">
                    {logos[e.org] && (
                      <img className="extra-logo" src={logos[e.org]} alt={`${e.org} logo`} />
                    )}
                    <span className="extra-org">{e.org}</span>
                  </div>
                  <div className="extra-metric">
                    <div className="extra-metric-num">{e.metric.num}</div>
                    <span className="extra-metric-label">{e.metric.label}</span>
                  </div>
                </div>
                <h4 className="extra-role">{e.role}</h4>
                <span className="extra-period">{e.period}</span>
                <ul className="extra-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>

    {/* ── BACKDROP — outside page-wrap so CSS transform doesn't break position:fixed ── */}
    <div
      className={`exp-backdrop${openIdx !== null ? ' open' : ''}`}
      onClick={() => setOpenIdx(null)}
      aria-hidden="true"
    />

    {/* ── SIDE PANEL ─────────────────────────── */}
    <aside
      className={`exp-panel${openIdx !== null ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Engagement detail"
    >
      {open && (
        <div className="exp-panel-inner">
          <div className="exp-panel-head">
            <div className="exp-panel-title-block">
              <div className="exp-panel-meta-row">
                <span>Role · {open.index}</span>
                <span>{open.type}</span>
              </div>
              <h2 className="exp-panel-role">{open.role}</h2>
              <div className="exp-panel-firm">
                {logos[open.firm] && (
                  <img
                    className="exp-panel-logo"
                    src={logos[open.firm]}
                    alt={`${open.firm} logo`}
                  />
                )}
                <span>{open.firm}</span>
                <span className="exp-panel-period">{open.period}</span>
              </div>
            </div>
            <button
              className="exp-panel-close"
              onClick={() => setOpenIdx(null)}
              aria-label="Close panel"
            >
              ← Close
            </button>
          </div>

          <p className="exp-panel-context">{open.context}</p>

          <div>
            <div className="exp-panel-section-label">Engagements</div>
            <div className="exp-panel-engagements">
              {open.engagements.map((eng, j) => (
                <article key={j} className="exp-panel-engagement">
                  <span className="exp-panel-eng-num">0{j + 1}</span>
                  <div className="exp-panel-eng-body">
                    <h4 className="exp-panel-eng-title">{eng.title}</h4>
                    <span className="exp-panel-eng-client">{eng.client}</span>
                    <p className="exp-panel-eng-desc">{eng.description}</p>
                    <div className="exp-panel-eng-outcome">
                      <span className="exp-panel-eng-outcome-label">Outcome</span>
                      <span className="exp-panel-eng-outcome-text">{eng.outcome}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="exp-panel-tools">
            <span className="exp-tools-label">Toolkit</span>
            {open.tools.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      )}
    </aside>

    </>
  )
}
