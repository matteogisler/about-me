import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="bg-gradient-to-br from-gray-950 to-gray-900 text-gray-50 min-h-screen">
        <Header scrollY={scrollY} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;