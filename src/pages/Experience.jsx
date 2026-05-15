import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

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
    detail: {
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
          client: 'PwC national programme',
          description: 'Co-led a national programme that shipped 12 enterprise AI tools to PwC clients. Wrote product requirement documents, defined AI governance frameworks, and ran adoption sprints. Tools spanned document intelligence, process automation, and analytics dashboards.',
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
    detail: {
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
    detail: {
      context: 'Placed in EY\'s GCC Research practice, supporting business development and strategy research for the India market. Built and deployed the team\'s first AI-assisted sales tooling.',
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
  },
  {
    index: '04',
    firm: 'BelleVidCo',
    role: 'Co-founder and CEO',
    period: 'Feb 2023 - Dec 2024',
    type: 'Founder',
    metric: { num: '35%', label: 'pick-travel reduction' },
    bullets: [
      'ML SKU placement engine (approx. 35% pick-travel cut) and live AI pricing for a fashion retailer.',
      'AI delivery for clients across logistics, fashion, and PE advisory.',
      'Lean 8-person team, 200+ growth campaigns.',
    ],
    detail: {
      context: 'Co-founded BelleVidCo to deliver AI-enabled operations and growth systems for SME clients. Ran the business end-to-end: client acquisition, scoping, delivery, and team management, alongside my degree.',
      engagements: [
        {
          title: 'ML SKU Placement Engine',
          client: 'Fashion retailer',
          description: 'Built a machine learning SKU placement model that optimised warehouse pick-paths and shelf layouts for a fashion retailer. Integrated with live inventory data and an AI pricing engine that adjusted prices dynamically based on demand signals.',
          outcome: 'Approx. 35% reduction in pick-travel time. Live AI pricing deployed in production.',
        },
        {
          title: 'AI Delivery Across Sectors',
          client: 'Logistics, fashion, PE advisory clients',
          description: 'Delivered AI-enabled tools and operational systems across multiple clients: supply chain dashboards for logistics, growth analytics for fashion brands, and data room preparation support for a PE advisory client.',
          outcome: '6 client engagements delivered. 100% repeat or referral acquisition.',
        },
        {
          title: 'Growth Campaigns',
          client: 'Multiple clients',
          description: 'Ran 200+ growth campaigns across digital channels for client brands. Managed an 8-person team of designers, developers, and campaign managers.',
          outcome: '200+ campaigns. 8-person team operated at near-zero overhead.',
        },
      ],
      tools: ['Python', 'scikit-learn', 'React', 'FastAPI', 'Google Ads', 'Meta Ads'],
    },
  },
  {
    index: '05',
    firm: 'Recover Media',
    role: 'Marketing Team Lead',
    period: 'Aug 2020 - Jan 2023',
    type: 'Full-time',
    metric: { num: '8K+', label: 'subscribers in 6mo' },
    bullets: [
      'Led a 12-person team. Grew subscriber base by 8K+ in six months.',
      'Multi-platform campaign frameworks lifted brand awareness 20%.',
    ],
    detail: {
      context: 'First professional role out of school. Joined as a junior and was promoted to team lead within six months. Responsible for content strategy, campaign execution, and team management across multiple platforms.',
      engagements: [
        {
          title: 'Subscriber Growth Programme',
          client: 'Recover Media',
          description: 'Led the team\'s subscriber acquisition strategy across YouTube, Instagram, and email. Redesigned content calendar, A/B tested formats, and built a referral loop that compounded growth month-on-month.',
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
  },
]

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null)
  const r1 = useReveal()

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">02 / Experience</span>
          </div>
          <h1 className="ph-title">Experience</h1>
          <p className="ph-kicker">
            Three firms, five roles, one consistent thread:
            strategy that gets implemented.
          </p>
        </div>
      </div>

      {/* ── TIMELINE ───────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="exp-list">
            {experiences.map((e, i) => (
              <div key={i} className={`exp-item${openIndex === i ? ' is-open' : ''}`}>

                {/* Collapsed row - always visible */}
                <button
                  className={`exp-row reveal d${Math.min(i + 1, 5)}`}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="exp-index">{e.index}</span>
                  <div className="exp-meta">
                    <div>
                      <span className="exp-firm">{e.firm}</span>
                      <span className="exp-type">{e.type}</span>
                    </div>
                    <h3 className="exp-role">{e.role}</h3>
                    <span className="exp-period">{e.period}</span>
                    <ul className="exp-bullets">
                      {e.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="exp-metric">
                    <div className="exp-metric-num">{e.metric.num}</div>
                    <span className="exp-metric-label">{e.metric.label}</span>
                  </div>
                  <span className="exp-toggle-icon" aria-hidden="true">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>

                {/* Expanded detail panel */}
                <div className="exp-detail">
                  <div className="exp-detail-inner">
                    <p className="exp-detail-context">{e.detail.context}</p>
                    <div className="exp-detail-engagements">
                      {e.detail.engagements.map((eng, j) => (
                        <div key={j} className="exp-engagement">
                          <div className="exp-eng-head">
                            <span className="exp-eng-num">0{j + 1}</span>
                            <div>
                              <h4 className="exp-eng-title">{eng.title}</h4>
                              <span className="exp-eng-client">{eng.client}</span>
                            </div>
                          </div>
                          <p className="exp-eng-desc">{eng.description}</p>
                          <div className="exp-eng-outcome">
                            <span className="exp-eng-outcome-label">Outcome</span>
                            <span className="exp-eng-outcome-text">{eng.outcome}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="exp-detail-tools">
                      <span className="exp-tools-label">Tools used</span>
                      <div className="exp-tools-row">
                        {e.detail.tools.map(t => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
