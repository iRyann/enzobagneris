import React from 'react';
import { PenTool, Eye, FileSearch } from 'lucide-react';

const ScientificIllustration: React.FC = () => {
  return (
    <section className="py-24 bg-nature-dark text-nature-light overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-nature-light/5 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-nature-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="lg:w-1/3 space-y-8">
                <div>
                    <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                        MÉDIATION VISUELLE & ILLUSTRATION
                    </h2>
                    <div className="h-1 w-24 bg-nature-accent mb-6"></div>
                    <p className="font-serif text-nature-light/80 text-lg leading-relaxed">
                        Au-delà de l'animation, je conçois mes propres supports pédagogiques. 
                        Mon expertise me permet de traduire des concepts scientifiques complexes en supports visuels attrayants et rigoureux.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <PenTool className="text-nature-accent w-6 h-6 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold font-display text-lg">Conception sur mesure</h3>
                            <p className="text-sm text-nature-light/60">Création de fiches espèces, posters éducatifs et livrets pédagogiques adaptés au public cible.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <FileSearch className="text-nature-accent w-6 h-6 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold font-display text-lg">Rigueur Scientifique</h3>
                            <p className="text-sm text-nature-light/60">Validation des critères d'identification (ex: Milvus milvus vs Milvus migrans) et exactitude biologique.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Eye className="text-nature-accent w-6 h-6 flex-shrink-0" />
                        <div>
                            <h3 className="font-bold font-display text-lg">Impact Visuel</h3>
                            <p className="text-sm text-nature-light/60">Mise en page soignée pour capter l'attention et faciliter la mémorisation.</p>
                        </div>
                    </div>
                </div>

                <button className="mt-4 border border-nature-light/30 px-8 py-3 rounded-full hover:bg-nature-light hover:text-nature-dark transition-all duration-300 font-display tracking-widest text-sm">
                    COMMANDER UN SUPPORT
                </button>
            </div>

            {/* Visual Showcase - Direct Image Integration */}
            <div className="lg:w-2/3 w-full flex justify-center">
                <div className="relative group">
                    {/* Shadow & Rotation Wrapper */}
                    <div className="absolute inset-0 bg-black/20 transform rotate-2 blur-lg rounded-sm transition-transform duration-500 group-hover:rotate-0"></div>
                    
                    {/* The Image Container */}
                    <div className="relative bg-[#EAE5D9] p-2 md:p-4 rounded-sm transform rotate-1 transition-transform duration-500 group-hover:rotate-0 shadow-2xl">
                        {/* 
                           Remplacer l'URL src ci-dessous par votre véritable fichier image de la fiche Milan Royal.
                           J'utilise une image d'illustration générique pour l'exemple.
                        */}
                        <img 
                            src="https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?q=80&w=1200&auto=format&fit=crop" 
                            alt="Fiche Espèce Milan Royal - Conception Graphique Enzo Bagneris" 
                            className="w-full max-w-lg h-auto object-cover border border-nature-dark/10"
                        />
                        
                        {/* Caption Overlay (Optional) */}
                        <div className="absolute bottom-6 right-6 bg-nature-dark/90 text-nature-light px-4 py-2 text-xs font-display tracking-widest uppercase rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Fiche Espèce • Milan Royal
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ScientificIllustration;