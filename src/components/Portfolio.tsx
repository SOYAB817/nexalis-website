
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
      tags: ['Spring Boot', 'Java', 'React', 'S3 Config'],
      description: 'A premium, multi-tenant administrative dashboard and booking content management system built for scalable cinema operations.',
      linkText: 'View Case Study',
    },
    {
      id: 'BOT',
      title: 'AI Chatbot Builder',
      tags: ['TypeScript', 'Node.js', 'OpenAI API', 'WhatsApp'],
      description: 'A visual conversation flow builder allowing businesses to automate customer support and lead generation via AI integrations.',
      linkText: 'Explore Demo',
    },
    {
      id: 'SHOP',
      title: 'Nexalis E-Commerce Suite',
      tags: ['Next.js', 'React', 'TailwindCSS', 'Stripe'],
      description: 'High-performance online storefront with premium custom themes, cart animations, and a responsive sales analytics dashboard.',
      linkText: 'View Project',
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Featured <span className="highlight">Projects</span>
          </h2>
          <p>A handpicked showcase of premium systems we have designed, coded, and deployed.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">{project.id}</div>
              <div className="portfolio-info">
                <div className="tech-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
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
