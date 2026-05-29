import { useQuery } from '@tanstack/react-query';
import { projectService } from '@/services/api';
import { isStrapiConfigured, fetchProjects } from '@/lib/strapi';
import { isSupabaseConfigured, fetchProjectsFromSupabase } from '@/lib/supabase';

export const projectKeys = {
  all: ['projects'] as const,
  lists: () => [...projectKeys.all, 'list'] as const,
};

export function useProjectsQuery() {
  return useQuery({
    queryKey: projectKeys.lists(),
    queryFn: isStrapiConfigured
      ? fetchProjects
      : isSupabaseConfigured
        ? fetchProjectsFromSupabase
        : () => projectService.getAll(),
  });
}
