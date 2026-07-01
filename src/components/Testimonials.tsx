
interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      quote: "Nexalis delivered our custom CMS portal ahead of schedule. The code architecture is extremely clean, and their attention to technical details is outstanding.",
      author: "Rahul Sharma",
      role: "CEO, CineScape Media",
      initials: "RS",
    },
    {
      quote: "The AI WhatsApp integration they built for us reduced our customer response times by 70%. Absolute game-changer for our customer support team!",
      author: "Sarah Jenkins",
      role: "Founder, Chatbotify Inc.",
      initials: "SJ",
    },
    {
      quote: "Our landing pages load instantly. Vercel deployment and continuous Git integration make updates and scaling a completely seamless process.",
      author: "Amit Patel",
      role: "Technical Lead, Bells Academy",
      initials: "AP",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Client <span className="highlight">Feedback</span>
          </h2>
          <p>See what business leaders and startup founders say about working with Nexalis Software.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">“</div>
              <p className="testimonial-text">"{test.quote}"</p>
              <div className="client-profile">
                <div className="client-avatar-placeholder">{test.initials}</div>
                <div className="client-info">
                  <strong>{test.author}</strong>
                  <span>{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
