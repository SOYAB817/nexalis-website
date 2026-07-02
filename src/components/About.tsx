export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-card" style={{ padding: '50px 40px', background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '24px' }}>
          <div className="about-badge" style={{ display: 'inline-block', background: 'rgba(0, 240, 255, 0.08)', border: '1px solid rgba(0, 240, 255, 0.2)', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', padding: '6px 16px', borderRadius: '100px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Founder's Note
          </div>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '16px', lineHeight: '1.2' }}>
            Building Quality, Coding Value
          </h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '30px' }}>
            "At Nexalis Software, we believe software should solve real business problems. Every solution we build focuses on quality, scalability, and long-term value."
          </p>
          <div className="founder-meta" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <div className="founder-info" style={{ textAlign: 'left' }}>
              <strong style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'block' }}>Soyab Saifi</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Founder & CEO, Nexalis Software</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="tel:+916398995485"
                className="btn btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/916398995485?text=Hi%20Soyab,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
