import { useReveal } from '../hooks/useReveal'
import { useInView, useScrollProgress, CountUp } from '../hooks/motion'
import { roles, truefan, chapters, companies, clientLogos } from '../data/content'
import {
  CareerTimeline, AccountGrowthOnView, BajajFlowOnView, DeliveryModel, SectorGrid,
  ContentFlow, Orbit, Parallax, LogoGrid,
} from '../components/Graphics'
import './Home.css'
import './Experience.css'

const snapshot = [
  { to: 60, label: 'member delivery team' },
  { to: 11, label: 'enterprise accounts at once' },
  { to: 8, label: 'sectors' },
  { to: 0, label: 'missed deadlines' },
]

function TrueFanDeepDive() {
  const [snapRef, snapGo] = useInView(0.4)
  const [casRef, casGo] = useInView(0.4)
  const r = useReveal()
  return (
    <div className="tf" ref={r}>
      <p className="tf-what reveal">{truefan.what}</p>

      <div className="tf-snap" ref={snapRef}>
        {snapshot.map((s, i) => (
          <div key={s.label} className={`tf-snap-item${snapGo ? ' go' : ''}`} style={{ '--i': i }}>
            <span className="n"><CountUp to={s.to} start={snapGo} duration={1300 + i * 120} /></span>
            <span className="l">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Bajaj */}
      <div className="tf-block tf-dark">
        <Parallax speed={120} className="tf-orbit"><Orbit className="on-dark" /></Parallax>
        <div className="tf-block-head">
          <span className="tf-tag">The largest deal in company history</span>
          <h3>Bajaj Finance. <em>₹12 Cr a year.</em></h3>
          <p>
            I worked with the tech team to build a real-time engine for Bajaj Finance,
            and helped close the contract. Whenever a new FAQ page goes live on Bajaj
            Finance&rsquo;s website, the engine produces a 40-second explainer video for
            it, with a proper storyline.
          </p>
        </div>
        <BajajFlowOnView />
      </div>

      {/* Delivery */}
      <div className="tf-block">
        <div className="tf-block-head">
          <span className="tf-tag">Running delivery</span>
          <h3>Eleven accounts, <em>one team.</em></h3>
          <p>
            A 60-member delivery team running 11 enterprise accounts at the same time,
            with no missed deadlines. I was the first point of contact between the
            founders and the clients.
          </p>
        </div>
        <DeliveryModel />
        <span className="tf-sublabel">Sectors covered at the same time</span>
        <SectorGrid />
      </div>

      {/* Growth */}
      <div className="tf-block tf-split">
        <div className="tf-block-head">
          <span className="tf-tag">Account growth</span>
          <h3>Three key accounts, <em>3.5x to 10x.</em></h3>
          <ul className="tf-growth-list">
            {truefan.accountGrowth.map((a) => (
              <li key={a.client}><strong>{a.client}</strong><span>{a.from} → {a.to}</span><em>{a.mult}</em></li>
            ))}
          </ul>
        </div>
        <div className="tf-chart"><AccountGrowthOnView /></div>
      </div>

      {/* Content at scale */}
      <div className="tf-block" ref={casRef}>
        <div className="tf-block-head">
          <span className="tf-tag">New service line</span>
          <h3>Content <em>at scale.</em></h3>
          <p>
            I set up a content-at-scale service line that runs AI pipelines to deliver
            client content at volume. It opened a new revenue stream and lifted company
            profits by about 10%.
          </p>
        </div>
        <ContentFlow />
        <div className="cas-results">
          <div className={casGo ? 'go' : ''} style={{ '--i': 0 }}><span className="n">New</span><span className="l">revenue stream for the company</span></div>
          <div className={casGo ? 'go' : ''} style={{ '--i': 1 }}><span className="n"><CountUp to={10} start={casGo} prefix="~" suffix="%" /></span><span className="l">lift in company profits</span></div>
        </div>
      </div>

      {/* Clients */}
      <div className="tf-block">
        <div className="tf-block-head">
          <span className="tf-tag">Clients</span>
          <h3>Clients I <em>served.</em></h3>
        </div>
        <LogoGrid items={clientLogos} />
      </div>
    </div>
  )
}

const ordered = [...roles].reverse()
const areaOf = Object.fromEntries(chapters.flatMap((c) => c.roleIds.map((id) => [id, c])))

export default function Experience() {
  const rOrg = useReveal()
  const r1 = useReveal()
  const [listRef, listP] = useScrollProgress('pass')

  return (
    <main className="page-wrap">
      <div className="page-hero xp-hero">
        <Parallax speed={-120} className="xp-hero-orbit"><Orbit /></Parallax>
        <div className="container">
          <div className="ph-top"><span className="eyebrow load d1">01 / Experience</span></div>
          <h1 className="ph-title"><span className="line"><span className="load d2">Experience</span></span></h1>
          <p className="ph-kicker load d3">
            From leading a marketing team, to co-founding a digital agency, to strategy
            consulting at PwC, to running enterprise delivery at TrueFan AI.
          </p>
          <nav className="xp-jump load d4" aria-label="Roles">
            {ordered.map((r) => (
              <a key={r.id} href={`#${r.id}`} onClick={jump}>{r.org} <span>{r.role}</span></a>
            ))}
          </nav>
        </div>
      </div>

      <section className="section band" ref={r1}>
        <div className="container">
          <span className="eyebrow reveal">2020 – 2026</span>
          <div className="xp-tl"><CareerTimeline /></div>
        </div>
      </section>

      <section className="section xp-section">
        <div className="container xp-wrap" ref={listRef}>
          <div className="xp-rail" aria-hidden="true"><span style={{ transform: `scaleY(${listP})` }} /></div>
          {ordered.map((r) => (
            <RoleBlock key={r.id} role={r} />
          ))}
        </div>
      </section>

      <section className="section band" ref={rOrg}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow reveal">Organisations</span>
            <h2 className="sec-title reveal d1">Where I have <em>worked.</em></h2>
          </div>
          <LogoGrid items={companies} />
        </div>
      </section>
    </main>
  )
}

function RoleBlock({ role: r }) {
  const ref = useReveal()
  const feature = r.id === 'truefan'
  return (
    <article id={r.id} ref={ref} className={`xp-item${feature ? ' is-feature' : ''}`}>
      <div className="xp-side">
        <div className="xp-sticky">
          <span className="xp-dot" />
          <span className="xp-period">{r.period}</span>
          <h2 className="xp-org">{r.org}</h2>
          <div className="xp-role">{r.role}</div>
          <span className={`xp-track track-${r.track.toLowerCase()}`}>{areaOf[r.id]?.short ?? r.track}</span>
        </div>
      </div>
      <div className="xp-body">
        <ul className="xp-points">
          {r.points.map((p, i) => <li key={p} className={`reveal d${Math.min(i + 1, 5)}`}>{p}</li>)}
        </ul>
        {feature && <TrueFanDeepDive />}
      </div>
    </article>
  )
}

// HashRouter owns the URL hash, so in-page anchors scroll manually.
function jump(e) {
  e.preventDefault()
  const id = e.currentTarget.getAttribute('href').slice(1)
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' })
}
