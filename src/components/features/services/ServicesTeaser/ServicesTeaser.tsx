import React from 'react';
import { useServices } from '@/hooks';
import { ServiceCard } from '../ServiceCard/ServiceCard';

/**
 * Section services en page d'accueil.
 */
export function ServicesTeaser() {
  const { services } = useServices();

  return (
    <section className="py-24 bg-nature-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 relative">
          <h2 className="font-display text-6xl md:text-8xl text-nature-dark relative inline-block pb-6">
            ACTIVITÉS PRO
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-nature-accent rounded-full"></span>
          </h2>
          <p className="mt-8 text-xl text-nature-muted font-serif">
            Un aperçu de mes domaines d'intervention.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
