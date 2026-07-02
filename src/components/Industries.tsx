export default function Industries() {
  const industries = [
    { name: 'Education', icon: '🎓', desc: 'School ERPs, online learning systems, and coaching management applications.' },
    { name: 'Healthcare', icon: '🏥', desc: 'Hospital records dashboards, doctor booking systems, and health trackers.' },
    { name: 'Retail & E-Com', icon: '🛍️', desc: 'High-performance checkout storefronts, inventory portals, and Stripe checkouts.' },
    { name: 'Manufacturing', icon: '⚙️', desc: 'Process log automation, industrial analytics dashboards, and supply charts.' },
    { name: 'Finance & Fintech', icon: '💳', desc: 'Payment gateways integrations, sales ledger books, and invoice creators.' },
    { name: 'Logistics & Fleet', icon: '🚚', desc: 'Real-time order trackers, vehicle transit logs, and delivery schedule maps.' },
    { name: 'Travel & Tourism', icon: '✈️', desc: 'Booking calendars, tour description cards, and custom pricing ledgers.' },
    { name: 'Startups & SaaS', icon: '🚀', desc: 'Subscription panels, multi-tenant database models, and microservice APIs.' },
  ];

  return (
    <section id="industries" className="services-section" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Industries We <span className="highlight">Serve</span></h2>
          <p>We craft tailored software systems configured for distinct industry compliance and needs.</p>
        </div>
        <div className="services-grid" style={{ marginTop: '40px' }}>
          {industries.map((ind, index) => (
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
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{ind.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)' }}>{ind.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
