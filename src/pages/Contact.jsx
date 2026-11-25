import { useInView } from '../hooks/motion'
import { profile } from '../data/content'
import { Orbit, Parallax } from '../components/Graphics'
import './Home.css'
import './Experience.css'
import './Contact.css'

const contacts = [
  { k: 'Email', v: profile.email, href: `mailto:${profile.email}` },
  { k: 'LinkedIn', v: 'linkedin.com/in/shreyanshmathur', href: profile.linkedin },
  { k: 'GitHub', v: 'github.com/shreyanshmathur', href: profile.github },
  { k: 'Location', v: profile.location, href: null },
]

export default function Contact() {
  const [ref, go] = useInView(0.2)
  return (
    <main className="page-wrap">
      <div className="page-hero ct-hero">
        <Parallax speed={-140} className="xp-hero-orbit"><Orbit /></Parallax>
        <div className="container">
          <div className="ph-top"><span className="eyebrow load d1">03 / Contact</span></div>
          <h1 className="ph-title">
            <span className="line"><span className="load d2">Let&rsquo;s</span></span>
            <span className="line"><em className="load d3">talk.</em></span>
          </h1>
          <p className="ph-kicker load d4">
            Open to conversations about strategy consulting, delivery and operating model
            work. Based in {profile.location.split(',')[0]}.
          </p>
          <div className="ct-actions load d5">
            <a href={`mailto:${profile.email}`} className="btn-primary">Send an email <span className="arr">→</span></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div ref={ref} className={`ct-list${go ? ' go' : ''}`}>
            {contacts.map((c, i) => {
              const inner = (<><span className="k">{c.k}</span><span className="v">{c.v}</span><span className="ext">{c.href ? '↗' : ''}</span></>)
              return c.href ? (
                <a key={c.k} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="ct-row" style={{ '--i': i }}>{inner}</a>
              ) : (
                <div key={c.k} className="ct-row" style={{ '--i': i }}>{inner}</div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
