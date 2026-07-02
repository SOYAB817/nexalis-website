export default function Process() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Analyzing project requirements, feasibility, scoping technology stacks, and aligning objectives.' },
    { num: '02', title: 'Planning', desc: 'Structuring development roadmap sprints, detailing database models, and defining architecture.' },
    { num: '03', title: 'UI Design', desc: 'Crafting premium high-fidelity Figma screens and custom UX workflows for your feedback.' },
    { num: '04', title: 'Development', desc: 'Writing clean, scalable codes utilizing modern Java, Spring Boot, React, Next.js, or Flutter.' },
    { num: '05', title: 'Testing', desc: 'Conducting device compatibility, speed audits, security checks, and clean console verification.' },
    { num: '06', title: 'Deployment', desc: 'Deploying the static assets and container microservices instantly to cloud servers like AWS or Vercel.' },
    { num: '07', title: 'Maintenance', desc: 'Delivering ongoing monitoring, database backups, performance audits, and new feature syncs.' },
  ];

  return (
    <section className="process-section" style={{ borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="section-header">
          <h2>How We <span className="highlight">Build</span></h2>
          <p>Our systematic development lifecycle guarantees clean codes, pixel-perfect layouts, and fast delivery.</p>
        </div>
        <div className="process-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '40px' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '16px',
                padding: '30px 24px',
                textAlign: 'left',
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
              <div className="step-num" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', opacity: 0.8, marginBottom: '12px' }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
