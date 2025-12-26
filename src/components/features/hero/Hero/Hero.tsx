import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroVideo } from '../HeroVideo/HeroVideo';

/**
 * Section hero d'accueil.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-nature-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-nature-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left space-y-10 z-20">
          <div className="space-y-4">
            <p className="font-heading italic text-2xl text-nature-accent">Bonjour, je suis</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-nature-dark leading-[0.9]">
              ENZO<br />BAGNERIS
            </h1>

            <div className="flex flex-col items-center md:items-start gap-4 mt-8">
              <span className="bg-nature-accent text-nature-light px-6 py-2 text-xl md:text-2xl font-heading italic transform -rotate-2 shadow-lg">
                Animateur nature
              </span>
              <span className="flex items-center gap-3 text-2xl md:text-3xl font-serif text-nature-dark mt-2">
                <span className="italic font-light">&</span>
                <span className="bg-nature-soft text-nature-dark px-6 py-2 transform rotate-1 border border-nature-dark/20 shadow-md">
                  Initiateur montagnisme
                </span>
              </span>
            </div>
          </div>

          <div className="relative py-4 md:pl-8 border-l-4 border-nature-accent/30">
            <p className="font-serif text-nature-text text-xl md:text-2xl leading-relaxed text-pretty">
              <strong className="text-nature-dark font-bold">
                Médiateur scientifique environnemental
              </strong>{' '}
              dédié à la gestion des milieux naturels. Je conçois des expériences immersives pour{' '}
              <span className="italic text-nature-accent font-medium">
                reconnecter le public au vivant
              </span>.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to={{ pathname: '/', hash: '#contact' }}
              className="inline-block px-10 py-4 bg-nature-dark text-nature-light font-display text-lg tracking-widest hover:bg-nature-accent hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              ME CONTACTER
            </Link>
          </div>
        </div>

        <HeroVideo />
      </div>

      <Link
        to={{ pathname: '/', hash: '#about' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-nature-dark/50 hover:text-nature-dark transition-colors z-20"
      >
        <ArrowDown size={32} />
      </Link>
    </section>
  );
}
