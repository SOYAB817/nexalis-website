import { useState, useEffect } from 'react';
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: banner1,
      title: 'Custom SaaS Analytics Portal',
    },
    {
      url: banner2,
      title: 'WhatsApp AI Chatbot Builder',
    },
    {
      url: banner3,
      title: 'Premium iOS/Android Application',
    },
  ];

  // Auto-slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-banner-card">
          {/* Sliding Images Container */}
          <div className="banner-slider-track" style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="banner-slide">
                <img src={slide.url} alt={slide.title} className="banner-slide-img" />
                <div className="banner-overlay"></div>
              </div>
            ))}
          </div>

          {/* Float Content (overlayed on top of the sliding track) */}
          <div className="banner-content">
            <div className="tagline-badge">Now Launching Premium Solutions</div>
            <h1 className="hero-title">
              We Code the Future of Your <span className="text-glow">Business</span>
            </h1>
            <p className="hero-subtitle">
              High-performance custom SaaS platforms, modern web portals, iOS/Android mobile apps, and intelligent AI chatbots designed to scale.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Start Your Project</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>

          {/* Slider Controls (Bottom Left inside the card) */}
          <div className="banner-controls">
            <button className="arrow-btn" onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)} aria-label="Previous slide">
              ←
            </button>
            <button className="arrow-btn" onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)} aria-label="Next slide">
              →
            </button>
            <div className="banner-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`banner-dot ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
