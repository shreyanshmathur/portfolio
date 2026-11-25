import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useInView, CountUp } from '../hooks/motion'
import { profile, education, certifications, skills, companies } from '../data/content'
import { Orbit, Parallax, LogoMarquee } from '../components/Graphics'
import './Home.css'
import './Experience.css'
import './About.css'

const uni = [
  {
    org: 'Riviera, VIT', role: 'Sponsorship Coordinator', period: 'Jan 2024 – Mar 2024',
    metrics: [{ to: 1.25, decimals: 2, prefix: '₹', suffix: ' Cr+', label: 'budgets managed' }, { to: 250, label: 'events' }],
    text: 'Analysed sponsorship proposals and secured Pepsi as title sponsor.',
  },
  {
    org: 'graVITas, VIT', role: 'Finance & Sponsorship Manager', period: 'Aug 2024 – Sep 2024',
    metrics: [{ to: 75, prefix: '₹', suffix: 'L+', label: 'sponsorship deals negotiated' }],
    text: 'Deals with Altium, Autodesk, Nestlé and EaseMyTrip, built on data-driven sponsor insights.',
  },
]

function UniCard({ x, i }) {
  const [ref, go] = useInView(0.35)
  return (
    <article ref={ref} className={`ab-x${go ? ' go' : ''}`} style={{ '--i': i }}>
      <span className="mono">{x.period}</span>
      <h3>{x.org}</h3>
      <div className="role">{x.role}</div>
      <div className="ab-x-metrics">
        {x.metrics.map((m) => (
          <div key={m.label}>
            <span className="n"><CountUp to={m.to} start={go} decimals={m.decimals || 0} prefix={m.prefix} suffix={m.suffix} duration={1500} /></span>
            <span className="l">{m.label}</span>
          </div>
        ))}
      </div>
      <p>{x.text}</p>
    </article>
  )
}

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const [skRef, skGo] = useInView(0.25)

  return (
    <main className="page-wrap">
      <div className="page-hero ab-hero-wrap">
        <Parallax speed={-120} className="xp-hero-orbit"><Orbit /></Parallax>
        <div className="container ab-hero">
          <div>
            <div className="ph-top"><span className="eyebrow load d1">02 / About</span></div>
            <h1 className="ph-title"><span className="line"><span className="load d2">About</span></span></h1>
            <p className="ph-kicker load d3">
              I studied computer science at VIT and co-founded a digital agency while I
              was there. I then moved into strategy consulting at PwC, and went on to lead
              enterprise delivery at TrueFan AI. I am based in {profile.location}.
            </p>
            <div className="ab-actions load d4">
              <Link to="/experience" className="btn-primary">Experience <span className="arr">→</span></Link>
              <Link to="/contact" className="btn-ghost">Contact</Link>
            </div>
          </div>
          <Parallax speed={50} className="ab-photo-wrap load-img">
            <div className="hp-frame sq"><img src="/shreyansh.jpg" alt="Shreyansh Mathur" width="800" height="800" /></div>
          </Parallax>
        </div>
      </div>

      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow reveal">Capabilities</span>
            <h2 className="sec-title reveal d1">Strategy, delivery <em>and data.</em></h2>
          </div>
          <div ref={skRef} className={`ab-skills${skGo ? ' go' : ''}`}>
            {skills.map((g, i) => (
              <div key={g.group} className="ab-skill" style={{ '--i': i }}>
                <span className="ab-skill-n">0{i + 1}</span>
                <h3>{g.group}</h3>
                <ul>{g.items.map((s, j) => <li key={s} style={{ '--j': j }}>{s}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" ref={r2}>
        <div className="container ab-two">
          <div>
            <span className="eyebrow reveal">Education</span>
            <div className="ab-edu reveal d1">
              <h3>{education.school}</h3>
              <p>{education.degree}</p>
              <span className="mono">{education.period}</span>
              <div className="ab-edu-bar" aria-hidden="true"><span /></div>
            </div>
          </div>
          <div>
            <span className="eyebrow reveal">Certifications</span>
            <ul className="ab-certs">
              {certifications.map((c, i) => <li key={c} className={`reveal d${Math.min(i + 1, 5)}`}>{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" ref={r3}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow reveal">At university</span>
            <h2 className="sec-title reveal d1">Sponsorship and <em>finance.</em></h2>
          </div>
          <div className="ab-extra">
            {uni.map((x, i) => <UniCard key={x.org} x={x} i={i} />)}
          </div>
        </div>
      </section>

      <section className="section band ab-logos">
        <div className="container"><span className="eyebrow">Organisations</span></div>
        <div className="ab-logo-row"><LogoMarquee items={companies} speed={30} /></div>
      </section>
    </main>
  )
}
