
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-card">
          <div className="about-badge">Founder's Note</div>
          <h3>Building Quality, Coding Value</h3>
          <p>
            "Nexalis Software was founded with a simple vision: to eliminate slow, poorly designed templates and deliver custom-built, premium software
            solutions. Every line of code we write is optimized for performance, scalability, and clean logic."
          </p>
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
  );
}
