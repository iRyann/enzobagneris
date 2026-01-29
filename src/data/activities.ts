import type { Activity } from "@/types";

export const activities: Activity[] = [
  {
    id: "insect-hotel",
    title: "L'Hôtel à insectes",
    category: "Biodiversité & artisanat",
    shortDescription:
      "Découvrez le rôle crucial des auxiliaires du jardin en construisant leur futur refuge.",
    fullDescription:
      'Un atelier pratique et théorique pour comprendre pourquoi nos jardins ont besoin de "petites bêtes" et comment leur offrir un gîte adapté aux cycles de la nature.',
    image: {
      url: "/assets/images/blog/hotelInsectes.png",
      alt: "Atelier hôtel à insectes",
    },
    modules: {
      Scolaires: {
        id: "sc-1",
        title: "Les cycles de la vie au jardin",
        description:
          "Adapté aux programmes scolaires (cycle 1 à 3). Observation des cycles larvaires et importance de la pollinisation.",
        duration: "2h00",
        keyLearning: [
          "Cycle de vie des osmies",
          "Classification simplifiée",
          "Chaîne alimentaire",
        ],
      },
      "Entreprises (RSE)": {
        id: "rse-1",
        title: "Biodiversité & cohésion d'équipe",
        description:
          "Un moment de déconnexion active. Montage collectif d'une structure pérenne pour le site de l'entreprise.",
        duration: "Demi-journée",
        keyLearning: [
          "Impact RSE concret",
          "Gestion de projet manuel",
          "Sensibilisation locale",
        ],
      },
      "Grand Public": {
        id: "gp-1",
        title: "Refuge nature à domicile",
        description:
          "Apprenez à fabriquer votre propre hôtel avec des matériaux de récupération pour transformer balcon ou jardin.",
        duration: "1h30",
        keyLearning: [
          "Matériaux naturels",
          "Emplacement optimal",
          "Identification des espèces",
        ],
      },
      "Projets tutorés": {
        id: "pt-1",
        title: "Ingénierie de la biodiversité",
        description:
          "Accompagnement technique sur la conception de nichoirs spécifiques et protocoles de suivi scientifique.",
        duration: "Accompagnement long",
        keyLearning: [
          "Protocoles Vigie-Nature",
          "Monitoring",
          "Documentation technique",
        ],
      },
    },
  },
  {
    id: "orientation",
    title: "Course d'orientation",
    category: "Orientation & nature",
    shortDescription:
      "Apprenez à lire une carte et à vous repérer pour relever des défis en pleine nature.",
    fullDescription:
      "Une activité ludique et sportive pour développer l'autonomie, l'esprit d'équipe et la compréhension du territoire.",
    image: {
      url: "/assets/images/presentation/home/service-randonnée.jpeg",
      alt: "Course d'orientation en pleine nature",
    },
    modules: {
      Scolaires: {
        id: "sc-2",
        title: "Se repérer en autonomie",
        description:
          "Initiation à la lecture de carte et à l'orientation. Jeux de balises adaptés aux cycles scolaires.",
        duration: "2h00",
        keyLearning: ["Lecture de carte", "Repères naturels", "Coopération"],
      },
      "Entreprises (RSE)": {
        id: "rse-2",
        title: "Défis d'équipe en extérieur",
        description:
          "Challenge d'orientation pour renforcer la cohésion, la communication et la prise de décision.",
        duration: "Demi-journée",
        keyLearning: [
          "Leadership partagé",
          "Gestion du temps",
          "Stratégie collective",
        ],
      },
      "Grand Public": {
        id: "gp-2",
        title: "Aventure carte & boussole",
        description:
          "Parcours nature accessible à tous pour apprendre à se déplacer en autonomie.",
        duration: "2h00",
        keyLearning: ["Boussole", "Lecture de terrain", "Sécurité"],
      },
      "Projets tutorés": {
        id: "pt-2",
        title: "Conception d'itinéraires",
        description:
          "Création de parcours, balisage et médiation autour de la lecture du paysage.",
        duration: "Semestre",
        keyLearning: [
          "Cartographie",
          "Gestion de projet",
          "Médiation territoriale",
        ],
      },
    },
  },
];

export const activityAudiences = [
  "Grand Public",
  "Scolaires",
  "Entreprises (RSE)",
] as const;
