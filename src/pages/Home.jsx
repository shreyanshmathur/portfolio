import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Home.css'

const highlights = [
  { num: '27 → 108', label: 'FTEs scaled',       sub: 'India Tech Hub' },
  { num: '12',       label: 'Tools shipped',      sub: 'AI Accelerator' },
  { num: '25%',      label: 'Faster dispatch',    sub: 'IT operating model' },
  { num: '4',        label: 'Industries served',  sub: 'FMCG · Chemicals · Cement · PE' },
]

const tickerItems = [
  { strong: '27 → 108 FTEs', tail: 'India Tech Hub' },
  { strong: '+15% adoption', tail: 'AI Accelerator · 90 days' },
  { strong: '25% faster',    tail: 'IT incident dispatch' },
  { strong: '4 industries',  tail: 'FMCG · Chemicals · Cement · PE' },
  { strong: '75% cut',       tail: 'Manual prospecting · EY' },
  { strong: '35% cut',       tail: 'Pick-travel · ML SKU model' },
  { strong: '78% precision', tail: 'Risk model · backtest' },
  { strong: '500+ users',    tail: 'SAP FICO/MM training' },
]
const tickerLoop = [...tickerItems, ...tickerItems]

const companyLogos = [
  { name: 'PwC India',       src: '/logos/pwc.png' },
  { name: 'EY',              src: '/logos/ey.png' },
  { name: 'BelleVidCo',      src: '/logos/bellevidco.png' },
  { name: 'Social Eyes',     src: '/logos/social-eyes.png' },
  { name: 'Webminix',        src: '/logos/webminix.png' },
  { name: 'Recover Media',   src: '/logos/recover-media.png' },
  { name: 'graVITas',        src: '/logos/gravitas.png' },
  { name: 'Riviera VIT',     src: '/logos/riviera.png' },
  { name: 'Dream Merchants', src: '/logos/dream-merchants.png' },
]
const logoLoop = [...companyLogos, ...companyLogos]

const featured = [
  {
    index: '01',
    client: 'Internal PwC engagements',
    title: 'Enterprise capability generator',
    blurb: 'Ingests capability scores across 8 domains, exports a branded PowerPoint deck in one click.',
    metricNum: '4-6h',
    metricLabel: 'saved per engagement',
    tags: ['React', 'XLSX parsing', 'PowerPoint automation'],
    to: '/projects/enterprise-capability-generator',
  },
  {
    index: '02',
    client: 'EdTech platform',
    title: 'Learner risk copilot',
    blurb: 'Flags at-risk learners before they churn. AI-generated intervention suggestions. Live on Netlify.',
    metricNum: '78%',
    metricLabel: 'precision on backtest',
    tags: ['React', 'Groq AI', 'Netlify'],
    to: '/projects/learner-risk-copilot',
  },
  {
    index: '03',
    client: 'BelleVidCo · pre-loved fashion',
    title: 'BCC AI pricing engine',
    blurb: 'Upload a garment photo, get a price recommendation in under 3 seconds. Staff-facing, live.',
    metricNum: '30s',
    metricLabel: 'per item vs. 4 min manual',
    tags: ['Groq Vision', 'FastAPI', 'HTML/JS'],
    to: '/projects/bcc-ai-pricing-engine',
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
              <Link to="/projects" className="btn-primary">Selected work</Link>
              <Link to="/contact" className="btn-ghost">Get in touch ↗</Link>
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

      {/* ── TICKER ───────────────────────────────── */}
      <div className="ticker" aria-label="Selected results">
        <div className="ticker-track">
          {tickerLoop.map((t, i) => (
            <span key={i} className="ticker-item">
              <strong>{t.strong}</strong>
              <span>{t.tail}</span>
              <span className="ticker-sep">/</span>
            </span>
          ))}
        </div>
      </div>

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

      {/* ── LOGO STRIP ───────────────────────────── */}
      <div className="logo-strip" aria-label="Organizations worked with">
        <div className="container">
          <span className="logo-strip-label">Worked with</span>
        </div>
        <div className="logo-track-wrap">
          <div className="logo-track">
            {logoLoop.map((l, i) => (
              <div key={i} className="logo-item">
                <img src={l.src} alt={l.name} title={l.name} />
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
                <span className="feat-arrow">→</span>
              </Link>
            ))}
          </div>

          <div className="feat-footer reveal d4">
            <Link to="/projects" className="btn-ghost">Full project library ↗</Link>
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
