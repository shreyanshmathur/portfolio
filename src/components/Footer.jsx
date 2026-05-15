import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="ft-top">
          <div className="ft-brand">
            <span className="ft-mono">SM</span>
            <p>Builder · Consultant · Strategist</p>
          </div>

          <nav className="ft-nav">
            {[
              ['/about', 'About'],
              ['/experience', 'Experience'],
              ['/projects', 'Projects'],
              ['/skills', 'Skills'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <NavLink key={to} to={to} className="ft-link">{label}</NavLink>
            ))}
          </nav>

          <div className="ft-contact">
            <p className="eyebrow">Get in touch</p>
            <a href="mailto:shreyanshmathur12@gmail.com" className="ft-email">
              shreyanshmathur12@gmail.com
            </a>
            <div className="ft-socials">
              <a href="https://www.linkedin.com/in/shreyanshmathur" target="_blank" rel="noreferrer" className="ft-soc">LinkedIn ↗</a>
              <a href="https://github.com/shreyanshmathur" target="_blank" rel="noreferrer" className="ft-soc">GitHub ↗</a>
            </div>
          </div>
        </div>

        <div className="ft-bottom">
          <span className="ft-copy">© {year} Shreyansh Mathur. All rights reserved.</span>
          <span className="ft-loc">Mumbai, India</span>
        </div>
      </div>
    </footer>
  )
}
