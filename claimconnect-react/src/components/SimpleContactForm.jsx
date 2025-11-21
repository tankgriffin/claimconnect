import { useState } from 'react'

const SimpleContactForm = ({ preselectedClaimType = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    postcode: '',
    claimType: preselectedClaimType,
    notes: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const claimTypes = [
    { value: '', label: 'Select a claim type' },
    { value: 'motor-vehicle', label: 'Motor Vehicle Accidents' },
    { value: 'workplace', label: 'Workplace Injuries' },
    { value: 'medical-malpractice', label: 'Medical Malpractice' },
    { value: 'slip-fall', label: 'Slip & Fall Accidents' },
    { value: 'product-liability', label: 'Product Liability' },
    { value: 'public-liability', label: 'Public Liability' },
    { value: 'workers-compensation', label: 'Workers\' Compensation' },
    { value: 'assault-claims', label: 'Assault Claims' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const { [name]: removed, ...rest } = prev
        return rest
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^[\+]?[0-9\s\-\(\)]{8,}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.postcode.trim()) {
      newErrors.postcode = 'Postcode is required'
    } else if (!/^\d{4}$/.test(formData.postcode)) {
      newErrors.postcode = 'Please enter a valid 4-digit postcode'
    }
    if (!formData.claimType) {
      newErrors.claimType = 'Please select a claim type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate form submission
      console.log('Form submitted:', {
        ...formData,
        timestamp: new Date().toISOString()
      })

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setShowSuccess(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
          setFormData({
            firstName: '',
            lastName: '',
            mobile: '',
            email: '',
            postcode: '',
            claimType: preselectedClaimType,
            notes: ''
          })
        }, 5000)
      }, 1000)
    }
  }

  if (showSuccess) {
    return (
      <div className="simple-contact-form-success">
        <div className="success-icon-wrapper">
          <svg className="success-checkmark" viewBox="0 0 52 52">
            <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h3 className="success-title">Thank You!</h3>
        <p className="success-message">
          We've received your information and a specialist lawyer will contact you within 1 hour.
        </p>
        <div className="success-details">
          <div className="success-detail-item">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Free consultation</span>
          </div>
          <div className="success-detail-item">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>No win, no fee</span>
          </div>
          <div className="success-detail-item">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>No obligation</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form className="simple-contact-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3 className="form-section-heading">Get Your Free Case Assessment</h3>
        <div className="form-trust-badges">
          <div className="trust-badge">
            <svg className="trust-badge-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
            </svg>
            <span>Secure & Confidential</span>
          </div>
          <div className="trust-badge">
            <svg className="trust-badge-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>Response in 1 Hour</span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">
            First Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? 'error' : ''}
            placeholder="John"
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Last Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? 'error' : ''}
            placeholder="Smith"
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="mobile">
            Mobile <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={errors.mobile ? 'error' : ''}
            placeholder="0400 000 000"
          />
          {errors.mobile && <span className="error-message">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="postcode">
            Postcode <span className="required">*</span>
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className={errors.postcode ? 'error' : ''}
            placeholder="2000"
            maxLength="4"
          />
          {errors.postcode && <span className="error-message">{errors.postcode}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder="john.smith@email.com"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="claimType">
          Type of Claim <span className="required">*</span>
        </label>
        <select
          id="claimType"
          name="claimType"
          value={formData.claimType}
          onChange={handleChange}
          className={errors.claimType ? 'error' : ''}
        >
          {claimTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.claimType && <span className="error-message">{errors.claimType}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="notes">
          Tell us about your situation (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows="4"
          placeholder="Please provide details about your incident, injuries, or any other relevant information..."
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-large btn-full-width form-submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg className="submit-spinner" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Submitting...
          </>
        ) : (
          <>
            Get Connected with a Lawyer
            <svg className="submit-arrow" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </>
        )}
      </button>

      <p className="form-disclaimer">
        By submitting this form, you agree to be contacted by a qualified legal professional.
        No obligation. Your information is kept confidential.
      </p>
    </form>
  )
}

export default SimpleContactForm
