import type { ImageAsset, SEOMetadata } from './common.types';

/**
 * Principe (environnemental ou pedagogique).
 */
export interface Principle {
  text: string;
  order?: number;
}

/**
 * Projet du portfolio.
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  target: string;
  description: string;
  coverImage: ImageAsset;
  gallery?: ImageAsset[];
  principlesEnvironmental: Principle[];
  principlesPedagogical: Principle[];
  icon: 'Leaf' | 'Microscope' | 'Hammer' | 'Map';
  date?: string;
  category: 'animation' | 'montagne' | 'mediation';
  seo?: SEOMetadata;
}
