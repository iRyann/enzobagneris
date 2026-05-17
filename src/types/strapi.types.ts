/**
 * Entité Strapi v5 — les champs sont à plat (plus de wrapper `attributes`).
 */
export interface StrapiV5Entity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

/**
 * Réponse collection Strapi v5.
 */
export interface StrapiV5CollectionResponse<T extends StrapiV5Entity> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Réponse single Strapi v5.
 */
export interface StrapiV5SingleResponse<T extends StrapiV5Entity> {
  data: T;
  meta: Record<string, unknown>;
}

/**
 * Composant image partagé (shared.image-asset).
 */
export interface StrapiImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Composant principe partagé (shared.principle).
 */
export interface StrapiPrinciple {
  id: number;
  text: string;
  order?: number;
}

/**
 * Entité blog-post Strapi v5.
 */
export interface StrapiBlogPost extends StrapiV5Entity {
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string | null;
  content: string | null;
  category: 'Pédagogie' | 'Science' | 'Chantier Nature' | 'Montagne';
  tags: string[] | null;
  publishedDate: string | null;
  coverImage: StrapiImageAsset | null;
  gallery: StrapiImageAsset[] | null;
  featured: boolean;
}

/**
 * Entité project Strapi v5.
 */
export interface StrapiProject extends StrapiV5Entity {
  slug: string;
  title: string;
  subtitle: string | null;
  target: string | null;
  description: string | null;
  coverImage: StrapiImageAsset | null;
  gallery: StrapiImageAsset[] | null;
  principlesEnvironmental: StrapiPrinciple[] | null;
  principlesPedagogical: StrapiPrinciple[] | null;
  icon: 'Leaf' | 'Microscope' | 'Hammer' | 'Map';
  date: string | null;
  category: 'animation' | 'montagne' | 'mediation';
}

/**
 * Entité service-item Strapi v5.
 */
export interface StrapiServiceItem extends StrapiV5Entity {
  title: string;
  description: string;
  image: StrapiImageAsset | null;
  ctaText: string | null;
  reverseLayout: boolean;
  sortOrder: number;
}

/**
 * Entité partner Strapi v5.
 */
export interface StrapiPartner extends StrapiV5Entity {
  name: string;
  logo: StrapiImageAsset | null;
  sortOrder: number;
}

// --- Compat v4 conservée pour référence ---

/** @deprecated Utiliser StrapiV5Entity */
export interface StrapiEntity<T> {
  id: number | string;
  attributes: T;
}

/** @deprecated Utiliser StrapiV5CollectionResponse */
export interface StrapiResponse<T> {
  data: StrapiEntity<T> | StrapiEntity<T>[];
  meta?: Record<string, unknown>;
}
