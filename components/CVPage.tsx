import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Mountain, 
  Leaf, 
  Heart, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Download,
  ArrowRight,
  User,
  Trees
} from 'lucide-react';

const CVPage: React.FC = () => {
  return (
    <div className="bg-nature-light min-h-screen pt-24 pb-20 animate-in fade-in duration-700">
      
      {/* 1. Header Section - Profile & Intro */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border border-nature-dark/5 flex flex-col md:flex-row gap-12 items-center">
            
            {/* Profile Picture Area */}
            <div className="relative w-64 h-64 flex-shrink-0">
                <div className="absolute inset-0 bg-nature-accent/20 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-nature-light shadow-lg">
                    {/* Placeholder for Enzo's photo based on CV */}
                        <img 
                        src="/assets/images/placeholders/profile-placeholder.svg" 
                        alt="Enzo Bagneris" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute bottom-4 right-4 bg-nature-dark text-nature-light p-3 rounded-full shadow-lg">
                    <User size={24} />
                </div>
            </div>

            {/* Header Content */}
            <div className="text-center md:text-left flex-grow space-y-6">
                <div>
                    <h2 className="font-heading italic text-nature-accent text-2xl mb-2">Bonjour, je suis</h2>
                    <h1 className="font-display text-5xl md:text-7xl text-nature-dark leading-none">
                        ENZO BAGNERIS
                    </h1>
                    <p className="font-display text-xl md:text-2xl text-nature-muted mt-2 tracking-widest uppercase">
                        Animateur Nature & Médiateur
                    </p>
                </div>

                <div className="h-1 w-24 bg-nature-accent mx-auto md:mx-0"></div>

                <p className="font-serif text-lg text-nature-text leading-relaxed max-w-2xl">
                    "Passionné, investi et pédagogue ; je souhaite mettre à profit mes compétences en animation et contribuer à la préservation de l'environnement et à la sensibilisation auprès de différents publics."
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                    <a href="mailto:contact@enzobagneris.fr" className="px-6 py-2 border border-nature-dark/20 rounded-full hover:bg-nature-dark hover:text-nature-light transition-colors font-display text-sm tracking-wide">
                        CONTACT@ENZOBAGNERIS.FR
                    </a>
                    <span className="px-6 py-2 border border-nature-dark/20 rounded-full font-display text-sm tracking-wide bg-nature-light">
                        PERMIS B
                    </span>
                    <button className="flex items-center gap-2 px-6 py-2 bg-nature-accent text-nature-light rounded-full hover:bg-nature-dark transition-colors font-display text-sm tracking-wide shadow-lg">
                        <Download size={16} /> TÉLÉCHARGER LE CV
                    </button>
                </div>
            </div>
        </div>
      </section>

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        {/* 2. Left Column: Skills & Interests (4 cols) */}
        <aside className="lg:col-span-4 space-y-12">
            
            {/* Skills Section */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-dark/5">
                <h3 className="flex items-center gap-3 font-display text-2xl text-nature-dark mb-6">
                    <Leaf className="text-nature-accent" /> COMPÉTENCES
                </h3>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold font-serif text-nature-dark mb-2">Environnement & Animation</h4>
                        <ul className="space-y-2">
                            {['Élaboration d\'animations', 'Encadrement de groupes', 'Suivi scientifique (quadra)', 'Connaissance milieu montagnard'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-nature-muted">
                                    <CheckCircle size={14} className="mt-1 text-nature-accent flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="h-px bg-nature-dark/10"></div>

                    <div>
                        <h4 className="font-bold font-serif text-nature-dark mb-2">Techniques</h4>
                        <ul className="space-y-2">
                            {['Tronçonneuse & débroussailleuse', 'Entretien espaces naturels', 'Aménagements paysagers'].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-nature-muted">
                                    <Trees size={14} className="mt-1 text-nature-dark flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Soft Skills (Atouts) */}
            <div className="bg-nature-dark p-8 rounded-3xl shadow-sm text-nature-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nature-accent/10 rounded-full blur-2xl"></div>
                <h3 className="font-display text-2xl mb-6 relative z-10">MES ATOUTS</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                    {['Investi', 'Esprit d\'équipe', 'Affable', 'Soigneux', 'Autonome', 'Créatif'].map((atout) => (
                        <span key={atout} className="bg-nature-light/10 text-nature-light px-3 py-1 rounded-md text-sm font-serif border border-nature-light/20">
                            {atout}
                        </span>
                    ))}
                </div>
            </div>

            {/* Interests */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-dark/5">
                 <h3 className="flex items-center gap-3 font-display text-2xl text-nature-dark mb-6">
                    <Heart className="text-nature-soft" /> CENTRES D'INTÉRÊT
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center text-nature-dark">
                            <Mountain size={20} />
                        </div>
                        <span className="text-xs font-serif text-nature-muted">Randonnée</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center text-nature-accent">
                            <Leaf size={20} />
                        </div>
                        <span className="text-xs font-serif text-nature-muted">Terrariums</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-nature-light rounded-full flex items-center justify-center text-nature-soft">
                            <Briefcase size={20} />
                        </div>
                        <span className="text-xs font-serif text-nature-muted">Graphisme</span>
                    </div>
                </div>
            </div>

        </aside>

        {/* 3. Right Column: Timeline (Experience & Education) (8 cols) */}
        <main className="lg:col-span-8 space-y-12">
            
            {/* Experience Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-nature-dark text-nature-light rounded-xl">
                        <Briefcase size={24} />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-nature-dark">PARCOURS PRO</h2>
                </div>

                <div className="space-y-8 border-l-2 border-nature-dark/10 pl-8 ml-4 relative">
                    
                    {/* Item 1 - Ecocentre (Featured with Portfolio Link) */}
                    <div className="relative group">
                        <span className="absolute -left-[41px] top-0 w-5 h-5 bg-nature-accent rounded-full border-4 border-nature-light shadow-sm group-hover:scale-125 transition-transform"></span>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-nature-accent hover:shadow-xl transition-all duration-300">
                             <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="font-display text-xl md:text-2xl text-nature-dark font-bold">Agent Espaces verts - Ecocentre</h3>
                                <div className="flex items-center gap-2 text-sm text-nature-muted bg-nature-light px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                    <Calendar size={14} /> Mai - Juillet 2023
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-nature-accent font-bold mb-4">
                                <MapPin size={14} /> Riscle
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-nature-muted font-serif mb-6">
                                <li>Entretien et maintenance du site naturel.</li>
                                <li>Création de supports de sensibilisation au développement durable.</li>
                                <li><strong>Projet en autonomie :</strong> Conception et réalisation d'un hôtel à insectes.</li>
                            </ul>
                            
                            {/* Link to Portfolio */}
                            <Link to="/blog/hotel-insectes" className="inline-flex items-center gap-2 text-sm font-bold text-nature-accent hover:text-nature-dark transition-colors bg-nature-accent/5 px-4 py-2 rounded-lg">
                                Voir le projet "Hôtel à insectes" en détail <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Item 2 - Parc National */}
                    <div className="relative group">
                         <span className="absolute -left-[41px] top-0 w-5 h-5 bg-nature-dark rounded-full border-4 border-nature-light shadow-sm group-hover:scale-125 transition-transform"></span>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-nature-dark/5 hover:border-nature-dark/20 transition-all duration-300">
                             <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="font-display text-xl md:text-2xl text-nature-dark font-bold">Agent - Parc National des Pyrénées</h3>
                                <div className="flex items-center gap-2 text-sm text-nature-muted bg-nature-light px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                    <Calendar size={14} /> Juin-Juil 2022 / Janv 2020
                                </div>
                            </div>
                             <div className="flex items-center gap-2 text-sm text-nature-muted font-bold mb-4">
                                <MapPin size={14} /> Luz-St-Sauveur
                            </div>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-nature-muted font-serif">
                                <li>Suivi scientifique de la faune et de la flore.</li>
                                <li>Sensibilisation et éducation à l'environnement.</li>
                                <li>Animation de visites guidées et ateliers pédagogiques.</li>
                                <li>Surveillance et préservation des habitats naturels.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Item 3 - Point Vert */}
                    <div className="relative group">
                         <span className="absolute -left-[41px] top-0 w-5 h-5 bg-nature-dark/40 rounded-full border-4 border-nature-light shadow-sm group-hover:scale-125 transition-transform"></span>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-nature-dark/5 opacity-80 hover:opacity-100 transition-all">
                             <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                <h3 className="font-display text-xl text-nature-dark font-bold">Employé polyvalent</h3>
                                <div className="flex items-center gap-2 text-sm text-nature-muted bg-nature-light px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                                    <Calendar size={14} /> 2023 - 2025 (Missions)
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-nature-muted font-bold mb-4">
                                <MapPin size={14} /> Point Vert (Lembeye / Lescar)
                            </div>
                            <p className="text-nature-muted font-serif text-sm">
                                Entretien des plantes, conseil client, gestion des stocks et caisse.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Education Section */}
            <section>
                <div className="flex items-center gap-4 mb-8 pt-8 border-t border-nature-dark/10">
                    <div className="p-3 bg-nature-soft text-nature-dark rounded-xl">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-nature-dark">DIPLÔMES & FORMATIONS</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Diploma 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-nature-dark">
                        <span className="text-xs font-bold text-nature-accent tracking-widest uppercase">Juin 2024 • LPA Oloron</span>
                        <h3 className="font-display text-lg font-bold text-nature-dark mt-1 mb-2">BAC professionnel GMNF</h3>
                        <p className="text-sm text-nature-muted font-serif">Gestion des Milieux Naturels et de la Faune.</p>
                    </div>

                    {/* Diploma 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-nature-soft">
                        <span className="text-xs font-bold text-nature-accent tracking-widest uppercase">Juin 2024 • LPA Oloron</span>
                        <h3 className="font-display text-lg font-bold text-nature-dark mt-1 mb-2">Brevet initiateur montagnisme</h3>
                        <p className="text-sm text-nature-muted font-serif">Formation d'encadrement de groupe en montagne.</p>
                    </div>

                     {/* Others */}
                     <div className="bg-nature-light border border-nature-dark/10 p-6 rounded-2xl md:col-span-2 flex flex-wrap gap-6 items-center justify-between">
                        <div>
                            <h4 className="font-bold text-nature-dark">Diplôme SST</h4>
                            <p className="text-xs text-nature-muted">Sauveteur Secouriste au Travail (2023)</p>
                        </div>
                        <div className="h-8 w-px bg-nature-dark/10 hidden md:block"></div>
                        <div>
                            <h4 className="font-bold text-nature-dark">SNU & MIG</h4>
                            <p className="text-xs text-nature-muted">Service National Universel (2023)</p>
                        </div>
                     </div>
                </div>
            </section>

        </main>

      </div>
      
      {/* Footer CTA */}
      <div className="container mx-auto px-6 mt-20 text-center">
         <p className="font-serif text-xl text-nature-dark mb-6">Vous souhaitez en savoir plus sur ma démarche ?</p>
         <Link to="/portfolio" className="inline-block px-10 py-4 bg-nature-dark text-nature-light font-display text-lg tracking-widest hover:bg-nature-accent hover:-translate-y-1 transition-all duration-300 shadow-xl rounded-full">
            EXPLORER LE PORTFOLIO
         </Link>
      </div>

    </div>
  );
};

export default CVPage;
