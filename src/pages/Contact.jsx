import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const channels = [
  {
    label: 'Email',
    value: 'shreyanshmathur12@gmail.com',
    href: 'mailto:shreyanshmathur12@gmail.com',
    icon: '✉',
    color: '#C9943A',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreyanshmathur',
    href: 'https://www.linkedin.com/in/shreyanshmathur',
    icon: 'in',
    color: '#4A90E2',
  },
  {
    label: 'GitHub',
    value: 'github.com/shreyanshmathur',
    href: 'https://github.com/shreyanshmathur',
    icon: '⌥',
    color: '#06B6D4',
  },
  {
    label: 'Location',
    value: 'Mumbai, India',
    href: null,
    icon: '◎',
    color: '#E8B95F',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const headerRef = useReveal()
  const bodyRef   = useReveal()

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:shreyanshmathur12@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <main className="page-wrap">

      {/* ── PAGE HEADER ───────────────────────────── */}
      <section className="ct-hero">
        <div className="ct-hero-bg">
          <div className="ct-orb1" />
          <div className="ct-orb2" />
        </div>
        <div className="ct-hero-wm" aria-hidden="true">TALK</div>
        <div className="container" ref={headerRef}>
          <div className="reveal"><span className="eyebrow">05 / Contact</span></div>
          <h1 className="ct-h1 reveal d2">
            Let's build<br />
            <span className="shimmer">something remarkable.</span>
          </h1>
          <p className="ct-sub reveal d3">
            Whether you have a role, a project, or just want to talk strategy —<br />
            I read every message.
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────── */}
      <section className="ct-body section" ref={bodyRef}>
        <div className="container">
          <div className="ctb-grid">

            {/* Contact channels */}
            <div className="ctb-left">
              <div className="reveal">
                <span className="eyebrow">Reach out</span>
                <h2 className="ctbl-heading">Direct<br />Channels</h2>
              </div>

              <div className="ctb-channels">
                {channels.map((ch, i) => (
                  <div key={i} className={`ctc-item reveal d${i + 1}`} style={{ '--ch-color': ch.color }}>
                    <span className="ctc-icon">{ch.icon}</span>
                    <div className="ctc-text">
                      <span className="ctc-label">{ch.label}</span>
                      {ch.href ? (
                        <a href={ch.href} target="_blank" rel="noreferrer" className="ctc-val">
                          {ch.value}
                        </a>
                      ) : (
                        <span className="ctc-val">{ch.value}</span>
                      )}
                    </div>
                    {ch.href && <span className="ctc-arrow">↗</span>}
                  </div>
                ))}
              </div>

              <div className="ctb-note reveal d5">
                <span className="eyebrow" style={{ marginBottom: 12 }}>Currently</span>
                <p>Strategy Associate at PwC, Mumbai. Open to consulting roles — strategy, operations, and AI transformation — at top-tier firms globally. Also available for select advisory engagements.</p>
              </div>
            </div>

            {/* Form */}
            <div className="ctb-right reveal-r d2">
              {sent ? (
                <div className="ct-sent">
                  <span className="ct-sent-icon">◈</span>
                  <h3>Message prepared.</h3>
                  <p>Your email client should have opened with the message. Send it through to connect.</p>
                  <button className="btn-ghost" onClick={() => setSent(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="ct-form" onSubmit={handleSubmit}>
                  <div className="ctf-row">
                    <div className="ctf-field">
                      <label htmlFor="name" className="ctf-label">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Firstname Lastname"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="ctf-input"
                      />
                    </div>
                    <div className="ctf-field">
                      <label htmlFor="email" className="ctf-label">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="ctf-input"
                      />
                    </div>
                  </div>

                  <div className="ctf-field">
                    <label htmlFor="subject" className="ctf-label">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      className="ctf-input"
                    />
                  </div>

                  <div className="ctf-field">
                    <label htmlFor="message" className="ctf-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about the opportunity, project, or idea..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="ctf-input ctf-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary ctf-submit">
                    Send Message ↗
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT TICKER ─────────────────────── */}
      <div className="ct-ticker-wrap">
        <div className="ct-ticker-inner">
          {[
            'GCC STRATEGY', 'AI TRANSFORMATION', 'OPERATING MODEL DESIGN',
            'C-SUITE ADVISORY', 'ENTERPRISE RESTRUCTURING', 'CAPABILITY MAPPING',
            'CHANGE MANAGEMENT', 'AGILE DELIVERY', 'KPI DESIGN',
            'GCC STRATEGY', 'AI TRANSFORMATION', 'OPERATING MODEL DESIGN',
            'C-SUITE ADVISORY', 'ENTERPRISE RESTRUCTURING', 'CAPABILITY MAPPING',
          ].map((t, i) => (
            <span key={i} className="ct-ticker-item">
              {t} <span className="ct-ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FINAL CTA ─────────────────────────────── */}
      <section className="ct-final">
        <div className="container">
          <div className="ctf2-inner">
            <span className="ctf2-badge">● Available Now</span>
            <div className="ctf2-giant outline-text">HIRE ME</div>
            <p className="ctf2-sub">Mumbai · Open to relocation · Remote-friendly</p>
          </div>
        </div>
      </section>

    </main>
  )
}
