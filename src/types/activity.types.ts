import type { ImageAsset } from './common.types';

export type ActivityAudience = 'Scolaires' | 'Entreprises (RSE)' | 'Grand Public' | 'Projets tutorés';

export interface ActivityModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  keyLearning: string[];
}

export interface Activity {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: ImageAsset;
  modules: Record<ActivityAudience, ActivityModule>;
}
