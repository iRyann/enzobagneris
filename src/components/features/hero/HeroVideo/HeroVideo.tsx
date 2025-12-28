import heroPoster from '@/assets/images/placeholders/hero-poster.svg';
import heroVideo from '@/assets/videos/hero-placeholder.mp4';

/**
 * Bloc video du hero.
 */
export function HeroVideo() {
  return (
    <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 h-full">
      <div
        className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl aspect-[3/4] md:aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl transform translate-x-4 md:translate-x-0 group transition-all duration-700"
        style={{ borderRadius: '48% 52% 68% 32% / 42% 66% 34% 58%' }}
      >
        <video
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
          Votre navigateur ne supporte pas la balise video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-nature-light via-nature-light/40 to-transparent opacity-100 h-2/3 bottom-0 pointer-events-none"></div>
      </div>
    </div>
  );
}
