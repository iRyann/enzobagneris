import { Link } from 'react-router-dom';
import type { ServiceItem } from '@/types';

/**
 * Props d'une carte service.
 */
export interface ServiceCardProps {
  service: ServiceItem;
}

/**
 * Carte service pour la section d'accueil.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 ${
        service.reverseLayout ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="w-full md:w-1/2 relative group">
        <div
          className={`absolute inset-0 bg-nature-accent/20 rounded-[2rem] transform ${
            service.reverseLayout ? '-rotate-3' : 'rotate-3'
          } transition-transform duration-500 group-hover:rotate-0`}
        ></div>
        <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-4 border-nature-light">
          <img
            src={service.image.url}
            alt={service.image.alt}
            className="w-full h-80 md:h-[500px] object-cover filter sepia-[.3] transition-all duration-500 group-hover:sepia-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/80 via-transparent to-transparent opacity-60"></div>
        </div>
      </div>

      <div
        className={`w-full md:w-1/2 space-y-6 ${service.reverseLayout ? 'md:pr-12' : 'md:pl-12'}`}
      >
        <h3 className="font-heading font-bold text-4xl text-nature-dark leading-tight">
          {service.title}
        </h3>
        <div className="h-1 w-20 bg-nature-accent"></div>
        <p className="text-lg text-nature-muted font-serif leading-relaxed">
          {service.description}
        </p>
        <Link
          to="/services"
          className={`inline-block px-8 py-3 rounded-full border-2 border-nature-dark font-display tracking-widest text-sm transition-all duration-300 hover:bg-nature-dark hover:text-nature-light ${
            service.id === 'rse' ? 'bg-nature-dark text-nature-light' : 'text-nature-dark'
          }`}
        >
          {(service.ctaText || '').toUpperCase()}
        </Link>
      </div>
    </div>
  );
}
