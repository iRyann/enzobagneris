import React from 'react';
import { Award, Mountain, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [
  { name: 'Parc National des Pyrénées', logo: '/assets/images/placeholders/partner-placeholder.svg' },
  { name: 'Pierre & Terre', logo: '/assets/images/placeholders/partner-placeholder.svg' },
  { name: 'Point Vert', logo: '/assets/images/placeholders/partner-placeholder.svg' },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-nature-light relative">
      <div className="container mx-auto px-6">
        
        {/* Partners Title */}
        <div className="text-center mb-10">
            <p className="font-heading italic text-2xl md:text-3xl text-nature-dark/80">
              "Ils m'ont fait confiance"
            </p>
        </div>

        {/* Partners Row - Optional: can be moved to footer or kept here as social proof */}
        <div className="flex flex-wrap justify-center gap-12 mb-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center px-6 py-3 border border-nature-dark/10 rounded-full bg-white/40">
                <span className="font-display font-bold text-nature-dark text-sm">{partner.name}</span>
              </div>
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="order-2 md:order-1 relative">
                <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-nature-soft shadow-xl">
                    <img 
                        src="/assets/images/placeholders/profile-placeholder.svg" 
                        alt="Enzo Bagneris en nature" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Badge */}
                <div className="absolute top-0 right-0 bg-nature-dark text-nature-light p-6 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                   <span className="font-display text-xl md:text-2xl font-bold">GMNF</span>
                </div>
            </div>

            {/* Text Side */}
            <div className="order-1 md:order-2 space-y-8">
                <div>
                     <p className="font-heading italic text-xl text-nature-accent mb-2">Qui suis-je ?</p>
                    <h2 className="font-display text-5xl text-nature-dark relative inline-block">
                        ENZO BAGNERIS
                        <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-nature-accent"></span>
                    </h2>
                </div>
                
                <p className="text-lg leading-relaxed text-nature-text">
                    Diplômé en <strong>Gestion des Milieux Naturels et de la Faune</strong> et <strong>Initiateur Montagnisme</strong>, je combine expertise technique et passion pour la transmission. 
                    <br/><br/>
                    Mon objectif ? Connecter le public au vivant à travers des expériences immersives et scientifiquement rigoureuses.
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                         <Sprout className="text-nature-dark" />
                         <span className="font-serif text-nature-muted">Médiation Scientifique</span>
                    </div>
                    <div className="flex items-center gap-4">
                         <Mountain className="text-nature-accent" />
                         <span className="font-serif text-nature-muted">Encadrement Montagne</span>
                    </div>
                    <div className="flex items-center gap-4">
                         <Award className="text-nature-soft" />
                         <span className="font-serif text-nature-muted">Gestion de Projets Nature</span>
                    </div>
                </div>

                <div className="pt-6">
                    <Link 
                        to="/about"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-transparent border-2 border-nature-dark text-nature-dark font-display tracking-widest hover:bg-nature-dark hover:text-nature-light transition-all duration-300 group"
                    >
                        VOIR MON PARCOURS DÉTAILLÉ
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
