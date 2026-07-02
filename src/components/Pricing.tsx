export default function Pricing() {
  const plans = [
    {
      name: 'Business Website',
      price: '₹35,000',
      period: 'starting from',
      badge: 'Startups & Showcase',
      features: [
        'Custom High-Fidelity UI/UX',
        'Responsive Mobile Layout',
        'Direct WhatsApp Redirect Lead Form',
        'Figma / Design Mockups Files',
        'Vercel / Netlify Deploy Configuration',
        '1 Month Free Support & Backups',
      ],
      cta: 'Choose Business',
      isPopular: false,
    },
    {
      name: 'Custom Web Application',
      price: '₹80,000',
      period: 'starting from',
      badge: 'Product Launch & SaaS',
      features: [
        'Everything in Business Plan',
        'Admin Dashboard & CMS Panel',
        'User Authentication (JWT / Security)',
        'Database (MySQL / PostgreSQL / MongoDB)',
        'Stripe / Razorpay Payments Gateways',
        '3 Months Maintenance & Support',
      ],
      cta: 'Choose Web App',
      isPopular: true,
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom Quote',
      period: 'tailored pricing',
      badge: 'Complex Systems & Clouds',
      features: [
        'Everything in Custom Web App',
        'Spring Boot & Java Microservices',
        'Multi-tenant SaaS Architecture',
        'Docker & AWS Cloud Setup',
        'Continuous Git CI/CD Automation',
        'Dedicated SLA Technical Support',
      ],
      cta: 'Get Enterprise Quote',
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="services-section" style={{ background: 'rgba(7, 10, 19, 0.5)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Clear, Transparent <span className="highlight">Pricing</span></h2>
          <p>World-class custom coding and premium designs. No hidden fees or template setups.</p>
        </div>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '40px', gap: '30px' }}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className="service-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: plan.isPopular ? '2px solid var(--primary)' : '1px solid var(--border-glass)',
                boxShadow: plan.isPopular ? '0 0 25px rgba(0, 240, 255, 0.15)' : 'none',
                borderRadius: '24px',
                padding: '40px 30px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--transition)',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                if (!plan.isPopular) {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 240, 255, 0.15)';
                }
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseOut={(e) => {
                if (!plan.isPopular) {
                  e.currentTarget.style.borderColor = 'var(--border-glass)';
                  e.currentTarget.style.boxShadow = 'none';
                } else {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.15)';
                }
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  color: 'var(--bg-dark)',
                  padding: '4px 16px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Most Popular
                </div>
              )}
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                  {plan.badge}
                </span>
                <h3 style={{ fontSize: '1.6rem', marginTop: '8px', color: 'var(--text-main)', marginBottom: '16px' }}>{plan.name}</h3>
                
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/ {plan.period}</span>
                </div>

                <hr style={{ border: 'none', borderBottom: '1px solid var(--border-glass)', marginBottom: '24px' }} />

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                  {plan.features.map((feat, fIndex) => (
                    <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', display: 'block', textAlign: 'center' }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
