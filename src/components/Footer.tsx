
export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-glass)', padding: '60px 0 30px 0' }}>
      <div className="container footer-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
        <div className="footer-brand" style={{ maxWidth: '360px', textAlign: 'left' }}>
          <strong style={{ fontSize: '1.4rem', color: 'var(--text-main)', display: 'block', marginBottom: '8px' }}>
            NX NEXALIS SOFTWARE
          </strong>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>
            Premium Web & Mobile Solutions. Made with logic. We help startups and enterprises build secure, scalable applications.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://www.linkedin.com/in/soyab-saifi-6a18bb419"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nexalis_software?igsh=MWJla2I5dzFzNDBwaQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@nexalissoftware?si=F9QpJAXj-OORpvzk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/share/1H2bnxaBGu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'var(--transition)' }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              Facebook
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', textAlign: 'left' }}>
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontWeight: 'bold' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Services</a></li>
              <li><a href="#technologies" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Technologies</a></li>
              <li><a href="#industries" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Industries</a></li>
              <li><a href="#portfolio" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Portfolio</a></li>
              <li><a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>About</a></li>
              <li><a href="#faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }} onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')} onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', fontWeight: 'bold' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Enterprise Apps</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>SaaS Platforms</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Web Development</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Mobile Apps</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>AI Automations</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-copy" style={{ textAlign: 'right', minWidth: '240px' }}>
          <p style={{ marginBottom: '8px', fontSize: '0.95rem' }}>
            📞 Call/WhatsApp:{' '}
            <a
              href="https://wa.me/916398995485?text=Hi%20Nexalis%20Software,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}
            >
              +91 6398995485
            </a>
          </p>
          <p style={{ marginBottom: '16px', fontSize: '0.95rem' }}>
            ✉️ Email:{' '}
            <a href="mailto:softwarenexalis@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>
              softwarenexalis@gmail.com
            </a>
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            &copy; 2026 Nexalis Software.<br />Building Scalable Software Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
