export default function Services() {
  const services = [
    {
      title: 'Enterprise Software Development',
      desc: 'Robust architectures built using Java, Spring Boot, Spring Security, and Hibernate. Configured for enterprise workflows.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
        </svg>
      ),
    },
    {
      title: 'Custom SaaS Development',
      desc: 'Scalable multi-tenant databases models, user subscriptions dashboards, and automated scaling setups.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      ),
    },
    {
      title: 'Full Stack Web Applications',
      desc: 'High-performance interactive web portals using modern React 19, Next.js, and TypeScript, optimized for speed.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android application systems built with clean native performance using Flutter.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: 'AI Automation Solutions',
      desc: 'Pre-configured workflow automations, WhatsApp/Telegram auto-responders, and OpenAI API integrations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      title: 'API Development & Integration',
      desc: 'Secure REST/GraphQL API systems with high-speed caching using Redis and messaging queues like Kafka and RabbitMQ.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: 'Cloud Deployment',
      desc: 'Seamless deployment pipelines and hosting configurations using Docker, AWS, and Azure clouds services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
    },
    {
      title: 'Maintenance & Support',
      desc: 'Ongoing monthly security updates, continuous uptime checks, database backups, and dedicated SLA support.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our <span className="highlight">Expertise</span></h2>
          <p>We combine production-ready technologies with custom UI designs to build robust digital solutions.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                textAlign: 'left',
                padding: '30px 24px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '16px',
                transition: 'var(--transition)',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 240, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="service-icon" style={{ marginBottom: '20px' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-main)' }}>{service.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
