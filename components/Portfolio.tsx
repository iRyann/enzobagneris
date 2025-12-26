import React from 'react';
import { Microscope, Map, Hammer, Leaf, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "classe-decouverte",
    title: "Classe découverte en montagne",
    subtitle: "À la découverte de la faune et de la flore",
    target: "Scolaire (3 à 6 ans)",
    image: "/assets/images/placeholders/project-placeholder.svg",
    principles_env: [
      "Découverte de la montagne pyrénéenne : sensibilisation aux milieux locaux.",
      "Biodiversité : initiation aux rapaces diurnes (espèces emblématiques)."
    ],
    principles_pedago: [
      "Approche ludique : puzzles, énigmes, supports visuels adaptés aux non-lecteurs.",
      "Pédagogie active : manipulation d'objets concrets.",
      "Souvenir concret : le puzzle emporté par les enfants."
    ],
    icon: <Leaf className="w-6 h-6" />
  },
  {
    id: "phyt-abeilles",
    title: "Atelier Phyt'Abeilles",
    subtitle: "Déterminations, identification et protocole",
    target: "Primaire à BTS",
    image: "/assets/images/placeholders/project-placeholder.svg",
    principles_env: [
      "Biodiversité et pollinisation : importance écologique des abeilles sauvages.",
      "Science participative : implication dans un protocole scientifique reconnu."
    ],
    principles_pedago: [
      "Découverte active : ateliers pratiques au microscope.",
      "Curiosité et ludique : Démarche scientifique transformer en expérience captivante.",
      "Adaptabilité : animation modulable selon l'âge."
    ],
    icon: <Microscope className="w-6 h-6" />
  },
  {
    id: "hotel-insectes",
    title: "Rénovation d'un Hôtel à insectes",
    subtitle: "Un foyer pour la vie des plus petits",
    target: "Collégiens / Grand Public",
    image: "/assets/images/placeholders/project-placeholder.svg",
    principles_env: [
      "Préservation de la biodiversité : création d'habitats pour les auxiliaires.",
      "Approche écologique : utilisation de matériaux de récupération et locaux.",
      "Lien avec la sensibilisation : support pédagogique durable."
    ],
    principles_pedago: [
      "Potentiel pédagogique : support pour sensibiliser aux cycles de vie.",
      "Expérience tiers : participation à une animation de groupe.",
      "Travail manuel et valorisation des ressources."
    ],
    icon: <Hammer className="w-6 h-6" />
  },
  {
    id: "randonnee-decouverte",
    title: "Randonnée découverte",
    subtitle: "Faune et flore des montagnes pyrénéennes",
    target: "Collège (4ème/3ème) & Lycée",
    image: "/assets/images/placeholders/project-placeholder.svg",
    principles_env: [
      "Immersion en montagne : découverte directe de la faune/flore.",
      "Éducation au territoire : valorisation du patrimoine naturel pyrénéen.",
      "Sensibilisation au respect de l'environnement (déchets, sécurité)."
    ],
    principles_pedago: [
      "Autonomie : conception complète du parcours.",
      "Expérience immersive : observation directe en montagne.",
      "Dynamique de groupe : cohésion et responsabilité."
    ],
    icon: <Map className="w-6 h-6" />
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-nature-light/50 relative">
        {/* Background texture element */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-nature-accent rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
            <span className="font-heading italic text-2xl text-nature-accent block mb-2">Portfolio</span>
            <h2 className="font-display text-5xl md:text-6xl text-nature-dark">
                EXEMPLES D'INTERVENTIONS
            </h2>
            <p className="mt-4 text-nature-text max-w-2xl text-lg">
                Des projets concrets menés sur le terrain, alliant rigueur scientifique et pédagogie active pour tous les publics.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-nature-dark/10 hover:shadow-2xl transition-all duration-300 h-full">
              {/* Card Header with Image */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <Users className="w-4 h-4 text-nature-accent" />
                    <span className="text-sm font-bold text-nature-dark">{project.target}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 pt-20">
                    <h3 className="text-white font-display text-2xl md:text-3xl">{project.title}</h3>
                    <p className="text-nature-light/90 italic font-serif">{project.subtitle}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-8 flex-grow">
                
                {/* Principes Environnementaux */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-nature-dark/10 rounded-full text-nature-dark">
                            <Leaf size={18} />
                        </div>
                        <h4 className="font-bold text-nature-dark font-display tracking-wide uppercase text-sm">Principes Environnementaux</h4>
                    </div>
                    <ul className="space-y-2 pl-2 border-l-2 border-nature-dark/20">
                        {project.principles_env.map((principle, i) => (
                            <li key={i} className="text-nature-muted text-sm pl-4 leading-relaxed relative">
                                {principle}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Principes Pédagogiques */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-nature-accent/10 rounded-full text-nature-accent">
                            <GraduationCap size={18} />
                        </div>
                        <h4 className="font-bold text-nature-accent font-display tracking-wide uppercase text-sm">Approche Pédagogique</h4>
                    </div>
                    <ul className="space-y-2 pl-2 border-l-2 border-nature-accent/20">
                        {project.principles_pedago.map((principle, i) => (
                            <li key={i} className="text-nature-muted text-sm pl-4 leading-relaxed relative">
                                {principle}
                            </li>
                        ))}
                    </ul>
                </div>

              </div>

              {/* Footer Button */}
              <div className="p-8 pt-0 mt-auto">
                 <Link 
                    to={`/blog/${project.id}`}
                    className="inline-flex items-center gap-2 text-nature-accent font-display font-bold tracking-widest hover:text-nature-dark transition-colors group/btn"
                 >
                    EN SAVOIR PLUS
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
                 </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
