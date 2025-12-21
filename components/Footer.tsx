import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-light border-t border-nature-dark/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
           <Link to={{ pathname: '/', hash: '#home' }} className="font-display font-bold text-2xl text-nature-dark tracking-widest">ENZO BAGNERIS</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-serif text-sm text-nature-muted uppercase tracking-widest">
            <Link to={{ pathname: '/', hash: '#home' }} className="hover:text-nature-accent transition-colors">Accueil</Link>
            <Link to={{ pathname: '/', hash: '#about' }} className="hover:text-nature-accent transition-colors">À propos</Link>
            <Link to={{ pathname: '/portfolio', hash: '' }} className="hover:text-nature-accent transition-colors">Portfolio</Link>
            <a href="#" className="hover:text-nature-accent transition-colors">Mentions Légales</a>
        </div>

        <div className="text-xs text-nature-muted/60 text-center md:text-right">
            <p>© {new Date().getFullYear()} Enzo Bagneris. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;