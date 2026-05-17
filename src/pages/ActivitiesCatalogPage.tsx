import { useState } from 'react';
import { Link } from 'react-router-dom';
import { activityAudiences } from '@/data/activities';
import { useActivities } from '@/hooks';
import type { Activity, ActivityAudience } from '@/types';

/**
 * Catalogue des activites.
 */
export function ActivitiesCatalogPage() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const { activities, loading } = useActivities();

  if (selectedActivity) {
    return (
      <div className="bg-nature-light min-h-screen pt-24 pb-20 animate-in fade-in duration-700">
        <ActivitySheet activity={selectedActivity} onBack={() => setSelectedActivity(null)} />
      </div>
    );
  }

  return (
    <div className="bg-nature-light min-h-screen pt-24 pb-20 animate-in fade-in duration-700">
      <ActivitiesHero />
      <ActivitiesGrid activities={activities} loading={loading} onSelect={setSelectedActivity} />
      <CustomProjectCta />
      <AudienceSection />
    </div>
  );
}

function ActivitiesHero() {
  return (
    <section className="bg-nature-dark text-nature-light pt-12 pb-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-nature-accent font-display font-bold uppercase tracking-widest text-xs mb-4">
          Médiation scientifique
        </p>
        <h1 className="font-display text-5xl md:text-7xl mb-6">Catalogue des activités</h1>
        <p className="font-serif text-lg md:text-xl text-nature-light/80 max-w-3xl mx-auto leading-relaxed">
          Découvrez des animations modulaires conçues pour éveiller la curiosité et renforcer
          l&apos;engagement écologique, du terrain à la salle de classe.
        </p>
      </div>
    </section>
  );
}

function ActivitiesGrid({
  activities,
  loading,
  onSelect,
}: {
  activities: Activity[];
  loading: boolean;
  onSelect: (activity: Activity) => void;
}) {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-nature-dark/10 h-96 animate-pulse" />
            ))
          : activities.map((activity) => (
          <button
            key={activity.id}
            type="button"
            onClick={() => onSelect(activity)}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all text-left border border-nature-dark/10 flex flex-col"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={activity.image.url}
                alt={activity.image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-[11px] uppercase font-bold tracking-widest text-nature-accent mb-2">
                {activity.category}
              </span>
              <h3 className="text-2xl font-display text-nature-dark mb-4">{activity.title}</h3>
              <p className="text-sm text-nature-muted mb-8 flex-grow font-serif">
                {activity.shortDescription}
              </p>
              <span className="text-nature-dark font-bold text-xs uppercase tracking-widest flex items-center group-hover:text-nature-accent transition-colors">
                Consulter la fiche
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </button>
        ))}

        <div className="bg-nature-light border-2 border-dashed border-nature-dark/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center space-y-4 min-h-[360px]">
          <div className="w-12 h-12 bg-nature-accent/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-nature-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-display text-nature-dark">Projet sur mesure</h3>
          <p className="text-sm text-nature-muted px-4 font-serif">
            Une thématique précise ? Je crée des animations personnalisées selon vos besoins.
          </p>
          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="text-nature-accent font-bold uppercase text-[11px] tracking-widest"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

function ActivitySheet({ activity, onBack }: { activity: Activity; onBack: () => void }) {
  const [selectedTarget, setSelectedTarget] = useState<ActivityAudience>('Grand Public');

  const currentModule = activity.modules[selectedTarget];
  const targets = activityAudiences;

  return (
    <div className="container mx-auto px-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center text-nature-dark hover:text-nature-accent mb-10 group transition-colors font-semibold"
      >
        <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour au catalogue
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="overflow-hidden rounded-3xl shadow-2xl mb-8 border border-nature-dark/10">
            <img src={activity.image.url} alt={activity.image.alt} className="w-full h-96 object-cover" />
          </div>
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-nature-accent text-nature-light text-xs font-bold tracking-widest uppercase rounded-full">
              {activity.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display text-nature-dark">{activity.title}</h1>
            <p className="text-lg leading-relaxed text-nature-muted font-serif">
              &ldquo;{activity.fullDescription}&rdquo;
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-nature-dark/10 flex flex-col">
          <div className="mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-nature-accent mb-6">
              Personnaliser l&apos;offre pour :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {targets.map((target) => (
                <button
                  key={target}
                  type="button"
                  onClick={() => setSelectedTarget(target)}
                  className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTarget === target
                      ? 'bg-nature-dark text-nature-light shadow-lg'
                      : 'bg-nature-light text-nature-dark hover:bg-nature-accent/10'
                  }`}
                >
                  {target}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-grow space-y-8">
            <div className="border-l-4 border-nature-accent pl-6 py-2">
              <h2 className="text-3xl font-display text-nature-dark mb-3">{currentModule.title}</h2>
              <p className="text-nature-muted">{currentModule.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-nature-light p-4 rounded-xl border border-nature-dark/5">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-nature-accent mb-1">
                  Durée
                </h4>
                <p className="font-medium text-nature-dark">{currentModule.duration}</p>
              </div>
              <div className="bg-nature-light p-4 rounded-xl border border-nature-dark/5">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-nature-accent mb-1">
                  Public
                </h4>
                <p className="font-medium text-nature-dark">{selectedTarget}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-nature-dark mb-4">
                Objectifs pédagogiques & clés :
              </h4>
              <ul className="space-y-3">
                {currentModule.keyLearning.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-nature-accent mr-3">●</span>
                    <span className="text-sm text-nature-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-nature-dark/10 flex flex-col space-y-4">
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className="w-full py-4 px-8 bg-nature-dark text-nature-light rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-nature-accent transition-colors text-center"
              >
                Demander un devis personnalisé
              </Link>
              <p className="text-xs text-nature-muted text-center">
                Vous souhaitez une version sur mesure ? Nous la concevons ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomProjectCta() {
  return (
    <section className="bg-nature-accent/10 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-nature-dark mb-4">
          Un besoin spécifique ?
        </h2>
        <p className="font-serif text-lg text-nature-muted max-w-2xl mx-auto mb-8">
          Chaque public, chaque territoire, chaque objectif compte. Construisons ensemble une
          animation qui vous ressemble.
        </p>
        <Link
          to={{ pathname: '/', hash: '#contact' }}
          className="inline-flex items-center justify-center px-10 py-4 bg-nature-dark text-nature-light font-display tracking-widest hover:bg-nature-accent transition-colors shadow-xl rounded-full"
        >
          Contacter Enzo
        </Link>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-nature-dark mb-6">
            Un catalogue modulaire pour tous les publics
          </h2>
          <p className="font-serif text-lg text-nature-muted mb-8">
            Chaque activité se déclinera selon vos contraintes et vos objectifs : cycles scolaires,
            politiques RSE, formats courts ou immersifs. Nous ajustons le contenu, le rythme et le
            niveau d&apos;intervention.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-nature-accent/10 rounded-full flex items-center justify-center text-nature-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="font-medium text-nature-dark">Scolaires (cycle 1 à lycée)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-nature-accent/10 rounded-full flex items-center justify-center text-nature-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-medium text-nature-dark">Entreprises & engagements RSE</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-nature-accent/10 rounded-full flex items-center justify-center text-nature-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10h18M7 15h10M9 19h6M12 3v4" />
                </svg>
              </div>
              <span className="font-medium text-nature-dark">Grand public et associations locales</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-nature-accent/20 rounded-3xl rotate-2"></div>
          <img
            src="/assets/images/presentation/home/service-rse.jpg"
            alt="Médiation scientifique en entreprise"
            className="relative rounded-3xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
