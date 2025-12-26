import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Tent, 
  School, 
  Building2, 
  Users, 
  Compass, 
  Bug, 
  Sprout, 
  ArrowRight, 
  Map,
  Coffee
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-nature-light min-h-screen pt-24 pb-20 animate-in fade-in duration-700">
      
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <h1 className="font-display text-5xl md:text-7xl text-nature-dark mb-6">
            OFFRE DE PRESTATIONS
        </h1>
        <div className="h-1 w-24 bg-nature-accent mx-auto mb-8"></div>
        <p className="font-serif text-xl text-nature-muted max-w-3xl mx-auto leading-relaxed">
            Parce que la nature se vit différemment selon nos besoins, j'ai conçu des offres adaptées à chaque public. 
            De l'émerveillement individuel à la cohésion d'équipe, choisissez votre sentier.
        </p>
      </section>

      {/* 2. Navigation / Categories Anchors */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
            <a href="#public" className="group bg-white p-6 rounded-2xl shadow-sm border border-nature-dark/5 hover:border-nature-accent/50 transition-all text-center">
                <div className="w-12 h-12 bg-nature-accent/10 text-nature-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nature-accent group-hover:text-nature-light transition-colors">
                    <Tent size={24} />
                </div>
                <h3 className="font-display text-xl text-nature-dark">Grand Public</h3>
                <p className="text-sm text-nature-muted font-serif mt-2">Sorties, randos & découvertes</p>
            </a>
            <a href="#scolaire" className="group bg-white p-6 rounded-2xl shadow-sm border border-nature-dark/5 hover:border-nature-dark/50 transition-all text-center">
                <div className="w-12 h-12 bg-nature-dark/10 text-nature-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nature-dark group-hover:text-nature-light transition-colors">
                    <School size={24} />
                </div>
                <h3 className="font-display text-xl text-nature-dark">Écoles & Assos</h3>
                <p className="text-sm text-nature-muted font-serif mt-2">Pédagogie & projets éducatifs</p>
            </a>
            <a href="#entreprise" className="group bg-white p-6 rounded-2xl shadow-sm border border-nature-dark/5 hover:border-nature-soft/50 transition-all text-center">
                <div className="w-12 h-12 bg-nature-soft/20 text-nature-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nature-soft group-hover:text-nature-dark transition-colors">
                    <Building2 size={24} />
                </div>
                <h3 className="font-display text-xl text-nature-dark">Entreprises</h3>
                <p className="text-sm text-nature-muted font-serif mt-2">Séminaires & RSE</p>
            </a>
        </div>
      </div>

      {/* 3. Detailed Sections */}
      <div className="space-y-32">

        {/* --- GRAND PUBLIC --- */}
        <section id="public" className="container mx-auto px-6 scroll-mt-28">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-nature-accent font-display font-bold text-lg tracking-widest uppercase mb-2 block">Particuliers</span>
                    <h2 className="text-4xl md:text-5xl font-display text-nature-dark mb-6">GRAND PUBLIC</h2>
                    <p className="text-nature-text font-serif leading-relaxed mb-6">
                        Envie de vous évader ? Je vous guide hors des sentiers battus pour apprendre à lire le paysage, reconnaître les traces animales ou simplement profiter du grand air en toute sécurité.
                    </p>
                    <Link to="/#contact" className="inline-flex items-center gap-2 text-nature-accent font-bold hover:gap-4 transition-all">
                        Réserver une sortie <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="md:w-2/3 grid gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-nature-accent flex gap-6">
                        <div className="flex-shrink-0 mt-1"><Map className="w-8 h-8 text-nature-accent" /></div>
                        <div>
                            <h3 className="font-display text-2xl text-nature-dark mb-2">Randonnées Guidées</h3>
                            <p className="text-nature-muted font-serif mb-4">Demi-journée ou journée complète dans les Pyrénées. Adapté au niveau du groupe.</p>
                            <ul className="text-sm space-y-1 text-nature-text/80">
                                <li>• Lecture de paysage & Géologie</li>
                                <li>• Observation des rapaces et isards</li>
                                <li>• Histoire locale et pastoralisme</li>
                            </ul>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-nature-accent flex gap-6">
                        <div className="flex-shrink-0 mt-1"><Tent className="w-8 h-8 text-nature-accent" /></div>
                        <div>
                            <h3 className="font-display text-2xl text-nature-dark mb-2">Initiation Bivouac</h3>
                            <p className="text-nature-muted font-serif mb-4">Passez une nuit sous les étoiles en toute sécurité. Apprenez les bases de l'autonomie.</p>
                            <ul className="text-sm space-y-1 text-nature-text/80">
                                <li>• Choix du lieu et respect de la réglementation</li>
                                <li>• Montage du camp & gestion du feu</li>
                                <li>• Cuisine trappeur</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- SCOLAIRE --- */}
        <section id="scolaire" className="relative bg-nature-dark text-nature-light py-24 scroll-mt-28 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-nature-light/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                    <div className="md:w-1/3 sticky top-32">
                        <span className="text-nature-light/70 font-display font-bold text-lg tracking-widest uppercase mb-2 block">Éducation</span>
                        <h2 className="text-4xl md:text-5xl font-display text-nature-light mb-6">ÉCOLES & ASSOS</h2>
                        <p className="text-nature-light/80 font-serif leading-relaxed mb-6">
                            L'éducation à l'environnement est au cœur de mon métier. Je construis avec vous des projets pédagogiques sur mesure, du cycle 1 au lycée, en lien avec les programmes scolaires.
                        </p>
                        <Link to="/#contact" className="inline-flex items-center gap-2 text-nature-light font-bold hover:gap-4 transition-all">
                            Demander un devis <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
                        <div className="bg-nature-light/10 p-6 rounded-2xl backdrop-blur-sm border border-nature-light/10">
                            <Sprout className="w-8 h-8 text-nature-accent mb-4" />
                            <h3 className="font-display text-xl mb-2">Classes Découverte</h3>
                            <p className="text-sm text-nature-light/70">Séjours en immersion (montagne, forêt). Organisation complète des activités nature sur la semaine.</p>
                        </div>
                        <div className="bg-nature-light/10 p-6 rounded-2xl backdrop-blur-sm border border-nature-light/10">
                            <Bug className="w-8 h-8 text-nature-accent mb-4" />
                            <h3 className="font-display text-xl mb-2">Ateliers Scientifiques</h3>
                            <p className="text-sm text-nature-light/70">Protocoles de sciences participatives (Vigie-Nature École), découverte des insectes, botanique.</p>
                        </div>
                         <div className="bg-nature-light/10 p-6 rounded-2xl backdrop-blur-sm border border-nature-light/10">
                            <Compass className="w-8 h-8 text-nature-accent mb-4" />
                            <h3 className="font-display text-xl mb-2">Orientation & Carto</h3>
                            <p className="text-sm text-nature-light/70">Apprendre à se repérer. Utilisation de la boussole, lecture de carte IGN, jeux de piste.</p>
                        </div>
                         <div className="bg-nature-light/10 p-6 rounded-2xl backdrop-blur-sm border border-nature-light/10">
                            <Users className="w-8 h-8 text-nature-accent mb-4" />
                            <h3 className="font-display text-xl mb-2">Projets Tutorés</h3>
                            <p className="text-sm text-nature-light/70">Accompagnement de projets d'élèves : création de mares, hôtels à insectes, potagers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- ENTREPRISE --- */}
        <section id="entreprise" className="container mx-auto px-6 pb-24 scroll-mt-28">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3 sticky top-32">
                    <span className="text-nature-dark/60 font-display font-bold text-lg tracking-widest uppercase mb-2 block">Professionnels</span>
                    <h2 className="text-4xl md:text-5xl font-display text-nature-dark mb-6">ENTREPRISES</h2>
                    <p className="text-nature-text font-serif leading-relaxed mb-6">
                        Renforcez la cohésion de vos équipes tout en vous engageant pour la planète. Des séminaires au vert qui ont du sens, loin des salles de réunion classiques.
                    </p>
                    <Link to="/#contact" className="inline-flex items-center gap-2 text-nature-dark font-bold hover:gap-4 transition-all">
                        Organiser un événement <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="md:w-2/3 bg-white rounded-3xl overflow-hidden shadow-xl border border-nature-dark/10">
                    <div className="h-48 overflow-hidden">
                        <img src="/assets/images/placeholders/enterprise-placeholder.svg" alt="Team building nature" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                         <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-nature-dark font-bold font-display text-lg">
                                    <Coffee size={20} /> Séminaires au Vert
                                </div>
                                <p className="text-sm text-nature-muted">
                                    Réunions en extérieur, "walk & talk", déconnexion numérique pour favoriser la créativité.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-nature-dark font-bold font-display text-lg">
                                    <Users size={20} /> Team Building
                                </div>
                                <p className="text-sm text-nature-muted">
                                    Challenges nature (construction d'abris, orientation), rallye biodiversité, chantiers nature solidaires.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-nature-dark font-bold font-display text-lg">
                                    <Sprout size={20} /> Sensibilisation RSE
                                </div>
                                <p className="text-sm text-nature-muted">
                                    Ateliers "Fresque du Climat", biodiversité en entreprise, diagnostic écologique de vos espaces verts.
                                </p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>

      </div>

      {/* CTA Footer */}
      <div className="bg-nature-accent/10 py-20 text-center mt-20">
        <div className="container mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl text-nature-dark mb-6">UN PROJET SPÉCIFIQUE ?</h2>
            <p className="font-serif text-lg text-nature-muted mb-8 max-w-2xl mx-auto">
                Chaque groupe est unique. Contactez-moi pour construire ensemble une intervention adaptée à vos objectifs pédagogiques ou professionnels.
            </p>
            <Link 
                to={{ pathname: '/', hash: '#contact' }}
                className="inline-block px-10 py-4 bg-nature-dark text-nature-light font-display tracking-widest hover:bg-nature-accent transition-colors shadow-xl rounded-full"
            >
                DEMANDER UN DEVIS GRATUIT
            </Link>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;
