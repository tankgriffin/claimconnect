import { memo, useCallback, useMemo } from 'react'

const Hero = memo(({ onCategoryClick }) => {
  const categoryIcons = useMemo(() => ({
    'motor-vehicle': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 30h32l-4-8c-0.5-1-1.5-2-3-2H23c-1.5 0-2.5 1-3 2l-4 8z" fill="#2563eb"/>
        <rect x="12" y="30" width="40" height="12" rx="2" fill="#2563eb"/>
        <rect x="16" y="33" width="8" height="5" rx="1" fill="#dbeafe" opacity="0.9"/>
        <rect x="40" y="33" width="8" height="5" rx="1" fill="#dbeafe" opacity="0.9"/>
        <circle cx="18" cy="46" r="5" fill="#1e293b"/>
        <circle cx="18" cy="46" r="3" fill="#64748b"/>
        <circle cx="46" cy="46" r="5" fill="#1e293b"/>
        <circle cx="46" cy="46" r="3" fill="#64748b"/>
      </svg>
    ),
    'workplace': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="24" width="32" height="28" rx="1" fill="#2563eb"/>
        <path d="M28 24V18c0-1 0.9-2 2-2h4c1.1 0 2 1 2 2v6" fill="#1e40af"/>
        <rect x="20" y="30" width="6" height="6" rx="0.5" fill="#dbeafe"/>
        <rect x="29" y="30" width="6" height="6" rx="0.5" fill="#dbeafe"/>
        <rect x="38" y="30" width="6" height="6" rx="0.5" fill="#dbeafe"/>
        <rect x="20" y="40" width="6" height="6" rx="0.5" fill="#dbeafe"/>
        <rect x="29" y="40" width="6" height="6" rx="0.5" fill="#dbeafe"/>
        <rect x="38" y="40" width="6" height="6" rx="0.5" fill="#dbeafe"/>
        <rect x="28" y="48" width="8" height="4" fill="#0f172a"/>
      </svg>
    ),
    'medical-malpractice': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="24" fill="#2563eb"/>
        <rect x="28" y="18" width="8" height="28" rx="2" fill="white"/>
        <rect x="18" y="28" width="28" height="8" rx="2" fill="white"/>
      </svg>
    ),
    'slip-fall': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12L12 52c-0.5 1 0.2 2 1.5 2h37c1.3 0 2-1 1.5-2L32 12z" fill="#f59e0b"/>
        <rect x="30" y="26" width="4" height="14" rx="2" fill="white"/>
        <circle cx="32" cy="46" r="2.5" fill="white"/>
      </svg>
    ),
    'product-liability': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 16l-3.5 2-3.5 2-3.5 2-3.5 2v12l3.5 2 3.5 2 3.5 2 3.5 2 3.5-2 3.5-2 3.5-2 3.5-2V24l-3.5-2-3.5-2-3.5-2-3.5-2z" fill="#2563eb"/>
        <path d="M32 16v16m0 0l-14-8m14 8l14-8" stroke="#1e40af" strokeWidth="2" opacity="0.5"/>
        <path d="M18 42l14 8 14-8" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'public-liability': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28L32 16l20 12v2H12v-2z" fill="#2563eb"/>
        <rect x="14" y="48" width="36" height="4" rx="1" fill="#2563eb"/>
        <rect x="18" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
        <rect x="26" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
        <rect x="34" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
        <rect x="42" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
      </svg>
    ),
    'workers-compensation': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 12L12 20v14c0 10 7 18 20 22 13-4 20-12 20-22V20L32 12z" fill="#2563eb"/>
        <path d="M24 32l6 6 12-12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    'assault-claims': (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="18" width="4" height="32" rx="1" fill="#2563eb"/>
        <circle cx="32" cy="16" r="3" fill="#2563eb"/>
        <path d="M20 28l-6 10h12l-6-10z" fill="#2563eb"/>
        <path d="M44 28l-6 10h12l-6-10z" fill="#2563eb"/>
        <line x1="20" y1="28" x2="32" y2="28" stroke="#2563eb" strokeWidth="3"/>
        <line x1="32" y1="28" x2="44" y2="28" stroke="#2563eb" strokeWidth="3"/>
        <rect x="26" y="48" width="12" height="3" rx="1.5" fill="#2563eb"/>
      </svg>
    )
  }), [])

  const categories = useMemo(() => [
    {
      id: 'motor-vehicle',
      title: 'Auto'
    },
    {
      id: 'workplace',
      title: 'Workplace'
    },
    {
      id: 'medical-malpractice',
      title: 'Medical'
    },
    {
      id: 'slip-fall',
      title: 'Slip & Fall'
    },
    {
      id: 'product-liability',
      title: 'Product'
    },
    {
      id: 'public-liability',
      title: 'Public'
    },
    {
      id: 'workers-compensation',
      title: 'Workers Comp'
    },
    {
      id: 'assault-claims',
      title: 'Assault'
    }
  ], [])

  const handleGetQuote = useCallback(() => {
    onCategoryClick('')
  }, [onCategoryClick])

  const handleLearnMore = useCallback(() => {
    const howItWorksSection = document.getElementById('how-it-works')
    if (howItWorksSection) {
      const headerHeight = 80
      const targetPosition = howItWorksSection.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  const handleCategoryClick = useCallback((categoryId) => {
    onCategoryClick(categoryId)
  }, [onCategoryClick])

  return (
    <section className="hero" id="services">
      <div className="container">
        <div className="hero-content">
          <div className="hero-header">
            <div className="hero-icon">
              <img
                src="/images/logo-icon-white.png"
                alt="ClaimConnect"
                width="100"
                height="100"
                loading="eager"
              />
            </div>
            <h1 className="hero-title">
              <span className="hero-title-text">
                Injured? Get Compensated.<br />Connect With Top Lawyers Fast
              </span>
            </h1>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                data-category={category.id}
                onClick={() => handleCategoryClick(category.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleCategoryClick(category.id)
                  }
                }}
                aria-label={`Select ${category.title} claim category`}
              >
                <div className="category-icon" aria-hidden="true">
                  {categoryIcons[category.id]}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
            ))}
          </div>

          <div className="hero-cta-group">
            <button
              className="btn btn-primary btn-large hero-cta-primary"
              onClick={handleGetQuote}
            >
              <div className="cta-content">
                <div className="cta-icon-wrapper">
                  <svg className="cta-check-icon" viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="cta-text-wrapper">
                  <span className="cta-main-text">Start Your Free Claim Assessment</span>
                  <span className="cta-subtext">
                    <strong>90 seconds</strong> • No obligation • Expert lawyer match
                  </span>
                </div>
              </div>
            </button>
            <button
              className="btn btn-secondary btn-large hero-cta-phone"
              onClick={() => window.location.href = 'tel:1300000000'}
            >
              <div className="cta-content">
                <div className="cta-icon-wrapper">
                  <svg className="phone-icon" viewBox="0 0 20 20" fill="currentColor" width="22" height="22">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="phone-pulse"></span>
                </div>
                <div className="cta-text-wrapper">
                  <span className="cta-main-text">Speak to a Specialist Now</span>
                  <span className="cta-subtext">
                    <strong>1300 000 000</strong> • Available 24/7
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="hero-trust-badges">
            <div className="trust-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>No Win, No Fee</span>
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span>Response in 1 Hour</span>
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span>50,000+ Claims Processed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
