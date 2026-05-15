import { useReveal } from '../hooks/useReveal'
import './Contact.css'

const contacts = [
  { k: 'Email',    v: 'shreyanshmathur12@gmail.com',       href: 'mailto:shreyanshmathur12@gmail.com' },
  { k: 'LinkedIn', v: 'linkedin.com/in/shreyanshmathur',   href: 'https://www.linkedin.com/in/shreyanshmathur' },
  { k: 'GitHub',   v: 'github.com/shreyanshmathur',        href: 'https://github.com/shreyanshmathur' },
  { k: 'Location', v: 'Mumbai, India',                      href: null },
]

export default function Contact() {
  const r1 = useReveal()

  return (
    <main className="page-wrap">

      {/* ── PAGE HERO ──────────────────────────── */}
      <div className="page-hero">
        <div className="container">
          <div className="ph-top">
            <span className="eyebrow">04 / Contact</span>
          </div>
          <h1 className="ph-title">Contact</h1>
        </div>
      </div>

      {/* ── CONTACT BLOCK ──────────────────────── */}
      <section className="section" ref={r1}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-headline reveal">
                Let's build something<br />
                <em>remarkable.</em>
              </h2>
              <p className="contact-blurb reveal d2">
                Open to conversations about consulting, strategy, AI transformation,
                or GCC operating model work. Based in Mumbai, available globally.
              </p>
              <div className="contact-actions reveal d3">
                <a href="mailto:shreyanshmathur12@gmail.com" className="btn-primary">
                  Send an email ↗
                </a>
                <a href="https://www.linkedin.com/in/shreyanshmathur" target="_blank" rel="noreferrer" className="btn-ghost">
                  LinkedIn ↗
                </a>
              </div>
            </div>
            <div className="contact-list reveal d2">
              {contacts.map(c => (
                c.href ? (
                  <a key={c.k} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-row">
                    <span className="k">{c.k}</span>
                    <span className="v">{c.v}</span>
                    <span className="ext">↗</span>
                  </a>
                ) : (
                  <div key={c.k} className="contact-row no-link">
                    <span className="k">{c.k}</span>
                    <span className="v">{c.v}</span>
                    <span className="ext" />
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
