
export default function Technologies() {
  const techs = [
    { name: 'Java', category: 'Backend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Spring Security', category: 'Backend' },
    { name: 'Hibernate', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis', category: 'Database' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Python', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Kafka', category: 'Messaging' },
    { name: 'RabbitMQ', category: 'Messaging' },
    { name: 'GitHub', category: 'Version Control' },
  ];

  return (
    <section id="technologies" className="services-section" style={{ background: 'rgba(0, 0, 0, 0.02)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Our <span className="highlight">Tech Stack</span></h2>
          <p>We build with modern, production-grade technologies for maximum security, speed, and scaling.</p>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginTop: '40px'
        }}>
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="tag"
              style={{
                padding: '12px 24px',
                fontSize: '1rem',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-main)',
                transition: 'var(--transition)',
                cursor: 'default',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 0 15px var(--primary-glow)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{tech.name}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
