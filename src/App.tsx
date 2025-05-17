import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandingSection from './components/BrandingSection';
import MexicanCoffeeSection from './components/MexicanCoffeeSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { useScrollAnimation } from './hooks/useScrollAnimation';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize scroll animations
  useScrollAnimation();

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <BrandingSection />
        <MexicanCoffeeSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="font-sans bg-stone-50 text-stone-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;