import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/api';
import { isStrapiConfigured, fetchBlogPosts, fetchBlogPostBySlug, fetchFeaturedBlogPosts } from '@/lib/strapi';
import {
  isSupabaseConfigured,
  fetchBlogPostsFromSupabase,
  fetchBlogPostBySlugFromSupabase,
  fetchFeaturedBlogPostsFromSupabase,
} from '@/lib/supabase';
import type { BlogPost } from '@/types';

export const blogKeys = {
  all: ['blog'] as const,
  lists: () => [...blogKeys.all, 'list'] as const,
  list: (filters: string) => [...blogKeys.lists(), { filters }] as const,
  details: () => [...blogKeys.all, 'detail'] as const,
  detail: (slug: string) => [...blogKeys.details(), slug] as const,
};

export function useBlogPostsQuery() {
  return useQuery({
    queryKey: blogKeys.lists(),
    queryFn: isStrapiConfigured
      ? fetchBlogPosts
      : isSupabaseConfigured
        ? fetchBlogPostsFromSupabase
        : () => blogService.getAll(),
    select: (data: BlogPost[]) =>
      [...data].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
  });
}

export function useBlogPostQuery(slug: string | undefined) {
  return useQuery({
    queryKey: blogKeys.detail(slug || ''),
    queryFn: isStrapiConfigured
      ? () => fetchBlogPostBySlug(slug || '')
      : isSupabaseConfigured
        ? () => fetchBlogPostBySlugFromSupabase(slug || '')
        : () => blogService.getBySlug(slug || ''),
    enabled: !!slug,
  });
}

export function useFeaturedBlogPostsQuery() {
  return useQuery({
    queryKey: [...blogKeys.lists(), 'featured'],
    queryFn: isStrapiConfigured
      ? fetchFeaturedBlogPosts
      : isSupabaseConfigured
        ? fetchFeaturedBlogPostsFromSupabase
        : () => blogService.getFeatured(),
  });
}
