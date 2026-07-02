export default function WhyChooseUs() {
  const reasons = [
    { title: 'Enterprise Architecture', desc: 'Robust design pattern configurations using production-grade Java and cloud microservices.' },
    { title: 'Scalable Code', desc: 'Strict TypeScript guidelines and component decoupling for long-term codebase maintainability.' },
    { title: 'Secure Development', desc: 'Deep protection integration featuring Spring Security, JWT, and cloud encryption practices.' },
    { title: 'Agile Methodology', desc: 'Frequent project sprints, transparent progress logs, and collaborative client adjustments.' },
    { title: 'Dedicated Support', desc: '24/7 post-deployment monitoring, database backups, and instant maintenance responses.' },
    { title: 'Clean UI/UX', desc: 'Framer-inspired, modern high-fidelity screens designed to maximize page conversion rates.' },
    { title: 'Fast Delivery', desc: 'Optimized deployment cycles ensuring fast launches on AWS or Vercel ahead of schedule.' },
    { title: 'Modern Technologies', desc: 'Utilizing modern stacks including React 19, Next.js, and Docker configurations.' },
  ];

  return (
    <section id="why-choose-us" className="process-section" style={{ borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose <span className="highlight">Nexalis</span></h2>
          <p>We blend robust engineering with world-class design systems to build future-proof products.</p>
        </div>
        <div className="process-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="process-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '12px',
                padding: '30px 24px',
                transition: 'var(--transition)',
                cursor: 'default',
                textAlign: 'left'
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
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="highlight">✓</span> {reason.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
