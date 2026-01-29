
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-nature-green text-white py-6 px-4 md:px-12 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <span className="text-xs font-bold italic">EB</span>
            </div>
            <h1 className="text-xl md:text-2xl font-serif tracking-widest uppercase">Enzo Bagneris</h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-tighter">
            <a href="#" className="hover:text-nature-rust transition-colors">Accueil</a>
            <a href="#" className="hover:text-nature-rust transition-colors">Activités</a>
            <a href="#" className="hover:text-nature-rust transition-colors border-b-2 border-nature-rust">Catalogue</a>
            <a href="#" className="hover:text-nature-rust transition-colors">Contact</a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-nature-green text-white/80 py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
          <div>
            <h2 className="text-white font-serif text-xl mb-4">Enzo Bagneris</h2>
            <p className="text-sm leading-relaxed">
              Médiateur scientifique & Animateur nature.<br />
              Transmettre la curiosité du monde vivant par l'expérience directe.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white">Partenaires</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Me contacter</h3>
            <p className="text-sm">En région PACA et au-delà.</p>
            <a href="mailto:contact@enzobagneris.fr" className="text-nature-rust font-medium mt-2 block">contact@enzobagneris.fr</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Enzo Bagneris. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};
