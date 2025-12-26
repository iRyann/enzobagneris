import { useEffect, useState } from 'react';
import projectsData from '@/data/projects.json';
import type { Project } from '@/types';

/**
 * Hook pour recuperer les projets du portfolio.
 */
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // TODO: Remplacer par fetch Strapi API
        setProjects(projectsData as Project[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
