
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
          <a href="#portfolio">Work</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn-cta-nav">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
