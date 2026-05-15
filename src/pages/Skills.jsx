import { useReveal } from '../hooks/useReveal'
import './Skills.css'

const categories = [
  {
    id: '01',
    name: 'Strategy & Consulting',
    icon: '◈',
    color: '#C9943A',
    skills: [
      { name: 'GCC Operating Model Design',   level: 95 },
      { name: 'AI Transformation Strategy',    level: 92 },
      { name: 'C-Suite Stakeholder Mgmt',      level: 90 },
      { name: 'Capability Mapping',            level: 88 },
      { name: 'IT Operating Model Redesign',   level: 85 },
      { name: 'Lean Six Sigma',                level: 82 },
      { name: 'Financial Modeling (DCF)',       level: 80 },
    ],
    tools: ['PowerPoint', 'Excel', 'Asana', 'Notion'],
  },
  {
    id: '02',
    name: 'Data & Analytics',
    icon: '◉',
    color: '#4A90E2',
    skills: [
      { name: 'Power BI',        level: 92 },
      { name: 'Tableau',         level: 88 },
      { name: 'SQL',             level: 85 },
      { name: 'KPI Design',      level: 90 },
      { name: 'Python Analysis', level: 82 },
      { name: 'Excel VBA',       level: 80 },
    ],
    tools: ['Power BI', 'Tableau', 'SQL', 'Python'],
  },
  {
    id: '03',
    name: 'Engineering & AI',
    icon: '⬡',
    color: '#06B6D4',
    skills: [
      { name: 'React / TypeScript',    level: 88 },
      { name: 'Python (FastAPI)',       level: 85 },
      { name: 'LLM Integration (Groq)', level: 88 },
      { name: 'AI Pipeline Design',    level: 85 },
      { name: 'JavaScript',            level: 90 },
      { name: 'REST APIs',             level: 82 },
    ],
    tools: ['React', 'Python', 'Node.js', 'Netlify'],
  },
  {
    id: '04',
    name: 'Enterprise Tools',
    icon: '◫',
    color: '#E8B95F',
    skills: [
      { name: 'SAP FICO / MM',  level: 80 },
      { name: 'Agile / Scrum',  level: 88 },
      { name: 'Asana',          level: 92 },
      { name: 'Jira',           level: 78 },
      { name: 'Notion',         level: 90 },
    ],
    tools: ['SAP', 'Asana', 'Jira', 'Notion'],
  },
]

const industries = [
  { name: 'FMCG & Consumer', icon: '▸', n: 2 },
  { name: 'Specialty Chemicals', icon: '▸', n: 1 },
  { name: 'Cement & Construction', icon: '▸', n: 1 },
  { name: 'Healthcare', icon: '▸', n: 2 },
  { name: 'Private Equity', icon: '▸', n: 1 },
  { name: 'Retail & Fashion', icon: '▸', n: 2 },
  { name: 'EdTech', icon: '▸', n: 1 },
  { name: 'Digital Media', icon: '▸', n: 1 },
]

export default function Skills() {
  const headerRef  = useReveal()
  const catRef     = useReveal()
  const indRef     = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="sk-hero">
        <div className="sk-hero-bg">
          <div className="sk-orb1" />
          <div className="sk-orb2" />
        </div>
        <div className="sk-hero-wm" aria-hidden="true">SKILLS</div>
        <div className="container" ref={headerRef}>
          <div className="reveal"><span className="eyebrow">04 / Skills</span></div>
          <h1 className="sk-h1 reveal d2">
            Consulting depth.<br />
            <span className="outline-text">Technical breadth.</span>
          </h1>
          <p className="sk-sub reveal d3">
            Four competency areas that make a consulting engagement land, from strategy through to delivery.
          </p>
        </div>
      </section>

      {/* ── SKILL CATEGORIES ──────────────────────── */}
      <section className="sk-cats section" ref={catRef}>
        <div className="container">
          <div className="skc-grid">
            {categories.map((cat, ci) => (
              <div
                key={cat.id}
                className={`skc-card reveal d${ci + 1}`}
                style={{ '--cat-color': cat.color }}
              >
                <div className="skc-header">
                  <span className="skc-icon">{cat.icon}</span>
                  <div>
                    <span className="skc-id">{cat.id}</span>
                    <h3 className="skc-name">{cat.name}</h3>
                  </div>
                </div>

                <div className="skc-skills">
                  {cat.skills.map((s, si) => (
                    <div key={si} className="sks-item">
                      <div className="sks-row">
                        <span className="sks-name">{s.name}</span>
                        <span className="sks-pct">{s.level}%</span>
                      </div>
                      <div className="sks-bar">
                        <div
                          className="sks-fill"
                          style={{ '--fill': `${s.level}%`, '--delay': `${si * 0.1 + 0.3}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skc-tools">
                  {cat.tools.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────── */}
      <section className="sk-ind" ref={indRef}>
        <div className="container">
          <div className="ski-header reveal">
            <span className="eyebrow">Cross-Industry Impact</span>
            <h2 className="section-heading" style={{ marginTop: 20 }}>
              Industries I've<br />
              <span>worked across</span>
            </h2>
          </div>
          <div className="ski-grid">
            {industries.map((ind, i) => (
              <div key={i} className={`ski-item reveal d${(i % 4) + 1}`}>
                <span className="ski-icon">{ind.icon}</span>
                <span className="ski-name">{ind.name}</span>
                <span className="ski-n">{ind.n} project{ind.n > 1 ? 's' : ''}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ──────────────────────────────── */}
      <section className="sk-approach section" ref={useReveal()}>
        <div className="container">
          <div className="ska-grid">
            {[
              {
                num: '01',
                title: 'Problem First',
                body: 'Every engagement starts with a clearly defined problem, not a pre-packaged solution. I work from business outcomes backwards to design the operating model, process, or tool that gets there.',
              },
              {
                num: '02',
                title: 'Structured Delivery',
                body: 'I use Lean Six Sigma, Agile, and governance frameworks to turn strategy into implementation. Zero issue slippage on 15+ tracked initiatives at PwC. Not by accident.',
              },
              {
                num: '03',
                title: 'Quantified Impact',
                body: "Every engagement has a number: 20% faster market entry, 30% shorter review cycles, 25% faster incident dispatch. If I can't measure the outcome, the engagement isn't finished.",
              },
            ].map((a, i) => (
              <div key={i} className={`ska-item reveal d${i + 1}`}>
                <span className="ska-num">{a.num}</span>
                <h3 className="ska-title">{a.title}</h3>
                <p className="ska-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
