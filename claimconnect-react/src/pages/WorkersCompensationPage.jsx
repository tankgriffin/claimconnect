import { useState, useCallback, memo } from 'react'
import ClaimFormModal from '../components/ClaimFormModal'
import SimpleContactForm from '../components/SimpleContactForm'

/**
 * Workers Compensation Lawyer Landing Page
 *
 * SEO Meta:
 * - Title: Workers Compensation Lawyers | Free Case Review | ClaimConnect
 * - Description: Injured at work? Get a free case review with our workers compensation lawyers. No win no fee. We help you secure benefits fast. Call today.
 *
 * Schema Types: Service, LocalBusiness, FAQPage
 *
 * Target Keywords:
 * - Primary: workers compensation lawyer, workers compensation, workers comp lawyer,
 *   work injury lawyer, workplace injury claim, workers compensation claim, work comp claim
 * - Secondary: work injury compensation, denied workers comp claim, WorkCover help,
 *   workplace injury rights, no win no fee lawyer, workplace accident compensation
 */
const WorkersCompensationPage = () => {
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

  // Section 7: Who We Help - Scenarios covering all personas
  const whoWeHelp = [
    {
      icon: '🚨',
      title: 'Recently Injured at Work',
      description: 'Just had an accident on the job? We help you understand your rights immediately, lodge your claim correctly, and start receiving benefits fast.'
    },
    {
      icon: '❌',
      title: 'Denied or Delayed Claims',
      description: 'Had your workers compensation claim rejected or stalled? Our lawyers have overturned thousands of denied claims and know how to challenge insurers effectively.'
    },
    {
      icon: '🧠',
      title: 'Psychological Injuries',
      description: 'Suffering from workplace stress, anxiety, depression, or PTSD from bullying or trauma? These are valid claims and we can help you get the support you deserve.'
    },
    {
      icon: '📅',
      title: 'Long-Term or Worsening Injuries',
      description: 'Developed an injury over years of work or have a condition that has gotten worse? Repetitive strain, hearing loss, and occupational diseases are all claimable.'
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Members Seeking Help',
      description: 'Looking for help on behalf of an injured loved one? We provide compassionate support and clear communication throughout the entire process.'
    },
    {
      icon: '⚖️',
      title: 'Complex Multi-Party Claims',
      description: 'Injury involving contractors, multiple employers, or third parties? Our experienced lawyers handle complex cases and ensure all liable parties are held accountable.'
    }
  ]

  // Section 4: What You Can Claim - Compensation types
  const compensationTypes = [
    {
      icon: '💵',
      title: 'Weekly Payments',
      description: 'Income support while you recover, typically a percentage of your pre-injury wages. We help ensure you receive the correct amount without delays.'
    },
    {
      icon: '🏥',
      title: 'Medical Expenses',
      description: 'All reasonable medical costs including GP visits, specialist appointments, hospital stays, medications, and diagnostic tests like X-rays and MRIs.'
    },
    {
      icon: '🔧',
      title: 'Surgery & Rehabilitation',
      description: 'Surgical procedures, physiotherapy, occupational therapy, psychological treatment, and any other rehabilitation services needed for your recovery.'
    },
    {
      icon: '🚗',
      title: 'Travel Costs',
      description: 'Reimbursement for travel to medical appointments, rehabilitation sessions, and any other treatment-related travel expenses.'
    },
    {
      icon: '💰',
      title: 'Permanent Impairment Lump Sum',
      description: 'If your injury results in permanent impairment, you may be entitled to a lump sum payment based on the degree of whole person impairment.'
    },
    {
      icon: '🔄',
      title: 'Return-to-Work Support',
      description: 'Retraining programs, job placement assistance, workplace modifications, and graduated return-to-work plans to help you get back on your feet.'
    }
  ]

  // Section 5: Our Process - 4 simple steps
  const processSteps = [
    {
      number: 1,
      title: 'Free Case Review',
      description: 'Complete our simple assessment form or call us directly. Within hours, a workers compensation lawyer will review your case and explain your options—completely free and with no obligation.'
    },
    {
      number: 2,
      title: 'We Handle Everything',
      description: 'Your lawyer takes over all communication with insurers, employers, and WorkCover. We gather evidence, obtain medical reports, and build the strongest possible case while you focus on recovery.'
    },
    {
      number: 3,
      title: 'We Secure Your Benefits',
      description: 'We fight for every benefit you are entitled to—weekly payments, medical expenses, rehabilitation, and lump sum compensation. If your claim was denied, we challenge the decision and advocate fiercely on your behalf.'
    },
    {
      number: 4,
      title: 'No Win, No Fee',
      description: 'You pay nothing unless we win your claim. Our fee comes from your compensation, and only if we succeed. Zero financial risk means you can access expert legal help regardless of your situation.'
    }
  ]

  // Section 9: Success Stories / Testimonials
  const successStories = [
    {
      initial: 'MK',
      name: 'Michael K.',
      location: 'Sydney, NSW',
      type: 'Back Injury - Construction',
      amount: '$285,000',
      description: '"I hurt my back lifting heavy materials on a building site. WorkCover accepted my claim but kept trying to cut my payments. The lawyer ClaimConnect found me fought back and secured a massive lump sum settlement plus ongoing treatment. I finally feel like I can move forward."'
    },
    {
      initial: 'SL',
      name: 'Sarah L.',
      location: 'Melbourne, VIC',
      type: 'Psychological Injury - Workplace Bullying',
      amount: '$145,000',
      description: '"The bullying at work left me with severe anxiety and depression. I thought no one would believe me. My lawyer understood exactly what I was going through, gathered the evidence, and proved my case. I received compensation for lost wages and ongoing psychological treatment."'
    },
    {
      initial: 'RC',
      name: 'Robert C.',
      location: 'Brisbane, QLD',
      type: 'Denied Claim - Factory Accident',
      amount: '$210,000',
      description: '"My hand got caught in machinery and the insurer denied my claim saying I was at fault. I was devastated—no income, mounting bills, surgery needed. ClaimConnect connected me with a lawyer who proved the machine had faulty guards. They overturned the denial and got me everything I deserved."'
    }
  ]

  // Section 8: FAQs - Addressing all common objections
  const faqs = [
    {
      question: "Can I lose my job for making a workers compensation claim?",
      answer: "No. It is illegal for your employer to fire, demote, or discriminate against you for making a legitimate workers compensation claim. You have legal protections under workplace laws that specifically prevent employer retaliation. If your employer does take adverse action against you because of your claim, you may have grounds for additional legal action. Many workers are afraid of this, but the law is firmly on your side. A workers compensation lawyer can advise you on your rights and ensure you are protected throughout the claims process."
    },
    {
      question: "How much does a workers compensation lawyer cost?",
      answer: "Nothing upfront, and nothing unless you win. All workers compensation lawyers in our network work on a No Win, No Fee basis. This means you pay no legal fees unless your claim is successful. If we win your claim, our fee comes as a percentage of your compensation—and these fees are regulated and capped to protect you. This arrangement removes all financial risk and ensures you can access expert legal representation regardless of your current financial situation."
    },
    {
      question: "How long does a workers compensation claim take?",
      answer: "The timeline varies depending on the complexity of your case. Simple claims with straightforward injuries and accepted liability may be resolved in a few months. More complex claims involving denied benefits, permanent impairment assessments, or disputes with insurers can take 12-24 months. What matters most is getting the right outcome, not rushing to a premature settlement. Your lawyer will give you an honest timeline during your free consultation and keep you informed at every stage."
    },
    {
      question: "What if my workers compensation claim was denied?",
      answer: "Do not accept a denial as final—many denied claims are successfully overturned with proper legal representation. Insurers deny claims for various reasons, sometimes incorrectly or unfairly. A specialist workers compensation lawyer will review the denial, identify the grounds for appeal, gather additional evidence, and challenge the decision through the appropriate dispute resolution process. We have helped thousands of workers overturn denied claims and secure the compensation they were entitled to all along."
    },
    {
      question: "What injuries are covered by workers compensation?",
      answer: "Workers compensation covers a wide range of injuries and illnesses that arise out of or in the course of your employment. This includes physical injuries from accidents (fractures, cuts, burns, back injuries), repetitive strain injuries developed over time, occupational diseases (hearing loss, respiratory conditions), and psychological injuries (stress, anxiety, depression, PTSD from workplace trauma or bullying). Even if you are unsure whether your condition qualifies, get a free case review—you may be entitled to more than you think."
    },
    {
      question: "What if the workplace accident was partly my fault?",
      answer: "You can still claim workers compensation even if you contributed to the accident. Workers compensation is generally a 'no-fault' system, meaning you do not need to prove your employer was negligent. As long as the injury occurred at work or because of your work, you are typically entitled to benefits. There are some limited exceptions (like serious misconduct or being under the influence of drugs/alcohol), but these are rare. Do not assume you cannot claim—speak to a lawyer who can properly assess your situation."
    },
    {
      question: "What happens after I submit my details for a free case review?",
      answer: "Within hours of submitting your details, a workers compensation lawyer will contact you by phone to discuss your case. This initial consultation is completely free and carries no obligation. The lawyer will ask about your injury, your employment situation, and what has happened so far with any claims. They will then explain your rights, assess whether you have a valid claim, outline what compensation you may be entitled to, and recommend the best next steps. If you choose to proceed, they handle everything from there."
    },
    {
      question: "Do I need to see a specific doctor for my workers compensation claim?",
      answer: "You have the right to see your own treating doctor for your work injury. Your employer or insurer may ask you to attend an Independent Medical Examination (IME) with a doctor of their choosing, and you are generally required to attend these. However, your own doctor's opinions and reports are important evidence in your claim. A workers compensation lawyer can advise you on medical appointments, help you obtain the right specialist reports, and ensure that medical evidence supports your claim."
    },
    {
      question: "Is it too late to make a workers compensation claim?",
      answer: "There are time limits for workers compensation claims, and these vary by state—generally ranging from 6 months to 3 years depending on the type of benefit you are claiming. However, there are often exceptions that can extend these limits, particularly if you only recently became aware that your condition was related to your work. Do not assume it is too late without speaking to a lawyer. Many workers who thought they had missed the deadline have still been able to claim. Get a free assessment now to understand your options."
    },
    {
      question: "What is the difference between workers compensation and a common law claim?",
      answer: "Workers compensation provides statutory benefits like weekly payments and medical expenses—you receive these regardless of who was at fault. A common law claim is a separate legal action where you sue your employer for negligence and can receive additional compensation for pain and suffering, loss of future earning capacity, and other damages. Common law claims have higher compensation potential but require proving your employer was negligent. In many cases, you may be entitled to both. A specialist lawyer will assess whether a common law claim is right for your situation."
    },
    {
      question: "Will making a claim affect my relationship with my employer?",
      answer: "We understand this is a major concern. The good news is that most employers are insured for workers compensation, so the costs are covered by their insurer, not out of their pocket. Many claims proceed smoothly without any negative impact on the employment relationship. Your lawyer handles all communication with insurers and can act as a buffer if needed. You are legally protected from retaliation, and a professional, legally-handled claim often results in better outcomes for everyone."
    },
    {
      question: "What if I am not sure my injury qualifies for workers compensation?",
      answer: "If you are unsure, the best thing to do is get a free case review. Many workers underestimate what they can claim or assume their injury 'is not serious enough.' Workers compensation covers everything from minor injuries requiring time off work to permanent impairments and psychological conditions. The assessment is free, confidential, and carries no obligation. Within hours, you will know exactly where you stand and what your options are."
    }
  ]

  return (
    <main>
      {/* ================================================================
          SECTION 1: HERO SECTION
          Goal: Immediate relevance + reassurance + CTA
          ================================================================ */}
      <section className="category-hero category-hero-with-form">
        <div className="container">
          <div className="hero-two-column-wrapper">
            <div className="hero-content-left">
              <div className="category-icon-large">⚖️</div>
              <h1 className="hero-title">Workers Compensation Lawyers Who Fight For Your Rights and Benefits</h1>
              <p className="hero-subtitle">Injured at work? Get a free case review today. We help you secure weekly payments, medical expenses, and lump sum compensation—with zero financial risk.</p>
              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span className="trust-text">No Win, No Fee Guarantee</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span className="trust-text">Free Case Review Within Hours</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span className="trust-text">Experienced WorkCover Specialists</span>
                </div>
              </div>
            </div>
            <div className="hero-form-right">
              <div className="hero-form-card">
                <SimpleContactForm preselectedClaimType="workers-compensation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time-Sensitive Alert Bar */}
      <section className="urgency-bar">
        <div className="container">
          <div className="urgency-content">
            <svg className="clock-icon" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className="urgency-text">
              <strong>Important:</strong> Workers compensation claims have time limits. Report your injury and seek legal advice as soon as possible to protect your entitlements.
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: IDENTIFY THE PAIN (EMOTIONAL HOOK)
          Acknowledge what they're facing with empathetic language
          ================================================================ */}
      <section className="pain-points-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">We Understand What You Are Going Through</h2>
            <p className="section-subtitle">A workplace injury affects every part of your life. You are not alone, and you deserve support.</p>
          </div>

          <div className="pain-points-grid">
            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 20v16M32 44v4" stroke="#2563eb" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="32" cy="44" r="2" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Worried About Money and Bills?</h3>
              <p className="pain-text">
                An injury that stops you from working creates real financial stress. You need income to pay your bills, support your family, and cover unexpected medical costs. We help you secure weekly payments fast so you can focus on recovery, not finances.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 16v12M26 32h12M32 28c-6 0-10 4-10 8h20c0-4-4-8-10-8z" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <circle cx="32" cy="48" r="2" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Confused by WorkCover Rules?</h3>
              <p className="pain-text">
                Workers compensation systems are complicated. Different forms, deadlines, medical assessments, and insurer requirements—it is overwhelming when you are injured. Our lawyers cut through the confusion and handle everything for you, step by step.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <rect x="16" y="24" width="32" height="20" rx="2" stroke="#2563eb" strokeWidth="3" fill="none"/>
                <path d="M24 24V20c0-4 4-8 8-8s8 4 8 8v4" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="32" cy="36" r="3" fill="#2563eb"/>
              </svg>
              <h3 className="pain-title">Stressed Dealing with Insurers?</h3>
              <p className="pain-text">
                Insurance companies do not always have your best interests at heart. They may delay payments, dispute your claim, or pressure you to settle for less than you deserve. A workers compensation lawyer levels the playing field and ensures you are treated fairly.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M22 28h20M22 36h20M22 44h12" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                <rect x="20" y="20" width="24" height="28" stroke="#2563eb" strokeWidth="2" fill="none" rx="2"/>
              </svg>
              <h3 className="pain-title">Afraid of Losing Your Job?</h3>
              <p className="pain-text">
                Many workers fear employer retaliation for making a claim. The law protects you from being fired or discriminated against for claiming your entitlements. We help you understand your rights and ensure you are protected throughout the process.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <circle cx="32" cy="32" r="20" stroke="#2563eb" strokeWidth="3" fill="none"/>
                <path d="M32 20v12l8 8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="pain-title">Not Sure If You Can Claim?</h3>
              <p className="pain-text">
                Whether your injury happened recently or developed over time, you may be entitled to compensation. Many workers underestimate what they can claim. Our free case review gives you clarity—within hours, you will know exactly where you stand.
              </p>
            </div>

            <div className="pain-point-card">
              <svg className="pain-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#dbeafe"/>
                <path d="M32 12L12 20v14c0 10 7 18 20 22 13-4 20-12 20-22V20L32 12z" fill="#2563eb"/>
                <path d="M24 32l6 6 12-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <h3 className="pain-title">Had Your Claim Denied?</h3>
              <p className="pain-text">
                A denied claim is not the end of the road. Insurers reject claims for many reasons—sometimes unfairly. Our lawyers have overturned thousands of denied workers compensation claims. We know how to fight back and win.
              </p>
            </div>
          </div>

          <div className="pain-points-cta">
            <p className="cta-intro">
              <strong>You deserve support.</strong> Do not struggle through this alone. Get expert help today—completely free.
            </p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Get Your Free Case Review Now
            </button>
            <p className="cta-reassurance">
              No obligation | No cost unless you win | Lawyer responds within hours
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: HOW WE HELP
          Simple, clear, outcome-focused benefits
          ================================================================ */}
      <section className="how-we-help-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Our Workers Compensation Lawyers Help You</h2>
            <p className="section-subtitle">We take the burden off your shoulders so you can focus on getting better</p>
          </div>

          <div className="help-grid">
            <div className="help-card">
              <div className="help-icon">📋</div>
              <h3>We Handle Your Claim From Start to Finish</h3>
              <p>From lodging paperwork to gathering medical evidence, we manage every aspect of your workers compensation claim. You do not have to navigate the system alone.</p>
            </div>

            <div className="help-card">
              <div className="help-icon">📞</div>
              <h3>We Deal With Insurers So You Do Not Have To</h3>
              <p>No more stressful phone calls or confusing letters. We handle all communication with insurers and WorkCover on your behalf, ensuring your interests are always protected.</p>
            </div>

            <div className="help-card">
              <div className="help-icon">💰</div>
              <h3>We Secure Your Weekly Payments and Medical Costs</h3>
              <p>We fight to ensure you receive the income support and medical coverage you are entitled to—quickly and without unnecessary delays.</p>
            </div>

            <div className="help-card">
              <div className="help-icon">⚔️</div>
              <h3>We Challenge Denied or Unfair Claims</h3>
              <p>Had your claim rejected or underpaid? We have successfully overturned thousands of denied claims. Our lawyers know how to challenge insurers and win.</p>
            </div>

            <div className="help-card">
              <div className="help-icon">🎯</div>
              <h3>We Maximise Your Lump Sum Compensation</h3>
              <p>If you have a permanent impairment, we ensure you receive the full lump sum compensation you deserve—not a cent less than your entitlement.</p>
            </div>

            <div className="help-card">
              <div className="help-icon">✅</div>
              <h3>We Give You Fast Clarity on Your Eligibility</h3>
              <p>Within hours of your free case review, you will know exactly what you can claim, what your rights are, and what to expect. No more uncertainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: WHAT YOU CAN CLAIM
          Clear breakdown of compensation types
          ================================================================ */}
      <section className="compensation">
        <div className="container">
          <div className="compensation-content">
            <div className="compensation-text">
              <h2 className="section-title">What Workers Compensation Benefits Are You Entitled To?</h2>
              <p className="section-subtitle">Injured workers in Australia can claim a range of benefits. Here is what you may be entitled to:</p>

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

              <div className="compensation-cta">
                <p><strong>Not sure what you can claim?</strong> Our free case review will tell you exactly what benefits you may be entitled to.</p>
                <button className="btn btn-primary" onClick={handleStartClaim}>
                  Find Out What You Can Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: OUR PROCESS
          4 simple steps - must feel easy, not overwhelming
          ================================================================ */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Your Workers Compensation Claim Works</h2>
            <p className="section-subtitle">A simple, clear process from your first call to securing your benefits</p>
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

          <div className="process-cta">
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Start Step 1: Get Your Free Case Review
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: WHY CHOOSE US
          USPs + Social Proof with trust elements
          ================================================================ */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ClaimConnect for Your Workers Compensation Claim?</h2>
            <p className="section-subtitle">We connect you with experienced lawyers who deliver results</p>
          </div>

          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon">⭐</div>
              <h3>Experienced Workers Compensation Lawyers</h3>
              <p>Our network includes specialist lawyers with decades of combined experience handling WorkCover claims across all Australian states.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">👤</div>
              <h3>Direct Access to Senior Lawyers</h3>
              <p>Your case is handled by experienced lawyers, not junior staff. You get expert advice and representation from day one.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">💯</div>
              <h3>No Win, No Fee—Zero Risk</h3>
              <p>You pay nothing upfront and nothing unless we win your claim. Access expert legal help with zero financial risk.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">💬</div>
              <h3>Clear, Compassionate Communication</h3>
              <p>We explain everything in plain English, keep you informed at every stage, and are always available to answer your questions.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">🏆</div>
              <h3>Thousands of Successful Claims</h3>
              <p>Our lawyers have helped thousands of injured workers secure the compensation they deserve—including overturning denied claims.</p>
            </div>

            <div className="usp-card">
              <div className="usp-icon">📍</div>
              <h3>Local WorkCover Expertise</h3>
              <p>Workers compensation laws vary by state. Our lawyers have deep knowledge of local WorkCover systems and know how to navigate them effectively.</p>
            </div>
          </div>

          <div className="trust-badges">
            <div className="trust-badge">
              <div className="badge-content">
                <span className="badge-number">4.9</span>
                <span className="badge-stars">★★★★★</span>
              </div>
              <span className="badge-label">Google Rating</span>
            </div>
            <div className="trust-badge">
              <div className="badge-content">
                <span className="badge-number">5,000+</span>
              </div>
              <span className="badge-label">Claims Handled</span>
            </div>
            <div className="trust-badge">
              <div className="badge-content">
                <span className="badge-number">25+</span>
              </div>
              <span className="badge-label">Years Experience</span>
            </div>
            <div className="trust-badge">
              <div className="badge-content">
                <span className="badge-number">98%</span>
              </div>
              <span className="badge-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: WHO WE HELP
          Scenarios covering all personas
          ================================================================ */}
      <section className="who-we-help-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Who We Help With Workers Compensation Claims</h2>
            <p className="section-subtitle">No matter your situation, we can help. Here are some of the workers we assist:</p>
          </div>

          <div className="who-we-help-grid">
            {whoWeHelp.map((item, index) => (
              <div key={index} className="who-card">
                <div className="who-icon">{item.icon}</div>
                <h3 className="who-title">{item.title}</h3>
                <p className="who-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="who-cta">
            <p><strong>Do not see your situation listed?</strong> Get in touch anyway. Our lawyers can assess any work-related injury or illness.</p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Tell Us About Your Situation
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: FAQ SECTION
          Address objections, reduce fear, encourage next steps
          ================================================================ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Workers Compensation Claims: Your Questions Answered</h2>
            <p className="section-subtitle">Get clear answers to the most common questions about workplace injury claims</p>
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
            <p className="faq-cta-text">Still have questions about your workers compensation claim?</p>
            <button className="btn btn-white btn-large" onClick={handleStartClaim}>
              Speak With a Workers Compensation Lawyer for Free
            </button>
            <p className="cta-subtext-below">No obligation | Completely confidential | Lawyer responds within hours</p>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9: SUCCESS STORIES / TESTIMONIALS
          Real results for social proof near final CTA
          ================================================================ */}
      <section className="success-stories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Real Workers, Real Results</h2>
            <p className="section-subtitle">See how ClaimConnect helped injured workers just like you secure the compensation they deserved</p>
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
                    <p className="author-details">{story.type} | {story.location}</p>
                    <p className="settlement-amount">{story.amount} Settlement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 10: FINAL CTA SECTION
          Strong, simple, reassuring final call to action
          ================================================================ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get the Workers Compensation You Deserve?</h2>
            <p className="cta-subtitle">
              Stop struggling with insurers and paperwork alone. Our experienced workers compensation lawyers are ready to fight for your rights—and you pay nothing unless we win.
            </p>
            <button className="btn btn-primary btn-large" onClick={handleStartClaim}>
              Get Your Free Case Review Now
            </button>
            <p className="cta-disclaimer">
              No win, no fee. 100% confidential. We handle everything.
            </p>

            <div className="final-trust-row">
              <div className="final-trust-item">
                <span className="trust-check">✓</span>
                <span>Free Case Review</span>
              </div>
              <div className="final-trust-item">
                <span className="trust-check">✓</span>
                <span>No Win, No Fee</span>
              </div>
              <div className="final-trust-item">
                <span className="trust-check">✓</span>
                <span>Expert WorkCover Lawyers</span>
              </div>
              <div className="final-trust-item">
                <span className="trust-check">✓</span>
                <span>Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClaimFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseModal}
        preselectedCategory="workers-compensation"
      />
    </main>
  )
}

export default memo(WorkersCompensationPage)
