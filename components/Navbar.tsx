import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Accueil', to: '/', hash: '#home' },
  { label: 'À propos', to: '/about', hash: '' },
  { label: 'Activités', to: '/services', hash: '' }, // Point to new Services page
  { label: 'Portfolio', to: '/portfolio', hash: '' },
  { label: 'Blog', to: '/blog', hash: '' },
  { label: 'Contact', to: '/', hash: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-nature-dark/95 backdrop-blur-sm shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to={{ pathname: '/', hash: '#home' }}
          onClick={closeMenu}
          className={`flex items-center gap-2 font-display text-2xl tracking-widest font-bold ${
            isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-dark'
          }`}
        >
          <Leaf className={`w-6 h-6 ${isScrolled || location.pathname !== '/' ? 'text-nature-accent' : 'text-nature-dark'}`} />
          <span className="hidden sm:inline">ENZO BAGNERIS</span>
          <span className="sm:hidden">EB</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={{ pathname: item.to, hash: item.hash }}
              className={`font-serif text-sm tracking-widest transition-colors hover:text-nature-accent ${
                location.pathname === item.to && item.hash === '' 
                ? 'text-nature-accent font-bold' 
                : isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-text'
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-dark'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-dark'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-nature-light z-50 animate-in slide-in-from-top duration-300">
           <div className="p-6 flex justify-between items-center border-b border-nature-dark/10">
              <span className="font-display font-bold text-xl text-nature-dark">MENU</span>
              <button onClick={closeMenu}><X className="w-8 h-8 text-nature-dark" /></button>
           </div>
          <div className="flex flex-col py-12 px-8 space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={{ pathname: item.to, hash: item.hash }}
                onClick={closeMenu}
                className="text-nature-dark font-display text-3xl tracking-widest border-b border-nature-dark/5 pb-4 hover:text-nature-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;