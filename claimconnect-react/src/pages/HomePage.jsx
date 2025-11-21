import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ClaimFormModal from '../components/ClaimFormModal'
import SimpleContactForm from '../components/SimpleContactForm'

const HomePage = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [preselectedCategory, setPreselectedCategory] = useState('')
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const statsRef = useRef(null)

  const handleCategoryClick = useCallback((categoryId) => {
    setPreselectedCategory(categoryId)
    setIsFormModalOpen(true)
  }, [])

  const handleStartClaim = useCallback(() => {
    setPreselectedCategory('')
    setIsFormModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsFormModalOpen(false)
  }, [])

  const toggleFaq = useCallback((index) => {
    setOpenFaqIndex(prev => prev === index ? null : index)
  }, [])

  const faqs = [
    {
      question: "How much does it cost to use ClaimConnect?",
      answer: "Absolutely nothing. ClaimConnect is 100% free to use. There are no signup fees, no assessment fees, and no hidden charges. The lawyers we connect you with work exclusively on a 'No Win, No Fee' basis, which means you won't pay a single dollar unless you win your case. If you don't win, you don't pay. It's that simple."
    },
    {
      question: "How long does the claims process take?",
      answer: "Every case is unique, but your lawyer will give you a realistic timeline during your free consultation. Straightforward claims often settle within 6-12 months, while more complex cases can take 18-24 months. The good news? Most clients see progress within the first few months, and your lawyer will keep you informed every step of the way."
    },
    {
      question: "What types of injury claims do you handle?",
      answer: "We handle all types of personal injury claims across Australia. This includes motor vehicle accidents, workplace injuries, medical malpractice, slip and fall accidents, product liability, public liability, workers' compensation, and assault claims. If you've been injured and it wasn't your fault, we can help connect you with the right specialist."
    },
    {
      question: "Do I need medical evidence to start a claim?",
      answer: "Not at all. While medical evidence strengthens your claim, you don't need it to get started. Many people begin the process before seeing a doctor. Your lawyer will guide you on what documentation you need and when. The important thing is to act now - the sooner you start, the better your chances of success."
    },
    {
      question: "What is 'No Win, No Fee' and how does it work?",
      answer: "It means zero financial risk for you. You don't pay any legal fees unless you win your case. If you win, your lawyer takes a percentage of your compensation (capped by law to protect you). If you don't win, you pay nothing. This means anyone can access quality legal representation, regardless of their financial situation."
    },
    {
      question: "How quickly will I be contacted after submitting my assessment?",
      answer: "Fast. We aim to connect you with a qualified specialist lawyer within one hour of submitting your assessment. You'll receive a call or text to schedule your free, no-obligation consultation. During this call, the lawyer will listen to your story, answer your questions, and explain your options."
    },
    {
      question: "Can I still make a claim if the incident happened a while ago?",
      answer: "Possibly, yes - but time is critical. In most Australian states, you have three years from the date of injury to start a claim. Miss this deadline and you could lose your right to compensation forever, even if you have a strong case and serious injuries. DON'T ASSUME IT'S TOO LATE. Different claim types have different time limits, and some circumstances pause the clock. Submit your free assessment now and we'll tell you exactly where you stand. The assessment takes 90 seconds but could save you thousands or tens of thousands in compensation."
    },
    {
      question: "What information do I need to provide for my assessment?",
      answer: "Very little. Our assessment takes just 90 seconds and asks simple questions about what type of injury you suffered, when it happened, whether you've seen a doctor, and how to contact you. That's it. You don't need documents, medical records, or detailed information at this stage. We'll match you with a lawyer who will help you gather everything else."
    },
    {
      question: "Will my case be accepted?",
      answer: "That depends on several factors, but most legitimate injury claims have merit. During your free consultation, the lawyer will assess: whether someone else was at fault, if you have evidence or witnesses, the severity of your injuries, and whether you're within the time limits. Even if your situation seems unclear, it's worth getting assessed. Many people think they don't have a case but actually do. The worst thing you can do is assume you can't claim and miss out on compensation you're legally entitled to receive."
    }
  ]

  return (
    <main>
      <Hero onCategoryClick={handleCategoryClick} />

      {/* Urgency Alert Bar */}
      <section className="urgency-bar">
        <div className="container">
          <div className="urgency-content">
            <svg className="clock-icon" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className="urgency-text">
              <strong>Time-Sensitive:</strong> Most Australian injury claims have a 3-year deadline from the date of injury.
              <button className="text-link" onClick={() => {
                const faqSection = document.querySelector('.faq-section')
                if (faqSection) {
                  faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}>
                Learn more about time limits →
              </button>
            </span>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Signals Bar */}
      <section className="trust-bar">
        <div className="container">
          <div className="trust-items-enhanced">
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="trust-content">
                <div className="trust-stat">Lawyer Responds Within 1 Hour</div>
                <div className="trust-detail">Average response time under 60 minutes</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="trust-content">
                <div className="trust-stat">No Win, No Fee Guaranteed</div>
                <div className="trust-detail">100% risk-free legal representation</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div className="trust-content">
                <div className="trust-stat">Top 5% of Australian PI Lawyers</div>
                <div className="trust-detail">Vetted specialists in your state</div>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
              </div>
              <div className="trust-content">
                <div className="trust-stat">4.9/5 Average Client Rating</div>
                <div className="trust-detail">All states and territories covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works: 3 Simple Steps</h2>
            <p className="section-subtitle">Get connected with a specialist lawyer and start your claim</p>
          </div>

          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Tell Us What Happened</h3>
                <p className="step-description">Complete our 90-second assessment. Simple questions, no legal jargon required.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Get Connected Fast</h3>
                <p className="step-description">We match you with a specialist lawyer in your area within one hour.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Claim Your Compensation</h3>
                <p className="step-description">Your lawyer handles everything. No upfront costs, you only pay if you win.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-points-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Injured and Unsure What to Do Next?</h2>
            <p className="section-subtitle">You're not alone. Most people feel this way after an injury.</p>
          </div>

          <div className="pain-points-grid">
            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 20v16M32 44v4" stroke="#2563eb" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="32" cy="44" r="2" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Confused About Your Rights</h3>
              <p className="pain-text">
                Not sure if you have a case or what you're entitled to? That's what specialist lawyers are for. Take the first step and get clarity.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 16v12M26 32h12M32 28c-6 0-10 4-10 8h20c0-4-4-8-10-8z" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="32" cy="48" r="2" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Worried About Legal Costs</h3>
              <p className="pain-text">
                Every lawyer in our network works on No Win, No Fee. You pay $0 upfront and $0 unless you win. Zero financial risk.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M22 28h20M22 36h20M22 44h12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <rect x="20" y="20" width="24" height="28" stroke="#2563eb" strokeWidth="2" fill="none" rx="2"/>
              </svg>
              <h3 className="pain-title">Overwhelmed by the Process</h3>
              <p className="pain-text">
                Forms, deadlines, medical reports, insurance companies - specialist lawyers handle all of this while you focus on recovery.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 12L12 20v14c0 10 7 18 20 22 13-4 20-12 20-22V20L32 12z" fill="#2563eb"/>
                <path d="M24 32l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <h3 className="pain-title">Unsure Who to Trust</h3>
              <p className="pain-text">
                We vet every lawyer in our network. Only the top 5% with proven track records, current licences, and stellar client reviews make it through.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <circle cx="32" cy="32" r="20" stroke="#2563eb" strokeWidth="3" fill="none"/>
                <path d="M32 20v12l8 8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="pain-title">Waiting Too Long to Act</h3>
              <p className="pain-text">
                Evidence disappears. Memories fade. Deadlines pass. Don't wait, it takes just 90 seconds to get started.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <rect x="16" y="24" width="32" height="20" rx="2" stroke="#2563eb" strokeWidth="3" fill="none"/>
                <path d="M24 24V20c0-4 4-8 8-8s8 4 8 8v4" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="32" cy="36" r="3" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Intimidated by Insurance Companies</h3>
              <p className="pain-text">
                Insurance companies want to pay as little as possible. Specialist lawyers know the real value of your claim and fight for what you deserve.
              </p>
            </div>
          </div>

          <div className="pain-points-cta">
            <p className="cta-intro">
              <strong>Sound familiar?</strong> Get the clarity and support you deserve.
            </p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Start Your Free Assessment Now
            </button>
            <p className="cta-reassurance">
              90 seconds | No obligation | Responds within 1 hour
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why 10,000+ Aussies Choose ClaimConnect</h2>
            <p className="section-subtitle">Making legal help accessible and risk-free for all Australians</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="stat-value">You Pay $0 Unless You Win</div>
              <div className="stat-label">Zero upfront costs. Zero risk. If you don't win, you don't pay.</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="stat-value">Lawyer Responds Within 60 Minutes</div>
              <div className="stat-label">Submit your assessment and get connected with a specialist lawyer within the hour.</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div className="stat-value">Only Australia's Top 5% of PI Lawyers</div>
              <div className="stat-label">Matched with vetted lawyers who have 10+ years experience, current practising certificates, and 4.5+ star ratings.</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div className="stat-value">Assessment Complete in 90 Seconds</div>
              <div className="stat-label">Answer 6 simple questions and we'll connect you with the right specialist for your injury type.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Real People. Real Results.</h2>
            <p className="section-subtitle">
              Don't take our word for it - hear from Australians who've successfully claimed compensation through our network
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">5/5</span>
              </div>
              <blockquote className="testimonial-text">
                "I was overwhelmed after my car accident. ClaimConnect matched me with a lawyer within 30 minutes. He handled everything and got me $87,000. I paid nothing upfront."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>SM</span>
                </div>
                <div className="author-info">
                  <strong className="author-name">Sarah M.</strong>
                  <span className="author-details">Sydney, NSW | Motor Vehicle Accident</span>
                  <span className="settlement-amount">$87,000 Settlement</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">5/5</span>
              </div>
              <blockquote className="testimonial-text">
                "My WorkCover claim was rejected twice. The lawyer ClaimConnect found for me won my appeal and I received $142,000 plus ongoing support. Life-changing."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>MT</span>
                </div>
                <div className="author-info">
                  <strong className="author-name">Michael T.</strong>
                  <span className="author-details">Melbourne, VIC | Workplace Injury</span>
                  <span className="settlement-amount">$142,000 Settlement</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">5/5</span>
              </div>
              <blockquote className="testimonial-text">
                "I didn't think I had a case. The free assessment took 2 minutes and a lawyer called me the same day. 14 months later, I settled for $63,000. So grateful I took that first step."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>JL</span>
                </div>
                <div className="author-info">
                  <strong className="author-name">Jennifer L.</strong>
                  <span className="author-details">Brisbane, QLD | Slip & Fall</span>
                  <span className="settlement-amount">$63,000 Settlement</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-cta">
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Start Your Free Assessment
            </button>
            <p className="cta-subtext-below">Join thousands of successful claimants</p>
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ClaimConnect</h2>
            <p className="section-subtitle">Professional support every step of the way</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-avatar-large">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#3b82f6"/>
                    <path d="M50 25L30 40v20c0 10 7 18 20 22 13-4 20-12 20-22V40L50 25z" fill="white"/>
                    <path d="M42 52l6 6 12-12" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <div className="author-header-info">
                  <h4 className="author-name">Zero Financial Risk</h4>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">Every lawyer works on a No Win, No Fee basis. You pay nothing unless your claim is successful.</p>
              </div>
              <div className="case-type">
                <svg className="case-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>100% Risk-Free</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-avatar-large">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#2563eb"/>
                    <path d="M35 45h30M35 55h30M35 65h20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M30 35h40v45H30z" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="author-header-info">
                  <h4 className="author-name">Expert Legal Support</h4>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">We match you with experienced personal injury specialists who handle all the legal complexity while you focus on recovery.</p>
              </div>
              <div className="case-type">
                <svg className="case-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Specialist Lawyers</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-avatar-large">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#3b82f6"/>
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="4" fill="none"/>
                    <path d="M50 30v20l15 10" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="author-header-info">
                  <h4 className="author-name">Time is Critical</h4>
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">Claims have strict time limits. Our 90-second assessment connects you with a lawyer within an hour.</p>
              </div>
              <div className="case-type">
                <svg className="case-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Act Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Injury Claims Guide */}
      <section className="claims-guide-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Personal Injury Claims We Handle</h2>
            <p className="section-subtitle">Expert legal representation for all types of personal injury claims across Australia</p>
          </div>

          <div className="claims-guide-grid">
            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
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
                </div>
                <h3 className="guide-title">Motor Vehicle Accidents</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Connect with CTP specialists who handle car collisions, motorcycle crashes, and pedestrian incidents. Secure compensation for medical costs, lost wages, and suffering.
                </p>
                <button
                  onClick={() => handleCategoryClick('motor-vehicle')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
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
                </div>
                <h3 className="guide-title">Workplace Injuries</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  WorkCover experts handle workplace accidents, repetitive strain, and occupational injuries. Secure maximum compensation and benefits for your claim.
                </p>
                <button
                  onClick={() => handleCategoryClick('workplace')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="24" fill="#2563eb"/>
                    <rect x="28" y="18" width="8" height="28" rx="2" fill="white"/>
                    <rect x="18" y="28" width="28" height="8" rx="2" fill="white"/>
                  </svg>
                </div>
                <h3 className="guide-title">Medical Malpractice</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Specialists handle surgical errors, misdiagnosis, medication mistakes, and birth injuries. Hold medical professionals accountable for substandard care.
                </p>
                <button
                  onClick={() => handleCategoryClick('medical-malpractice')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 12L12 52c-0.5 1 0.2 2 1.5 2h37c1.3 0 2-1 1.5-2L32 12z" fill="#f59e0b"/>
                    <rect x="30" y="26" width="4" height="14" rx="2" fill="white"/>
                    <circle cx="32" cy="46" r="2.5" fill="white"/>
                  </svg>
                </div>
                <h3 className="guide-title">Slip & Fall Accidents</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Hold property owners accountable for unsafe conditions. Claims for shopping centres, restaurants, workplaces, and public spaces.
                </p>
                <button
                  onClick={() => handleCategoryClick('slip-fall')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 16l-3.5 2-3.5 2-3.5 2-3.5 2v12l3.5 2 3.5 2 3.5 2 3.5 2 3.5-2 3.5-2 3.5-2 3.5-2V24l-3.5-2-3.5-2-3.5-2-3.5-2z" fill="#2563eb"/>
                    <path d="M32 16v16m0 0l-14-8m14 8l14-8" stroke="#1e40af" strokeWidth="2" opacity="0.5"/>
                    <path d="M18 42l14 8 14-8" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="guide-title">Product Liability</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Hold manufacturers accountable for defective consumer products, medical devices, dangerous toys, and vehicle defects.
                </p>
                <button
                  onClick={() => handleCategoryClick('product-liability')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 28L32 16l20 12v2H12v-2z" fill="#2563eb"/>
                    <rect x="14" y="48" width="36" height="4" rx="1" fill="#2563eb"/>
                    <rect x="18" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
                    <rect x="26" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
                    <rect x="34" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
                    <rect x="42" y="30" width="4" height="18" rx="1" fill="#2563eb"/>
                  </svg>
                </div>
                <h3 className="guide-title">Public Liability</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Hold councils and businesses accountable for unsafe public spaces including parks, pools, sports facilities, and government buildings.
                </p>
                <button
                  onClick={() => handleCategoryClick('public-liability')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 12L12 20v14c0 10 7 18 20 22 13-4 20-12 20-22V20L32 12z" fill="#2563eb"/>
                    <path d="M24 32l6 6 12-12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="guide-title">Workers' Compensation</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Maximize WorkCover benefits including wage replacement, medical costs, and lump sum payments for workplace injuries and occupational diseases.
                </p>
                <button
                  onClick={() => handleCategoryClick('workers-comp')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="claim-guide-card">
              <div className="guide-card-header">
                <div className="guide-icon">
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="30" y="18" width="4" height="32" rx="1" fill="#2563eb"/>
                    <circle cx="32" cy="16" r="3" fill="#2563eb"/>
                    <path d="M20 28l-6 10h12l-6-10z" fill="#2563eb"/>
                    <path d="M44 28l-6 10h12l-6-10z" fill="#2563eb"/>
                    <line x1="20" y1="28" x2="32" y2="28" stroke="#2563eb" strokeWidth="3"/>
                    <line x1="32" y1="28" x2="44" y2="28" stroke="#2563eb" strokeWidth="3"/>
                    <rect x="26" y="48" width="12" height="3" rx="1.5" fill="#2563eb"/>
                  </svg>
                </div>
                <h3 className="guide-title">Assault Claims</h3>
              </div>
              <div className="guide-content">
                <p className="guide-description">
                  Support for physical assault injuries, psychological trauma, and security negligence claims.
                </p>
                <button
                  onClick={() => handleCategoryClick('assault')}
                  className="guide-cta-button guide-cta-button-action"
                >
                  Start Your Assessment
                  <svg className="cta-arrow" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Get answers to common questions about personal injury claims</p>
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
            <p className="faq-cta-text">Still have questions? Talk to a lawyer - it's free with no obligation.</p>
            <button className="btn btn-white btn-large" onClick={handleStartClaim}>
              Start Your Free Assessment
            </button>
            <p className="cta-subtext-below" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>6 questions | No commitment</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Contact Form */}
      <section className="final-cta-section" id="claim-form">
        <div className="container">
          <div className="final-cta-wrapper">
            <div className="final-cta-text">
              <h2 className="final-cta-title">Take the First Step Towards Your Compensation</h2>
              <p className="final-cta-description">
                Don't let time run out on your claim. Fill out the form to connect with a specialist lawyer who will fight for the compensation you deserve.
              </p>
              <div className="final-cta-benefits">
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Connected within 1 hour</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>No win, no fee guarantee</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Zero obligation or upfront cost</span>
                </div>
              </div>
              <p className="final-cta-urgency">
                <svg className="urgency-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Time limits apply. Most claims have a 3-year deadline.
              </p>
            </div>
            <div className="final-cta-form-wrapper">
              <SimpleContactForm />
            </div>
          </div>
        </div>
      </section>

      <ClaimFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseModal}
        preselectedCategory={preselectedCategory}
      />
    </main>
  )
}

export default HomePage