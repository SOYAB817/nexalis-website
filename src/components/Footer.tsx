
export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-brand">
          <strong>NX NEXALIS SOFTWARE</strong>
          <p>Premium Web & Mobile Solutions. Made with logic.</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
            <a
              href="https://www.linkedin.com/in/soyab-saifi-6a18bb419"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'var(--transition)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/nexalis_software?igsh=MWJla2I5dzFzNDBwaQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'var(--transition)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <a
              href="https://youtube.com/@nexalissoftware?si=F9QpJAXj-OORpvzk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'var(--transition)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              YouTube
            </a>
            <a
              href="https://www.facebook.com/share/1H2bnxaBGu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'var(--transition)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Facebook
            </a>
          </div>
        </div>
        <div className="footer-copy" style={{ textAlign: 'right' }}>
          <p style={{ marginBottom: '8px' }}>
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
          <p style={{ marginBottom: '8px' }}>
            ✉️ Email:{' '}
            <a href="mailto:softwarenexalis@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>
              softwarenexalis@gmail.com
            </a>
          </p>
          <p>&copy; 2026 Nexalis Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
