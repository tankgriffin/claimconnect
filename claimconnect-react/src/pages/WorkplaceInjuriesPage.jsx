import { useState, useCallback, memo } from 'react'
import ClaimFormModal from '../components/ClaimFormModal'

const WorkplaceInjuriesPage = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  const handleStartClaim = useCallback(() => {
    setIsFormModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsFormModalOpen(false)
  }, [])

  const scenarios = [
    {
      icon: '⚠️',
      title: 'Slip, Trip & Fall',
      items: [
        'Wet floor accidents',
        'Uneven surfaces',
        'Poor lighting incidents',
        'Stairway accidents',
        'Construction site falls'
      ]
    },
    {
      icon: '🏗️',
      title: 'Construction Injuries',
      items: [
        'Falls from height',
        'Equipment accidents',
        'Scaffolding collapses',
        'Electrical injuries',
        'Caught-in-between accidents'
      ]
    },
    {
      icon: '🏭',
      title: 'Industrial Accidents',
      items: [
        'Machinery injuries',
        'Chemical exposure',
        'Burn injuries',
        'Crushing injuries',
        'Equipment malfunctions'
      ]
    },
    {
      icon: '🚛',
      title: 'Transport & Logistics',
      items: [
        'Loading dock accidents',
        'Forklift incidents',
        'Delivery injuries',
        'Warehouse accidents',
        'Driver fatigue crashes'
      ]
    },
    {
      icon: '🏥',
      title: 'Healthcare Injuries',
      items: [
        'Needlestick injuries',
        'Back injuries from lifting',
        'Workplace violence',
        'Chemical exposures',
        'Repetitive strain injuries'
      ]
    },
    {
      icon: '💻',
      title: 'Office Injuries',
      items: [
        'Repetitive strain injury',
        'Ergonomic problems',
        'Stress-related conditions',
        'Slip and fall accidents',
        'Equipment-related injuries'
      ]
    }
  ]

  const compensationTypes = [
    {
      icon: '🏥',
      title: 'Medical Treatment',
      description: 'All necessary medical expenses including surgery, rehabilitation, medications, and ongoing care'
    },
    {
      icon: '💰',
      title: 'Weekly Payments',
      description: 'Income support while unable to work, typically a percentage of your pre-injury wages'
    },
    {
      icon: '♿',
      title: 'Permanent Impairment',
      description: 'Lump sum compensation for permanent physical or psychological impairment from your injury'
    },
    {
      icon: '🔄',
      title: 'Return to Work Support',
      description: 'Retraining, job placement assistance, and workplace modifications to help you return to work'
    },
    {
      icon: '🏠',
      title: 'Home & Vehicle Modifications',
      description: 'Modifications to your home and vehicle to accommodate your injury-related needs'
    },
    {
      icon: '💼',
      title: 'Common Law Damages',
      description: 'Additional compensation for pain, suffering, loss of earning capacity, and economic loss'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Report Your Injury',
      description: 'Notify your employer immediately and complete a workers compensation claim form. Seek medical attention and get proper documentation.'
    },
    {
      number: 2,
      title: 'Get Connected',
      description: 'Complete our assessment and get matched with experienced WorkCover lawyers who understand your specific injury and situation.'
    },
    {
      number: 3,
      title: 'Build Your Case',
      description: 'Your lawyer will gather evidence, medical reports, and work with treating doctors to build a strong compensation claim.'
    },
    {
      number: 4,
      title: 'Maximize Your Compensation',
      description: 'We negotiate with insurers and fight for all benefits you\'re entitled to, including weekly payments and lump sum compensation.'
    }
  ]

  const successStories = [
    {
      initial: 'DW',
      name: 'David W.',
      location: 'Perth, WA',
      type: 'Construction Fall',
      amount: '$320,000',
      description: '"I fell from scaffolding and broke my back. WorkCover was denying my claim and cutting off my payments. ClaimConnect found me a lawyer who got everything sorted and won me a huge settlement for my permanent injuries."'
    },
    {
      initial: 'SM',
      name: 'Sandra M.',
      location: 'Adelaide, SA', 
      type: 'Repetitive Strain Injury',
      amount: '$85,000',
      description: '"Years of computer work gave me severe RSI in both hands. My employer said it wasn\'t work-related. The lawyer ClaimConnect connected me with proved it was and got me compensation plus ongoing treatment."'
    },
    {
      initial: 'TP',
      name: 'Tony P.',
      location: 'Darwin, NT',
      type: 'Chemical Exposure',
      amount: '$195,000',
      description: '"Chemical exposure at the plant left me with permanent lung damage. The company tried to blame me, but my lawyer proved they failed to provide proper safety equipment. I got compensation for my medical bills and lost income."'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container">
          <div className="hero-content">
            <div className="category-icon-large">🏢</div>
            <h1 className="hero-title">Workplace Injury Lawyers</h1>
            <p className="hero-subtitle">Get the compensation you deserve for work-related accidents and occupational injuries</p>
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">No Win, No Fee</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">Free Consultation</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">WorkCover Specialists</span>
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
                Get Your Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios Section */}
      <section className="scenarios">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Workplace Injury Scenarios</h2>
            <p className="section-subtitle">We help workers injured on the job across all industries in Australia</p>
          </div>
          
          <div className="scenarios-grid">
            {scenarios.map((scenario, index) => (
              <div key={index} className="scenario-card">
                <div className="scenario-icon">{scenario.icon}</div>
                <h3 className="scenario-title">{scenario.title}</h3>
                <ul className="scenario-list">
                  {scenario.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="compensation">
        <div className="container">
          <div className="compensation-content">
            <div className="compensation-text">
              <h2 className="section-title">What WorkCover Compensation Can You Claim?</h2>
              <p className="section-subtitle">Injured workers in Australia are entitled to comprehensive compensation and support</p>
              
              <div className="compensation-types">
                {compensationTypes.map((type, index) => (
                  <div key={index} className="compensation-item">
                    <div className="compensation-icon">{type.icon}</div>
                    <div className="compensation-details">
                      <h3>{type.title}</h3>
                      <p>{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How ClaimConnect Helps with Your WorkCover Claim</h2>
            <p className="section-subtitle">Navigate the WorkCover system with expert legal guidance</p>
          </div>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Workplace Injury Success Stories</h2>
            <p className="section-subtitle">Real results for injured workers</p>
          </div>
          
          <div className="testimonials-grid">
            {successStories.map((story, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="star" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">{story.description}</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <span>{story.initial}</span>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{story.name}</h4>
                    <p className="author-details">{story.type} • {story.location}</p>
                    <p className="settlement-amount">{story.amount} Settlement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your WorkCover Claim?</h2>
            <p className="cta-subtitle">Don't let WorkCover deny or underpay your claim. Get expert legal help today.</p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Get Your Free WorkCover Assessment
            </button>
          </div>
        </div>
      </section>

      <ClaimFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseModal}
        preselectedCategory="workplace"
      />
    </main>
  )
}

export default memo(WorkplaceInjuriesPage)