import type { ImageAsset, SEOMetadata } from './common.types';

/**
 * Categories disponibles pour les articles de blog.
 */
export type BlogCategory =
  | 'Pédagogie'
  | 'Science'
  | 'Chantier Nature'
  | 'Montagne';

/**
 * Article de blog complet.
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  coverImage: ImageAsset;
  gallery?: ImageAsset[];
  featured?: boolean;
  seo?: SEOMetadata;
}
