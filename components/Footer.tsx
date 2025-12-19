import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-light border-t border-nature-dark/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-2xl text-nature-dark">
            Logo
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-serif text-sm text-nature-muted">
          <a href="#home" className="hover:text-nature-accent">
            Accueil
          </a>
          <a href="#about" className="hover:text-nature-accent">
            À propos
          </a>
          <a href="#services" className="hover:text-nature-accent">
            Services
          </a>
          <a href="#" className="hover:text-nature-accent">
            Mentions Légales
          </a>
          <a href="#" className="hover:text-nature-accent">
            CGV
          </a>
        </div>

        <div className="text-xs text-nature-muted/60 text-center md:text-right">
          <p>
            © {new Date().getFullYear()}Ryan Bouchou et Enzo Bagneris. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
