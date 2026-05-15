import { useReveal } from '../hooks/useReveal'
import './Projects.css'

const projects = [
  {
    index: '01',
    title: 'Enterprise capability generator',
    kind: 'Consulting tool',
    blurb:
      'Browser tool that ingests capability scoring across 8 business domains and outputs branded PowerPoint decks in one click.',
    impact: '4-6h',
    impactLabel: 'saved per engagement',
    tags: ['React', 'XLSX parsing', 'PowerPoint automation'],
  },
  {
    index: '02',
    title: 'AI pharmacy demand bot',
    kind: 'Healthcare AI',
    blurb:
      'Forecasts medicine demand on 7-60-day horizons. Flags expiry risk, detects prescription-to-sale leakage, classifies inventory ABC/XYZ.',
    impact: '60d',
    impactLabel: 'forecast horizon',
    tags: ['Python', 'Forecasting', 'Inventory'],
  },
  {
    index: '03',
    title: 'Surya Hospital AI suite',
    kind: 'Healthcare automation',
    blurb:
      'Doctor approval workflows, Telegram-bot patient comms, brand-voice content pipeline.',
    impact: '3',
    impactLabel: 'POC modules',
    tags: ['React', 'FastAPI', 'Groq'],
  },
  {
    index: '04',
    title: 'SPACES AI style concierge',
    kind: 'Retail AI',
    blurb:
      'Conversational shopping assistant, "complete the look" cross-sell, room-scan capability.',
    impact: 'Llama',
    impactLabel: 'model engine',
    tags: ['JavaScript', 'FastAPI', 'Groq Llama'],
  },
  {
    index: '05',
    title: 'Learner risk copilot',
    kind: 'EdTech AI',
    blurb:
      'Refund-prevention dashboard. Flags at-risk learners and suggests proactive interventions.',
    impact: 'Live',
    impactLabel: 'deployed',
    tags: ['React', 'Groq', 'Netlify'],
  },
  {
    index: '06',
    title: 'Baring PE site',
    kind: 'Corporate',
    blurb:
      'Official corporate site for Baring Private Equity Partners India.',
    impact: 'Live',
    impactLabel: 'production',
    tags: ['JavaScript', 'Netlify'],
  },
]

export default function Projects() {
  const r1 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">02 / Work</span>
          </div>
          <h1 className="ph-title">Work</h1>
          <p className="ph-kicker">
            Consulting tools, AI prototypes, and client deliverables
            that prove the strategy actually works.
          </p>
        </div>
      </div>

      {/* ── PROJECT GRID ───────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={i} className={`proj-card reveal d${(i % 3) + 1}`}>
                <div className="proj-top">
                  <span className="proj-index">{p.index}</span>
                  <span className="proj-kind">{p.kind}</span>
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-blurb">{p.blurb}</p>
                <div className="proj-foot">
                  <div>
                    <div className="proj-impact">{p.impact}</div>
                    <span className="proj-impact-label">{p.impactLabel}</span>
                  </div>
                  <div className="proj-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
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
