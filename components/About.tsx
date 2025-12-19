import React from "react";
import { Award, Mountain, Sprout } from "lucide-react";

const partners = [
  {
    name: "Parc National des Pyrénées",
    logo: "https://picsum.photos/150/80?random=1",
  },
  { name: "Pierre & Terre", logo: "https://picsum.photos/150/80?random=2" },
  { name: "Point Vert", logo: "https://picsum.photos/150/80?random=3" },
];

const About: React.FC = () => {
  return (
    <section className="py-24 bg-nature-light relative">
      <div className="container mx-auto px-6">
        {/* Quote Section */}
        <div className="text-center mb-20">
          <p className="font-heading italic text-2xl md:text-3xl text-nature-dark/80">
            "Ils m'ont fait confiance"
          </p>

          {/* Partners Row */}
          <div className="flex flex-wrap justify-center gap-12 mt-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 border border-nature-dark/10 rounded bg-white/50"
              >
                {/* Using a placeholder text if image fails or for simplicity */}
                <span className="font-display font-bold text-nature-dark text-lg">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 md:order-1 relative">
            <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-nature-soft shadow-xl">
              <img
                src="https://picsum.photos/800/800?nature"
                alt="Nature Close up"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-nature-dark text-nature-light p-6 rounded-full shadow-lg transform rotate-12">
              <span className="font-display text-2xl font-bold">GMNF</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-display text-5xl text-nature-dark relative inline-block">
              QUI SUIS-JE ?
              <span className="absolute -bottom-2 left-0 w-1/2 h-2 bg-nature-accent"></span>
            </h2>

            <p className="text-lg leading-relaxed text-nature-text">
              Passionné par la complexité du vivant, je suis diplômé en{" "}
              <strong>
                Gestion des Milieux Naturels et de la Faune (GMNF)
              </strong>
              . Mon approche combine rigueur scientifique et pédagogie ludique.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-nature-dark rounded-full flex items-center justify-center text-nature-light">
                  <Sprout />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-nature-dark">
                    Médiation Scientifique
                  </h3>
                  <p className="text-nature-muted">
                    Vulgariser sans simplifier, pour rendre la nature accessible
                    à tous.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-nature-accent rounded-full flex items-center justify-center text-nature-light">
                  <Mountain />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-nature-dark">
                    Montagne & Randonnée
                  </h3>
                  <p className="text-nature-muted">
                    Encadrement sécurisé et découverte des écosystèmes
                    d'altitude.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-nature-soft rounded-full flex items-center justify-center text-nature-dark">
                  <Award />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-nature-dark">
                    Gestion de projet
                  </h3>
                  <p className="text-nature-muted">
                    Conception d'outils pédagogiques et plans de gestion
                    écologique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
