import { Fragment } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle,
  GraduationCap,
  Heart,
  Leaf,
  MapPin,
  Mountain,
  Trees,
  User,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import cvData from '@/data/cv.json';
import { SecureDownloadButton } from '@/components/ui';

const CV_DOWNLOAD = {
  path: `${import.meta.env.BASE_URL}assets/cv/Enzo-Bagneris-CV.pdf`,
  fileName: 'Enzo-Bagneris-CV.pdf',
  mimeType: 'application/pdf',
  maxBytes: 5 * 1024 * 1024,
  timeoutMs: 15000,
};

/**
 * Page CV detaillee.
 */
export function CVPage() {
  return (
    <div className="bg-nature-light min-h-screen pt-24 pb-20 animate-in fade-in duration-700">
      <CvHeader />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-12">
          <SkillsSection />
          <SoftSkillsSection />
          <InterestsSection />
        </aside>

        <main className="lg:col-span-8 space-y-12">
          <ExperienceSection />
          <EducationSection />
        </main>
      </div>

      <CvFooterCta />
    </div>
  );
}

function CvHeader() {
  const { profile } = cvData;

  return (
    <section className="container mx-auto px-6 mb-20">
      <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 border border-nature-dark/5 flex flex-col md:flex-row gap-12 items-center">
        <div className="relative w-64 h-64 flex-shrink-0">
          <div className="absolute inset-0 bg-nature-accent/20 rounded-full blur-2xl transform translate-x-4 translate-y-4"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-nature-light shadow-lg">
            <img src={profile.photo.url} alt={profile.photo.alt} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-4 right-4 bg-nature-dark text-nature-light p-3 rounded-full shadow-lg">
            <User size={24} />
          </div>
        </div>

        <div className="text-center md:text-left flex-grow space-y-6">
          <div>
            <h2 className="font-heading italic text-nature-accent text-2xl mb-2">{profile.subtitle}</h2>
            <h1 className="font-display text-5xl md:text-7xl text-nature-dark leading-none">
              {profile.name.toUpperCase()}
            </h1>
            <p className="font-display text-xl md:text-2xl text-nature-muted mt-2 tracking-widest uppercase">
              {profile.title}
            </p>
          </div>

          <div className="h-1 w-24 bg-nature-accent mx-auto md:mx-0"></div>

          <p className="font-serif text-lg text-nature-text leading-relaxed max-w-2xl">
            {profile.intro}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a
              href={`mailto:${profile.email}`}
              className="px-6 py-2 border border-nature-dark/20 rounded-full hover:bg-nature-dark hover:text-nature-light transition-colors font-display text-sm tracking-wide"
            >
              {profile.email.toUpperCase()}
            </a>
            <span className="px-6 py-2 border border-nature-dark/20 rounded-full font-display text-sm tracking-wide bg-nature-light">
              {profile.license}
            </span>
            <SecureDownloadButton
              download={CV_DOWNLOAD}
              label="TÉLÉCHARGER LE CV"
              loadingLabel="TÉLÉCHARGEMENT..."
              variant="secondary"
              size="sm"
              className="px-6 py-2 text-sm rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const { skills } = cvData;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-dark/5">
      <h3 className="flex items-center gap-3 font-display text-2xl text-nature-dark mb-6">
        <Leaf className="text-nature-accent" /> COMPÉTENCES
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-bold font-serif text-nature-dark mb-2">Environnement & Animation</h4>
          <ul className="space-y-2">
            {skills.environment.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-nature-muted">
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
            {skills.techniques.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-nature-muted">
                <Trees size={14} className="mt-1 text-nature-dark flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SoftSkillsSection() {
  const { softSkills } = cvData;

  return (
    <div className="bg-nature-dark p-8 rounded-3xl shadow-sm text-nature-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-nature-accent/10 rounded-full blur-2xl"></div>
      <h3 className="font-display text-2xl mb-6 relative z-10">MES ATOUTS</h3>
      <div className="flex flex-wrap gap-3 relative z-10">
        {softSkills.map((item) => (
          <span
            key={item}
            className="bg-nature-light/10 text-nature-light px-3 py-1 rounded-md text-sm font-serif border border-nature-light/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function InterestsSection() {
  const { interests } = cvData;
  const icons = {
    Mountain,
    Leaf,
    Briefcase,
  } as const;

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-nature-dark/5">
      <h3 className="flex items-center gap-3 font-display text-2xl text-nature-dark mb-6">
        <Heart className="text-nature-soft" /> CENTRES D'INTÉRÊT
      </h3>
      <div className="grid grid-cols-3 gap-4 text-center">
        {interests.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 bg-nature-light rounded-full flex items-center justify-center ${
                  item.icon === 'Leaf' ? 'text-nature-accent' : item.icon === 'Briefcase' ? 'text-nature-soft' : 'text-nature-dark'
                }`}
              >
                <Icon size={20} />
              </div>
              <span className="text-xs font-serif text-nature-muted">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ExperienceSection() {
  const { experience } = cvData;

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-nature-dark text-nature-light rounded-xl">
          <Briefcase size={24} />
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-nature-dark">PARCOURS PRO</h2>
      </div>

      <div className="space-y-8 border-l-2 border-nature-dark/10 pl-8 ml-4 relative">
        {experience.map((item, index) => (
          <div key={item.title} className="relative group">
            <span
              className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-nature-light shadow-sm group-hover:scale-125 transition-transform ${
                index === 0
                  ? 'bg-nature-accent'
                  : index === 1
                  ? 'bg-nature-dark'
                  : 'bg-nature-dark/40'
              }`}
            ></span>

            <div
              className={`bg-white p-6 rounded-2xl ${
                item.variant === 'featured'
                  ? 'shadow-md border-l-4 border-nature-accent hover:shadow-xl'
                  : item.variant === 'muted'
                  ? 'shadow-sm border border-nature-dark/5 opacity-80 hover:opacity-100'
                  : 'shadow-sm border border-nature-dark/5 hover:border-nature-dark/20'
              } transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="font-display text-xl md:text-2xl text-nature-dark font-bold">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-nature-muted bg-nature-light px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  <Calendar size={14} /> {item.date}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-nature-accent font-bold mb-4">
                <MapPin size={14} /> {item.location}
              </div>

              {item.highlights && (
                <ul className="list-disc list-outside ml-4 space-y-2 text-nature-muted font-serif mb-6">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {item.summary && <p className="text-nature-muted font-serif text-sm">{item.summary}</p>}

              {item.link && (
                <Link
                  to={item.link.to}
                  className="inline-flex items-center gap-2 text-sm font-bold text-nature-accent hover:text-nature-dark transition-colors bg-nature-accent/5 px-4 py-2 rounded-lg"
                >
                  {item.link.label} <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  const { education, certifications } = cvData;

  return (
    <section>
      <div className="flex items-center gap-4 mb-8 pt-8 border-t border-nature-dark/10">
        <div className="p-3 bg-nature-soft text-nature-dark rounded-xl">
          <GraduationCap size={24} />
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-nature-dark">DIPLÔMES & FORMATIONS</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((item) => (
          <div
            key={item.title}
            className={`bg-white p-6 rounded-2xl shadow-sm border-b-4 ${
              item.accent === 'soft' ? 'border-nature-soft' : 'border-nature-dark'
            }`}
          >
            <span className="text-xs font-bold text-nature-accent tracking-widest uppercase">
              {item.date}
            </span>
            <h3 className="font-display text-lg font-bold text-nature-dark mt-1 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-nature-muted font-serif">{item.description}</p>
          </div>
        ))}

        <div className="bg-nature-light border border-nature-dark/10 p-6 rounded-2xl md:col-span-2 flex flex-wrap gap-6 items-center justify-between">
          {certifications.map((item, index) => (
            <Fragment key={item.title}>
              <div>
                <h4 className="font-bold text-nature-dark">{item.title}</h4>
                <p className="text-xs text-nature-muted">{item.description}</p>
              </div>
              {index === 0 && <div className="h-8 w-px bg-nature-dark/10 hidden md:block"></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function CvFooterCta() {
  const { footerCta } = cvData;

  return (
    <div className="container mx-auto px-6 mt-20 text-center">
      <p className="font-serif text-xl text-nature-dark mb-6">{footerCta.text}</p>
      <Link
        to={footerCta.to}
        className="inline-block px-10 py-4 bg-nature-dark text-nature-light font-display text-lg tracking-widest hover:bg-nature-accent hover:-translate-y-1 transition-all duration-300 shadow-xl rounded-full"
      >
        {footerCta.label}
      </Link>
    </div>
  );
}
