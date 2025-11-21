import { useState, useEffect, useCallback, memo, useMemo } from 'react'

const ClaimFormModal = memo(({ isOpen, onClose, preselectedCategory = '' }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    injury_type: preselectedCategory,
    incident_date: '',
    medical_attention: '',
    current_treatment: '',
    unable_to_work: '',
    spoken_to_lawyer: '',
    admitted_fault: '',
    insurance_coverage: '',
    full_name: '',
    phone_number: '',
    email: '',
    state: '',
    contact_time: [],
    incident_description: '',
    privacy_consent: false,
    marketing_consent: false
  })
  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const totalSteps = 5

  const categories = useMemo(() => [
    { value: 'motor-vehicle', label: 'Motor Vehicle Accidents', icon: '🚗' },
    { value: 'workplace', label: 'Workplace Injuries', icon: '🏢' },
    { value: 'medical-malpractice', label: 'Medical Malpractice', icon: '🏥' },
    { value: 'slip-fall', label: 'Slip & Fall Accidents', icon: '⚠️' },
    { value: 'product-liability', label: 'Product Liability', icon: '📦' },
    { value: 'public-liability', label: 'Public Liability', icon: '🏛️' },
    { value: 'workers-compensation', label: 'Workers\' Compensation', icon: '🛡️' },
    { value: 'assault-claims', label: 'Assault Claims', icon: '⚖️' }
  ], [])

  const australianStates = useMemo(() => [
    { value: 'NSW', label: 'New South Wales' },
    { value: 'VIC', label: 'Victoria' },
    { value: 'QLD', label: 'Queensland' },
    { value: 'WA', label: 'Western Australia' },
    { value: 'SA', label: 'South Australia' },
    { value: 'TAS', label: 'Tasmania' },
    { value: 'NT', label: 'Northern Territory' },
    { value: 'ACT', label: 'Australian Capital Territory' }
  ], [])

  useEffect(() => {
    if (preselectedCategory) {
      setFormData(prev => ({ ...prev, injury_type: preselectedCategory }))
    }
  }, [preselectedCategory])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target

    if (name === 'contact_time[]') {
      setFormData(prev => {
        const currentContactTimes = prev.contact_time || []
        if (checked) {
          return {
            ...prev,
            contact_time: [...currentContactTimes, value]
          }
        } else {
          return {
            ...prev,
            contact_time: currentContactTimes.filter(time => time !== value)
          }
        }
      })
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }

    // Clear error when user starts typing
    setErrors(prev => {
      if (prev[name]) {
        const { [name]: removed, ...rest } = prev
        return rest
      }
      return prev
    })
  }, [])

  const handleCategorySelect = useCallback((categoryValue) => {
    setFormData(prev => ({ ...prev, injury_type: categoryValue }))
    setErrors(prev => {
      if (prev.injury_type) {
        const { injury_type, ...rest } = prev
        return rest
      }
      return prev
    })
  }, [])

  const validateStep = useCallback((step) => {
    const newErrors = {}

    switch (step) {
      case 1:
        if (!formData.injury_type) {
          newErrors.injury_type = 'Please select an injury type'
        }
        break
      case 2:
        if (!formData.incident_date) newErrors.incident_date = 'This field is required'
        if (!formData.medical_attention) newErrors.medical_attention = 'This field is required'
        if (!formData.current_treatment) newErrors.current_treatment = 'This field is required'
        if (!formData.unable_to_work) newErrors.unable_to_work = 'This field is required'
        break
      case 3:
        if (!formData.spoken_to_lawyer) newErrors.spoken_to_lawyer = 'This field is required'
        if (!formData.admitted_fault) newErrors.admitted_fault = 'This field is required'
        if (!formData.insurance_coverage) newErrors.insurance_coverage = 'This field is required'
        break
      case 4:
        if (!formData.full_name.trim()) newErrors.full_name = 'This field is required'
        if (!formData.phone_number.trim()) newErrors.phone_number = 'This field is required'
        if (!formData.email.trim()) newErrors.email = 'This field is required'
        if (!formData.state) newErrors.state = 'This field is required'
        
        // Email validation
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
        
        // Phone validation
        if (formData.phone_number && !/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.phone_number)) {
          newErrors.phone_number = 'Please enter a valid phone number'
        }
        break
      case 5:
        if (!formData.privacy_consent) {
          newErrors.privacy_consent = 'You must agree to the privacy policy'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const goToNextStep = useCallback(() => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }, [validateStep, currentStep])

  const goToPreviousStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    if (validateStep(currentStep)) {
      // Process form submission
      console.log('Form submitted:', {
        ...formData,
        timestamp: new Date().toISOString()
      })
      setShowSuccess(true)
    }
  }, [validateStep, currentStep, formData])

  const resetForm = useCallback(() => {
    setCurrentStep(1)
    setFormData({
      injury_type: '',
      incident_date: '',
      medical_attention: '',
      current_treatment: '',
      unable_to_work: '',
      spoken_to_lawyer: '',
      admitted_fault: '',
      insurance_coverage: '',
      full_name: '',
      phone_number: '',
      email: '',
      state: '',
      contact_time: [],
      incident_description: '',
      privacy_consent: false,
      marketing_consent: false
    })
    setErrors({})
    setShowSuccess(false)
  }, [])

  const handleClose = useCallback(() => {
    resetForm()
    onClose()
  }, [resetForm, onClose])

  if (!isOpen) return null

  if (showSuccess) {
    return (
      <div className={`form-modal ${isOpen ? 'active' : ''}`}>
        <div className="form-modal-content success-modal">
          <div className="success-message">
            <div className="success-icon-wrapper">
              <div className="success-icon-circle">
                <svg className="success-checkmark" viewBox="0 0 52 52">
                  <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
            </div>

            <h3 className="success-title">Assessment Submitted Successfully!</h3>

            <div className="success-alert">
              <svg className="alert-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <div>
                <strong>We'll Contact You Within 1 Hour</strong>
                <p>A qualified legal professional will call or text you shortly to discuss your case.</p>
              </div>
            </div>

            <div className="success-details">
              <div className="success-detail-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Free Initial Consultation</span>
              </div>
              <div className="success-detail-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>No Win, No Fee Guarantee</span>
              </div>
              <div className="success-detail-item">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>No Obligation to Proceed</span>
              </div>
            </div>

            <div className="success-info-box">
              <p>
                <strong>What happens next?</strong><br/>
                Your case details have been sent to our network of experienced lawyers.
                You'll receive a call within 1 hour to discuss your situation and next steps.
              </p>
            </div>

            <button className="btn btn-primary btn-large" onClick={handleClose}>
              Got It, Thanks!
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`form-modal ${isOpen ? 'active' : ''}`}>
      <div className="form-modal-content">
        <div className="form-modal-header">
          <h3 className="form-title">Get Your Free Legal Assessment</h3>
          <button className="close-modal" onClick={handleClose}>&times;</button>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
          <div className="progress-steps">
            {[
              { num: 1, label: 'Type', icon: '📋' },
              { num: 2, label: 'Details', icon: '📝' },
              { num: 3, label: 'Situation', icon: '⚖️' },
              { num: 4, label: 'Contact', icon: '📞' },
              { num: 5, label: 'Review', icon: '✓' }
            ].map(step => (
              <div
                key={step.num}
                className={`progress-step ${
                  step.num < currentStep ? 'completed' :
                  step.num === currentStep ? 'active' : ''
                }`}
              >
                <div className="step-circle">
                  {step.num < currentStep ? (
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  ) : (
                    <span className="step-icon">{step.icon}</span>
                  )}
                </div>
                <span className="step-label">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <form className="claim-form" onSubmit={handleSubmit}>
          {/* Step 1: Injury Type Selection */}
          {currentStep === 1 && (
            <div className="form-step active">
              <h4 className="step-title">What type of injury or incident brings you here today?</h4>
              <div className="category-selection">
                {categories.map(category => (
                  <div 
                    key={category.value}
                    className={`category-option ${formData.injury_type === category.value ? 'selected' : ''}`}
                    onClick={() => handleCategorySelect(category.value)}
                  >
                    <div className="option-icon">{category.icon}</div>
                    <div className="option-text">{category.label}</div>
                  </div>
                ))}
              </div>
              {errors.injury_type && <div className="step-error">{errors.injury_type}</div>}
            </div>
          )}

          {/* Step 2: Incident Details */}
          {currentStep === 2 && (
            <div className="form-step active">
              <h4 className="step-title">Tell us about your incident</h4>
              
              <div className="form-group">
                <label htmlFor="incident_date">When did this incident occur?</label>
                <input 
                  type="date" 
                  id="incident_date" 
                  name="incident_date"
                  value={formData.incident_date}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.incident_date ? '#dc2626' : '#d1d5db' }}
                />
                {errors.incident_date && <div className="field-error">{errors.incident_date}</div>}
              </div>
              
              <div className="form-group">
                <label>Have you sought medical attention?</label>
                <div className="radio-group">
                  <input 
                    type="radio" 
                    id="medical_yes" 
                    name="medical_attention" 
                    value="yes"
                    checked={formData.medical_attention === 'yes'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="medical_yes">Yes</label>
                  <input 
                    type="radio" 
                    id="medical_no" 
                    name="medical_attention" 
                    value="no"
                    checked={formData.medical_attention === 'no'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="medical_no">No</label>
                </div>
                {errors.medical_attention && <div className="field-error">{errors.medical_attention}</div>}
              </div>
              
              <div className="form-group">
                <label>Are you currently receiving treatment?</label>
                <div className="radio-group">
                  <input 
                    type="radio" 
                    id="treatment_yes" 
                    name="current_treatment" 
                    value="yes"
                    checked={formData.current_treatment === 'yes'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="treatment_yes">Yes</label>
                  <input 
                    type="radio" 
                    id="treatment_no" 
                    name="current_treatment" 
                    value="no"
                    checked={formData.current_treatment === 'no'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="treatment_no">No</label>
                </div>
                {errors.current_treatment && <div className="field-error">{errors.current_treatment}</div>}
              </div>
              
              <div className="form-group">
                <label>Have you been unable to work due to this injury?</label>
                <div className="radio-group">
                  <input 
                    type="radio" 
                    id="work_yes" 
                    name="unable_to_work" 
                    value="yes"
                    checked={formData.unable_to_work === 'yes'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="work_yes">Yes</label>
                  <input 
                    type="radio" 
                    id="work_no" 
                    name="unable_to_work" 
                    value="no"
                    checked={formData.unable_to_work === 'no'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="work_no">No</label>
                  <input 
                    type="radio" 
                    id="work_partially" 
                    name="unable_to_work" 
                    value="partially"
                    checked={formData.unable_to_work === 'partially'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="work_partially">Partially</label>
                </div>
                {errors.unable_to_work && <div className="field-error">{errors.unable_to_work}</div>}
              </div>
            </div>
          )}

          {/* Step 3: Current Situation */}
          {currentStep === 3 && (
            <div className="form-step active">
              <h4 className="step-title">Your current situation</h4>
              
              <div className="form-group">
                <label>Have you spoken to a lawyer about this incident?</label>
                <div className="radio-group">
                  <input 
                    type="radio" 
                    id="lawyer_yes" 
                    name="spoken_to_lawyer" 
                    value="yes"
                    checked={formData.spoken_to_lawyer === 'yes'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="lawyer_yes">Yes</label>
                  <input 
                    type="radio" 
                    id="lawyer_no" 
                    name="spoken_to_lawyer" 
                    value="no"
                    checked={formData.spoken_to_lawyer === 'no'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="lawyer_no">No</label>
                  <input 
                    type="radio" 
                    id="lawyer_looking" 
                    name="spoken_to_lawyer" 
                    value="looking"
                    checked={formData.spoken_to_lawyer === 'looking'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="lawyer_looking">Currently looking</label>
                </div>
                {errors.spoken_to_lawyer && <div className="field-error">{errors.spoken_to_lawyer}</div>}
              </div>
              
              <div className="form-group">
                <label>Has anyone admitted fault or responsibility?</label>
                <div className="radio-group">
                  <input 
                    type="radio" 
                    id="fault_yes" 
                    name="admitted_fault" 
                    value="yes"
                    checked={formData.admitted_fault === 'yes'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="fault_yes">Yes</label>
                  <input 
                    type="radio" 
                    id="fault_no" 
                    name="admitted_fault" 
                    value="no"
                    checked={formData.admitted_fault === 'no'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="fault_no">No</label>
                  <input 
                    type="radio" 
                    id="fault_unsure" 
                    name="admitted_fault" 
                    value="unsure"
                    checked={formData.admitted_fault === 'unsure'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="fault_unsure">Unsure</label>
                </div>
                {errors.admitted_fault && <div className="field-error">{errors.admitted_fault}</div>}
              </div>
              
              <div className="form-group">
                <label>Do you have insurance that might cover this?</label>
                <div className="radio-group">
                  <input 
                    type="radio" 
                    id="insurance_yes" 
                    name="insurance_coverage" 
                    value="yes"
                    checked={formData.insurance_coverage === 'yes'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="insurance_yes">Yes</label>
                  <input 
                    type="radio" 
                    id="insurance_no" 
                    name="insurance_coverage" 
                    value="no"
                    checked={formData.insurance_coverage === 'no'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="insurance_no">No</label>
                  <input 
                    type="radio" 
                    id="insurance_unsure" 
                    name="insurance_coverage" 
                    value="unsure"
                    checked={formData.insurance_coverage === 'unsure'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="insurance_unsure">Unsure</label>
                </div>
                {errors.insurance_coverage && <div className="field-error">{errors.insurance_coverage}</div>}
              </div>
            </div>
          )}

          {/* Step 4: Personal Information */}
          {currentStep === 4 && (
            <div className="form-step active">
              <h4 className="step-title">Your contact information</h4>
              
              <div className="form-group">
                <label htmlFor="full_name">Full Name *</label>
                <input 
                  type="text" 
                  id="full_name" 
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.full_name ? '#dc2626' : '#d1d5db' }}
                />
                {errors.full_name && <div className="field-error">{errors.full_name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone_number" 
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.phone_number ? '#dc2626' : '#d1d5db' }}
                />
                {errors.phone_number && <div className="field-error">{errors.phone_number}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.email ? '#dc2626' : '#d1d5db' }}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="state">State/Territory *</label>
                <select 
                  id="state" 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  style={{ borderColor: errors.state ? '#dc2626' : '#d1d5db' }}
                >
                  <option value="">Select your state</option>
                  {australianStates.map(state => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
                {errors.state && <div className="field-error">{errors.state}</div>}
              </div>
              
              <div className="form-group">
                <label>Preferred contact time:</label>
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="morning" 
                    name="contact_time[]" 
                    value="morning"
                    checked={formData.contact_time.includes('morning')}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="morning">Morning</label>
                  <input 
                    type="checkbox" 
                    id="afternoon" 
                    name="contact_time[]" 
                    value="afternoon"
                    checked={formData.contact_time.includes('afternoon')}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="afternoon">Afternoon</label>
                  <input 
                    type="checkbox" 
                    id="evening" 
                    name="contact_time[]" 
                    value="evening"
                    checked={formData.contact_time.includes('evening')}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="evening">Evening</label>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Description & Consent */}
          {currentStep === 5 && (
            <div className="form-step active">
              <h4 className="step-title">Final details</h4>
              
              <div className="form-group">
                <label htmlFor="incident_description">Please briefly describe what happened (optional)</label>
                <textarea 
                  id="incident_description" 
                  name="incident_description" 
                  rows="4" 
                  placeholder="Tell us about your incident in your own words..."
                  value={formData.incident_description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div className="form-group">
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="privacy_consent" 
                    name="privacy_consent"
                    checked={formData.privacy_consent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="privacy_consent">
                    I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> and consent to ClaimConnect sharing my information with qualified legal professionals *
                  </label>
                </div>
                {errors.privacy_consent && <div className="field-error">{errors.privacy_consent}</div>}
              </div>
              
              <div className="form-group">
                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="marketing_consent" 
                    name="marketing_consent"
                    checked={formData.marketing_consent}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="marketing_consent">
                    I would like to receive updates about legal matters and compensation opportunities (optional)
                  </label>
                </div>
              </div>
            </div>
          )}
          
          {/* Form Navigation */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button type="button" className="btn btn-secondary" onClick={goToPreviousStep}>
                Previous
              </button>
            )}
            {currentStep < totalSteps ? (
              <button type="button" className="btn btn-primary" onClick={goToNextStep}>
                Continue
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit My Claim
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
})

ClaimFormModal.displayName = 'ClaimFormModal'

export default ClaimFormModal