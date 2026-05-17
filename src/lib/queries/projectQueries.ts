import { useQuery } from '@tanstack/react-query';
import { projectService } from '@/services/api';
import { isStrapiConfigured, fetchProjects } from '@/lib/strapi';

export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
};

export function useProjectsQuery() {
  return useQuery({
    queryKey: projectKeys.lists(),
    queryFn: isStrapiConfigured ? fetchProjects : () => projectService.getAll(),
  });
}
