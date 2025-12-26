import React from 'react';

/**
 * En-tete de la page blog.
 */
export function BlogHeader() {
  return (
    <div className="mb-16 text-center">
      <h1 className="font-display text-5xl md:text-7xl text-nature-dark mb-6">LE JOURNAL</h1>
      <p className="font-serif text-xl text-nature-muted max-w-2xl mx-auto">
        Retours d'expériences, notes de terrain et réflexions sur la médiation scientifique.
      </p>
    </div>
  );
}
