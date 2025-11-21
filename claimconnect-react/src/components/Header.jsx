import { useState, useEffect, useCallback, memo } from 'react'
import { Link } from 'react-router-dom'

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero')
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight
        const scrollPosition = window.scrollY
        setIsScrolled(scrollPosition > heroBottom * 0.5)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="ClaimConnect - Connect with Top Personal Injury Lawyers"
            className="header-logo"
            width="180"
            height="60"
            loading="eager"
          />
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li className="nav-item">
            <a href="#how-it-works" className="nav-link" onClick={closeMenu}>How It Works</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={closeMenu}>Our Services</a>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <a href="#claim-form" className="nav-link nav-cta-button" onClick={closeMenu}>Start Your Claim</a>
          </li>
        </ul>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          id="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
          <span className="nav-toggle-line"></span>
        </button>
      </nav>
    </header>
  )
})

Header.displayName = 'Header'

export default Header