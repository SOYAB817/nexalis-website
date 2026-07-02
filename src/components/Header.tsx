
export default function Header() {
  return (
    <header>
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-nx">NX</span>
          <span className="logo-text">
            NEXALIS <span className="highlight">SOFTWARE</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#technologies">Technologies</a>
          <a href="#industries">Industries</a>
          <a href="#portfolio">Work</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn-cta-nav" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Book Free Consultation</a>
        </nav>
      </div>
    </header>
  );
}
