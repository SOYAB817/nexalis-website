import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Do you build custom designs or use templates?',
      answer: 'Every single project at Nexalis Software is custom-designed and custom-coded from scratch. We do not use slow, generic pre-made templates, ensuring your site is lightning-fast and highly secure.',
    },
    {
      question: 'How long does a typical software project take?',
      answer: 'A standard marketing landing page or WhatsApp chatbot setup takes 1-2 weeks. Complex SaaS portals, custom dashboards, or mobile applications usually take 4-8 weeks depending on features.',
    },
    {
      question: 'What technology stack do you use?',
      answer: 'We specialize in modern, high-performance web and mobile tech including React, Next.js, TypeScript, Node.js, Spring Boot, React Native, and robust hosting via AWS and Vercel.',
    },
    {
      question: 'Do you provide post-launch maintenance?',
      answer: 'Yes, we provide ongoing monthly maintenance and support packages to monitor performance, manage backups, run security audits, and implement new feature updates.',
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p>Clear answers to some of the most common inquiries about our custom services.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <button onClick={() => toggleFaq(index)} className="faq-question" aria-expanded={activeFaq === index}>
                {faq.question}
                <span className="faq-icon-indicator">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
