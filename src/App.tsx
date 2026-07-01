import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
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

      {/* Our Process Section */}
      <Process />

      {/* Portfolio/Work Section */}
      <Portfolio />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </>
  );
}
