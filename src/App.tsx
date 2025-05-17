import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandingSection from './components/BrandingSection';
import MexicanCoffeeSection from './components/MexicanCoffeeSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
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
    <div className="font-sans bg-stone-50 text-stone-800">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <BrandingSection />
        <MexicanCoffeeSection />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;