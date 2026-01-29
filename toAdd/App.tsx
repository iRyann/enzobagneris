
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ActivitySheet } from './components/ActivitySheet';
import { ACTIVITIES } from './constants';
import { Activity } from './types';

const App: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  if (selectedActivity) {
    return (
      <Layout>
        <ActivitySheet 
          activity={selectedActivity} 
          onBack={() => setSelectedActivity(null)} 
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-nature-green text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-nature-rust font-bold uppercase tracking-widest text-xs mb-4">Médiation Scientifique</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Catalogue des Activités</h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed font-light">
            Découvrez nos animations modulaires conçues pour éveiller la curiosité et 
            favoriser l'engagement écologique à travers des ateliers pratiques et scientifiques.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES.map((activity) => (
            <div 
              key={activity.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-nature-green/5 flex flex-col"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase font-bold tracking-widest text-nature-rust mb-2">
                  {activity.category}
                </span>
                <h3 className="text-2xl font-serif text-nature-green mb-4">{activity.title}</h3>
                <p className="text-sm text-nature-green/70 mb-8 flex-grow">
                  {activity.shortDescription}
                </p>
                <button className="text-nature-green font-bold text-xs uppercase tracking-widest flex items-center group-hover:text-nature-rust transition-colors">
                  Consulter la fiche 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          {/* Placeholder for "Sur mesure" */}
          <div className="bg-nature-cream border-2 border-dashed border-nature-green/20 rounded-2xl p-8 flex flex-col justify-center items-center text-center space-y-4 min-h-[400px]">
            <div className="w-12 h-12 bg-nature-green/5 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-nature-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-serif text-nature-green">Projet sur mesure</h3>
            <p className="text-xs text-nature-green/60 px-4">
              Vous avez une thématique précise ? Je crée des animations personnalisées selon vos besoins.
            </p>
            <button className="text-nature-rust font-bold uppercase text-[10px] tracking-widest">Nous contacter</button>
          </div>
        </div>
      </section>

      {/* RSE Section */}
      <section className="bg-nature-green/5 py-24">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-nature-green mb-6">Un catalogue modulaire pour tous les publics</h2>
            <p className="text-lg text-nature-green/80 mb-8 font-light">
              Chaque activité est déclinable en plusieurs formats. Que vous soyez une école cherchant à valider des acquis du programme, 
              ou une entreprise souhaitant concrétiser sa politique RSE par une action sur site, nous adaptons le discours et la pratique.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-nature-rust/10 rounded-full flex items-center justify-center text-nature-rust">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <span className="font-medium">Scolaires (Cycle 1 à Lycée)</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-nature-rust/10 rounded-full flex items-center justify-center text-nature-rust">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <span className="font-medium">Corporate & RSE</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-nature-rust/20 rounded-3xl rotate-3"></div>
            <img src="https://picsum.photos/seed/mediation/600/400" alt="Médiation" className="relative rounded-2xl shadow-xl w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
