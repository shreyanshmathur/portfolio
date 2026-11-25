import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useInView, useScrollProgress, CountUp, seg } from '../hooks/motion'
import { useMedia } from '../hooks/useMedia'
import { profile, truefan, chapters, companies, clientLogos } from '../data/content'
import {
  CareerTimeline, AccountGrowth, AccountGrowthOnView, BajajFlow, Orbit, Parallax,
  LogoMarquee, ChapterRail,
} from '../components/Graphics'
import './Home.css'

const ch = Object.fromEntries(chapters.map((c) => [c.id, c]))

const ch1Stats = [
  { to: 12, label: 'member marketing team led' },
  { to: 8000, suffix: '+', label: 'subscribers added in six months', comma: true },
  { to: 50, suffix: '%', label: 'lift in engagement' },
  { to: 20, suffix: '%', label: 'increase in brand awareness' },
]
const ch2Stats = [
  { to: 8, label: 'person team, as Co-Founder & CEO' },
  { to: 200, suffix: '+', label: 'growth campaigns launched' },
  { to: 35, prefix: '~', suffix: '%', label: 'less pick travel from an ML-based SKU placement algorithm' },
]
const ch4Stats = [
  { to: 12, prefix: '₹', suffix: ' Cr', unit: 'a year', label: 'Bajaj Finance contract', sub: 'Largest deal in company history' },
  { to: 60, unit: 'people', label: 'Delivery team led', sub: '11 enterprise accounts at once' },
  { to: 10, suffix: 'x', label: 'Flipkart account growth', sub: '₹20L to ₹2Cr' },
  { to: 10, prefix: '~', suffix: '%', label: 'Lift in company profits', sub: 'From the content-at-scale service line' },
]
const pwcAssoc = [
  { from: 27, to: 108, label: 'FTEs', text: 'Authored the five-year India Tech Hub strategy and activation plan, across France, Spain, Poland and India.' },
  { to: 35, suffix: '+', label: 'key roles hired', text: 'GCC operating model and transition plan for a global FMCG client, enabling 20% faster market entry.' },
  { to: 25, suffix: '%', label: 'faster incident dispatch', text: 'Hub-and-spoke IT operating model for a national cement leader across 15+ states.' },
]
const pwcIntern = [
  { to: 10, suffix: '%', label: 'less processing time', text: 'SAP FICO/MM optimisation with a paint manufacturer’s C-suite.' },
  { to: 500, suffix: '+', label: 'users supported', text: 'Training programmes and executive dashboards.' },
  { to: 20, suffix: '%', label: 'shorter reporting cycle', text: 'Lean Six Sigma mapping plus VBA and Python automation.' },
]

function ChapterHead({ c, dark = false }) {
  const r = useReveal()
  return (
    <div className={`chap-head${dark ? ' on-dark' : ''}`} ref={r}>
      <Parallax speed={140} className="chap-bignum" aria-hidden="true"><span>{c.n}</span></Parallax>
      <div className="chap-meta reveal">
        <span className="chap-k">{c.short}</span>
        <span className="chap-years">{c.years}</span>
      </div>
      <h2 className="chap-title reveal d1">{c.title}</h2>
      <p className="chap-bridge reveal d2">{c.bridge}</p>
    </div>
  )
}

function StatCards({ items, cols = 4 }) {
  const [ref, go] = useInView(0.3)
  return (
    <div ref={ref} className={`chap-stats cols-${cols}`}>
      {items.map((s, i) => (
        <div key={s.label} className={`chap-stat${go ? ' go' : ''}`} style={{ '--i': i }}>
          <div className="cs-num">
            <CountUp to={s.to} start={go} prefix={s.prefix} suffix={s.suffix} comma={s.comma} duration={1500 + i * 120} />
          </div>
          <div className="cs-label">{s.label}</div>
          <span className="cs-bar" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}
function MetricCards({ items }) {
  const [ref, go] = useInView(0.3)
  return (
    <div ref={ref} className="pwc-cards">
      {items.map((h, i) => (
        <article key={h.label} className={`pwc-card${go ? ' go' : ''}`} style={{ '--i': i }}>
          <div className="pc-num">
            {h.from != null
              ? <>{h.from} <span className="pc-arrow">→</span> <CountUp from={h.from} to={h.to} start={go} duration={1800} /></>
              : <CountUp to={h.to} start={go} suffix={h.suffix} duration={1500} />}
          </div>
          <div className="pc-label">{h.label}</div>
          <p>{h.text}</p>
          <span className="pc-bar" aria-hidden="true" />
        </article>
      ))}
    </div>
  )
}

function ExecSummary() {
  const r = useReveal()
  const jumpTo = (id) => (e) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' })
  }
  const order = [...chapters].reverse()
  return (
    <section id="summary" className="section exec" ref={r}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">At a glance</span>
          <h2 className="sec-title reveal d1">Strategy consulting and enterprise delivery, <em>backed by an operator&rsquo;s start.</em></h2>
        </div>
        <ol className="exec-list">
          {order.map((c, i) => (
            <li key={c.id} className={`reveal d${i + 1}`}>
              <a href={`#${c.id}`} onClick={jumpTo(c.id)}>
                <span className="ex-n" aria-hidden="true" />
                <span className="ex-k">{c.short}<em>{c.years}</em></span>
                <span className="ex-t">{c.summary}</span>
                <span className="ex-go" aria-hidden="true">↓</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function Home() {
  const rCta = useReveal()
  const rLogos = useReveal()
  const rRecap = useReveal()
  const [statsRef, statsGo] = useInView(0.4)
  const [growRef, growP] = useScrollProgress('pin')
  const [bajajRef, bajajPass] = useScrollProgress('pass')
  const wide = useMedia('(min-width: 961px)')
  const bajajP = seg(bajajPass, 0.18, 0.5)
  const active = Math.min(2, Math.floor(seg(growP, 0.05, 0.95) * 3))

  const toOverview = (e) => {
    e.preventDefault()
    const el = document.getElementById('summary')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' })
  }

  return (
    <main className="page-wrap home">
      <ChapterRail items={[{ id: 'summary', short: 'Overview' }, ...chapters, { id: 'along', short: 'Clients' }, { id: 'next', short: 'Contact' }]} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <Parallax speed={-160} className="hero-orbit"><Orbit /></Parallax>
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="eyebrow load d1">Strategy · Delivery · {profile.location}</span>
            <h1 className="hero-headline">
              <span className="line"><span className="load d2">Shreyansh</span></span>
              <span className="line"><em className="load d3">Mathur</em></span>
            </h1>
            <p className="hero-lede load d4">
              Strategy and delivery. I turn complex client briefs into execution
              plans, and then see them through.
            </p>
            <p className="hero-blurb load d5">{profile.summary}</p>
            <div className="hero-actions load d6">
              <a href="#ch1" onClick={toOverview} className="btn-primary">At a glance <span className="arr down">↓</span></a>
              <Link to="/contact" className="btn-ghost">Get in touch</Link>
            </div>
          </div>

          <Parallax speed={60} className="hero-portrait load-img">
            <div className="hp-frame">
              <img src="/shreyansh.jpg" alt="Shreyansh Mathur" width="800" height="800" />
            </div>
          </Parallax>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span /></div>
      </section>


      {/* ── OVERVIEW ─────────────────────────────── */}
      <ExecSummary />

      {/* ── LEADERSHIP ───────────────────────────── */}
      <section id="ch1" className="section chap">
        <div className="container">
          <ChapterHead c={ch.ch1} />
          <div className="chap-org"><img src="/logos/recover-media.png" alt="" /><span>Recover Media · Marketing Team Lead</span></div>
          <StatCards items={ch1Stats} />
        </div>
      </section>

      {/* ── VENTURE ───────────────────────────── */}
      <section id="ch2" className="section chap band">
        <div className="container">
          <ChapterHead c={ch.ch2} />
          <div className="chap-org"><span className="org-word">BelleVidCo</span><span>Co-Founder &amp; CEO · Feb 2023 – Dec 2024</span></div>
          <StatCards items={ch2Stats} cols={3} />
          <p className="chap-note reveal up">
            Built operational systems for clients across logistics, fashion and PE advisory,
            including a live-data AI pricing engine for a fashion retailer.
          </p>
        </div>
      </section>

      {/* ── CONSULTING ───────────────────────────── */}
      <section id="ch3" className="section chap">
        <div className="container">
          <ChapterHead c={ch.ch3} />
          <div className="chap-org"><img src="/logos/brands/pwc.png" alt="" className="wide" /><span>Advisory Intern · Jan – Aug 2025</span></div>
          <MetricCards items={pwcIntern} />
          <div className="chap-org mt"><img src="/logos/brands/pwc.png" alt="" className="wide" /><span>Strategy Associate · Aug 2025 – May 2026</span></div>
          <MetricCards items={pwcAssoc} />
        </div>
      </section>

      {/* ── DELIVERY ───────────────────────────── */}
      <section id="ch4" className="chap chap-dark">
        <div className="container">
          <ChapterHead c={ch.ch4} dark />
          <div className="chap-org on-dark"><span className="tf-word">TrueFan AI</span><span>Project Delivery Manager · May – Nov 2026</span></div>
        </div>
        <div className="stats" ref={statsRef}>
          <div className="container stats-row">
            {ch4Stats.map((s, i) => (
              <div key={s.label} className={`stat${statsGo ? ' go' : ''}`} style={{ '--i': i }}>
                <div className="stat-num">
                  <CountUp to={s.to} start={statsGo} prefix={s.prefix} suffix={s.suffix} duration={1600 + i * 150} />
                  {s.unit && <small>{s.unit}</small>}
                </div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ch.04 · account growth (pinned, scroll-scrubbed) */}
      {wide ? (
        <section className="growth-pin" ref={growRef}>
          <div className="growth-sticky">
            <div className="container growth-grid">
              <div>
                <span className="eyebrow">TrueFan AI · Account growth</span>
                <h2 className="sec-title">Three key accounts grew <em>3.5x to 10x.</em></h2>
                <p className="sec-copy">
                  Account value growth across three of the 11 enterprise accounts I ran
                  with a 60-member delivery team.
                </p>
                <ol className="growth-steps">
                  {truefan.accountGrowth.map((a, i) => (
                    <li key={a.client} className={i <= active ? 'on' : ''}>
                      <span className="n">0{i + 1}</span>{a.client}<span className="m">{a.mult}</span>
                    </li>
                  ))}
                </ol>
                <div className="growth-progress"><span style={{ transform: `scaleX(${growP})` }} /></div>
              </div>
              <div className="growth-chart"><AccountGrowth p={seg(growP, 0.05, 0.9)} /></div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section">
          <div className="container growth-grid">
            <div>
              <span className="eyebrow">TrueFan AI · Account growth</span>
              <h2 className="sec-title">Three key accounts grew <em>3.5x to 10x.</em></h2>
              <p className="sec-copy">Account value growth across three of the 11 enterprise accounts I ran with a 60-member delivery team.</p>
            </div>
            <div className="growth-chart"><AccountGrowthOnView /></div>
          </div>
        </section>
      )}

      {/* Ch.04 · Bajaj (scroll-scrubbed flow) */}
      <section className="feature-dark" ref={bajajRef}>
        <Parallax speed={220} className="fd-orbit"><Orbit className="on-dark" /></Parallax>
        <div className="container">
          <div className="fd-head">
            <div>
              <span className="eyebrow on-dark">TrueFan AI · The largest deal in company history</span>
              <h2 className="sec-title on-dark">Bajaj Finance. <em>₹12 Cr a year.</em></h2>
            </div>
            <p className="fd-intro">
              TrueFan AI makes personalised AI video for enterprises. With the tech team,
              I helped build and close a contract for a real-time engine that turns each
              new FAQ page on Bajaj Finance&rsquo;s website into a finished explainer video.
            </p>
          </div>
          <BajajFlow p={bajajP} />
          <div className="fd-foot">
            <Link to="/experience" className="btn-light">Full TrueFan AI detail <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ── CLIENTS & ORGANISATIONS: logos ───────── */}
      <section id="along" className="section logos-sec" ref={rLogos}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow reveal">Clients and organisations</span>
            <h2 className="sec-title reveal d1">Organisations I have worked for, and <em>clients I have served.</em></h2>
          </div>
        </div>
        <div className="logo-rows">
          <span className="logo-row-k container">Companies</span>
          <LogoMarquee items={companies} speed={34} />
          <span className="logo-row-k container">Clients</span>
          <LogoMarquee items={clientLogos} reverse speed={48} />
        </div>
      </section>

      {/* ── SUMMARY TIMELINE ─────────────────────── */}
      <section className="section band" ref={rRecap}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow reveal">Career at a glance</span>
            <h2 className="sec-title reveal d1">Six years across marketing, a venture, <em>consulting and delivery.</em></h2>
          </div>
          <CareerTimeline />
          <div className="tl-foot"><Link to="/experience" className="more-link">Every role in detail <span>→</span></Link></div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────── */}
      <section id="next" className="home-cta" ref={rCta}>
        <Parallax speed={140} className="cta-orbit"><Orbit className="on-dark" /></Parallax>
        <div className="container hc-inner">
          <div>
            <span className="eyebrow on-dark reveal">Contact</span>
            <h2 className="hc-headline reveal d1">Let&rsquo;s <em>talk.</em></h2>
          </div>
          <div className="hc-actions reveal d2">
            <a href={`mailto:${profile.email}`} className="btn-light">Email me</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-outline-light">LinkedIn ↗</a>
          </div>
        </div>
      </section>
    </main>
  )
}
