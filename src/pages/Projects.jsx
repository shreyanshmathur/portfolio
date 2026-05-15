import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'
import './Projects.css'

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
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className={`proj-card reveal d${(i % 3) + 1}`}
              >
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
                <span className="proj-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
