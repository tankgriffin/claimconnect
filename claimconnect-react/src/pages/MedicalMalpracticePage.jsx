import { useState, useCallback, memo } from 'react'
import ClaimFormModal from '../components/ClaimFormModal'

const MedicalMalpracticePage = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  const handleStartClaim = useCallback(() => {
    setIsFormModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsFormModalOpen(false)
  }, [])

  const scenarios = [
    {
      icon: '🩺',
      title: 'Misdiagnosis',
      items: [
        'Delayed cancer diagnosis',
        'Heart attack misdiagnosis',
        'Stroke misdiagnosis',
        'Infection diagnosis failures',
        'Emergency room errors'
      ]
    },
    {
      icon: '⚕️',
      title: 'Surgical Errors',
      items: [
        'Wrong site surgery',
        'Surgical instruments left inside',
        'Anesthesia complications',
        'Post-operative infections',
        'Unnecessary procedures'
      ]
    },
    {
      icon: '💊',
      title: 'Medication Errors',
      items: [
        'Wrong medication prescribed',
        'Incorrect dosage',
        'Dangerous drug interactions',
        'Pharmacy dispensing errors',
        'Allergic reaction failures'
      ]
    },
    {
      icon: '👶',
      title: 'Birth Injuries',
      items: [
        'Cerebral palsy',
        'Erb\'s palsy',
        'Brain injuries during delivery',
        'Failure to perform C-section',
        'Oxygen deprivation injuries'
      ]
    },
    {
      icon: '🫀',
      title: 'Emergency Medicine',
      items: [
        'Heart attack missed diagnosis',
        'Stroke treatment delays',
        'Trauma care failures',
        'Sepsis mismanagement',
        'Emergency room negligence'
      ]
    },
    {
      icon: '🧠',
      title: 'Mental Health',
      items: [
        'Psychiatric medication errors',
        'Suicide prevention failures',
        'Improper treatment plans',
        'Inadequate monitoring',
        'Therapy malpractice'
      ]
    }
  ]

  const compensationTypes = [
    {
      icon: '🏥',
      title: 'Medical Expenses',
      description: 'Past and future medical costs, corrective treatments, rehabilitation, and ongoing care needs'
    },
    {
      icon: '💼',
      title: 'Lost Income',
      description: 'Past lost wages, future earning capacity loss, and inability to return to previous employment'
    },
    {
      icon: '😔',
      title: 'Pain & Suffering',
      description: 'Physical pain, emotional trauma, mental anguish, and reduced enjoyment of life'
    },
    {
      icon: '👥',
      title: 'Loss of Companionship',
      description: 'Impact on relationships with spouse, children, and family members'
    },
    {
      icon: '🏠',
      title: 'Lifestyle Changes',
      description: 'Home modifications, personal care costs, and adaptive equipment needs'
    },
    {
      icon: '⚰️',
      title: 'Wrongful Death',
      description: 'Funeral expenses, loss of financial support, and loss of consortium for surviving family'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Case Evaluation',
      description: 'Our medical malpractice experts review your medical records and determine if you have a valid claim based on professional standards.'
    },
    {
      number: 2,
      title: 'Medical Expert Review',
      description: 'We work with qualified medical professionals who can testify that your treatment fell below the accepted standard of care.'
    },
    {
      number: 3,
      title: 'Evidence Collection',
      description: 'We gather all relevant medical records, expert opinions, witness statements, and documentation to build your strongest case.'
    },
    {
      number: 4,
      title: 'Claim Resolution',
      description: 'We negotiate with medical professionals and insurers, or take your case to trial to secure maximum compensation.'
    }
  ]

  const successStories = [
    {
      initial: 'MR',
      name: 'Michelle R.',
      location: 'Sydney, NSW',
      type: 'Cancer Misdiagnosis',
      amount: '$450,000',
      description: '"My doctor dismissed my concerns for months, saying it was just stress. By the time cancer was properly diagnosed, it had spread. ClaimConnect found me a lawyer who proved the delay caused unnecessary suffering and reduced my survival chances."'
    },
    {
      initial: 'GL',
      name: 'George L.',
      location: 'Melbourne, VIC', 
      type: 'Surgical Error',
      amount: '$380,000',
      description: '"During routine gallbladder surgery, the surgeon nicked an artery and I almost bled to death. I spent weeks in ICU and had multiple complications. The compensation I received through ClaimConnect covers my ongoing medical needs."'
    },
    {
      initial: 'KT',
      name: 'Karen T.',
      location: 'Brisbane, QLD',
      type: 'Birth Injury',
      amount: '$1,200,000',
      description: '"My son was born with cerebral palsy due to oxygen deprivation during delivery. The medical team failed to respond to fetal distress signals. The settlement will provide for his lifetime care and therapy needs."'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="category-hero">
        <div className="container">
          <div className="hero-content">
            <div className="category-icon-large">🏥</div>
            <h1 className="hero-title">Medical Malpractice Lawyers</h1>
            <p className="hero-subtitle">Hold healthcare providers accountable when medical negligence causes harm</p>
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">No Win, No Fee</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">Medical Expert Network</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">Complex Case Specialists</span>
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
                Get Your Free Case Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios Section */}
      <section className="scenarios">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Medical Malpractice Cases</h2>
            <p className="section-subtitle">We handle complex medical negligence cases across all areas of healthcare</p>
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
              <h2 className="section-title">What Compensation Can You Recover?</h2>
              <p className="section-subtitle">Medical malpractice victims may be entitled to comprehensive compensation for their losses</p>
              
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
            <h2 className="section-title">How We Handle Your Medical Malpractice Case</h2>
            <p className="section-subtitle">Complex cases require specialized expertise and thorough investigation</p>
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
            <h2 className="section-title">Medical Malpractice Success Stories</h2>
            <p className="section-subtitle">Justice for medical negligence victims</p>
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
            <h2 className="cta-title">Think You Have a Medical Malpractice Case?</h2>
            <p className="cta-subtitle">Medical malpractice cases have strict time limits. Get your free evaluation today to protect your rights.</p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Get Your Free Medical Malpractice Assessment
            </button>
          </div>
        </div>
      </section>

      <ClaimFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseModal}
        preselectedCategory="medical-malpractice"
      />
    </main>
  )
}

export default memo(MedicalMalpracticePage)