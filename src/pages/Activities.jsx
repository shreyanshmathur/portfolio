import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Activities.css'

const logos = {
  'graVITas':        '/logos/gravitas.png',
  'Riviera, VIT':    '/logos/riviera.png',
  'Dream Merchants': '/logos/dream-merchants.png',
  'Anthropic':       '/logos/anthropic.png',
  'Google':          '/logos/google.png',
  'Emory University':'/logos/emory.png',
  'Forage':          '/logos/forage.png',
  'Forage · BCG':    '/logos/forage.png',
  'Forage · JPMorgan':'/logos/forage.png',
  'Yale University': '/logos/yale.png',
  '365 Careers':     '/logos/365-careers.png',
  'Coursera':        '/logos/coursera.png',
}

const activities = [
  {
    index: 'L1',
    org: 'graVITas',
    role: 'Head of Corporate Relations',
    period: 'Aug – Sep 2024',
    metric: { num: '₹75L+', label: 'secured · 40% YoY' },
    bullets: [
      "Led a 35-person corporate relations team for India's largest student-run tech fest.",
      'Secured Altium, Autodesk, Nestlé, and EaseMyTrip as headline sponsors.',
      '100% sponsor satisfaction; 80% expressed interest in returning partnerships.',
    ],
    context: "graVITas is VIT Vellore's annual national-level technical festival — one of India's largest student-run tech fests, with 100K+ participants from across the country. As Head of Corporate Relations, I led the full sponsorship function end-to-end: prospecting, pitching, closing, and post-event reporting.",
    highlights: [
      {
        title: 'Sponsorship Strategy & Outreach',
        description: 'Built a tiered outreach system segmenting potential sponsors by brand fit, category, and budget. Created standardised pitch decks and benefit packages across Platinum, Gold, and Silver tiers. Led the 35-person team through structured weekly pipelines with clear per-member targets.',
        outcome: '₹75L+ secured — a 40% increase from the previous edition. 100% sponsor satisfaction score across all partners.',
      },
      {
        title: 'Headline Partner Acquisition',
        description: "Personally led negotiations with Altium, Autodesk, Nestlé, and EaseMyTrip. Managed all sponsor communication, contract alignment, and on-ground activation logistics across the festival's full three-day run.",
        outcome: '4 headline sponsors confirmed. Zero delivery failures on sponsor activations during the event.',
      },
      {
        title: 'Post-Event Impact Reporting',
        description: 'Designed and delivered post-event impact reports for each sponsor, covering media coverage, footfall data, and measurable ROI metrics. Used to anchor partnership renewals and build the case for the following year.',
        outcome: '80% of sponsors expressed interest in future partnerships — a retention asset handed to the next team.',
      },
    ],
    skills: ['Sponsorship Strategy', 'Stakeholder Management', 'Pitch Decks', 'Team Leadership', 'Negotiation'],
  },
  {
    index: 'L2',
    org: 'Riviera, VIT',
    role: 'Head of Corporate Relations',
    period: 'Jan – Mar 2024',
    metric: { num: '₹1.25Cr+', label: 'deals closed' },
    bullets: [
      "Closed ₹1.25Cr+ in sponsorship for South India's largest cultural festival.",
      'Secured Pepsi as title sponsor and 20+ additional national brand partners.',
      'Redesigned internal coordination processes — 35% reduction in turnaround time.',
    ],
    context: "Riviera is South India's largest cultural festival hosted by VIT Vellore, drawing participation from 500+ colleges across the country. As Head of Corporate Relations, I led national-scale sponsorship acquisition — anchored by Pepsi as title sponsor — and managed a portfolio of 20+ brand partners across the full festival.",
    highlights: [
      {
        title: 'Pepsi Title Sponsorship',
        description: "Led the full pitch and negotiation process with Pepsi's marketing team. Built the case around audience reach, brand activation footprint, and ROI benchmarks from comparable Indian college festivals. Managed all terms, deliverables, and on-ground commitments through to event close.",
        outcome: 'Pepsi secured as headline title sponsor. Highest-value single deal in the sponsorship portfolio.',
      },
      {
        title: '20+ Partner Portfolio',
        description: 'Acquired 20+ additional national and regional sponsors across category tiers: Safe Express as logistics partner, alongside brands in FMCG, media, and lifestyle. Structured non-competing category exclusivity to maximise value per sponsor across 250+ events.',
        outcome: '90% sponsor retention rate — one of the strongest retention figures in recent festival editions.',
      },
      {
        title: 'Process Redesign',
        description: 'Identified bottlenecks in sponsor coordination and internal communication. Implemented structured follow-up workflows and standardised briefing documents, removing back-and-forth delays across a 3-day, 250+ event festival with a large cross-functional organising team.',
        outcome: '35% reduction in internal coordination turnaround time across the full event planning cycle.',
      },
    ],
    skills: ['Enterprise Sponsorship', 'Negotiation', 'Process Design', 'Brand Partnerships', 'Event Operations'],
  },
  {
    index: 'L3',
    org: 'Dream Merchants',
    role: 'Core Team — Financial Mentor',
    period: 'Mar 2022 – Jan 2025',
    metric: { num: '100+', label: 'students mentored' },
    bullets: [
      'Mentored 100+ student entrepreneurs on financial planning and fundraising strategy.',
      'Delivered 25+ workshops and events reaching 500+ participants across VIT.',
      'Built 15+ industry partnerships from scratch; grew club funding by 40%.',
    ],
    context: "Dream Merchants is VIT's premier entrepreneurship club, dedicated to building a culture of innovation and practical business thinking on campus. Over three years on the core team, I led the financial mentorship programme and played a central role in scaling the club's reach, partnerships, and resource base.",
    highlights: [
      {
        title: 'Financial Mentorship Programme',
        description: 'Designed and ran a structured mentorship programme for student ventures covering financial modelling basics, budgeting, unit economics, valuation exercises, and pitch preparation. Each cohort ran 6–8 weeks with weekly one-on-one and group sessions tailored to each team.',
        outcome: '100+ students mentored across multiple cohorts. Several mentees went on to secure campus funding and external grants.',
      },
      {
        title: 'Workshops & Community Events',
        description: 'Conceived and executed 25+ workshops, speaker sessions, and entrepreneurship events over three years. Topics ranged from ideation and lean validation to cap tables and investor readiness. Events engaged the full student body across departments.',
        outcome: '500+ participants across events. 1,000+ students reached through club outreach and community programming.',
      },
      {
        title: 'Partnerships & Funding Growth',
        description: "Built the club's external partnership base from the ground up — identifying, pitching, and onboarding 15+ industry partners for mentorship access, sponsorship, and event support. In parallel, led fundraising campaigns that materially expanded the club's operating budget.",
        outcome: '15+ industry partnerships established. 40% increase in club funding over the tenure — strongest resource base in the club\'s history.',
      },
    ],
    skills: ['Financial Mentorship', 'Workshop Design', 'Fundraising', 'Community Building', 'Entrepreneurship'],
  },
]

const certGroups = [
  {
    heading: 'University',
    certs: [
      { org: 'Yale University',    title: 'Financial Markets — with Honors',               date: 'Jul 2024', logo: '/logos/yale.png' },
      { org: 'Emory University',   title: 'Introduction to Management Consulting',          date: 'Oct 2025', logo: '/logos/emory.png' },
    ],
  },
  {
    heading: 'Strategy & Consulting',
    certs: [
      { org: 'Forage · BCG',       title: 'Strategy Consulting Job Simulation',             date: 'Jul 2024', logo: '/logos/forage.png' },
      { org: 'Forage · BCG',       title: 'Introduction to Strategy Consulting',            date: 'Jul 2024', logo: '/logos/forage.png' },
      { org: 'Coursera',           title: 'Business Analysis & Process Management',         date: 'Jul 2024', logo: '/logos/coursera.png' },
    ],
  },
  {
    heading: 'Finance & Investment',
    certs: [
      { org: 'Forage · JPMorgan',  title: 'Investment Banking Job Simulation',              date: 'Jul 2024', logo: '/logos/forage.png' },
      { org: 'Forage',             title: 'Fidelity International — Investment Management', date: 'Aug 2024', logo: '/logos/forage.png' },
      { org: '365 Careers',        title: 'Complete Investment Banking Course 2024',        date: 'Jul 2024', logo: '/logos/365-careers.png' },
      { org: '365 Careers',        title: 'Financial Modeling: DCF Valuation Model',       date: 'Jul 2024', logo: '/logos/365-careers.png' },
      { org: 'Coursera',           title: 'Investment Risk Management',                     date: 'Jul 2024', logo: '/logos/coursera.png' },
    ],
  },
  {
    heading: 'AI & Technology',
    certs: [
      { org: 'Anthropic',          title: 'AI Fluency Framework & Foundations',             date: 'Apr 2026', logo: '/logos/anthropic.png' },
      { org: 'Google',             title: 'Generative AI Leader Certification',             date: 'Dec 2025', logo: '/logos/google.png' },
    ],
  },
]

export default function Activities() {
  const [openIdx, setOpenIdx] = useState(null)
  const r1 = useReveal()
  const r2 = useReveal()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpenIdx(null) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = openIdx !== null ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIdx])

  const open = openIdx !== null ? activities[openIdx] : null

  return (
    <>
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">04 / Activities</span>
          </div>
          <h1 className="ph-title">Leadership<br /><em>beyond the desk.</em></h1>
          <p className="ph-kicker">
            Three years building campus institutions — from India's largest tech fest
            to VIT's premier entrepreneurship club. And the certifications that pushed
            the thinking further.
          </p>
        </div>
      </div>

      {/* ── CAMPUS LEADERSHIP ──────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Campus leadership</span>
            </div>
            <h2 className="reveal d2">Where strategy<br /><em>meets the field.</em></h2>
          </div>
          <div className="act-grid">
            {activities.map((a, i) => (
              <button
                key={i}
                className={`act-card reveal d${i + 2}`}
                onClick={() => setOpenIdx(i)}
              >
                <div className="act-card-head">
                  <div className="act-firm-row">
                    {logos[a.org] && (
                      <img className="act-logo" src={logos[a.org]} alt={`${a.org} logo`} />
                    )}
                    <span className="act-org">{a.org}</span>
                  </div>
                  <div className="act-metric">
                    <div className="act-metric-num">{a.metric.num}</div>
                    <span className="act-metric-label">{a.metric.label}</span>
                  </div>
                </div>
                <h4 className="act-role">{a.role}</h4>
                <span className="act-period">{a.period}</span>
                <ul className="act-bullets">
                  {a.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <span className="act-toggle">Details →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────── */}
      <section className="section band" ref={r2}>
        <div className="container">
          <div className="section-head">
            <div className="reveal">
              <span className="eyebrow">Credentials</span>
            </div>
            <h2 className="reveal d2">Certifications<br /><em>by category.</em></h2>
          </div>
          <div className="cert-groups">
            {certGroups.map((group, gi) => (
              <div key={gi} className={`cert-group reveal d${gi + 2}`}>
                <h3 className="cert-group-heading">{group.heading}</h3>
                <div className="cert-group-grid">
                  {group.certs.map((c, ci) => (
                    <div key={ci} className="act-cert-item">
                      <div className="act-cert-head">
                        <div className="act-cert-org-row">
                          {c.logo && <img className="act-cert-logo" src={c.logo} alt={c.org} />}
                          <span className="act-cert-org">{c.org}</span>
                        </div>
                        <span className="act-cert-date">{c.date}</span>
                      </div>
                      <p className="act-cert-title">{c.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>

    {/* ── BACKDROP — outside page-wrap so CSS transform doesn't break position:fixed ── */}
    <div
      className={`act-backdrop${openIdx !== null ? ' open' : ''}`}
      onClick={() => setOpenIdx(null)}
      aria-hidden="true"
    />

    {/* ── SIDE PANEL ─────────────────────────── */}
    <aside
      className={`act-panel${openIdx !== null ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Activity detail"
    >
      {open && (
        <div className="act-panel-inner">
          <div className="act-panel-head">
            <div className="act-panel-title-block">
              <div className="act-panel-meta-row">
                <span>Leadership · {open.index}</span>
              </div>
              <h2 className="act-panel-role">{open.role}</h2>
              <div className="act-panel-org-row">
                {logos[open.org] && (
                  <img className="act-panel-logo" src={logos[open.org]} alt={`${open.org} logo`} />
                )}
                <span className="act-panel-org-name">{open.org}</span>
                <span className="act-panel-period">{open.period}</span>
              </div>
            </div>
            <button
              className="act-panel-close"
              onClick={() => setOpenIdx(null)}
              aria-label="Close panel"
            >
              ← Close
            </button>
          </div>

          <p className="act-panel-context">{open.context}</p>

          <div>
            <div className="act-panel-section-label">Highlights</div>
            <div className="act-panel-highlights">
              {open.highlights.map((h, j) => (
                <article key={j} className="act-panel-highlight">
                  <span className="act-panel-hl-num">0{j + 1}</span>
                  <div className="act-panel-hl-body">
                    <h4 className="act-panel-hl-title">{h.title}</h4>
                    <p className="act-panel-hl-desc">{h.description}</p>
                    <div className="act-panel-hl-outcome">
                      <span className="act-panel-hl-outcome-label">Outcome</span>
                      <span className="act-panel-hl-outcome-text">{h.outcome}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="act-panel-skills">
            <span className="act-skills-label">Skills</span>
            {open.skills.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      )}
    </aside>
    </>
  )
}
