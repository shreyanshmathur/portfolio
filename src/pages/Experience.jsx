import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import './Experience.css'

const experiences = [
  {
    num: '01',
    company: 'PwC',
    fullName: 'PricewaterhouseCoopers',
    role: 'Associate, Strategy',
    period: 'Aug 2025 - Present',
    type: 'Full-Time',
    color: '#E8B95F',
    location: 'Mumbai, India',
    metrics: [
      { num: '12',  label: 'Enterprise AI\nTools Shipped' },
      { num: '35+', label: 'Key Roles\nHired' },
      { num: '20%', label: 'Faster Market\nEntry' },
    ],
    highlights: [
      'Led GCC strategy for a global FMCG client: defined operating model, planned transitions, hired 35+ key roles to support India Tech Hub\'s multi-year transformation, enabling 20% faster market entry.',
      'Launched an AI helpdesk for a specialty chemicals manufacturer, cutting review cycles by 30% and resolution time by 20% using Agile and Asana.',
      'Co-led a national AI Accelerator that launched 12 enterprise tools, wrote PRDs, set up governance, and increased tool adoption by 15% in three months.',
      'Redesigned IT operating model for a national cement leader, hub-and-spoke structure across 15+ states, enabling 25% faster incident dispatch.',
      'Authored the 5-year India Tech Hub Strategy & Activation Plan, scaling headcount from 27 to 108 FTEs across France, Spain, Poland, and India.',
      'Built Power BI dashboards for the Data & AI SteerCo delivering zone-level workforce projections across four geographies.',
    ],
    tags: ['GCC Strategy', 'AI Transformation', 'Power BI', 'Agile', 'Operating Model Design'],
  },
  {
    num: '02',
    company: 'PwC',
    fullName: 'PricewaterhouseCoopers',
    role: 'Advisory Intern',
    period: 'Jan 2025 - Aug 2025',
    type: 'Internship',
    color: '#C9943A',
    location: 'Mumbai, India',
    metrics: [
      { num: '20%', label: 'Reporting\nCycle Cut' },
      { num: '500+', label: 'Users\nSupported' },
      { num: '15+', label: 'Initiatives\nTracked' },
    ],
    highlights: [
      'Partnered with a paint manufacturing leader\'s C-suite on SAP FICO/MM optimization, cutting processing time by 10% and supporting 500+ users with targeted training.',
      'Developed and deployed project management tracking for 15+ initiatives; recognized for zero issue slippage and real-time exec reporting.',
      'Advanced process improvement by mapping pain points with Lean Six Sigma, automating reporting workflows using VBA and Python, cutting cycle time by 20%.',
    ],
    tags: ['SAP FICO/MM', 'Lean Six Sigma', 'VBA', 'Python', 'Project Tracking'],
  },
  {
    num: '03',
    company: 'EY',
    fullName: 'Ernst & Young',
    role: 'GCC Research Intern',
    period: 'Aug 2023 - Dec 2023',
    type: 'Internship',
    color: '#4A90E2',
    location: 'Remote / India',
    metrics: [
      { num: '75%', label: 'Manual Prospecting\nReduced' },
      { num: '60%', label: 'Acquisition\nSpeed ↑' },
      { num: '4',   label: 'City Offices\nDeployed' },
    ],
    highlights: [
      'Engineered and rolled out an AI sales pipeline, reducing manual prospecting by 75% and boosting acquisition speed by 60%, deployed across four major city offices.',
      'Built interactive BI dashboards in Tableau and Power BI providing real-time visibility into client acquisition metrics, pipeline performance, and operational KPIs.',
      'Conducted GCC benchmarking research across technology, FMCG, and logistics sectors; insights informed Fortune 500 client strategy.',
    ],
    tags: ['AI Sales Pipeline', 'Tableau', 'Power BI', 'GCC Research', 'Python'],
  },
  {
    num: '04',
    company: 'BelleVidCo',
    fullName: 'Digital Agency',
    role: 'Co-Founder & CEO',
    period: 'Feb 2023 - Dec 2024',
    type: 'Founder',
    color: '#06B6D4',
    location: 'India',
    metrics: [
      { num: '35%', label: 'Pick Travel\nReduction' },
      { num: '200+', label: 'Growth\nCampaigns' },
      { num: '8',   label: 'Team\nMembers' },
    ],
    highlights: [
      'Built an ML-based SKU placement algorithm (~35% pick travel reduction) and a live-data AI pricing engine replacing founder-dependent workflows for a fashion retailer.',
      'Delivered AI-driven systems for clients in logistics, fashion, and private equity advisory sectors.',
      'Designed and led a lean team of 8, achieving high ad ROI and launching 200+ growth campaigns.',
    ],
    tags: ['Machine Learning', 'React', 'Python', 'AI Systems', 'Agency Operations'],
  },
  {
    num: '05',
    company: 'Recover Media',
    fullName: 'Media & Marketing',
    role: 'Marketing Team Lead',
    period: 'Aug 2020 - Jan 2023',
    type: 'Full-Time',
    color: '#9B59B6',
    location: 'India',
    metrics: [
      { num: '8K+', label: 'Subscribers\nGained' },
      { num: '50%', label: 'Engagement\nLift' },
      { num: '20%', label: 'Brand Awareness\nIncrease' },
    ],
    highlights: [
      'Led a 12-member marketing team, growing the subscriber base by 8,000+ in six months and lifting engagement rates by 50%.',
      'Built and executed multi-platform campaign frameworks that drove a 20% increase in brand awareness, establishing partnerships that compounded organic reach.',
    ],
    tags: ['Marketing Strategy', 'Team Leadership', 'Campaign Management', 'Content Systems'],
  },
]

export default function Experience() {
  const headerRef = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="exp-hero">
        <div className="exp-hero-bg">
          <div className="exp-orb" />
        </div>
        <div className="exp-hero-wm" aria-hidden="true">EXP</div>
        <div className="container" ref={headerRef}>
          <div className="reveal">
            <span className="eyebrow">02 / Experience</span>
          </div>
          <h1 className="exp-h1 reveal d2">
            Five Roles.<br />
            <span className="outline-text">One Trajectory.</span>
          </h1>
          <p className="exp-sub reveal d3">
            From university fests to Fortune 500 strategy rooms. Each step sharper than the last.
          </p>
        </div>
      </section>

      {/* ── CAREER STATS BAND ─────────────────────── */}
      <div className="exp-stats-band">
        {[
          { num: '5',   label: 'Roles' },
          { num: '4+',  label: 'Years' },
          { num: '3',   label: 'Firms' },
          { num: '12',  label: 'Enterprise Tools' },
          { num: '35+', label: 'Hires Led' },
          { num: '15+', label: 'Initiatives' },
        ].map((s, i) => (
          <div key={i} className="esb-item">
            <span className="esb-num">{s.num}</span>
            <span className="esb-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section className="exp-timeline">
        {experiences.map((exp, i) => (
          <ExperienceBlock key={i} exp={exp} flip={i % 2 !== 0} />
        ))}
      </section>

      {/* ── BOTTOM CTA ────────────────────────────── */}
      <section className="exp-cta section" ref={useReveal()}>
        <div className="container">
          <div className="expc-inner reveal">
            <div>
              <span className="eyebrow">What's next?</span>
              <h2 className="section-heading" style={{ marginTop: 16 }}>
                Projects that<br />
                <span>prove the work.</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-primary">See Projects ↗</Link>
          </div>
        </div>
      </section>

    </main>
  )
}

function ExperienceBlock({ exp, flip }) {
  const ref = useReveal()

  return (
    <article
      className={`exp-block ${flip ? 'flip' : ''}`}
      style={{ '--exp-color': exp.color }}
      ref={ref}
    >
      {/* Background letter watermark */}
      <div className="expb-wm" aria-hidden="true">{exp.company[0]}</div>

      <div className="container">
        <div className="expb-inner">

          {/* Left panel */}
          <div className={`expb-left reveal${flip ? '-r' : '-l'}`}>
            <div className="expb-head">
              <span className="expb-num">{exp.num}</span>
              <div>
                <h2 className="expb-company">{exp.company}</h2>
                <span className="expb-full">{exp.fullName}</span>
              </div>
            </div>
            <h3 className="expb-role">{exp.role}</h3>
            <div className="expb-meta">
              <span className="expb-period">{exp.period}</span>
              <span className="expb-badge">{exp.type}</span>
            </div>
            <div className="expb-metrics">
              {exp.metrics.map((m, i) => (
                <div key={i} className="expm-item">
                  <span className="expm-num">{m.num}</span>
                  <span className="expm-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div className={`expb-right reveal${flip ? '-l' : '-r'} d2`}>
            <ul className="expb-list">
              {exp.highlights.map((h, i) => (
                <li key={i}>
                  <span className="expl-dot">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="expb-tags">
              {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}
