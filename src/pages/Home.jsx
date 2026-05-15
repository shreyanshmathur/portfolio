import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Home.css'

const highlights = [
  { num: '27 → 108', label: 'FTEs scaled',       sub: 'India Tech Hub' },
  { num: '12',            label: 'Tools shipped',     sub: 'AI Accelerator' },
  { num: '25%',           label: 'Faster dispatch',   sub: 'IT operating model' },
  { num: '4',             label: 'Industries served', sub: 'FMCG · Chemicals · Cement · PE' },
]

const featured = [
  {
    index: '01',
    client: 'Global FMCG · PwC',
    title: 'Five-year India Tech Hub strategy',
    blurb: 'Operating model, hiring plan, multi-year transition across four geographies.',
    metricNum: '27 → 108',
    metricLabel: 'FTEs scaled',
    tags: ['GCC strategy', 'Operating model', 'Headcount planning'],
    to: '/experience',
  },
  {
    index: '02',
    client: 'PwC · national programme',
    title: 'AI Accelerator — 12 enterprise tools',
    blurb: 'PRDs, governance, rollout. Adoption lifted 15% in 90 days.',
    metricNum: '+15%',
    metricLabel: 'tool adoption',
    tags: ['AI transformation', 'Governance', 'PRDs'],
    to: '/experience',
  },
  {
    index: '03',
    client: 'National cement leader · PwC',
    title: 'IT operating model redesign',
    blurb: 'Hub-and-spoke restructure across 15+ states. Incident dispatch sped up 25%.',
    metricNum: '25%',
    metricLabel: 'faster dispatch',
    tags: ['Operating model', 'Hub-and-spoke', 'Governance'],
    to: '/experience',
  },
]

export default function Home() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow-row">
              <span className="eyebrow">Strategy Associate · PwC · Mumbai</span>
            </div>
            <h1 className="hero-headline">
              The strategist<br />
              <em>who builds.</em>
            </h1>
            <p className="hero-blurb">
              Strategy at PwC India. Operating models, AI transformation,
              and the tools that prove the work.
            </p>
            <div className="hero-actions">
              <Link to="/experience" className="btn-primary">View my work</Link>
              <Link to="/contact" className="btn-ghost">Get in touch</Link>
            </div>
          </div>

          <div className="hero-portrait">
            <img src="/shreyansh.jpg" alt="Shreyansh Mathur" />
            <div className="hero-portrait-meta">
              <span className="a">Shreyansh Mathur</span>
              <span className="b">PwC India · Mumbai</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────── */}
      <div className="highlights">
        <div className="container">
          <div className="highlights-row">
            {highlights.map((h, i) => (
              <div key={i} className="hl-item">
                <span className="hl-num">{h.num}</span>
                <span className="hl-label">{h.label}</span>
                <span className="hl-sub">{h.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED WORK ────────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Selected engagements</span>
            </div>
            <h2 className="reveal d2">Three projects.<br /><em>Measurable outcomes.</em></h2>
          </div>

          <div className="feat-list">
            {featured.map((f, i) => (
              <Link key={i} to={f.to} className={`feat-row reveal d${i + 1}`}>
                <span className="feat-index">{f.index}</span>
                <div className="feat-body">
                  <span className="feat-client">{f.client}</span>
                  <h3 className="feat-title">{f.title}</h3>
                  <p className="feat-blurb">{f.blurb}</p>
                  <div className="feat-tags">
                    {f.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="feat-metric">
                  <div className="feat-metric-num">{f.metricNum}</div>
                  <span className="feat-metric-label">{f.metricLabel}</span>
                </div>
                <span className="feat-arrow">&#8594;</span>
              </Link>
            ))}
          </div>

          <div className="feat-footer reveal d4">
            <Link to="/experience" className="btn-ghost">Full experience ↗</Link>
          </div>
        </div>
      </section>

      {/* ── IDENTITY ─────────────────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">What sets me apart</span>
            </div>
            <h2 className="reveal d2">Consulting depth.<br /><em>Technical credibility.</em></h2>
          </div>
          <div className="id-cols">
            <div className="id-col reveal d2">
              <div className="id-col-head">
                <span className="id-num">01</span>
                <h4>Core Consulting</h4>
              </div>
              <ul className="id-list">
                <li>GCC operating model design and market entry</li>
                <li>AI-led enterprise transformation</li>
                <li>IT operating model and governance design</li>
                <li>C-suite stakeholder management</li>
                <li>Capability mapping and talent planning</li>
                <li>Lean Six Sigma process optimisation</li>
                <li>KPI design, benchmarking and reporting</li>
              </ul>
            </div>
            <div className="id-col reveal d3">
              <div className="id-col-head">
                <span className="id-num">02</span>
                <h4>Technical Edge</h4>
              </div>
              <ul className="id-list">
                <li>Power BI and Tableau: executive dashboards</li>
                <li>Python: automation, ML, data pipelines</li>
                <li>SAP FICO/MM: advanced user</li>
                <li>SQL and Excel VBA workflow automation</li>
                <li>AI tool scoping, prototyping and deployment</li>
                <li>LLM integrations for enterprise use cases</li>
                <li>React / TypeScript: POC and tool development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="home-cta" ref={r3}>
        <div className="container">
          <div className="hc-inner">
            <div>
              <span className="eyebrow">Ready to work together?</span>
              <h2 className="hc-headline">Let's build something<br /><em>remarkable.</em></h2>
            </div>
            <div className="hc-actions">
              <Link to="/contact" className="btn-primary">Get in touch ↗</Link>
              <a href="https://www.linkedin.com/in/shreyanshmathur" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
