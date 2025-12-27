import type { BlogPost } from '@/types';
import { useBlogPostsQuery } from '@/lib/queries/blogQueries';

/**
 * Hook pour recuperer les articles de blog.
 */
export function useBlogPosts() {
  const { data, isLoading, error } = useBlogPostsQuery();

  return {
    posts: (data || []) as BlogPost[],
    loading: isLoading,
    error: error as Error | null,
  };
}
