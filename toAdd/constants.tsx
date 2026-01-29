
import { Activity } from './types';

export const ACTIVITIES: Activity[] = [
  {
    id: 'insect-hotel',
    title: 'L\'Hôtel à Insectes',
    category: 'Biodiversité & Artisanat',
    shortDescription: 'Découvrez le rôle crucial des auxiliaires du jardin en construisant leur futur refuge.',
    fullDescription: 'Un atelier pratique et théorique pour comprendre pourquoi nos jardins ont besoin de "petites bêtes" et comment leur offrir un gîte adapté aux cycles de la nature.',
    imageUrl: 'https://picsum.photos/seed/insect/800/600',
    modules: {
      'Scolaires': {
        id: 'sc-1',
        title: 'Les Cycles de la Vie au Jardin',
        description: 'Adapté aux programmes scolaires (Cycle 1 à 3). Observation des cycles larvaires et importance de la pollinisation.',
        duration: '2h00',
        keyLearning: ['Cycle de vie des osmies', 'Classification simplifiée', 'Chaîne alimentaire'],
      },
      'Entreprises (RSE)': {
        id: 'rse-1',
        title: 'Biodiversité & Cohésion d\'Équipe',
        description: 'Un moment de déconnexion active. Montage collectif d\'une structure pérenne pour le site de l\'entreprise.',
        duration: 'Demi-journée',
        keyLearning: ['Impact RSE concret', 'Gestion de projet manuel', 'Sensibilisation aux écosystèmes locaux'],
      },
      'Grand Public': {
        id: 'gp-1',
        title: 'Refuge Nature à Domicile',
        description: 'Apprenez à fabriquer votre propre hôtel avec des matériaux de récupération pour transformer votre balcon ou jardin.',
        duration: '1h30',
        keyLearning: ['Matériaux naturels', 'Emplacement optimal', 'Identification des espèces'],
      },
      'Projets Tutorés': {
        id: 'pt-1',
        title: 'Ingénierie de la Biodiversité',
        description: 'Accompagnement technique sur la conception de nichoirs spécifiques et protocoles de suivi scientifique.',
        duration: 'Accompagnement long',
        keyLearning: ['Protocoles Vigie-Nature', 'Monitoring', 'Documentation technique'],
      }
    }
  },
  {
    id: 'bivouac',
    title: 'Initiation Bivouac',
    category: 'Autonomie & Nature',
    shortDescription: 'Apprenez les bases de l\'itinérance douce et respectueuse de l\'environnement.',
    fullDescription: 'Une immersion pour apprendre à s\'installer en pleine nature sans laisser de trace.',
    imageUrl: 'https://picsum.photos/seed/forest/800/600',
    modules: {
      'Scolaires': {
        id: 'sc-2',
        title: 'L\'École Buissonnière',
        description: 'Découverte sensorielle de la forêt et règles de sécurité en extérieur.',
        duration: '1 journée',
        keyLearning: ['Lecture de paysage', 'Orientation de base', 'Faune locale'],
      },
      'Entreprises (RSE)': {
        id: 'rse-2',
        title: 'Hors-Piste Stratégique',
        description: 'Team building en mode survie douce pour renforcer la résilience et l\'entraide.',
        duration: '2 jours / 1 nuit',
        keyLearning: ['Gestion des ressources', 'Leadership partagé', 'Sobriété'],
      },
      'Grand Public': {
        id: 'gp-2',
        title: 'Premières Étoiles',
        description: 'Toutes les clés pour partir en autonomie avec son sac à dos.',
        duration: 'Week-end',
        keyLearning: ['Matériel léger', 'Cuisine de camp', 'Réglementation'],
      },
      'Projets Tutorés': {
        id: 'pt-2',
        title: 'Conception de Sentiers',
        description: 'Travail sur le balisage et l\'interprétation des sentiers de randonnée.',
        duration: 'Semestre',
        keyLearning: ['Cartographie IGN', 'Médiation territoriale', 'Aménagement léger'],
      }
    }
  }
];
