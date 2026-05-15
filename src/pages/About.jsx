import { useReveal } from '../hooks/useReveal'
import { Link } from 'react-router-dom'
import './About.css'

const certifications = [
  { org: 'Anthropic',  title: 'AI Fluency Framework & Foundations',  color: '#C9943A' },
  { org: 'Google',     title: 'Generative AI Leader Certification',   color: '#4A90E2' },
  { org: 'Yale / Coursera', title: 'Financial Markets',              color: '#06B6D4' },
  { org: 'BCG',        title: 'Consulting Simulation',               color: '#9B59B6' },
  { org: 'JPMorgan',   title: 'Investment Banking Simulation',       color: '#E8B95F' },
  { org: 'Coursera',   title: 'Business Analysis & Process Mgmt',   color: '#E05050' },
]

const facts = [
  { icon: '◈', label: 'Role',         value: 'Strategy Associate' },
  { icon: '◉', label: 'Company',      value: 'PwC India' },
  { icon: '⊕', label: 'Location',     value: 'Mumbai, India' },
  { icon: '◫', label: 'Education',    value: 'B.Tech CS, VIT' },
  { icon: '⬡', label: 'Speciality',   value: 'GCC · AI · Full-Stack' },
  { icon: '◆', label: 'Available',    value: 'Open to opportunities' },
]

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="about-hero">
        <div className="ab-bg">
          <div className="ab-orb ab-orb1" />
          <div className="ab-orb ab-orb2" />
        </div>
        <div className="ab-hero-wm" aria-hidden="true">ABOUT</div>
        <div className="container ab-hero-inner">
          <span className="eyebrow">01 / About</span>
          <h1 className="ab-title">
            The<br />
            <em>Strategist</em><br />
            <span className="outline-text">Who Builds.</span>
          </h1>
          <p className="ab-tagline">
            Management consultant at PwC with a CS background. I design operating models,
            lead AI transformations, and deliver results from the C-suite down to ground-level execution.
            The technical edge isn't the story; it's what makes the strategy more credible.
          </p>
        </div>
      </section>

      {/* ── PULL QUOTE ────────────────────────────── */}
      <div className="ab-quote-band" ref={useReveal()}>
        <div className="container">
          <blockquote className="ab-quote reveal">
            <span className="abq-mark">"</span>
            The rarest hire in consulting isn't the best strategist
            or the best analyst. It's the one who can tell you
            what to build <em>and then build it.</em>
            <span className="abq-mark">"</span>
          </blockquote>
        </div>
      </div>

      {/* ── STORY ─────────────────────────────────── */}
      <section className="ab-story section" ref={r1}>
        <div className="container">
          <div className="abs-grid">
            <div className="abs-left">
              <div className="reveal">
                <span className="eyebrow">My Story</span>
                <h2 className="section-heading" style={{ marginTop: 20 }}>
                  From GCC strategy<br />
                  <span>to ground-level delivery.</span>
                </h2>
              </div>
              <div className="abs-clients reveal d3">
                <span className="eyebrow" style={{ marginBottom: 16 }}>Experience at</span>
                {['PwC', 'EY', 'BelleVidCo'].map(c => (
                  <span key={c} className="abs-client">{c}</span>
                ))}
              </div>
            </div>
            <div className="abs-right reveal-r d2">
              <p>
                I came into consulting through an unconventional path: a Computer Science degree at VIT, where I was more interested in how organisations work than how code runs. That led me to EY's GCC Research team, where I designed an AI-powered sales pipeline that cut manual prospecting by 75% across four city offices.
              </p>
              <p>
                I then co-founded BelleVidCo, delivering operational systems for clients in logistics, fashion, and private equity. Running client engagements end-to-end, from scoping to delivery, taught me what slides alone can't: that strategy is only as good as the implementation plan behind it.
              </p>
              <p>
                At PwC I've led GCC strategy for a global FMCG client (scaling an India Tech Hub from 27 to 108 FTEs), redesigned the IT operating model for a national cement leader across 15+ states, co-led a national AI Accelerator that shipped 12 enterprise tools, and launched an AI helpdesk that cut review cycles by 30%.
              </p>
              <p>
                The CS background means I can pressure-test every AI recommendation I make and prototype the tool that proves it. For a consulting client, that's the difference between a roadmap and a result.
              </p>
              <div style={{ marginTop: 32 }}>
                <Link to="/experience" className="btn-primary">See My Experience ↗</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS ───────────────────────────── */}
      <section className="ab-facts" ref={r2}>
        <div className="container">
          <div className="abf-grid">
            {facts.map((f, i) => (
              <div key={i} className={`abf-item reveal d${i + 1}`}>
                <span className="abf-icon">{f.icon}</span>
                <div>
                  <span className="abf-label">{f.label}</span>
                  <span className="abf-value">{f.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL IDENTITY ─────────────────────────── */}
      <section className="ab-dual section" ref={r3}>
        <div className="container">
          <div className="abd-header reveal">
            <span className="eyebrow">What sets me apart</span>
            <h2 className="section-heading" style={{ marginTop: 20 }}>
              Consulting depth.<br />
              <span>Technical credibility.</span>
            </h2>
          </div>

          <div className="abd-cols">
            <div className="abd-col reveal-l d2">
              <div className="abd-col-header">
                <span className="abd-num">01</span>
                <h3>Core Consulting</h3>
              </div>
              <ul className="abd-list">
                <li>GCC operating model design & market entry</li>
                <li>AI-led enterprise transformation</li>
                <li>IT operating model & governance design</li>
                <li>C-suite stakeholder management</li>
                <li>Capability mapping & talent planning</li>
                <li>Lean Six Sigma process optimisation</li>
                <li>KPI design, benchmarking & reporting</li>
                <li>Financial modelling (DCF, valuation)</li>
                <li>Agile programme delivery</li>
              </ul>
              <div className="abd-tag-row">
                {['PwC', 'EY', 'FMCG', 'Chemicals', 'Cement', 'PE'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="abd-divider">
              <span className="abd-plus">+</span>
            </div>

            <div className="abd-col reveal-r d3">
              <div className="abd-col-header">
                <span className="abd-num">02</span>
                <h3>Technical Edge</h3>
              </div>
              <ul className="abd-list">
                <li>Power BI & Tableau: executive dashboards</li>
                <li>Python: automation, ML, data pipelines</li>
                <li>SAP FICO/MM: advanced user</li>
                <li>SQL & Excel VBA workflow automation</li>
                <li>AI tool scoping, prototyping & deployment</li>
                <li>LLM integrations for enterprise use cases</li>
                <li>React / TypeScript: POC & tool development</li>
              </ul>
              <div className="abd-tag-row">
                {['Power BI', 'Python', 'SAP', 'SQL', 'AI Prototyping'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────── */}
      <section className="ab-certs section" ref={useReveal()}>
        <div className="container">
          <div className="abc-header reveal">
            <span className="eyebrow">Credentials</span>
            <h2 className="section-heading" style={{ marginTop: 20 }}>
              Education &<br />
              <span>Certifications</span>
            </h2>
          </div>

          {/* Education block */}
          <div className="abc-edu reveal d2">
            <div className="abce-left">
              <span className="eyebrow" style={{ marginBottom: 12 }}>Education</span>
              <h3>Bachelor of Technology,<br />Computer Science</h3>
              <p>Vellore Institute of Technology (VIT)</p>
            </div>
            <div className="abce-right">
              <span className="big-num">2021</span>
              <span className="abc-dash">→</span>
              <span className="big-num">2025</span>
            </div>
          </div>

          {/* Cert grid */}
          <div className="abc-grid">
            {certifications.map((c, i) => (
              <div key={i} className={`abc-item reveal d${(i % 3) + 2}`} style={{ '--cert-color': c.color }}>
                <span className="abc-org">{c.org}</span>
                <p className="abc-title">{c.title}</p>
                <span className="abc-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
