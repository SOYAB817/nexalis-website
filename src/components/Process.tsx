
export default function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <h2>
            How We <span className="highlight">Build</span>
          </h2>
          <p>Our systematic development lifecycle guarantees clean codes, pixel-perfect layouts, and fast delivery.</p>
        </div>
        <div className="process-grid">
          <div className="process-card">
            <div className="step-num">01</div>
            <h3>Plan & Design</h3>
            <p>Gathering key project requirements, structuring UX wireframes, and crafting premium UI designs for your approval.</p>
          </div>
          <div className="process-card">
            <div className="step-num">02</div>
            <h3>Develop</h3>
            <p>Writing responsive, modular codes using TypeScript, React, or Spring Boot configured for peak efficiency.</p>
          </div>
          <div className="process-card">
            <div className="step-num">03</div>
            <h3>Verify & Test</h3>
            <p>Performing strict device compatibility tests, speed optimizations, and clean console log audits.</p>
          </div>
          <div className="process-card">
            <div className="step-num">04</div>
            <h3>Launch & Support</h3>
            <p>Deploying instantly to AWS or Vercel and providing continuous post-launch maintenance and backups.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
