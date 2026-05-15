import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'Enterprise Capability Generator',
    category: 'Consulting Tool',
    desc: 'Browser-based tool that ingests capability scoring data (XLSX) across 8+ business domains and auto-generates fully formatted, branded PowerPoint decks in one click, cutting 4-6 hours of manual slide-building per engagement.',
    impact: '4-6 hrs saved / engagement',
    tags: ['React', 'JavaScript', 'XLSX Parsing', 'PowerPoint Automation'],
    metrics: [
      { num: '8+', label: 'Business Domains' },
      { num: '5', label: 'Scoring Levels (L0-L2)' },
      { num: '0', label: 'Manual Slide Work' },
    ],
    color: '#C9943A',
    size: 'large',
  },
  {
    num: '02',
    title: 'AI Pharmacy Demand Bot',
    category: 'Healthcare AI',
    desc: 'AI-powered pharmacy demand forecasting tool that predicts medicine requirements across 7-60 day horizons, flags expiry risk by batch, detects prescription-to-sale leakage, and classifies inventory using ABC/XYZ algorithms.',
    impact: 'Executive summaries for leadership',
    tags: ['Python', 'AI', 'Forecasting', 'Inventory', 'Healthcare'],
    metrics: [
      { num: '60d', label: 'Forecast Horizon' },
      { num: 'ABC/XYZ', label: 'Classification' },
      { num: 'AI', label: 'Executive Summaries' },
    ],
    color: '#4A90E2',
    size: 'large',
  },
  {
    num: '03',
    title: 'Surya Hospital AI Suite',
    category: 'Healthcare Automation',
    desc: 'Comprehensive AI automation suite for Surya Hospitals: doctor approval workflows, patient communications via Telegram Bot, and an AI-driven content generation pipeline with brand voice validation.',
    impact: 'Full hospital ops automation',
    tags: ['React', 'Python', 'Telegram Bot', 'Groq', 'FastAPI'],
    metrics: [
      { num: '3', label: 'POC Modules' },
      { num: 'Groq', label: 'LLM Powered' },
    ],
    color: '#06B6D4',
    size: 'medium',
  },
  {
    num: '04',
    title: 'SPACES AI Style Concierge',
    category: 'Retail AI',
    desc: 'AI-powered shopping assistant for SPACES with conversational chatbot (Groq Llama), "Complete the Look" cross-selling engine, and room scanning capabilities, integrated with FastAPI backend as a native-like widget.',
    impact: 'Cross-selling engine + room scan',
    tags: ['JavaScript', 'FastAPI', 'Groq Llama', 'AI Chat'],
    metrics: [
      { num: '3', label: 'AI Features' },
      { num: 'Llama', label: 'Model Engine' },
    ],
    color: '#E8B95F',
    size: 'medium',
  },
  {
    num: '05',
    title: 'Learner Risk Copilot',
    category: 'EdTech AI',
    desc: 'Refund prevention dashboard designed for learner success teams. Uses Groq AI to flag at-risk learners, predict churn, and suggest proactive interventions to reduce refund rates.',
    impact: 'Deployed on Netlify',
    tags: ['React', 'Groq AI', 'Netlify', 'EdTech'],
    metrics: [
      { num: 'Live', label: 'Deployed' },
      { num: 'AI', label: 'Risk Scoring' },
    ],
    color: '#9B59B6',
    size: 'medium',
  },
  {
    num: '06',
    title: 'Baring Private Equity Website',
    category: 'Corporate',
    desc: 'Official corporate website for Baring Private Equity Partners India. Clean, professional frontend with Netlify deployment, environment variable configuration, and robust production setup.',
    impact: 'Live production site',
    tags: ['JavaScript', 'Netlify', 'Corporate Design'],
    metrics: [
      { num: 'Live', label: 'Production' },
    ],
    color: '#E05050',
    size: 'small',
  },
  {
    num: '07',
    title: 'AI Sales Pipeline, EY',
    category: 'Enterprise Automation',
    desc: 'Engineered and deployed an AI sales pipeline at EY that cut manual prospecting by 75% and boosted acquisition speed by 60%. Used across four major city offices with real-time BI visibility.',
    impact: '75% prospecting reduction',
    tags: ['Python', 'AI', 'Tableau', 'Power BI', 'Sales Automation'],
    metrics: [
      { num: '75%', label: 'Prospecting Cut' },
      { num: '4', label: 'City Offices' },
    ],
    color: '#4A90E2',
    size: 'small',
  },
]

export default function Projects() {
  const headerRef = useReveal()
  const gridRef   = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="proj-hero">
        <div className="proj-hero-bg">
          <div className="proj-orb1" />
          <div className="proj-orb2" />
        </div>
        <div className="proj-hero-wm" aria-hidden="true">WORK</div>
        <div className="container" ref={headerRef}>
          <div className="reveal">
            <span className="eyebrow">03 / Projects</span>
          </div>
          <h1 className="proj-h1 reveal d2">
            Consulting tools.<br />
            <em>Client</em>{' '}
            <span className="outline-text">deliverables.</span>
          </h1>
          <p className="proj-sub reveal d3">
            Beyond the engagement decks. The tools and systems built to prove, accelerate, and sustain each strategy.
          </p>
        </div>
      </section>

      {/* ── PROJECT GRID ──────────────────────────── */}
      <section className="proj-grid-section section" ref={gridRef}>
        <div className="container">
          <div className="proj-grid">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`proj-card pc-${p.size} reveal d${(i % 3) + 1}`}
                style={{ '--pc-color': p.color }}
              >
                <div className="pc-top">
                  <span className="pc-num">{p.num}</span>
                  <span className="pc-cat">{p.category}</span>
                </div>

                <h3 className="pc-title">{p.title}</h3>
                <p className="pc-desc">{p.desc}</p>

                <div className="pc-metrics">
                  {p.metrics.map((m, j) => (
                    <div key={j} className="pcm-item">
                      <span className="pcm-num">{m.num}</span>
                      <span className="pcm-label">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pc-bottom">
                  <p className="pc-impact">↳ {p.impact}</p>
                  <div className="pc-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>

                <div className="pc-accent-bar" />
                <div className="pc-wm" aria-hidden="true">{p.num}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB STRIP ──────────────────────────── */}
      <section className="github-strip" ref={useReveal()}>
        <div className="container">
          <div className="ghs-inner reveal">
            <div className="ghs-left">
              <span className="eyebrow">For the technically inclined</span>
              <h2 className="ghs-heading">The code is<br />all on GitHub.</h2>
              <p>Prototypes, dashboards, and AI tools built alongside each consulting engagement, open for review.</p>
            </div>
            <div className="ghs-right">
              <div className="ghs-stat">
                <span className="big-num">31</span>
                <span className="ghs-slabel">Repositories</span>
              </div>
              <div className="ghs-stat">
                <span className="big-num">6+</span>
                <span className="ghs-slabel">Deployed Tools</span>
              </div>
              <a
                href="https://github.com/shreyanshmathur"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                View GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
