import { Award, Mountain, Sprout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PartnersList } from '../PartnersList/PartnersList';
import { SkillsGrid, type SkillItem } from '../SkillsGrid/SkillsGrid';

/**
 * Section A propos.
 */
export function AboutSection() {
  const skills: SkillItem[] = [
    { icon: Sprout, label: 'Médiation Scientifique', className: 'text-nature-dark' },
    { icon: Mountain, label: 'Encadrement Montagne', className: 'text-nature-accent' },
    { icon: Award, label: 'Gestion de Projets Nature', className: 'text-nature-soft' },
  ];

  return (
    <section className="py-24 bg-nature-light relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="font-heading italic text-2xl md:text-3xl text-nature-dark/80">
            "Ils m'ont fait confiance"
          </p>
        </div>

        <PartnersList />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-nature-soft shadow-xl">
              <img
                src="/assets/images/placeholders/profile-placeholder.svg"
                alt="Enzo Bagneris en nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 bg-nature-dark text-nature-light p-6 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="font-display text-xl md:text-2xl font-bold">GMNF</span>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <p className="font-heading italic text-xl text-nature-accent mb-2">Qui suis-je ?</p>
              <h2 className="font-display text-5xl text-nature-dark relative inline-block">
                ENZO BAGNERIS
                <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-nature-accent"></span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-nature-text">
              Diplômé en <strong>Gestion des Milieux Naturels et de la Faune</strong> et{' '}
              <strong>Initiateur Montagnisme</strong>, je combine expertise technique et
              passion pour la transmission.
              <br />
              <br />
              Mon objectif ? Connecter le public au vivant à travers des expériences immersives et
              scientifiquement rigoureuses.
            </p>

            <SkillsGrid items={skills} />

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
}
