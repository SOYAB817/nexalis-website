import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'saas',
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
      const serviceName =
        formData.service === 'saas'
          ? 'SaaS Platform Development'
          : formData.service === 'web'
          ? 'Full-Stack Web App'
          : formData.service === 'mobile'
          ? 'Mobile Application'
          : 'AI Chatbot & Automation';

      const messageText = `Hi Nexalis Software, I'd like to discuss a project.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Service Selected:* ${serviceName}\n*Project Details:* ${formData.message}`;
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        service: 'saas',
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
          <h2>
            Let's Build Something <span className="highlight">Great</span>
          </h2>
          <p>Have an idea or a project in mind? Drop us a message, and we'll get back to you within 24 hours.</p>
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
              <h3>Message Sent Successfully!</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>Thank you for reaching out. We will get in touch with you shortly.</p>
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
                  Failed to send message. Please email us directly at{' '}
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
              <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleInputChange}>
                  <option value="saas">SaaS Platform Development</option>
                  <option value="web">Full-Stack Web App</option>
                  <option value="mobile">Mobile Application</option>
                  <option value="chatbot">AI Chatbot & Automation</option>
                </select>
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
              <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-submit">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
