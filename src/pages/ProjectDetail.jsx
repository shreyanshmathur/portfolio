import { useParams, Link, Navigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const r1 = useReveal()

  if (!project) return <Navigate to="/projects" replace />

  const currentIndex = projects.findIndex(p => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <main className="page-wrap">

      {/* ── CASE STUDY HERO ────────────────────── */}
      <div className="cs-hero">
        <div className="container">
          <div className="cs-hero-top">
            <span className="eyebrow">{project.index} / {project.kind}</span>
            <Link to="/projects" className="cs-back">← All projects</Link>
          </div>
          <h1 className="cs-title">{project.title}</h1>
          <div className="cs-hero-meta">
            <div className="cs-meta-item">
              <span className="cs-meta-k">Client</span>
              <span className="cs-meta-v">{project.client}</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-k">Type</span>
              <span className="cs-meta-v">{project.kind}</span>
            </div>
            <div className="cs-meta-item cs-meta-impact">
              <span className="cs-impact-num">{project.impact}</span>
              <span className="cs-impact-label">{project.impactLabel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── OVERVIEW ───────────────────────────── */}
      <section className="section cs-overview" ref={r1}>
        <div className="container">
          <div className="cs-two-col">
            <div className="reveal">
              <span className="eyebrow">Overview</span>
              <p className="cs-overview-text reveal d2">{project.overview}</p>
            </div>
            <div className="cs-tags-col reveal d3">
              <span className="cs-col-label">Stack</span>
              <div className="cs-stack-list">
                {project.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="cs-link">
                  GitHub ↗
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="cs-link cs-link--accent">
                  Live site ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ─────────────────── */}
      <section className="section band">
        <div className="container">
          <div className="cs-ps-grid">
            <div className="cs-ps-col reveal d1">
              <span className="cs-ps-label">The problem</span>
              <p className="cs-ps-text">{project.problem}</p>
            </div>
            <div className="cs-ps-divider" />
            <div className="cs-ps-col reveal d2">
              <span className="cs-ps-label">The solution</span>
              <p className="cs-ps-text">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow">What was built</span></div>
            <h2 className="reveal d2">Key features</h2>
          </div>
          <div className="cs-features">
            {project.features.map((f, i) => (
              <div key={i} className={`cs-feature reveal d${(i % 4) + 1}`}>
                <span className="cs-feature-num">0{i + 1}</span>
                <p className="cs-feature-text">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ───────────────────────────── */}
      <section className="section band">
        <div className="container">
          <div className="section-head">
            <div className="reveal"><span className="eyebrow">Results</span></div>
            <h2 className="reveal d2">Outcomes</h2>
          </div>
          <div className="cs-outcomes">
            {project.outcomes.map((o, i) => (
              <div key={i} className={`cs-outcome reveal d${i + 1}`}>
                <span className="cs-outcome-num">{String(i + 1).padStart(2, '0')}</span>
                <p className="cs-outcome-text">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT ────────────────────────── */}
      <div className="cs-nav">
        <div className="container">
          <div className="cs-nav-inner">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="cs-nav-link cs-nav-prev">
                <span className="cs-nav-dir">← Previous</span>
                <span className="cs-nav-title">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/projects/${next.slug}`} className="cs-nav-link cs-nav-next">
                <span className="cs-nav-dir">Next →</span>
                <span className="cs-nav-title">{next.title}</span>
              </Link>
            ) : <span />}
          </div>
        </div>
      </div>

    </main>
  )
}
