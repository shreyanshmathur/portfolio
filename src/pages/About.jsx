import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './About.css'

const facts = [
  ['Role',       'Associate, Strategy'],
  ['Firm',       'PwC India'],
  ['Based',      'Mumbai, India'],
  ['Education',  'B.Tech CS, VIT (2025)'],
  ['Focus',      'GCC · AI · Operating models'],
  ['Status',     'Open to opportunities'],
]

const capabilities = [
  {
    heading: 'Strategy',
    items: [
      'GCC operating model design',
      'Market entry and capability mapping',
      'AI transformation strategy',
      'IT operating model redesign',
      'C-suite stakeholder management',
    ],
  },
  {
    heading: 'Delivery',
    items: [
      'Lean Six Sigma process design',
      'Agile programme management',
      'KPI design and benchmarking',
      'Power BI / Tableau dashboards',
      'Financial modelling (DCF, valuation)',
    ],
  },
  {
    heading: 'Technical',
    items: [
      'Python: automation, ML, pipelines',
      'React / TypeScript prototypes',
      'LLM integration (Groq, OpenAI)',
      'SAP FICO/MM advanced user',
      'SQL, Excel VBA workflows',
    ],
  },
]


export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  // r3 used for education section

  return (
    <main className="page-wrap">

      {/* ── ABOUT HERO ─────────────────────────── */}
      <div className="about-hero">
        <div className="container">
          <div className="ah-grid">
            <div className="ah-portrait-col">
              <div className="ah-portrait">
                <img src="/shreyansh.jpg" alt="Shreyansh Mathur" />
              </div>
              <div className="ah-portrait-meta">
                <span className="ah-pm-loc">Mumbai, India</span>
                <span className="ah-pm-loc">PwC India</span>
              </div>
            </div>
            <div className="ah-text">
              <div className="ah-top">
                <span className="eyebrow">03 / About</span>
              </div>
              <h1 className="ah-title">
                The strategist<br />
                <em>who builds.</em>
              </h1>
              <p className="ah-kicker">
                Management consultant at PwC with a CS background. Operating models,
                AI transformations, and the prototypes that prove the work.
              </p>
              <div className="ah-quick">
                {facts.slice(0, 3).map(([k, v]) => (
                  <div key={k}>
                    <span className="ah-q-k">{k}</span>
                    <span className="ah-q-v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STORY ──────────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">My story</span>
            </div>
            <h2 className="reveal d2">From GCC strategy<br /><em>to ground-level delivery.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-prose reveal d2">
              <p>
                Computer Science at VIT, but I was always more interested in how organisations
                work than how code runs. That curiosity moved me into EY's GCC Research team,
                where I shipped an AI sales pipeline that cut manual prospecting by 75%
                across four city offices.
              </p>
              <p>
                I co-founded BelleVidCo, running end-to-end engagements for clients in
                logistics, fashion, and PE advisory. That taught me what slides alone cannot:
                strategy is only as good as the implementation behind it.
              </p>
              <p>
                At PwC I lead GCC strategy for a global FMCG client, redesign IT operating
                models for national cement, co-lead a national AI Accelerator, and ship
                the prototypes that prove every recommendation.
              </p>
            </div>
            <div className="about-facts reveal d3">
              {facts.map(([k, v]) => (
                <div key={k} className="about-fact">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ───────────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Capabilities</span>
            </div>
            <h2 className="reveal d2">Consulting depth.<br /><em>Technical credibility.</em></h2>
          </div>
          <div className="cap-grid">
            {capabilities.map((c, i) => (
              <div key={i} className={`cap-col reveal d${i + 2}`}>
                <h3 className="cap-heading">{c.heading}</h3>
                <ul className="cap-list">
                  {c.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────── */}
      <section className="section" ref={r3}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Education</span>
            </div>
            <h2 className="reveal d2">Where it<br /><em>started.</em></h2>
          </div>

          <div className="edu-row reveal d2">
            <div>
              <h3>Bachelor of Technology, Computer Science</h3>
              <p style={{ marginTop: 8, color: 'var(--ink-4)', fontFamily: 'var(--mono)', fontSize: 13 }}>
                Vellore Institute of Technology
              </p>
            </div>
            <div className="years">2021<br /><em>2025</em></div>
          </div>

          <div className="about-teaser reveal d3">
            <span className="about-teaser-label">12 certifications across AI, consulting, and finance</span>
            <Link to="/activities" className="about-teaser-link">
              See all credentials →
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
