/**
 * Asset image avec metadata.
 */
export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Metadata SEO pour pages et contenus.
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

/**
 * Item de navigation simple.
 */
export interface NavItem {
  label: string;
  href: string;
}
