import React, { useEffect } from 'react';
import { MemoryRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ScientificIllustration from './components/ScientificIllustration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import CVPage from './components/CVPage';
import ServicesPage from './components/ServicesPage';

// Gère le défilement automatique vers les ancres (#contact, etc.)
const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Nettoyer le hash pour obtenir l'ID
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const HomePage = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div id="home">
        <Hero />
      </div>
      <div id="about-teaser">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="pt-24 bg-nature-light min-h-screen animate-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-6 mb-12">
          <h1 className="font-display text-5xl md:text-7xl text-nature-dark mb-4 uppercase tracking-tighter">Mon Portfolio</h1>
          <div className="h-1 w-32 bg-nature-accent mb-8"></div>
          <p className="font-serif text-xl text-nature-muted max-w-3xl italic">
            "De la conception graphique à l'animation de terrain, voici un aperçu de mes engagements pour la médiation environnementale."
          </p>
      </div>
      
      <div id="portfolio-list">
        <Portfolio />
      </div>
      
      <div id="scientific-works">
        <ScientificIllustration />
      </div>

      <div className="bg-white py-20 text-center border-t border-nature-dark/5">
        <h3 className="font-display text-4xl text-nature-dark mb-6">INTÉRESSÉ PAR MON TRAVAIL ?</h3>
        <p className="font-serif text-lg text-nature-muted mb-10 max-w-xl mx-auto px-6">
            Je suis disponible pour des missions de médiation, de conception de supports ou d'accompagnement en montagne.
        </p>
        <Link 
          to={{ pathname: '/', hash: '#contact' }}
          className="inline-block px-12 py-4 bg-nature-accent text-white font-display tracking-widest hover:bg-nature-dark transition-colors shadow-xl"
        >
            ME CONTACTER
        </Link>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <div className="flex flex-col min-h-screen font-serif bg-nature-light">
        <ScrollToAnchor />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<CVPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </MemoryRouter>
  );
};

export default App;