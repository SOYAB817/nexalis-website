import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Enterprise Software Development',
    budget: 'Starting from ₹35,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const phoneNumber = '916398995485';
      const messageText = `Hi Nexalis Software, I'd like to discuss a project.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Company:* ${formData.company}\n*Service:* ${formData.service}\n*Budget:* ${formData.budget}\n*Project Details:* ${formData.message}`;
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Enterprise Software Development',
        budget: 'Starting from ₹35,000',
        message: '',
      });
    } catch (error) {
      console.error('Error redirecting to WhatsApp:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Let's Build Something <span className="highlight">Great</span></h2>
          <p>Tell us about your project requirements, and we will redirect you to configure your consultation on WhatsApp.</p>
        </div>
        <div className="contact-form-wrapper">
          {submitStatus === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(18, 136, 7, 0.1)',
                  border: '2px solid #128807',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#128807',
                  fontSize: '2rem',
                  marginBottom: '20px',
                }}
              >
                ✓
              </div>
              <h3>Redirection Triggered Successfully!</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>
                Your project details are formatted. Click below to re-open WhatsApp if needed.
              </p>
              <button onClick={() => setSubmitStatus('idle')} className="btn btn-secondary" style={{ marginTop: '24px' }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {submitStatus === 'error' && (
                <div
                  style={{
                    backgroundColor: 'rgba(255, 77, 77, 0.1)',
                    border: '1px solid #ff4d4d',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: '#ff4d4d',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}
                >
                  Failed to format details. Please email us directly at{' '}
                  <a href="mailto:softwarenexalis@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                    softwarenexalis@gmail.com
                  </a>
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Org</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Select Service</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange}>
                    <option value="Enterprise Software Development">Enterprise Software Development</option>
                    <option value="Custom SaaS Development">Custom SaaS Development</option>
                    <option value="Full Stack Web Applications">Full Stack Web Applications</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI Automation Solutions">AI Automation Solutions</option>
                    <option value="API Development & Integration">API Development & Integration</option>
                    <option value="Cloud Deployment">Cloud Deployment</option>
                    <option value="Maintenance & Support">Maintenance & Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange}>
                    <option value="Starting from ₹35,000">Business Website (₹35k+)</option>
                    <option value="Starting from ₹80,000">Custom Web App (₹80k+)</option>
                    <option value="Enterprise Custom Quote">Enterprise Solution (Custom Quote)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit" style={{ flex: 1 }}>
                  {isSubmitting ? 'Sending...' : 'Start on WhatsApp'}
                </button>
                <a
                  href="mailto:softwarenexalis@gmail.com"
                  className="btn btn-secondary"
                  style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', minWidth: '150px' }}
                >
                  Or Send Email
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
