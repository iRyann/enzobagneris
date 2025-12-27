import type { Project } from '@/types';
import { useProjectsQuery } from '@/lib/queries/projectQueries';

/**
 * Hook pour recuperer les projets du portfolio.
 */
export function useProjects() {
  const { data, isLoading, error } = useProjectsQuery();

  return {
    projects: (data || []) as Project[],
    loading: isLoading,
    error: error as Error | null,
  };
}
