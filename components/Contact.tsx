import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="bg-nature-dark text-nature-light py-24 relative overflow-hidden" id="contact">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-nature-accent/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-nature-dark/50 rounded-full blur-3xl border border-nature-light/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-nature-light">
              TRAVAILLONS ENSEMBLE
            </h2>
            <p className="font-serif text-nature-light/80 text-xl md:text-2xl leading-relaxed">
              Une mission d'expertise, une animation pédagogique ou une escapade en montagne ? 
              Contactez-moi directement pour discuter de vos besoins.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Email Box */}
            <a href="mailto:enzo.bagneris@email.com" className="group relative bg-nature-light/5 border border-nature-light/10 p-10 rounded-2xl hover:bg-nature-light hover:text-nature-dark transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-8 h-8" />
                </div>
                
                <div className="mb-6 inline-block p-4 bg-nature-accent/20 rounded-full group-hover:bg-nature-accent/10 transition-colors">
                    <Mail className="w-8 h-8 text-nature-accent" />
                </div>
                
                <h3 className="font-display text-2xl mb-2">Par Email</h3>
                <p className="font-serif text-lg opacity-80 mb-1">Pour les demandes détaillées</p>
                <p className="font-bold text-xl tracking-wide">enzo.bagneris@email.com</p>
            </a>

            {/* Phone Box */}
            <a href="tel:0600000000" className="group relative bg-nature-light/5 border border-nature-light/10 p-10 rounded-2xl hover:bg-nature-light hover:text-nature-dark transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="w-8 h-8" />
                </div>

                <div className="mb-6 inline-block p-4 bg-nature-soft/20 rounded-full group-hover:bg-nature-soft/10 transition-colors">
                    <Phone className="w-8 h-8 text-nature-soft group-hover:text-nature-dark" />
                </div>
                
                <h3 className="font-display text-2xl mb-2">Par Téléphone</h3>
                <p className="font-serif text-lg opacity-80 mb-1">Du Lundi au Vendredi</p>
                <p className="font-bold text-xl tracking-wide">06 00 00 00 00</p>
            </a>
        </div>

        {/* Location & Socials */}
        <div className="mt-16 pt-16 border-t border-nature-light/10 flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto text-nature-light/60">
            <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span className="font-serif text-lg">Basé dans les Pyrénées, mobile en France</span>
            </div>
            
            <div className="flex gap-4">
                <a href="#" className="p-3 border border-nature-light/20 rounded-full hover:bg-nature-light hover:text-nature-dark transition-all">
                    <Instagram size={20} />
                </a>
                <a href="#" className="p-3 border border-nature-light/20 rounded-full hover:bg-nature-light hover:text-nature-dark transition-all">
                    <Linkedin size={20} />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;