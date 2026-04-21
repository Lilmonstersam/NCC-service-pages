import React, { useState, FormEvent, FocusEvent } from 'react';
import './ContactPage.css';

type EnquiryType = 'quote' | 'franchise' | 'jobs';

export const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>('quote');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form Field State
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    service_type: '',
    frequency: '',
    location: '',
    approx_sqm: '',
    franchise_region: '',
    franchise_investment: '',
    franchise_experience: '',
    job_role: '',
    job_location: '',
    job_availability: '',
    message: '',
    how_heard: '',
  });

  // Validation State
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateField = (name: string, value: string): boolean => {
    let isValid = true;
    switch (name) {
      case 'first_name':
      case 'last_name':
      case 'location':
        isValid = value.trim().length >= 2;
        break;
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'phone':
        isValid = value.replace(/\s/g, '').length >= 8;
        break;
      case 'company':
        if (enquiryType === 'quote') isValid = value.trim().length >= 2;
        break;
      case 'service_type':
        if (enquiryType === 'quote') isValid = value !== '';
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [name]: !isValid }));
    return isValid;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (value.length > 0) {
      validateField(name, value);
    }
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validateStep1 = () => {
    let isValid = true;
    isValid = validateField('first_name', formData.first_name) && isValid;
    isValid = validateField('last_name', formData.last_name) && isValid;
    isValid = validateField('email', formData.email) && isValid;
    isValid = validateField('phone', formData.phone) && isValid;
    if (enquiryType === 'quote') {
      isValid = validateField('company', formData.company) && isValid;
    }
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    if (enquiryType === 'quote') {
      isValid = validateField('service_type', formData.service_type) && isValid;
      isValid = validateField('location', formData.location) && isValid;
    }
    return isValid;
  };

  const nextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEnquiryTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnquiryType(e.target.value as EnquiryType);
    if (currentStep !== 1) setCurrentStep(1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const renderSuccessState = () => {
    let title = 'Enquiry Submitted!';
    let text = 'Thank you for reaching out. Our team will review your details and be in contact within 1 business day.';
    let steps = [
      'We\'ll review your enquiry details',
      'A team member will call to discuss your needs',
      'We\'ll provide a tailored proposal'
    ];

    if (enquiryType === 'franchise') {
      title = 'Application Received!';
      text = 'Our franchise team will review your interest and be in contact within 2 business days to discuss opportunities.';
      steps = [
        'Our franchise team reviews your application',
        'We\'ll schedule a discovery call',
        'You\'ll receive our franchise information pack'
      ];
    } else if (enquiryType === 'jobs') {
      title = 'Application Submitted!';
      text = 'Thank you for your interest in joining Namoli. Our HR team will review your application and be in touch.';
      steps = [
        'Our HR team reviews your application',
        'We\'ll contact you if there\'s a match',
        'Interview and onboarding process'
      ];
    }

    return (
      <div className="success-state active">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="success-next-steps">
          {steps.map((step, index) => (
            <div key={index} className="success-step">
              <span className="success-step-num">{index + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="namoli-contact-page-wrapper">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <a href="/">Home</a><span>›</span><strong>Contact Us</strong>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <h1>Let's Talk <span className="highlight">Clean.</span></h1>
              <p className="hero-subtitle">Whether you need a service quote, want to explore franchise opportunities, or are looking for a career in cleaning — we're here to help.</p>

              <div className="contact-cards">
                <a href="tel:1300626654" className="contact-card">
                  <div className="icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="contact-card-text">Call us</div>
                    <div className="contact-card-value">1300 626 654</div>
                  </div>
                </a>
                <a href="mailto:info@namoli.com.au" className="contact-card">
                  <div className="icon-wrap">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <div className="contact-card-text">Email us</div>
                    <div className="contact-card-value">info@namoli.com.au</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="locations-card">
                <h3>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  We Service All Major Cities
                </h3>
                <div className="locations-list">
                  <div className="location-item"><span className="location-dot"></span> Brisbane &amp; South East Queensland</div>
                  <div className="location-item"><span className="location-dot"></span> Melbourne &amp; Greater Victoria</div>
                  <div className="location-item"><span className="location-dot"></span> Sydney &amp; Greater NSW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form-section" id="main-form">
        <div className="container">
          <div className="form-header">
            <div className="section-label">
              {enquiryType === 'quote' ? 'Free Quote' : enquiryType === 'franchise' ? 'Franchise' : 'Careers'}
            </div>
            <h2>
              {enquiryType === 'quote' ? 'Request a Cleaning Quote' : enquiryType === 'franchise' ? 'Franchise Opportunities' : 'Join the Namoli Team'}
            </h2>
            <p>
              {enquiryType === 'quote' ? 'Fill out the form below and we\'ll provide a tailored quote within 1 business day.' :
               enquiryType === 'franchise' ? 'Interested in owning a Namoli cleaning franchise? Tell us about yourself and we\'ll be in touch.' :
               'We\'re always looking for dedicated cleaning professionals. Submit your details below.'}
            </p>
          </div>

          <div className="form-section-inner">
            <div className="form-main">
              <div className="form-card">
                {!isSuccess && (
                  <div className="progress-bar" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={3}>
                    <div className={`progress-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                      <div className="step-circle">{currentStep > 1 ? '✓' : '1'}</div>
                      <span className="step-label">Quick Enquiry</span>
                    </div>
                    <div className={`progress-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                      <div className="step-circle">{currentStep > 2 ? '✓' : '2'}</div>
                      <span className="step-label">Details</span>
                    </div>
                    <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
                      <div className="step-circle">3</div>
                      <span className="step-label">Submit</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-body">
                    {isSuccess ? renderSuccessState() : (
                      <>
                        {/* STEP 1 */}
                        <div className={`form-step ${currentStep === 1 ? 'active' : ''}`}>
                          <h3 className="step-title">What are you enquiring about?</h3>
                          <p className="step-subtitle">Select your enquiry type and provide your contact details.</p>

                          <div className="enquiry-type-control" role="radiogroup">
                            <label className="enquiry-type-option">
                              <input type="radio" name="enquiry_type" value="quote" checked={enquiryType === 'quote'} onChange={handleEnquiryTypeChange} />
                              <span className="enquiry-type-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l4.58-4.58c.94-.94.94-2.48 0-3.42L9 5z" /><path d="M6 9h.01" /></svg>
                                Request a Service Quote
                              </span>
                            </label>
                            <label className="enquiry-type-option">
                              <input type="radio" name="enquiry_type" value="franchise" checked={enquiryType === 'franchise'} onChange={handleEnquiryTypeChange} />
                              <span className="enquiry-type-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                                Franchise Opportunities
                              </span>
                            </label>
                            <label className="enquiry-type-option">
                              <input type="radio" name="enquiry_type" value="jobs" checked={enquiryType === 'jobs'} onChange={handleEnquiryTypeChange} />
                              <span className="enquiry-type-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>
                                Job Application
                              </span>
                            </label>
                          </div>

                          <div className="field-row">
                            <div className="field-group">
                              <label htmlFor="first_name" className="field-label">First Name <span className="required">*</span></label>
                              <input type="text" id="first_name" name="first_name" className={`field-input ${errors.first_name ? 'error' : ''}`} placeholder="e.g. Sarah…" required value={formData.first_name} onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                              {errors.first_name && <div className="field-error visible">Please enter your first name</div>}
                            </div>
                            <div className="field-group">
                              <label htmlFor="last_name" className="field-label">Last Name <span className="required">*</span></label>
                              <input type="text" id="last_name" name="last_name" className={`field-input ${errors.last_name ? 'error' : ''}`} placeholder="e.g. Johnson…" required value={formData.last_name} onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                              {errors.last_name && <div className="field-error visible">Please enter your last name</div>}
                            </div>
                          </div>

                          <div className="field-row">
                            <div className="field-group">
                              <label htmlFor="email" className="field-label">Email <span className="required">*</span></label>
                              <input type="email" id="email" name="email" className={`field-input ${errors.email ? 'error' : ''}`} placeholder="e.g. sarah@company.com.au…" required value={formData.email} onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                              {errors.email && <div className="field-error visible">Please enter a valid email address</div>}
                            </div>
                            <div className="field-group">
                              <label htmlFor="phone" className="field-label">Phone <span className="required">*</span></label>
                              <input type="tel" id="phone" name="phone" className={`field-input ${errors.phone ? 'error' : ''}`} placeholder="e.g. 0412 345 678…" required value={formData.phone} onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                              {errors.phone && <div className="field-error visible">Please enter a valid phone number</div>}
                            </div>
                          </div>

                          {enquiryType === 'quote' && (
                            <div className="field-group">
                              <label htmlFor="company" className="field-label">Company / Facility Name <span className="required">*</span></label>
                              <input type="text" id="company" name="company" className={`field-input ${errors.company ? 'error' : ''}`} placeholder="e.g. St Mary's Medical Centre…" required value={formData.company} onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                              {errors.company && <div className="field-error visible">Please enter your company or facility name</div>}
                            </div>
                          )}

                          <div className="form-nav">
                            <div></div>
                            <button type="button" className="btn-next" onClick={nextStep}>
                              Next: Your Details
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                          </div>
                        </div>

                        {/* STEP 2 */}
                        <div className={`form-step ${currentStep === 2 ? 'active' : ''}`}>
                          {enquiryType === 'quote' && (
                            <div className="conditional-fields visible">
                              <h3 className="step-title">Service Details</h3>
                              <p className="step-subtitle">Tell us about your cleaning requirements.</p>

                              <div className="field-group">
                                <label className="field-label">Service Type <span className="required">*</span></label>
                                <div className="service-type-grid">
                                  {['Medical', 'Office', 'School', 'Childcare', 'Industrial', 'Other'].map(type => (
                                    <label key={type} className="service-type-option">
                                      <input type="radio" name="service_type" value={`${type} Cleaning`} checked={formData.service_type === `${type} Cleaning`} onChange={handleInputChange} />
                                      <div className="service-type-card">
                                        <span className="service-type-name">{type}</span>
                                      </div>
                                    </label>
                                  ))}
                                </div>
                                {errors.service_type && <div className="field-error visible">Please select a service type</div>}
                              </div>

                              <div className="field-group">
                                <label className="field-label">Cleaning Frequency</label>
                                <div className="radio-pills">
                                  {['Daily', 'Weekly', 'Fortnightly', 'One-Off'].map(freq => (
                                    <label key={freq} className="radio-pill">
                                      <input type="radio" name="frequency" value={freq.toLowerCase()} checked={formData.frequency === freq.toLowerCase()} onChange={handleInputChange} />
                                      <span className="radio-pill-label">{freq}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>

                              <div className="field-row">
                                <div className="field-group">
                                  <label htmlFor="location" className="field-label">Site Location <span className="required">*</span></label>
                                  <input type="text" id="location" name="location" className={`field-input ${errors.location ? 'error' : ''}`} placeholder="e.g. Richmond, VIC…" required value={formData.location} onChange={handleInputChange} onBlur={handleBlur} onFocus={handleFocus} />
                                  {errors.location && <div className="field-error visible">Please enter the site location</div>}
                                </div>
                                <div className="field-group">
                                  <label htmlFor="approx_sqm" className="field-label">Approx. Floor Area <span className="optional">(optional)</span></label>
                                  <input type="text" id="approx_sqm" name="approx_sqm" className="field-input" placeholder="e.g. 500 sqm…" value={formData.approx_sqm} onChange={handleInputChange} />
                                </div>
                              </div>
                            </div>
                          )}

                          {enquiryType === 'franchise' && (
                            <div className="conditional-fields visible">
                              <h3 className="step-title">Franchise Interest</h3>
                              <p className="step-subtitle">Tell us about your interest in a Namoli franchise.</p>

                              <div className="field-group">
                                <label htmlFor="franchise_region" className="field-label">Preferred Region <span className="required">*</span></label>
                                <select id="franchise_region" name="franchise_region" className="field-select" value={formData.franchise_region} onChange={handleInputChange}>
                                  <option value="" disabled>Select a region…</option>
                                  <option value="Brisbane">Brisbane &amp; QLD</option>
                                  <option value="Melbourne">Melbourne &amp; VIC</option>
                                  <option value="Sydney">Sydney &amp; NSW</option>
                                  <option value="Other">Other / Flexible</option>
                                </select>
                              </div>
                            </div>
                          )}

                          {enquiryType === 'jobs' && (
                            <div className="conditional-fields visible">
                              <h3 className="step-title">Job Application</h3>
                              <p className="step-subtitle">We're always looking for dedicated cleaning professionals.</p>

                              <div className="field-group">
                                <label htmlFor="job_role" className="field-label">Position of Interest <span className="required">*</span></label>
                                <select id="job_role" name="job_role" className="field-select" value={formData.job_role} onChange={handleInputChange}>
                                  <option value="" disabled>Select a role…</option>
                                  <option value="cleaner">Cleaner / Team Member</option>
                                  <option value="team-leader">Team Leader / Supervisor</option>
                                </select>
                              </div>
                            </div>
                          )}

                          <div className="form-nav">
                            <button type="button" className="btn-back" onClick={prevStep}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                              Back
                            </button>
                            <button type="button" className="btn-next" onClick={nextStep}>
                              Next: Review &amp; Submit
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </button>
                          </div>
                        </div>

                        {/* STEP 3 */}
                        <div className={`form-step ${currentStep === 3 ? 'active' : ''}`}>
                          <h3 className="step-title">Almost Done!</h3>
                          <p className="step-subtitle">Add any additional details and submit your enquiry.</p>

                          <div className="field-group">
                            <label htmlFor="message" className="field-label">Additional Notes <span className="optional">(optional)</span></label>
                            <textarea id="message" name="message" className="field-textarea" placeholder="Is there anything else you'd like us to know?…" rows={4} value={formData.message} onChange={handleInputChange}></textarea>
                          </div>

                          <div className="form-nav">
                            <button type="button" className="btn-back" onClick={prevStep} disabled={isSubmitting}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                              Back
                            </button>
                            <button type="submit" className="btn-submit" disabled={isSubmitting}>
                              {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                              {!isSubmitting && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h4>Industry Certified</h4>
                <div className="trust-badges-sidebar">
                  <div className="trust-badge-item">
                    <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/issa-member-logo-converted.png" alt="ISSA Member" />
                    <span>ISSA Member</span>
                  </div>
                  <div className="trust-badge-item">
                    <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/FCA-Member-logo-CMYK-300x169.jpg" alt="FCA Member" />
                    <span>FCA Member</span>
                  </div>
                  <div className="trust-badge-item">
                    <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/bscaa-300x152.png" alt="BSCAA Member" />
                    <span>BSCAA Member</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};
