import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/about',      label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects',   label: 'Projects' },
  { to: '/skills',     label: 'Skills' },
  { to: '/contact',    label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`navbar ${scrolled ? 'nb-scrolled' : ''}`}>
      <div className="nb-inner">

        {/* Logo */}
        <NavLink to="/" className="nb-logo">
          <span className="nb-monogram">SM</span>
          <span className="nb-sep" />
          <span className="nb-full">Shreyansh Mathur</span>
        </NavLink>

        {/* Desktop links */}
        <nav className="nb-links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nb-link ${isActive ? 'nb-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA group */}
        <div className="nb-cta-group">
          <a
            href="/Shreyansh-Mathur-Resume .pdf"
            target="_blank"
            rel="noreferrer"
            className="nb-resume"
          >
            Resume ↓
          </a>
          <a
            href="mailto:shreyanshmathur12@gmail.com"
            className="nb-cta"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`nb-ham ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nb-mobile ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nb-mob-link" end>Home</NavLink>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className="nb-mob-link">{l.label}</NavLink>
        ))}
        <a href="mailto:shreyanshmathur12@gmail.com" className="nb-mob-cta">
          Hire Me ↗
        </a>
      </div>
    </header>
  )
}
