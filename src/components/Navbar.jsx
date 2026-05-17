import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { num: '01', to: '/experience',  label: 'Experience' },
  { num: '02', to: '/projects',    label: 'Projects' },
  { num: '03', to: '/about',       label: 'About' },
  { num: '04', to: '/activities',  label: 'Activities' },
  { num: '05', to: '/contact',     label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className="navbar">
      <div className="container nav-inner">

        <NavLink to="/" className="nav-brand">
          <span className="nav-brand-name">Shreyansh <em>Mathur</em></span>
          <span className="nav-brand-role">Strategy · PwC India</span>
        </NavLink>

        <nav className="nav-links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              <span className="nav-num">{l.num}</span>
              <span>{l.label}</span>
            </NavLink>
          ))}

        </nav>

        <button
          className={`nav-ham${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" className="nav-mob-link" end>Home</NavLink>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className="nav-mob-link">{l.label}</NavLink>
        ))}
        <a href="mailto:shreyanshmathur12@gmail.com" className="nav-mob-cta">
          Get in touch ↗
        </a>
      </div>
    </header>
  )
}
