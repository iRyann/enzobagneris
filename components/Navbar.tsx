import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Activités', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nature-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className={`flex items-center gap-2 font-display text-2xl tracking-widest font-bold ${
            isScrolled ? 'text-nature-light' : 'text-nature-dark'
          }`}
        >
          <Leaf className={`w-6 h-6 ${isScrolled ? 'text-nature-accent' : 'text-nature-dark'}`} />
          <span>ENZO BAGNERIS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`font-serif text-sm tracking-wide transition-colors hover:text-nature-accent ${
                isScrolled ? 'text-nature-light' : 'text-nature-text'
              }`}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-nature-light' : 'text-nature-dark'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-nature-light' : 'text-nature-dark'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-nature-light shadow-xl border-t border-nature-dark/10">
          <div className="flex flex-col py-6 px-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-nature-dark font-display text-lg tracking-widest hover:text-nature-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;