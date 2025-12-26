import type { ImageAsset } from './common.types';

/**
 * Service propose sur le site.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  reverseLayout?: boolean;
  ctaText?: string;
}

/**
 * Partenaire ou organisation associee.
 */
export interface Partner {
  name: string;
  logo: ImageAsset;
}
