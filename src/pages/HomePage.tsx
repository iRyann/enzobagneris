import { AboutSection } from '@/components/features/about';
import { ContactInfo } from '@/components/features/contact';
import { Hero } from '@/components/features/hero';
import { ServicesTeaser } from '@/components/features/services';

/**
 * Page d'accueil.
 */
export function HomePage() {
  return (
    <div className="animate-in fade-in duration-700">
      <div id="home">
        <Hero />
      </div>
      <div id="about-teaser">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesTeaser />
      </div>
      <div id="contact">
        <ContactInfo />
      </div>
    </div>
  );
}
