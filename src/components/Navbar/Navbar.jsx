import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Projects', href: '#projects' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="url(#navLogoGrad)" strokeWidth="3" />
            <path d="M10 16C10 12.686 12.686 10 16 10" stroke="url(#navLogoGrad)" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 22C19.314 22 22 19.314 22 16" stroke="url(#navLogoGrad)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              <linearGradient id="navLogoGrad" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#EABDFC" />
                {/* <stop offset="1" stopColor="#ec4899" /> */}
              </linearGradient>
            </defs>
          </svg>
          <span>Sarko</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        
        </nav>

        <a href="#contact" className="btn btn-primary navbar__cta navbar__cta--desktop">
          Get Started
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
