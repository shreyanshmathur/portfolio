import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-name">Shreyansh <em>Mathur</em></div>
            <div className="footer-meta">A roadmap, and the prototype that proves it.</div>
          </div>
          <div className="footer-links">
            <a href="mailto:shreyanshmathur12@gmail.com">shreyanshmathur12@gmail.com</a>
            <a href="https://www.linkedin.com/in/shreyanshmathur" target="_blank" rel="noreferrer">linkedin.com/in/shreyanshmathur</a>
            <a href="https://github.com/shreyanshmathur" target="_blank" rel="noreferrer">github.com/shreyanshmathur</a>
          </div>
        </div>
        <hr className="footer-rule" />
        <div className="footer-bottom">
          <span>© {year} Shreyansh Mathur</span>
          <span>Set in Instrument Serif + DM Sans</span>
        </div>
      </div>
    </footer>
  )
}
