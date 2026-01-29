
import React, { useState } from 'react';
import { Activity, TargetAudience } from '../types';
import { adaptDescriptionForAudience } from '../services/geminiService';

interface ActivitySheetProps {
  activity: Activity;
  onBack: () => void;
}

export const ActivitySheet: React.FC<ActivitySheetProps> = ({ activity, onBack }) => {
  const [selectedTarget, setSelectedTarget] = useState<TargetAudience>('Scolaires');
  const [aiDescription, setAiDescription] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const targets: TargetAudience[] = ['Scolaires', 'Entreprises (RSE)', 'Grand Public', 'Projets Tutorés'];

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      const desc = await adaptDescriptionForAudience(
        activity.title,
        selectedTarget,
        "Focus sur l'interaction sensorielle et les enjeux environnementaux actuels."
      );
      setAiDescription(desc);
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const currentModule = activity.modules[selectedTarget];

  return (
    <div className="bg-nature-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <button 
          onClick={onBack}
          className="flex items-center text-nature-green hover:text-nature-rust mb-8 group transition-colors"
        >
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au catalogue
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Fixed Info */}
          <div>
            <div className="overflow-hidden rounded-2xl shadow-2xl mb-8 border-4 border-white">
              <img src={activity.imageUrl} alt={activity.title} className="w-full h-96 object-cover" />
            </div>
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-nature-rust text-white text-xs font-bold tracking-widest uppercase rounded">
                {activity.category}
              </span>
              <h1 className="text-5xl font-serif text-nature-green">{activity.title}</h1>
              <p className="text-lg leading-relaxed text-nature-green/80 italic">
                "{activity.fullDescription}"
              </p>
            </div>
          </div>

          {/* Right Column: Modular Content */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-nature-green/10 flex flex-col">
            <div className="mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-nature-rust mb-6">
                Personnaliser l'offre pour :
              </h3>
              <div className="flex flex-wrap gap-2">
                {targets.map((t) => (
                  <button
                    key={t}
                    onClick={() => { setSelectedTarget(t); setAiDescription(null); }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedTarget === t 
                      ? 'bg-nature-green text-white shadow-lg scale-105' 
                      : 'bg-nature-cream text-nature-green hover:bg-nature-green/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-grow space-y-8 animate-fadeIn">
              <div className="border-l-4 border-nature-rust pl-6 py-2">
                <h2 className="text-3xl font-serif text-nature-green mb-3">
                  {currentModule.title}
                </h2>
                <p className="text-nature-green/70">
                  {aiDescription || currentModule.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-nature-cream p-4 rounded-xl">
                  <h4 className="text-[10px] uppercase font-bold tracking-tighter text-nature-rust mb-1">Durée</h4>
                  <p className="font-medium">{currentModule.duration}</p>
                </div>
                <div className="bg-nature-cream p-4 rounded-xl">
                  <h4 className="text-[10px] uppercase font-bold tracking-tighter text-nature-rust mb-1">Public</h4>
                  <p className="font-medium">{selectedTarget}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-nature-green mb-4">Objectifs pédagogiques & Clés :</h4>
                <ul className="space-y-3">
                  {currentModule.keyLearning.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-nature-rust mr-3">●</span>
                      <span className="text-sm text-nature-green/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 border-t border-nature-green/10 flex flex-col space-y-4">
                <button 
                   onClick={handleGenerateAI}
                   disabled={isGenerating}
                   className="w-full py-3 px-6 bg-nature-cream text-nature-green rounded-xl font-medium border border-nature-green/20 hover:bg-nature-green hover:text-white transition-all flex items-center justify-center space-x-2"
                >
                  <svg className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>{isGenerating ? 'Génération en cours...' : 'Générer une version sur mesure (AI)'}</span>
                </button>
                
                <button className="w-full py-4 px-8 bg-nature-rust text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-nature-rust/90 transition-all">
                  Demander un devis personnalisé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
