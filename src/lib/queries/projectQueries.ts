import { useQuery } from '@tanstack/react-query';
import { projectService } from '@/services/api';

export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
};

export function useProjectsQuery() {
  return useQuery({
    queryKey: projectKeys.lists(),
    queryFn: () => projectService.getAll(),
  });
}
