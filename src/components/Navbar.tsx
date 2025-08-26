import React, { useState } from 'react';

interface NavbarProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle(newMenuState);
    // Prevent body scroll when menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <nav className={`navbar-bg sticky top-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-full px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold gradient-text">Simone Lue</a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200">About</a>
                <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200">Skills</a>
                <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`text-gray-300 hover:text-white focus:outline-none focus:text-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <>
        {/* Side menu */}
        <div className={`md:hidden fixed -left-2/3 top-0 h-full w-2/3 z-50 overflow-hidden transform transition-transform duration-600 ease-out ${isMenuOpen ? 'translate-x-full' : 'translate-x-0'}`} style={{ backgroundColor: 'rgb(14, 19, 30)' }}>
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-8">
              <a href="#home" className="text-2xl font-bold gradient-text">Simone Lue</a>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-start pt-8 px-12 space-y-12">
              <a href="#home" onClick={toggleMenu} className="text-white text-3xl font-semibold transition duration-200 flex items-center justify-between">
                Home
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#about" onClick={toggleMenu} className="text-white text-3xl font-semibold transition duration-200 flex items-center justify-between">
                About
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#skills" onClick={toggleMenu} className="text-white text-3xl font-semibold transition duration-200 flex items-center justify-between">
                Skills
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#projects" onClick={toggleMenu} className="text-white text-3xl font-semibold transition duration-200 flex items-center justify-between">
                Projects
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" onClick={toggleMenu} className="text-white text-3xl font-semibold transition duration-200 flex items-center justify-between">
                Contact
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;