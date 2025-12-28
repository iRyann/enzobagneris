/**
 * Champs generiques utilises par Strapi.
 */
export interface StrapiEntity<T> {
  id: number | string;
  attributes: T;
}

/**
 * Reponse generique Strapi.
 */
export interface StrapiResponse<T> {
  data: StrapiEntity<T> | StrapiEntity<T>[];
  meta?: Record<string, unknown>;
}
