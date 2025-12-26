import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioGrid, ScientificIllustration } from '@/components/features/portfolio';

/**
 * Page portfolio.
 */
export function PortfolioPage() {
  return (
    <div className="pt-24 bg-nature-light min-h-screen animate-in slide-in-from-bottom-4 duration-700">
      <PortfolioHeader />

      <div id="portfolio-list">
        <PortfolioGrid />
      </div>

      <div id="scientific-works">
        <ScientificIllustration />
      </div>

      <PortfolioCta />
    </div>
  );
}

function PortfolioHeader() {
  return (
    <div className="container mx-auto px-6 mb-12">
      <h1 className="font-display text-5xl md:text-7xl text-nature-dark mb-4 uppercase tracking-tighter">
        Mon Portfolio
      </h1>
      <div className="h-1 w-32 bg-nature-accent mb-8"></div>
      <p className="font-serif text-xl text-nature-muted max-w-3xl italic">
        "De la conception graphique à l'animation de terrain, voici un aperçu de mes engagements
        pour la médiation environnementale."
      </p>
    </div>
  );
}

function PortfolioCta() {
  return (
    <div className="bg-white py-20 text-center border-t border-nature-dark/5">
      <h3 className="font-display text-4xl text-nature-dark mb-6">INTÉRESSÉ PAR MON TRAVAIL ?</h3>
      <p className="font-serif text-lg text-nature-muted mb-10 max-w-xl mx-auto px-6">
        Je suis disponible pour des missions de médiation, de conception de supports ou
        d'accompagnement en montagne.
      </p>
      <Link
        to={{ pathname: '/', hash: '#contact' }}
        className="inline-block px-12 py-4 bg-nature-accent text-white font-display tracking-widest hover:bg-nature-dark transition-colors shadow-xl"
      >
        ME CONTACTER
      </Link>
    </div>
  );
}
