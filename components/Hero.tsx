import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-nature-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-nature-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Titles */}
        <div className="text-center md:text-left space-y-10 z-20">
            
            <div className="space-y-4">
                 <p className="font-heading italic text-2xl text-nature-accent">
                    Bonjour, je suis
                </p>
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
                    <strong className="text-nature-dark font-bold">Médiateur scientifique environnemental</strong> dédié à la gestion des milieux naturels. 
                    Je conçois des expériences immersives pour <span className="italic text-nature-accent font-medium">reconnecter le public au vivant</span>.
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

        {/* Right Column: Video Integration */}
        <div className="relative flex justify-center md:justify-end mt-12 md:mt-0 h-full">
            {/* Expanded Container - Organic Shape with Video */}
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
                    poster="https://picsum.photos/1000/1200?mountain"
                >
                    {/* Placeholder video - Replace this src with your local video file or hosted URL */}
                    <source src="https://videos.pexels.com/video-files/5508868/5508868-hd_1080_1920_30fps.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                
                {/* Fade Integration - Gradient Overlay matching background color */}
                <div className="absolute inset-0 bg-gradient-to-t from-nature-light via-nature-light/40 to-transparent opacity-100 h-2/3 bottom-0 pointer-events-none"></div>
            </div>
        </div>
      </div>

      <Link 
        to={{ pathname: '/', hash: '#about' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-nature-dark/50 hover:text-nature-dark transition-colors z-20"
      >
        <ArrowDown size={32} />
      </Link>
    </section>
  );
};

export default Hero;