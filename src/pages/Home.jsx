import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Home.css'

const stats = [
  { num: '35+', label: 'Key Roles\nHired',        sub: 'India Tech Hub · FMCG' },
  { num: '12',  label: 'Enterprise\nTools Launched', sub: 'National AI Accelerator' },
  { num: '25%', label: 'Faster Incident\nDispatch', sub: 'IT Operating Model Redesign' },
  { num: '4',   label: 'Industries\nServed',       sub: 'FMCG · Chemicals · Cement · PE' },
]

const ticker = [
  'GCC STRATEGY', 'OPERATING MODELS', 'AI TRANSFORMATION', 'PwC',
  'LEAN SIX SIGMA', 'STAKEHOLDER MANAGEMENT', 'CAPABILITY MAPPING',
  'POWER BI', 'AGILE DELIVERY', 'C-SUITE ADVISORY', 'SAP FICO/MM',
  'ENTERPRISE AI', 'CHANGE MANAGEMENT', 'KPI DESIGN',
]

const featured = [
  {
    num: '01',
    title: '5-Year India Tech Hub Strategy',
    co: 'PwC, Global FMCG Client',
    tags: ['GCC Strategy', 'Operating Model', 'Headcount Scaling'],
    metric: '27 → 108 FTEs scaled across 4 geographies',
    color: '#C9943A',
    to: '/experience',
  },
  {
    num: '02',
    title: 'AI Accelerator: 12 Enterprise Tools',
    co: 'PwC, National Programme',
    tags: ['AI Transformation', 'Governance', 'Product Requirements'],
    metric: '+15% tool adoption in 90 days',
    color: '#4A90E2',
    to: '/experience',
  },
  {
    num: '03',
    title: 'IT Operating Model Redesign',
    co: 'PwC, National Cement Leader',
    tags: ['Hub-and-Spoke', 'Governance', '15+ States'],
    metric: '25% faster incident dispatch',
    color: '#06B6D4',
    to: '/experience',
  },
]

export default function Home() {
  const tickerRef = useRef(null)
  const revealRef = useReveal()

  /* letter-by-letter hero name split */
  const topName    = 'SHREYANSH'
  const bottomName = 'MATHUR'

  return (
    <main className="page-wrap">

      {/* ── HERO ──────────────────────────────────── */}
      <section className="hero">
        {/* background atmosphere */}
        <div className="hero-bg">
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
          <div className="hero-grid" />
          <div className="hero-noise" />
          <div className="hero-watermark">STRATEGY</div>
        </div>

        {/* side label */}
        <div className="hero-side-label">
          <span>MANAGEMENT CONSULTING</span>
          <span className="hsl-line" />
          <span>PwC INDIA</span>
        </div>

        <div className="hero-body container">
          <div className="hero-eyebrow">
            <span className="eyebrow">Strategy Associate · PwC · Mumbai</span>
            <span className="hero-badge">Open to opportunities</span>
          </div>

          <h1 className="hero-name">
            <span className="hn-top">
              {topName.split('').map((c, i) => (
                <span key={i} className="hn-char" style={{ animationDelay: `${i * 0.06}s` }}>{c}</span>
              ))}
            </span>
            <span className="hn-bot outline-text">
              {bottomName.split('').map((c, i) => (
                <span key={i} className="hn-char" style={{ animationDelay: `${(topName.length + i) * 0.06}s` }}>{c}</span>
              ))}
            </span>
          </h1>

          <div className="hero-rule">
            <span className="hr-line" />
            <span className="hr-label">STRATEGY · AI TRANSFORMATION · GCC DESIGN</span>
            <span className="hr-line" />
          </div>

          <p className="hero-desc">
            Management consultant at PwC specialising in GCC operating models,
            AI-led transformation, and enterprise restructuring.<br />
            With a CS background, the rare consultant who can both design the strategy
            and prototype the tools that prove it.
          </p>

          <div className="hero-actions">
            <Link to="/experience" className="btn-primary">View My Work ↗</Link>
            <Link to="/contact"    className="btn-ghost">Let's Talk</Link>
          </div>
        </div>

        {/* stats row */}
        <div className="hero-stats container">
          {stats.map((s, i) => (
            <div key={i} className="hs-item" style={{ animationDelay: `${0.8 + i * 0.15}s` }}>
              <span className="hs-num shimmer">{s.num}</span>
              <div className="hs-text">
                <span className="hs-label">{s.label}</span>
                <span className="hs-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-hint">
          <span className="sh-text">SCROLL</span>
          <span className="sh-line" />
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────── */}
      <div className="ticker-wrap">
        <div className="ticker-inner" ref={tickerRef}>
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="ticker-item">
              {t}
              <span className="ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MANIFESTO BAND ────────────────────────── */}
      <div className="manifesto-band">
        <div className="container">
          <p className="manifesto-text reveal" ref={useReveal()}>
            <span className="mf-quote">"</span>
            Most consultants hand over a roadmap. I hand over a roadmap
            and the prototype that proves it works.
            <span className="mf-quote">"</span>
          </p>
        </div>
      </div>

      {/* ── FEATURED WORK ─────────────────────────── */}
      <section className="featured section" ref={revealRef}>
        <div className="container">
          <div className="feat-header reveal">
            <span className="eyebrow">Selected Engagements</span>
            <h2 className="section-heading">
              Three projects.<br />
              <span>Measurable outcomes.</span>
            </h2>
          </div>

          <div className="feat-grid">
            {/* First card - large feature */}
            <Link
              to={featured[0].to}
              className="feat-card feat-card--hero reveal d1"
              style={{ '--card-accent': featured[0].color }}
            >
              <div className="fc-bg-num" aria-hidden="true">{featured[0].num}</div>
              <div className="fc-num">{featured[0].num}</div>
              <div className="fc-hero-metric">{featured[0].metric}</div>
              <div className="fc-body">
                <p className="fc-co">{featured[0].co}</p>
                <h3 className="fc-title">{featured[0].title}</h3>
                <div className="fc-tags">
                  {featured[0].tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
              <div className="fc-arrow">→</div>
            </Link>

            {/* Right column - two stacked cards */}
            <div className="feat-col">
              {featured.slice(1).map((f, i) => (
                <Link
                  key={i}
                  to={f.to}
                  className={`feat-card feat-card--sm reveal d${i + 2}`}
                  style={{ '--card-accent': f.color }}
                >
                  <div className="fc-num">{f.num}</div>
                  <div className="fc-body">
                    <p className="fc-co">{f.co}</p>
                    <h3 className="fc-title">{f.title}</h3>
                    <p className="fc-metric">{f.metric}</p>
                    <div className="fc-tags">
                      {f.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <div className="fc-arrow">→</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="feat-footer reveal d4">
            <Link to="/experience" className="btn-ghost">Full Experience ↗</Link>
          </div>
        </div>
      </section>

      {/* ── IDENTITY STRIP ────────────────────────── */}
      <section className="identity-strip" ref={useReveal()}>
        <div className="container">
          <div className="id-grid">
            <div className="id-left reveal-l">
              <span className="eyebrow">The consulting edge</span>
              <h2 className="id-heading">
                Strategy that<br />
                <em>gets built,</em><br />
                not just advised.
              </h2>
            </div>
            <div className="id-right">
              <div className="id-card reveal d2">
                <div className="idc-icon">◈</div>
                <h4>The Strategist</h4>
                <p>GCC operating model design, AI transformation roadmaps, capability mapping. From C-suite alignment to ground-level implementation across FMCG, chemicals, and cement sectors.</p>
              </div>
              <div className="id-card reveal d3">
                <div className="idc-icon">⬡</div>
                <h4>The Technical Edge</h4>
                <p>A CS degree means I don't just recommend AI tools. I can scope, prototype, and validate them. That closes the gap between slide deck and delivery, and makes me a more credible advisor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────── */}
      <section className="cta-band">
        <div className="container">
          <div className="ctab-inner">
            <div>
              <span className="eyebrow">Ready to work together?</span>
              <h2 className="ctab-heading">Let's build something<br /><span className="shimmer">remarkable.</span></h2>
            </div>
            <div className="ctab-actions">
              <Link to="/contact" className="btn-primary">Get in Touch ↗</Link>
              <a href="https://www.linkedin.com/in/shreyanshmathur" target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
