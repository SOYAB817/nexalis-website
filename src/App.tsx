import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      {/* Ambient Glowing Background Circles */}
      <div className="ambient-circle circle-1"></div>
      <div className="ambient-circle circle-2"></div>
      <div className="ambient-circle circle-3"></div>

      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Technologies Section */}
      <Technologies />

      {/* Our Process Section */}
      <Process />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Industries Section */}
      <Industries />

      {/* Portfolio/Work Section */}
      <Portfolio />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Pricing Section */}
      <Pricing />

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </>
  );
}
