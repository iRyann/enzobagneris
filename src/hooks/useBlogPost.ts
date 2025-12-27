import type { BlogPost } from '@/types';
import { useBlogPostQuery } from '@/lib/queries/blogQueries';

/**
 * Hook pour recuperer un article de blog par slug.
 */
export function useBlogPost(slug?: string) {
  const { data, isLoading, error } = useBlogPostQuery(slug);

  return {
    post: (data || null) as BlogPost | null,
    loading: isLoading,
    error: error as Error | null,
  };
}
