import { Section } from '@/components/ui';
import { useProjects } from '@/hooks';
import { ProjectCard } from '../ProjectCard/ProjectCard';

/**
 * Props du composant PortfolioGrid.
 */
interface PortfolioGridProps {
  title?: string;
  description?: string;
  limit?: number;
}

/**
 * Grille des projets du portfolio.
 */
export function PortfolioGrid({
  title = "EXEMPLES D'INTERVENTIONS",
  description =
    'Des projets concrets menés sur le terrain, alliant rigueur scientifique et pédagogie active pour tous les publics.',
  limit,
}: PortfolioGridProps) {
  const { projects, loading, error } = useProjects();
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  if (loading) {
    return <PortfolioGridSkeleton />;
  }

  if (error) {
    return <PortfolioGridError error={error} />;
  }

  return (
    <Section variant="light" className="relative bg-nature-light/50">
      <div className="absolute top-20 left-10 w-24 h-24 bg-nature-accent rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="font-heading italic text-2xl text-nature-accent block mb-2">Portfolio</span>
          <h2 className="font-display text-5xl md:text-6xl text-nature-dark">{title}</h2>
          <p className="mt-4 text-nature-text max-w-2xl text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/**
 * Skeleton loader pendant le chargement.
 */
function PortfolioGridSkeleton() {
  return (
    <Section variant="light" className="bg-nature-light/50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-96 bg-nature-dark/10 rounded-3xl animate-pulse" />
        ))}
      </div>
    </Section>
  );
}

/**
 * Affichage d'erreur.
 */
function PortfolioGridError({ error }: { error: Error }) {
  return (
    <Section variant="light" className="text-center bg-nature-light/50">
      <h2 className="font-display text-3xl text-nature-dark mb-4">Erreur de chargement</h2>
      <p className="text-nature-muted">{error.message}</p>
    </Section>
  );
}
