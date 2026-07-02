interface ProjectItem {
  id: string;
  title: string;
  tags: string[];
  description: string;
  linkText: string;
}

export default function Portfolio() {
  const projects: ProjectItem[] = [
    {
      id: 'CMS',
      title: 'CineScape CMS Portal',
      tags: ['Java', 'Spring Boot', 'React'],
      description: 'A premium administrative control panel and multi-tenant cinema content management system for enterprise scheduling.',
      linkText: 'View Case Study',
    },
    {
      id: 'BOT',
      title: 'AI Chatbot Builder',
      tags: ['OpenAI', 'WhatsApp', 'TypeScript', 'Node'],
      description: 'A visual chatbot flow manager allowing automated customer support and lead capture via OpenAI API models.',
      linkText: 'Explore Demo',
    },
    {
      id: 'SHOP',
      title: 'Nexalis Commerce Suite',
      tags: ['Next.js', 'Stripe', 'React'],
      description: 'Ultra-fast storefront featuring premium product cards, cart animations, and integrated secure payment portals.',
      linkText: 'View Project',
    },
    {
      id: 'ERP',
      title: 'School ERP System',
      tags: ['Spring Boot', 'React', 'JWT'],
      description: 'An all-in-one portal managing student registrations, fee reports, class tracking, and teacher schedules with JWT protection.',
      linkText: 'View Case Study',
    },
    {
      id: 'HOSP',
      title: 'Hospital Management Portal',
      tags: ['Java', 'Spring', 'MySQL'],
      description: 'Safe clinical dashboard database helping doctors track appointments, patient log history, and pharmaceutical stocks.',
      linkText: 'View Project',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured <span className="highlight">Projects</span></h2>
          <p>A handpicked showcase of premium enterprise software systems we have designed, coded, and deployed.</p>
        </div>
        <div className="portfolio-grid" style={{ marginTop: '40px' }}>
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '2rem', color: 'var(--primary)' }}>
                {project.id}
              </div>
              <div className="portfolio-info">
                <div className="tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact" className="portfolio-link">
                  {project.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
