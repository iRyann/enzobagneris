import React from 'react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

const services: ServiceItem[] = [
  {
    id: 'gestion',
    title: 'Gestion et protection de la nature',
    description: "Expertise technique pour l'inventaire faune/flore, la création de plans de gestion et la restauration de milieux dégradés. J'accompagne les collectivités et les privés dans une démarche durable.",
    image: '/assets/images/placeholders/service-placeholder.svg',
    ctaText: 'Détail pour les pros',
    reverseLayout: false,
  },
  {
    id: 'animation',
    title: 'Animation nature',
    description: "Ateliers pédagogiques pour écoles, centres de loisirs ou grand public. Découverte des insectes, lecture de paysage, traces et indices... Apprendre en s'amusant au cœur du terrain.",
    image: '/assets/images/placeholders/service-placeholder.svg',
    ctaText: 'Offre Scolaire',
    reverseLayout: true,
  },
  {
    id: 'randonnee',
    title: 'Randonnée & Montagnisme',
    description: "Sorties guidées en montagne. De la balade contemplative à l'initiation à l'orientation et au bivouac. Sécurité, convivialité et immersion totale.",
    image: '/assets/images/placeholders/service-placeholder.svg',
    ctaText: 'Sorties Grand Public',
    reverseLayout: false,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-nature-light overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <h2 className="font-display text-6xl md:text-8xl text-nature-dark relative inline-block pb-6">
            ACTIVITÉS PRO
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-nature-accent rounded-full"></span>
          </h2>
          <p className="mt-8 text-xl text-nature-muted font-serif">
              Un aperçu de mes domaines d'intervention.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <div key={service.id} className={`flex flex-col md:flex-row items-center gap-12 ${service.reverseLayout ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Container with Organic Shapes */}
              <div className="w-full md:w-1/2 relative group">
                 <div className={`absolute inset-0 bg-nature-accent/20 rounded-[2rem] transform ${service.reverseLayout ? '-rotate-3' : 'rotate-3'} transition-transform duration-500 group-hover:rotate-0`}></div>
                 <div className={`relative overflow-hidden rounded-[2rem] shadow-xl border-4 border-nature-light`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-80 md:h-[500px] object-cover filter sepia-[.3] transition-all duration-500 group-hover:sepia-0 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/80 via-transparent to-transparent opacity-60"></div>
                 </div>
              </div>

              {/* Text Content */}
              <div className={`w-full md:w-1/2 space-y-6 ${service.reverseLayout ? 'md:pr-12' : 'md:pl-12'}`}>
                <h3 className="font-heading font-bold text-4xl text-nature-dark leading-tight">
                  {service.title}
                </h3>
                <div className="h-1 w-20 bg-nature-accent"></div>
                <p className="text-lg text-nature-muted font-serif leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to="/services"
                  className={`
                    inline-block px-8 py-3 rounded-full border-2 border-nature-dark font-display tracking-widest text-sm
                    transition-all duration-300 hover:bg-nature-dark hover:text-nature-light
                    ${service.id === 'gestion' ? 'bg-nature-dark text-nature-light' : 'text-nature-dark'}
                  `}
                >
                  {service.ctaText.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
