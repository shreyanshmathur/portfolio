import { useReveal } from '../hooks/useReveal'
import './Experience.css'

const experiences = [
  {
    index: '01',
    firm: 'PwC India',
    role: 'Associate, Strategy',
    period: 'Aug 2025 — Present',
    type: 'Full-time',
    metric: { num: '12', label: 'enterprise tools' },
    bullets: [
      'GCC strategy for a global FMCG client — operating model, transitions, 35+ key hires.',
      'National AI Accelerator co-lead — 12 tools, governance, +15% adoption in 90 days.',
      'IT operating model redesign for a cement leader across 15+ states — 25% faster dispatch.',
    ],
  },
  {
    index: '02',
    firm: 'PwC India',
    role: 'Advisory Intern',
    period: 'Jan — Aug 2025',
    type: 'Internship',
    metric: { num: '20%', label: 'cycle time cut' },
    bullets: [
      'C-suite SAP FICO/MM optimisation for a paint manufacturer — 500+ users trained.',
      'PM tracker for 15+ initiatives, zero slippage, real-time exec reporting.',
      'Lean Six Sigma process mapping and VBA/Python automation — 20% cycle reduction.',
    ],
  },
  {
    index: '03',
    firm: 'EY',
    role: 'GCC Research Intern',
    period: 'Aug — Dec 2023',
    type: 'Internship',
    metric: { num: '75%', label: 'prospecting cut' },
    bullets: [
      'AI sales pipeline deployed across four city offices — 75% manual prospecting cut.',
      'Tableau and Power BI dashboards for acquisition metrics and pipeline KPIs.',
      'GCC benchmarking research informing Fortune 500 client strategy.',
    ],
  },
  {
    index: '04',
    firm: 'BelleVidCo',
    role: 'Co-founder and CEO',
    period: 'Feb 2023 — Dec 2024',
    type: 'Founder',
    metric: { num: '35%', label: 'pick-travel reduction' },
    bullets: [
      'ML SKU placement engine (approx. 35% pick-travel cut) and live AI pricing for a fashion retailer.',
      'AI delivery for clients across logistics, fashion, and PE advisory.',
      'Lean 8-person team, 200+ growth campaigns.',
    ],
  },
  {
    index: '05',
    firm: 'Recover Media',
    role: 'Marketing Team Lead',
    period: 'Aug 2020 — Jan 2023',
    type: 'Full-time',
    metric: { num: '8K+', label: 'subscribers in 6mo' },
    bullets: [
      'Led a 12-person team. Grew subscriber base by 8K+ in six months.',
      'Multi-platform campaign frameworks lifted brand awareness 20%.',
    ],
  },
]

export default function Experience() {
  const r1 = useReveal()

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
              <div key={i} className={`exp-row reveal d${Math.min(i + 1, 5)}`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
