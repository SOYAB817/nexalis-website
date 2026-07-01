import React, { useState } from 'react';
import banner1 from './assets/banner-1.png';
import banner2 from './assets/banner-2.png';
import banner3 from './assets/banner-3.png';

interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
  linkText: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export default function App() {
  // Form submission state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'saas',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // FAQ state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Hero Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: banner1,
      title: 'Custom SaaS Analytics Portal',
    },
    {
      url: banner2,
      title: 'WhatsApp AI Chatbot Builder',
    },
    {
      url: banner3,
      title: 'Premium iOS/Android Application',
    },
  ];

  // Form input change handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submit handler - redirects directly to WhatsApp (+91 6398995485)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const phoneNumber = '916398995485';
      const serviceName = 
        formData.service === 'saas' ? 'SaaS Platform Development' :
        formData.service === 'web' ? 'Full-Stack Web App' :
        formData.service === 'mobile' ? 'Mobile Application' :
        'AI Chatbot & Automation';

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

  // FAQ Toggle handler
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Hero Auto-slide interval
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // FAQ Data list
  const faqs: FAQItem[] = [
    {
      question: 'Do you build custom designs or use templates?',
      answer: 'Every single project at Nexalis Software is custom-designed and custom-coded from scratch. We do not use slow, generic pre-made templates, ensuring your site is lightning-fast and highly secure.',
    },
    {
      question: 'How long does a typical software project take?',
      answer: 'A standard marketing landing page or WhatsApp chatbot setup takes 1-2 weeks. Complex SaaS portals, custom dashboards, or mobile applications usually take 4-8 weeks depending on features.',
    },
    {
      question: 'What technology stack do you use?',
      answer: 'We specialize in modern, high-performance web and mobile tech including React, Next.js, TypeScript, Node.js, Spring Boot, React Native, and robust hosting via AWS and Vercel.',
    },
    {
      question: 'Do you provide post-launch maintenance?',
      answer: 'Yes, we provide ongoing monthly maintenance and support packages to monitor performance, manage backups, run security audits, and implement new feature updates.',
    },
  ];

  // Portfolio projects data
  const projects: ProjectItem[] = [
    {
      id: 'CMS',
      title: 'CineScape CMS Portal',
      tags: ['Spring Boot', 'Java', 'React', 'S3 Config'],
      description: 'A premium, multi-tenant administrative dashboard and booking content management system built for scalable cinema operations.',
      linkText: 'View Case Study',
    },
    {
      id: 'BOT',
      title: 'AI Chatbot Builder',
      tags: ['TypeScript', 'Node.js', 'OpenAI API', 'WhatsApp'],
      description: 'A visual conversation flow builder allowing businesses to automate customer support and lead generation via AI integrations.',
      linkText: 'Explore Demo',
    },
    {
      id: 'SHOP',
      title: 'Nexalis E-Commerce Suite',
      tags: ['Next.js', 'React', 'TailwindCSS', 'Stripe'],
      description: 'High-performance online storefront with premium custom themes, cart animations, and a responsive sales analytics dashboard.',
      linkText: 'View Project',
    },
  ];

  // Testimonials data
  const testimonials: TestimonialItem[] = [
    {
      quote: "Nexalis delivered our custom CMS portal ahead of schedule. The code architecture is extremely clean, and their attention to technical details is outstanding.",
      author: "Rahul Sharma",
      role: "CEO, CineScape Media",
      initials: "RS",
    },
    {
      quote: "The AI WhatsApp integration they built for us reduced our customer response times by 70%. Absolute game-changer for our customer support team!",
      author: "Sarah Jenkins",
      role: "Founder, Chatbotify Inc.",
      initials: "SJ",
    },
    {
      quote: "Our landing pages load instantly. Vercel deployment and continuous Git integration make updates and scaling a completely seamless process.",
      author: "Amit Patel",
      role: "Technical Lead, Bells Academy",
      initials: "AP",
    },
  ];

  return (
    <>
      {/* Ambient Glowing Background Circles */}
      <div className="ambient-circle circle-1"></div>
      <div className="ambient-circle circle-2"></div>
      <div className="ambient-circle circle-3"></div>

      {/* Navigation Header */}
      <header>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-nx">NX</span>
            <span className="logo-text">NEXALIS <span className="highlight">SOFTWARE</span></span>
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Work</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn-cta-nav">Get Started</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-banner-card">
            {/* Sliding Images Container */}
            <div className="banner-slider-track" style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="banner-slide">
                  <img src={slide.url} alt={slide.title} className="banner-slide-img" />
                  <div className="banner-overlay"></div>
                </div>
              ))}
            </div>

            {/* Float Content (overlayed on top of the sliding track) */}
            <div className="banner-content">
              <div className="tagline-badge">Now Launching Premium Solutions</div>
              <h1 className="hero-title">We Code the Future of Your <span className="text-glow">Business</span></h1>
              <p className="hero-subtitle">High-performance custom SaaS platforms, modern web portals, iOS/Android mobile apps, and intelligent AI chatbots designed to scale.</p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Start Your Project</a>
                <a href="#services" className="btn btn-secondary">Explore Services</a>
              </div>
            </div>

            {/* Slider Controls (Bottom Left inside the card) */}
            <div className="banner-controls">
              <button className="arrow-btn" onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)} aria-label="Previous slide">
                ←
              </button>
              <button className="arrow-btn" onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)} aria-label="Next slide">
                →
              </button>
              <div className="banner-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`banner-dot ${currentSlide === index ? 'active' : ''}`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="highlight">Expertise</span></h2>
            <p>We combine cutting-edge technology with high-fidelity designs to build robust digital products.</p>
          </div>
          <div className="services-grid">
            {/* Card 1: SaaS Platform */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                  <line x1="15" y1="3" x2="15" y2="21"></line>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="3" y1="15" x2="21" y2="15"></line>
                </svg>
              </div>
              <h3>Custom SaaS Platforms</h3>
              <p>End-to-end multi-tenant software architectures built to power subscriptions, dashboards, and automated scaling.</p>
            </div>
            {/* Card 2: Web Applications */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Full-Stack Web Apps</h3>
              <p>Highly optimized, secure frontend and backend systems loading at lightning speed with custom admin panels.</p>
            </div>
            {/* Card 3: Mobile Apps */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3>Mobile Apps</h3>
              <p>Native-feel cross-platform iOS and Android application development with clean offline storage and notifications.</p>
            </div>
            {/* Card 4: AI Chatbots */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>AI Chatbots & Automation</h3>
              <p>Intelligent message flow automations (WhatsApp, Telegram) integrated with OpenAI API to handle leads 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>How We <span className="highlight">Build</span></h2>
            <p>Our systematic development lifecycle guarantees clean codes, pixel-perfect layouts, and fast delivery.</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="step-num">01</div>
              <h3>Plan & Design</h3>
              <p>Gathering key project requirements, structuring UX wireframes, and crafting premium UI designs for your approval.</p>
            </div>
            <div className="process-card">
              <div className="step-num">02</div>
              <h3>Develop</h3>
              <p>Writing responsive, modular codes using TypeScript, React, or Spring Boot configured for peak efficiency.</p>
            </div>
            <div className="process-card">
              <div className="step-num">03</div>
              <h3>Verify & Test</h3>
              <p>Performing strict device compatibility tests, speed optimizations, and clean console log audits.</p>
            </div>
            <div className="process-card">
              <div className="step-num">04</div>
              <h3>Launch & Support</h3>
              <p>Deploying instantly to AWS or Vercel and providing continuous post-launch maintenance and backups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="highlight">Projects</span></h2>
            <p>A handpicked showcase of premium systems we have designed, coded, and deployed.</p>
          </div>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">{project.id}</div>
                <div className="portfolio-info">
                  <div className="tech-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#contact" className="portfolio-link">
                    {project.linkText} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container about-container">
          <div className="about-card">
            <div className="about-badge">Founder's Note</div>
            <h3>Building Quality, Coding Value</h3>
            <p>"Nexalis Software was founded with a simple vision: to eliminate slow, poorly designed templates and deliver custom-built, premium software solutions. Every line of code we write is optimized for performance, scalability, and clean logic."</p>
            <div className="founder-meta">
              <div className="founder-info">
                <strong>Soyab Saifi</strong>
                <span>Founder & CEO, Nexalis Software</span>
                <span style={{ display: 'block', marginTop: '6px', fontSize: '0.9rem', color: 'var(--primary)' }}>
                  📞 +91 6398995485
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Client <span className="highlight">Feedback</span></h2>
            <p>See what business leaders and startup founders say about working with Nexalis Software.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">“</div>
                <p className="testimonial-text">"{test.quote}"</p>
                <div className="client-profile">
                  <div className="client-avatar-placeholder">{test.initials}</div>
                  <div className="client-info">
                    <strong>{test.author}</strong>
                    <span>{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked <span className="highlight">Questions</span></h2>
            <p>Clear answers to some of the most common inquiries about our custom services.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-question"
                  aria-expanded={activeFaq === index}
                >
                  {faq.question}
                  <span className="faq-icon-indicator">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Let's Build Something <span className="highlight">Great</span></h2>
            <p>Have an idea or a project in mind? Drop us a message, and we'll get back to you within 24 hours.</p>
          </div>
          <div className="contact-form-wrapper">
            {submitStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
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
                  marginBottom: '20px'
                }}>✓</div>
                <h3>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '10px' }}>
                  Thank you for reaching out. We will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn btn-secondary"
                  style={{ marginTop: '24px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {submitStatus === 'error' && (
                  <div style={{
                    backgroundColor: 'rgba(255, 77, 77, 0.1)',
                    border: '1px solid #ff4d4d',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: '#ff4d4d',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    Failed to send message. Please email us directly at{' '}
                    <a href="mailto:softwarenexalis@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                      softwarenexalis@gmail.com
                    </a>
                  </div>
                )}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
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
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-container">
          <div className="footer-brand">
            <strong>NX NEXALIS SOFTWARE</strong>
            <p>Premium Web & Mobile Solutions. Made with logic.</p>
            <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
              <a href="https://www.linkedin.com/in/soyab-saifi-6a18bb419" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/nexalis_software?igsh=MWJla2I5dzFzNDBwaQ==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="https://youtube.com/@nexalissoftware?si=F9QpJAXj-OORpvzk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                YouTube
              </a>
              <a href="https://www.facebook.com/share/1H2bnxaBGu/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook
              </a>
            </div>
          </div>
          <div className="footer-copy" style={{ textAlign: 'right' }}>
            <p style={{ marginBottom: '8px' }}>
              📞 Call/WhatsApp:{' '}
              <a href="https://wa.me/916398995485?text=Hi%20Nexalis%20Software,%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                +91 6398995485
              </a>
            </p>
            <p style={{ marginBottom: '8px' }}>
              ✉️ Email:{' '}
              <a href="mailto:softwarenexalis@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                softwarenexalis@gmail.com
              </a>
            </p>
            <p>&copy; 2026 Nexalis Software. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/916398995485?text=Hi%20Nexalis%20Software,%20I'd%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 2.766 1.498 4.774 1.499 5.397 0 9.786-4.383 9.789-9.774.002-2.611-1.012-5.066-2.859-6.915C16.452 2.114 13.993.998 11.99.998C6.602.998 2.213 5.381 2.21 10.772c-.001 2.012.524 3.203 1.503 4.787L2.73 21.056l4.916-1.288zM16.14 13.51c-.244-.122-1.442-.712-1.666-.793-.223-.081-.385-.122-.547.122-.162.244-.629.793-.771.956-.142.163-.284.183-.528.061-.244-.122-.962-.355-1.832-1.13-0.678-.605-1.136-1.352-1.269-1.577-.133-.225-.014-.347.108-.468.11-.109.244-.285.366-.427.122-.142.162-.244.244-.406.082-.162.041-.305-.02-.427-.06-.122-.547-1.32-.75-1.81-.197-.477-.396-.412-.547-.419-.141-.007-.305-.007-.468-.007-.162 0-.427.061-.65.305-.224.244-.853.833-.853 2.031 0 1.198.873 2.356.995 2.519.122.163 1.718 2.624 4.161 3.678.581.25 1.034.4 1.388.513.583.186 1.114.16 1.534.098.468-.07 1.442-.589 1.646-1.158.203-.57.203-1.057.142-1.158-.06-.1-.223-.162-.467-.284z"/>
        </svg>
      </a>
    </>
  );
}
