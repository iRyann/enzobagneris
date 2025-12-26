import { useEffect, useState } from 'react';
import blogData from '@/data/blog.json';
import type { BlogPost } from '@/types';

/**
 * Hook pour recuperer les articles de blog.
 */
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // TODO: Remplacer par fetch Strapi API
        setPosts(blogData as BlogPost[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
