import { useState, useCallback, memo } from 'react'
import ClaimFormModal from '../components/ClaimFormModal'
import SimpleContactForm from '../components/SimpleContactForm'

const MotorVehicleAccidentsPage = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const handleStartClaim = useCallback(() => {
    setIsFormModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsFormModalOpen(false)
  }, [])

  const toggleFaq = useCallback((index) => {
    setOpenFaqIndex(prev => prev === index ? null : index)
  }, [])

  const scenarios = [
    {
      icon: '🚙',
      title: 'Car Accidents',
      items: [
        'Rear-end collisions',
        'Head-on crashes',
        'Side-impact accidents',
        'Multi-vehicle pile-ups',
        'Hit and run incidents'
      ]
    },
    {
      icon: '🏍️',
      title: 'Motorcycle Accidents',
      items: [
        'Lane splitting incidents',
        'Intersection crashes',
        'Road hazard accidents',
        'Defective equipment cases',
        'Weather-related crashes'
      ]
    },
    {
      icon: '🚛',
      title: 'Truck Accidents',
      items: [
        'Semi-trailer crashes',
        'Delivery truck accidents',
        'Construction vehicle incidents',
        'Jackknife accidents',
        'Cargo-related crashes'
      ]
    },
    {
      icon: '🚌',
      title: 'Public Transport',
      items: [
        'Bus accidents',
        'Train derailments',
        'Taxi incidents',
        'Ride-share accidents',
        'Ferry accidents'
      ]
    }
  ]

  const compensationTypes = [
    {
      icon: '🏥',
      title: 'Medical & Rehabilitation Costs',
      description: 'All hospital bills, surgery costs, medication, physiotherapy, psychology sessions, ongoing treatment, and future medical care needs'
    },
    {
      icon: '💼',
      title: 'Lost Wages & Income',
      description: 'Past wages lost while recovering, future lost income, reduced earning capacity, loss of superannuation contributions, and lost employment opportunities'
    },
    {
      icon: '😔',
      title: 'Pain, Suffering & Trauma',
      description: 'Compensation for physical pain, emotional distress, mental anguish, psychological trauma (PTSD, anxiety, depression), and reduced quality of life'
    },
    {
      icon: '🏠',
      title: 'Home Care & Modifications',
      description: 'Wheelchair accessibility modifications, stair lifts, bathroom adaptations, medical equipment, domestic assistance, and professional care support'
    },
    {
      icon: '🚗',
      title: 'Vehicle & Property Damage',
      description: 'Full repair or replacement costs, hire car expenses while repairs are done, towing fees, and any personal property damaged in the accident'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family & Lifestyle Impact',
      description: 'Loss of consortium, impact on relationships, care provided by family members, childcare costs, and inability to participate in hobbies or activities'
    }
  ]

  const processSteps = [
    {
      number: 1,
      title: 'Fast, Free Assessment',
      description: 'Complete our 90-second assessment form. A specialist motor vehicle accident lawyer will contact you within 1 hour to discuss your case—completely free with no obligation.'
    },
    {
      number: 2,
      title: 'Expert Lawyer Match',
      description: 'We connect you with an experienced lawyer in your state who specializes in your exact type of motor vehicle accident. Every lawyer works on No Win, No Fee.'
    },
    {
      number: 3,
      title: 'Evidence Collection',
      description: 'Your lawyer handles everything: police reports, medical records, witness statements, accident scene photos, insurance correspondence, and expert reports. You focus on recovery.'
    },
    {
      number: 4,
      title: 'Fight for Maximum Compensation',
      description: 'Your lawyer negotiates aggressively with insurance companies and, if needed, takes your case to court. You only pay if you win—and the average settlement is $127,000.'
    }
  ]

  const successStories = [
    {
      initial: 'JM',
      name: 'James M.',
      location: 'Sydney, NSW',
      type: 'Rear-End Collision',
      amount: '$95,000',
      description: '"After my car was hit from behind at a red light, I thought I just had whiplash. ClaimConnect helped me discover I had serious back injuries that needed ongoing treatment. Their lawyer fought for proper compensation."'
    },
    {
      initial: 'RK',
      name: 'Rebecca K.',
      location: 'Melbourne, VIC',
      type: 'Motorcycle Accident',
      amount: '$180,000',
      description: '"The truck driver didn\'t see me in his blind spot. I spent months in hospital and couldn\'t work. ClaimConnect found me a lawyer who understood motorcycle accident cases and got me the settlement I needed to rebuild my life."'
    },
    {
      initial: 'PT',
      name: 'Peter T.',
      location: 'Brisbane, QLD',
      type: 'Head-On Collision',
      amount: '$250,000',
      description: '"A drunk driver crossed the center line and hit me head-on. I had multiple surgeries and permanent disabilities. The lawyer ClaimConnect connected me with was incredible - they handled everything while I focused on recovery."'
    }
  ]

  const faqs = [
    {
      question: "How much is my motor vehicle accident claim worth?",
      answer: "The value depends on several factors: the severity of your injuries, medical expenses (current and future), lost wages, pain and suffering, and the impact on your quality of life. Minor injuries might result in $10,000-$30,000, while serious injuries often reach $100,000-$500,000 or more. The average motor vehicle accident settlement in our network is $127,000. During your free consultation, a specialist lawyer will evaluate your specific circumstances and give you an honest assessment of your claim's potential value."
    },
    {
      question: "What if the accident was partially my fault?",
      answer: "You can still claim compensation even if you were partially at fault. Australia operates under a 'contributory negligence' system, which means your compensation will be reduced by your percentage of fault. For example, if you're found 20% at fault and your claim is worth $100,000, you'd receive $80,000. However, don't assume you were at fault—insurance companies often try to shift blame. A specialist lawyer will investigate the full circumstances and fight to minimize any fault attributed to you."
    },
    {
      question: "How long do I have to make a motor vehicle accident claim?",
      answer: "In most Australian states, you have 3 years from the date of the accident to start legal proceedings. However, there are important exceptions: some states have shorter time limits for specific types of claims, and you may need to notify insurers within 28 days of the accident. Different rules apply for claims against government entities. Don't wait—evidence disappears, witnesses forget details, and you could miss critical deadlines. Get your free assessment now to protect your rights."
    },
    {
      question: "Do I really need a lawyer? Can't I just deal with insurance directly?",
      answer: "While you're not legally required to have a lawyer, studies show that accident victims with legal representation receive 3.5 times more compensation on average than those who go it alone. Insurance companies have teams of lawyers and adjusters working to minimize payouts—they count on you not knowing the true value of your claim. A specialist lawyer levels the playing field, handles all the complex paperwork, negotiates expertly, and ensures you don't accept a lowball settlement. With No Win, No Fee, there's zero risk in getting professional help."
    },
    {
      question: "What does 'No Win, No Fee' actually mean?",
      answer: "It means you pay nothing upfront and nothing unless your claim succeeds. Your lawyer only gets paid if they win compensation for you—their fee comes as a percentage of your settlement (capped by law to protect you). If your claim is unsuccessful, you pay no legal fees. This removes all financial risk and ensures your lawyer is motivated to get you the maximum possible compensation. You can access expert legal representation regardless of your financial situation."
    },
    {
      question: "How long does a motor vehicle accident claim take?",
      answer: "Simple claims with clear liability and minor injuries may settle in 6-12 months. More complex cases involving serious injuries, disputed fault, or multiple parties can take 18-24 months or longer. Your lawyer will give you a realistic timeline during your free consultation. Remember: rushing to settle early often results in significantly less compensation. Your lawyer will ensure you don't settle until the full extent of your injuries and future needs are understood."
    },
    {
      question: "What if the other driver doesn't have insurance or can't be identified?",
      answer: "Don't worry—you may still be able to claim. In Australia, each state has a Nominal Defendant scheme that handles claims where the at-fault driver is uninsured, unidentified (hit-and-run), or their insurer has become insolvent. You can also claim through your own comprehensive insurance if you have it. A specialist lawyer will identify all possible avenues for compensation based on your specific circumstances."
    },
    {
      question: "Will I have to go to court?",
      answer: "Most motor vehicle accident claims (approximately 95%) settle before reaching court through negotiation. Going to court is typically a last resort when insurance companies refuse fair compensation. If court becomes necessary, your lawyer will guide you through every step and represent you. Many people find that having a lawyer willing to go to court actually makes insurers more likely to offer fair settlements to avoid the expense and uncertainty of trial."
    },
    {
      question: "Can I claim for psychological injuries like anxiety or PTSD?",
      answer: "Absolutely. Psychological injuries are just as valid as physical injuries. Many motor vehicle accident victims experience anxiety, depression, PTSD, or phobias related to driving. You can claim compensation for psychological treatment costs (psychologist, psychiatrist, medication) and for the impact on your quality of life. You'll need supporting evidence from mental health professionals, which your lawyer will help you obtain."
    },
    {
      question: "What evidence do I need for my claim?",
      answer: "The more evidence, the stronger your claim. Key evidence includes: police accident report, photos of the accident scene and vehicle damage, medical records and reports, witness contact details, insurance correspondence, records of lost wages, and receipts for expenses. Don't worry if you don't have everything—your lawyer will help gather missing evidence. The important thing is to start the process now before evidence is lost or memories fade."
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="category-hero category-hero-with-form">
        <div className="container">
          <div className="hero-two-column-wrapper">
            <div className="hero-content-left">
              <div className="category-icon-large">🚗</div>
              <h1 className="hero-title">Injured in a Motor Vehicle Accident? Get Expert Legal Help Within 1 Hour</h1>
              <p className="hero-subtitle">Connect with specialist car accident lawyers who fight for maximum compensation while you focus on recovery. No Win, No Fee guarantee means zero risk to you.</p>
              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span className="trust-text">Lawyer responds within 60 minutes</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span className="trust-text">No Win, No Fee - 100% risk-free</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span className="trust-text">Average settlement: $127,000</span>
                </div>
              </div>
            </div>
            <div className="hero-form-right">
              <div className="hero-form-card">
                <SimpleContactForm preselectedClaimType="motor-vehicle" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Alert Bar */}
      <section className="urgency-bar">
        <div className="container">
          <div className="urgency-content">
            <svg className="clock-icon" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className="urgency-text">
              <strong>Time-Sensitive:</strong> Australian motor vehicle accident claims have strict time limits. In most cases, you have 3 years from the date of injury to make a claim. Don't risk losing your right to compensation.
            </span>
          </div>
        </div>
      </section>

      {/* Common Scenarios Section */}
      <section className="scenarios">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">We Handle All Types of Motor Vehicle Accidents</h2>
            <p className="section-subtitle">Whether you were in a car, on a motorcycle, or hit by a truck—we connect you with specialist lawyers who understand your specific situation</p>
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

      {/* Eligibility & Pain Points Section */}
      <section className="pain-points-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Unsure If You Have a Valid Claim?</h2>
            <p className="section-subtitle">You may be entitled to compensation if your accident was caused by someone else's negligence</p>
          </div>

          <div className="pain-points-grid">
            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 20v16M32 44v4" stroke="#2563eb" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="32" cy="44" r="2" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Not Sure If You Have a Case?</h3>
              <p className="pain-text">
                Many people don't realize they have a valid claim. If you were injured and it wasn't your fault, you likely have a case. Our specialist lawyers can tell you for free within the hour.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 16v12M26 32h12M32 28c-6 0-10 4-10 8h20c0-4-4-8-10-8z" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="32" cy="48" r="2" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Worried About Legal Costs?</h3>
              <p className="pain-text">
                Every lawyer in our network works on No Win, No Fee. You pay nothing upfront, and nothing unless you win. If you don't receive compensation, you don't pay legal fees. Zero financial risk.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <rect x="16" y="24" width="32" height="20" rx="2" stroke="#2563eb" strokeWidth="3" fill="none"/>
                <path d="M24 24V20c0-4 4-8 8-8s8 4 8 8v4" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="32" cy="36" r="3" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Insurance Company Giving You the Runaround?</h3>
              <p className="pain-text">
                Insurance companies often offer lowball settlements hoping you'll accept. Specialist lawyers know the true value of your claim and fight to get you every dollar you deserve.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M22 28h20M22 36h20M22 44h12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <rect x="20" y="20" width="24" height="28" stroke="#2563eb" strokeWidth="2" fill="none" rx="2"/>
              </svg>
              <h3 className="pain-title">Overwhelmed by the Claims Process?</h3>
              <p className="pain-text">
                Medical reports, police statements, insurance paperwork, legal deadlines—it's a lot when you're trying to recover. Your lawyer handles everything while you focus on getting better.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <circle cx="32" cy="32" r="20" stroke="#2563eb" strokeWidth="3" fill="none"/>
                <path d="M32 20v12l8 8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="pain-title">Worried You've Waited Too Long?</h3>
              <p className="pain-text">
                Time limits apply, but don't assume it's too late. Different circumstances can affect deadlines. Get a free assessment now—it takes 90 seconds and could save your claim.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 12L12 20v14c0 10 7 18 20 22 13-4 20-12 20-22V20L32 12z" fill="#2563eb"/>
                <path d="M24 32l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <h3 className="pain-title">Want to Ensure Maximum Compensation?</h3>
              <p className="pain-text">
                Without expert legal representation, you could receive thousands less than you deserve. Specialist lawyers have won millions for motor vehicle accident victims—average settlement: $127,000.
              </p>
            </div>
          </div>

          <div className="pain-points-cta">
            <p className="cta-intro">
              <strong>Sound familiar?</strong> Don't let these concerns stop you from getting the compensation you deserve.
            </p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Get Your Free Assessment—Connected in Under 1 Hour
            </button>
            <p className="cta-reassurance">
              90 seconds | No obligation | No cost unless you win
            </p>
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="compensation">
        <div className="container">
          <div className="compensation-content">
            <div className="compensation-text">
              <h2 className="section-title">What Compensation Can You Claim After a Motor Vehicle Accident?</h2>
              <p className="section-subtitle">You may be entitled to compensation for current expenses, future costs, and the impact on your life</p>
              
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
            <h2 className="section-title">How It Works: From Accident to Compensation in 4 Simple Steps</h2>
            <p className="section-subtitle">We handle the legal complexity while you focus on recovery—completely risk-free with No Win, No Fee</p>
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
            <h2 className="section-title">Real Motor Vehicle Accident Victims, Real Compensation Results</h2>
            <p className="section-subtitle">See how ClaimConnect helped Australians just like you recover hundreds of thousands in compensation</p>
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

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Motor Vehicle Accident Claims: Your Questions Answered</h2>
            <p className="section-subtitle">Get clear answers to the most common questions about car accident compensation claims</p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    className="faq-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <p className="faq-cta-text">Still have questions about your motor vehicle accident claim?</p>
            <button className="btn btn-white btn-large" onClick={handleStartClaim}>
              Talk to a Specialist Lawyer for Free
            </button>
            <p className="cta-subtext-below" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>Connected within 1 hour | No obligation | Completely free</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Don't Let Time Run Out on Your Motor Vehicle Accident Claim</h2>
            <p className="cta-subtitle">Every day you wait, valuable evidence disappears and deadlines get closer. Take action now—get connected with a specialist lawyer within 1 hour, completely free with zero obligation.</p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Start Your Free Assessment Now
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#6B7280' }}>
              Average settlement: $127,000 | No Win, No Fee guarantee | Join thousands of successful claimants
            </p>
          </div>
        </div>
      </section>

      <ClaimFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseModal}
        preselectedCategory="motor-vehicle"
      />
    </main>
  )
}

export default memo(MotorVehicleAccidentsPage)