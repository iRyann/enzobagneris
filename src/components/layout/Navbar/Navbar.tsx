import { useEffect, useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigationConfig } from '@/config/navigation.config';
import { NavItem } from './NavItem';
import { MobileMenu } from './MobileMenu';

/**
 * Barre de navigation principale.
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        <Link
          to={{ pathname: '/', hash: '#home' }}
          onClick={closeMenu}
          className={`flex items-center gap-2 font-display text-2xl tracking-widest font-bold ${
            isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-dark'
          }`}
        >
          <Leaf
            className={`w-6 h-6 ${
              isScrolled || location.pathname !== '/' ? 'text-nature-accent' : 'text-nature-dark'
            }`}
          />
          <span className="hidden sm:inline">ENZO BAGNERIS</span>
          <span className="sm:hidden">EB</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navigationConfig.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              isActive={location.pathname === item.to}
              isScrolled={isScrolled || location.pathname !== '/'}
            />
          ))}
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Ouvrir le menu"
        >
          {isMobileMenuOpen ? (
            <X
              className={`w-8 h-8 ${
                isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-dark'
              }`}
            />
          ) : (
            <Menu
              className={`w-8 h-8 ${
                isScrolled || location.pathname !== '/' ? 'text-nature-light' : 'text-nature-dark'
              }`}
            />
          )}
        </button>
      </div>

      {isMobileMenuOpen && <MobileMenu items={navigationConfig} onClose={closeMenu} />}
    </nav>
  );
}
