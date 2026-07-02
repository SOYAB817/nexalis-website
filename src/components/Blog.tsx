export default function Blog() {
  const posts = [
    {
      title: 'Scaling Java APIs with Spring Boot',
      category: 'Java & Spring',
      desc: 'How to optimize connection pools, configure Hibernate caching layers, and use Spring Security JWT tokens to protect enterprise backends.',
      date: 'July 01, 2026',
    },
    {
      title: 'Building AI Assistants with OpenAI APIs',
      category: 'AI & Automation',
      desc: 'A complete workflow guide to constructing autonomous customer support bots and integrating them into WhatsApp business accounts.',
      date: 'June 28, 2026',
    },
    {
      title: 'Maximizing Speed in React 19',
      category: 'Frontend & React',
      desc: 'Exploring React Server Components, server actions, lazy-loaded components, and compiler assets optimizations in Vite.',
      date: 'June 25, 2026',
    },
  ];

  return (
    <section id="blog" className="process-section" style={{ borderTop: '1px solid var(--border-glass)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Latest <span className="highlight">Articles</span></h2>
          <p>Technical insights, engineering notes, and design frameworks shared by our developers.</p>
        </div>
        <div className="process-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
          {posts.map((post, index) => (
            <div
              key={index}
              className="process-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '16px',
                padding: '30px 24px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
              <div>
                <span className="tag" style={{ display: 'inline-block', marginBottom: '16px', fontSize: '0.75rem', padding: '4px 10px' }}>
                  {post.category}
                </span>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: 'var(--text-main)', lineHeight: '1.3' }}>{post.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>{post.desc}</p>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '500' }}>{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
