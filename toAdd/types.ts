
export type TargetAudience = 'Scolaires' | 'Entreprises (RSE)' | 'Grand Public' | 'Projets Tutorés';

export interface Module {
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
  imageUrl: string;
  modules: Record<TargetAudience, Module>;
  basePrice?: string;
}
