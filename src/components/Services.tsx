
export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Our <span className="highlight">Expertise</span>
          </h2>
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
  );
}
