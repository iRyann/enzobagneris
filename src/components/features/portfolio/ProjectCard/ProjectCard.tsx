import { ArrowRight, GraduationCap, Leaf, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { PrinciplesList } from '../PrinciplesList/PrinciplesList';

/**
 * Props du composant ProjectCard.
 */
export interface ProjectCardProps {
  project: Project;
}

/**
 * Carte projet du portfolio.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const envPrinciples = project.principlesEnvironmental.map((item) => item.text);
  const pedagoPrinciples = project.principlesPedagogical.map((item) => item.text);

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-nature-dark/10 hover:shadow-2xl transition-all duration-300 h-full">
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <img
          src={project.coverImage.url}
          alt={project.coverImage.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <Users className="w-4 h-4 text-nature-accent" />
          <span className="text-sm font-bold text-nature-dark">{project.target}</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 pt-20">
          <h3 className="text-white font-display text-2xl md:text-3xl">{project.title}</h3>
          <p className="text-nature-light/90 italic font-serif">{project.subtitle}</p>
        </div>
      </div>

      <div className="p-8 space-y-8 flex-grow">
        <PrinciplesList
          title="Principes Environnementaux"
          icon={Leaf}
          items={envPrinciples}
          accentClass="bg-nature-dark/10"
          iconClass="text-nature-dark"
          borderClass="border-nature-dark/20"
          titleClassName="text-nature-dark"
        />

        <PrinciplesList
          title="Approche Pédagogique"
          icon={GraduationCap}
          items={pedagoPrinciples}
          accentClass="bg-nature-accent/10"
          iconClass="text-nature-accent"
          borderClass="border-nature-accent/20"
          titleClassName="text-nature-accent"
        />
      </div>

      <div className="p-8 pt-0 mt-auto">
        <Link
          to={`/blog/${project.id}`}
          className="inline-flex items-center gap-2 text-nature-accent font-display font-bold tracking-widest hover:text-nature-dark transition-colors group/btn"
        >
          EN SAVOIR PLUS
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
