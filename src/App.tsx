import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { initScrollAnimations } from './utils/scrollAnimations';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onMenuToggle={handleMenuToggle} />
      <main className={isMenuOpen ? 'main-blur' : ''}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;