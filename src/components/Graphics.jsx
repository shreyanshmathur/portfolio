import { useEffect, useState } from 'react'
import { roles, education, truefan } from '../data/content'
import { useInView, useScrollProgress, seg, lerp } from '../hooks/motion'
import { useTween } from '../hooks/useTween'
import './Graphics.css'

/* ── Parallax wrapper: drifts its children as the page scrolls ─ */
export function Parallax({ speed = 80, className = '', children, style, ...rest }) {
  const [ref, p] = useScrollProgress('pass')
  return (
    <div ref={ref} className={className} {...rest} style={{ ...style, transform: `translate3d(0, ${((0.5 - p) * speed).toFixed(1)}px, 0)` }}>
      {children}
    </div>
  )
}

/* ── Decorative orbit graphic (scroll-rotated) ─────────────── */
export function Orbit({ className = '' }) {
  const [ref, p] = useScrollProgress('pass')
  const rot = (p * 90).toFixed(1)
  return (
    <div ref={ref} className={`orbit ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 400">
        <g style={{ transform: `rotate(${rot}deg)`, transformOrigin: '200px 200px' }}>
          <circle cx="200" cy="200" r="190" className="o1" />
          <circle cx="200" cy="200" r="140" className="o2" />
          <circle cx="200" cy="200" r="90" className="o1" />
          <circle cx="200" cy="10" r="5" className="dot a" />
          <circle cx="340" cy="200" r="4" className="dot b" />
          <circle cx="200" cy="290" r="3.5" className="dot a" />
          <circle cx="62" cy="280" r="3" className="dot c" />
        </g>
      </svg>
    </div>
  )
}

/* ── Career timeline: bars grow in sequence when in view ───── */
const T0 = 2020.5
const T1 = 2027
const pct = (t) => ((t - T0) / (T1 - T0)) * 100

export function CareerTimeline() {
  const [ref, go] = useInView(0.25)
  const years = [2021, 2022, 2023, 2024, 2025, 2026]
  const all = [
    ...[...roles].reverse(),
    { id: 'vit', org: 'VIT', role: 'B.Tech, CSE', period: education.period, start: education.start, end: education.end, track: 'Education' },
  ]
  return (
    <div ref={ref} className={`tl${go ? ' go' : ''}`} role="img" aria-label="Career timeline from 2020 to 2026">
      <div className="tl-axis" aria-hidden="true">
        {years.map((y) => <span key={y} className="tl-year" style={{ left: `${pct(y)}%` }}>{y}</span>)}
      </div>
      <div className="tl-rows">
        <div className="tl-grid" aria-hidden="true">
          {years.map((y) => <span key={y} style={{ left: `${pct(y)}%` }} />)}
        </div>
        {all.map((r, i) => {
          const left = pct(r.start)
          const width = Math.max(pct(r.end) - left, 1.6)
          return (
            <div key={r.id} className={`tl-row track-${r.track.toLowerCase()}`} style={{ '--i': i }}>
              <div className="tl-label"><strong>{r.org}</strong> <span>{r.role}</span></div>
              <div className="tl-lane">
                <span className="tl-bar" style={{ left: `${left}%`, width: `${width}%` }} title={`${r.org}, ${r.role}: ${r.period}`}>
                  <em>{r.period}</em>
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="tl-legend">
        <span className="k consulting">Consulting</span>
        <span className="k delivery">Delivery</span>
        <span className="k venture">Venture &amp; marketing</span>
        <span className="k education">Education</span>
      </div>
    </div>
  )
}

/* ── Account growth: values grow from start to end with p ──── */
const fmtL = (v, final) => {
  if (v >= 100) {
    const cr = v / 100
    return `₹${final ? String(+cr.toFixed(2)) : cr.toFixed(2)}Cr`
  }
  return `₹${Math.round(v)}L`
}

export function AccountGrowth({ p = 1, dark = false }) {
  const rows = truefan.accountGrowth
  const max = Math.max(...rows.map((a) => a.toL))
  return (
    <figure className={`ag${dark ? ' ag-dark' : ''}`}>
      <div className="ag-rows" aria-hidden="true">
        {rows.map((a, i) => {
          const rp = seg(p, i * 0.14, i * 0.14 + 0.58)
          const v = lerp(a.fromL, a.toL, rp)
          const done = rp >= 1
          return (
            <div key={a.client} className={`ag-row${done ? ' done' : ''}`}>
              <div className="ag-head">
                <span className="ag-client">{a.client}</span>
                <span className="ag-mult">{done ? a.mult : `${lerp(1, parseFloat(a.mult), rp).toFixed(1)}x`}</span>
              </div>
              <div className="ag-track">
                <span className="ag-bar before" style={{ width: `${(a.fromL / max) * 100}%` }} />
                <span className="ag-bar after" style={{ width: `${(v / max) * 100}%` }} />
              </div>
              <div className="ag-vals">
                <span>{a.from}</span>
                <span className="arrow">→</span>
                <span className="strong">{done ? a.to : fmtL(v)}</span>
              </div>
            </div>
          )
        })}
      </div>
      <table className="sr-only">
        <caption>Account growth at TrueFan AI</caption>
        <thead><tr><th>Client</th><th>From</th><th>To</th><th>Growth</th></tr></thead>
        <tbody>{rows.map((a) => <tr key={a.client}><td>{a.client}</td><td>{a.from}</td><td>{a.to}</td><td>{a.mult}</td></tr>)}</tbody>
      </table>
      <figcaption className="ag-key" aria-hidden="true">
        <span className="k before">Starting account value</span>
        <span className="k after">Account value after growth</span>
      </figcaption>
    </figure>
  )
}

/* Account growth that plays once when scrolled into view. */
export function AccountGrowthOnView(props) {
  const [ref, go] = useInView(0.35)
  const p = useTween(go, 2200)
  return <div ref={ref}><AccountGrowth p={p} {...props} /></div>
}

/* ── Bajaj Finance real-time engine: lights up step by step ─ */
export function BajajFlow({ p = 1 }) {
  const s1 = p > 0.05, s2 = p > 0.45, s3 = p > 0.85
  const l1 = seg(p, 0.15, 0.45), l2 = seg(p, 0.55, 0.85)
  return (
    <div className="bf" aria-label="How the Bajaj Finance engine works">
      <div className={`bf-node${s1 ? ' on' : ''}`}>
        <span className="bf-step">01 · Trigger</span>
        <div className="bf-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48"><rect x="8" y="6" width="32" height="36" rx="2" /><path d="M14 16h20M14 23h20M14 30h12" /><circle cx="37" cy="37" r="7" className="fill" /><path d="M34 37l2 2 4-4" className="tick" /></svg>
        </div>
        <h4>A new FAQ page goes live</h4>
        <p>on Bajaj Finance&rsquo;s website.</p>
      </div>
      <div className="bf-link" aria-hidden="true"><span style={{ transform: `scaleX(${l1})` }} /><i style={{ transform: `scaleY(${l1})` }} /></div>
      <div className={`bf-node core${s2 ? ' on' : ''}`}>
        <span className="bf-step">02 · Engine</span>
        <div className="bf-icon spin" aria-hidden="true">
          <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="15" /><circle cx="24" cy="24" r="6" className="fill" /><path d="M24 3v6M24 39v6M3 24h6M39 24h6M9 9l4 4M35 35l4 4M39 9l-4 4M13 35l-4 4" /></svg>
        </div>
        <h4>Real-time engine</h4>
        <p>Built with TrueFan&rsquo;s tech team. Produces the video automatically, in real time.</p>
      </div>
      <div className="bf-link" aria-hidden="true"><span style={{ transform: `scaleX(${l2})` }} /><i style={{ transform: `scaleY(${l2})` }} /></div>
      <div className={`bf-node${s3 ? ' on' : ''}`}>
        <span className="bf-step">03 · Output</span>
        <div className="bf-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48"><rect x="5" y="10" width="38" height="26" rx="2" /><path d="M21 18v10l8-5z" className="fill" /><path d="M5 41h38" /><rect x="5" y="40" width="38" height="2" className="fill prog" /></svg>
        </div>
        <h4>A 40-second explainer video</h4>
        <p>with a proper storyline, for that page.</p>
      </div>
    </div>
  )
}

/* Bajaj flow that plays once in view. */
export function BajajFlowOnView() {
  const [ref, go] = useInView(0.4)
  const p = useTween(go, 2600, 150)
  return <div ref={ref}><BajajFlow p={p} /></div>
}

/* ── Delivery model: founders ↔ delivery lead ↔ clients ────── */
export function DeliveryModel() {
  const [ref, go] = useInView(0.3)
  return (
    <div ref={ref} className={`dm${go ? ' go' : ''}`}>
      <div className="dm-col" style={{ '--i': 0 }}>
        <span className="dm-k">Founders</span>
        <p>TrueFan AI&rsquo;s founding team</p>
      </div>
      <div className="dm-arrow" aria-hidden="true" style={{ '--i': 1 }}><span>⇄</span></div>
      <div className="dm-col me" style={{ '--i': 2 }}>
        <span className="dm-k">Delivery lead</span>
        <p>First point of contact between the two. Led a 60-member team across 11 accounts.</p>
      </div>
      <div className="dm-arrow" aria-hidden="true" style={{ '--i': 3 }}><span>⇄</span></div>
      <div className="dm-col" style={{ '--i': 4 }}>
        <span className="dm-k">Enterprise clients</span>
        <p>11 enterprise accounts at once, with no missed deadlines</p>
      </div>
    </div>
  )
}

/* ── Sector coverage ───────────────────────────────────────── */
export function SectorGrid() {
  const [ref, go] = useInView(0.25)
  return (
    <div ref={ref} className={`sg${go ? ' go' : ''}`}>
      {truefan.sectors.map((s, i) => (
        <div key={s} className="sg-cell" style={{ '--i': i }}>
          <span className="sg-i">{String(i + 1).padStart(2, '0')}</span>
          <span className="sg-name">{s}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Content-at-scale flow ─────────────────────────────────── */
export function ContentFlow() {
  const [ref, go] = useInView(0.35)
  return (
    <div ref={ref} className={`cas-flow${go ? ' go' : ''}`} aria-label="How the service line works">
      <div className="cas-step" style={{ '--i': 0 }}><span className="k">In</span><span>Client content needs</span></div>
      <span className="cas-arrow" aria-hidden="true" style={{ '--i': 1 }} />
      <div className="cas-step mid" style={{ '--i': 2 }}>
        <span className="k">Engine</span><span>AI pipelines</span>
        <span className="cas-stack" aria-hidden="true"><i /><i /><i /></span>
      </div>
      <span className="cas-arrow" aria-hidden="true" style={{ '--i': 3 }} />
      <div className="cas-step" style={{ '--i': 4 }}><span className="k">Out</span><span>Content delivered at volume</span></div>
    </div>
  )
}

/* ── Client wall ───────────────────────────────────────────── */
export function ClientWall() {
  const [ref, go] = useInView(0.2)
  const names = ['Bajaj Finance', ...truefan.accountGrowth.map((a) => a.client), ...truefan.otherClients]
  return (
    <ul ref={ref} className={`cw${go ? ' go' : ''}`}>
      {names.map((n, i) => <li key={n} style={{ '--i': i }}>{n}</li>)}
    </ul>
  )
}

/* ── Logo carousel ─────────────────────────────────────────── */
function LogoTile({ l }) {
  if (l.text) return <span className="lg-tile lg-text">{l.name}</span>
  return (
    <span className={`lg-tile${l.square ? ' sq' : ''}`} title={l.name}>
      <img src={l.src} alt={l.name} loading="lazy" />
      {l.label && <span className="lg-name">{l.name}</span>}
    </span>
  )
}

export function LogoMarquee({ items, reverse = false, speed = 40 }) {
  const loop = [...items, ...items, ...items]
  return (
    <div className={`lg-marquee${reverse ? ' rev' : ''}`} style={{ '--dur': `${speed}s` }}>
      <div className="lg-track">
        {loop.map((l, i) => <LogoTile key={i} l={l} />)}
      </div>
    </div>
  )
}

export function LogoGrid({ items }) {
  const [ref, go] = useInView(0.2)
  return (
    <div ref={ref} className={`lg-grid${go ? ' go' : ''}`}>
      {items.map((l, i) => <div key={l.name} className="lg-cell" style={{ '--i': i }}><LogoTile l={l} /></div>)}
    </div>
  )
}

/* ── Chapter rail: sticky side index of the storyline ──────── */
export function ChapterRail({ items }) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const els = items.map((c) => document.getElementById(c.id)).filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])
  return (
    <nav className={`ch-rail${active ? ' show' : ''}`} aria-label="Chapters">
      {items.map((c) => (
        <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'on' : ''}
          onClick={(e) => { e.preventDefault(); const el = document.getElementById(c.id); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }}>
          <span className="t">{c.short}</span>
        </a>
      ))}
    </nav>
  )
}
