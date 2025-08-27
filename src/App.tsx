import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ProjectDetails from './sections/ProjectDetails';
import { initScrollAnimations } from './utils/scrollAnimations';

// Wrapper component to handle scroll animations on route changes
const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, [location.pathname]); // Re-initialize when route changes

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onMenuToggle={handleMenuToggle} />
      <main className={isMenuOpen ? 'main-blur' : ''}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project-details/:projectId" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;