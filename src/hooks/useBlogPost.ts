import { useEffect, useState } from 'react';
import { blogService } from '@/services/api';
import type { BlogPost } from '@/types';

/**
 * Hook pour recuperer un article de blog par slug.
 */
export function useBlogPost(slug?: string) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const data = await blogService.getBySlug(slug || '');
        setPost(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    } else {
      setPost(null);
      setLoading(false);
    }
  }, [slug]);

  return { post, loading, error };
}
