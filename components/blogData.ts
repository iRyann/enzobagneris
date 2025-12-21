export interface BlogPostData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  image: string;
  content: string; // HTML string for simplicity in this context
  tags: string[];
}

export const blogPosts: BlogPostData[] = [
  {
    id: "classe-decouverte",
    title: "Classe découverte en montagne : L'éveil des sens",
    subtitle: "Retour sur une semaine d'immersion avec les 3-6 ans.",
    date: "12 Octobre 2023",
    category: "Pédagogie",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
    tags: ["Scolaire", "Montagne", "Faune"],
    content: `
      <p>L'organisation d'une classe découverte pour des maternelles (3-6 ans) représente un défi unique : comment rendre la montagne accessible, sécurisante et passionnante pour des tout-petits ?</p>
      
      <h3>1. L'approche sensorielle avant tout</h3>
      <p>À cet âge, l'intellectualisation est secondaire. Nous avons axé le séjour sur le toucher, l'écoute et la vue. La découverte des rapaces ne s'est pas faite par des fiches techniques, mais par l'observation aux jumelles (adaptées) et la manipulation de plumes.</p>
      
      <h3>2. Le jeu comme vecteur d'apprentissage</h3>
      <p>Pour expliquer la chaîne alimentaire, nous avons utilisé des puzzles géants fabriqués sur mesure. Chaque enfant repart avec une pièce du puzzle, symbolisant son appartenance à cet écosystème.</p>
      
      <h3>Bilan</h3>
      <p>Les enfants ont montré une capacité d'attention surprenante dès lors qu'ils étaient acteurs de leur découverte. Une expérience à renouveler au printemps prochain !</p>
    `
  },
  {
    id: "phyt-abeilles",
    title: "Atelier Phyt'Abeilles : La rigueur scientifique à l'école",
    subtitle: "Initier les élèves aux protocoles de sciences participatives.",
    date: "28 Septembre 2023",
    category: "Science",
    image: "https://images.unsplash.com/photo-1581093458791-9f302e6d8169?q=80&w=2670&auto=format&fit=crop",
    tags: ["Insectes", "Protocole", "BTS"],
    content: `
      <p>Comment transformer un cours de biologie en véritable enquête de terrain ? L'atelier Phyt'Abeilles a pour but de recenser les interactions plantes-pollinisateurs.</p>
      
      <h3>Le Protocole</h3>
      <p>Les étudiants ont dû respecter un protocole strict : observation sur 20 minutes, transect défini, capture photographique. Cette rigueur est essentielle pour que les données soient exploitables par les chercheurs.</p>
      
      <h3>Outils d'identification</h3>
      <p>Nous avons utilisé des clés de détermination simplifiées mais précises, permettant de distinguer les principales familles d'hyménoptères sauvages. La loupe binoculaire a révélé des détails invisibles à l'œil nu, suscitant l'émerveillement.</p>
    `
  },
  {
    id: "hotel-insectes",
    title: "Rénovation d'un Hôtel à insectes",
    subtitle: "Chantier participatif et sensibilisation.",
    date: "15 Juin 2023",
    category: "Chantier Nature",
    image: "https://images.unsplash.com/photo-1526657650890-a75d50228e51?q=80&w=2607&auto=format&fit=crop",
    tags: ["Biodiversité", "Bricolage", "Collège"],
    content: `
      <p>Un hôtel à insectes à l'abandon n'est pas seulement inutile, il peut devenir un piège écologique (parasites, humidité). Avec une classe de 5ème, nous avons entrepris sa rénovation complète.</p>
      
      <h3>Choix des matériaux</h3>
      <p>Nous avons remplacé les briques creuses (souvent inutilisées) par des tiges de sureau et de bambou, beaucoup plus prisées par les osmies. La paille a été changée pour offrir un abri sec aux chrysopes.</p>
      
      <h3>Pédagogie du "faire"</h3>
      <p>Au-delà de l'aspect manuel, ce chantier a permis d'aborder le cycle de vie des auxiliaires du jardin et l'importance de ne pas utiliser de pesticides à proximité.</p>
    `
  },
  {
    id: "randonnee-decouverte",
    title: "Randonnée : Lire le paysage pyrénéen",
    subtitle: "Sortie géologie et flore avec les lycéens.",
    date: "05 Mai 2023",
    category: "Montagne",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop",
    tags: ["Randonnée", "Géologie", "Lycée"],
    content: `
      <p>La montagne est un livre ouvert pour qui sait la lire. Lors de cette sortie avec des lycéens, nous avons appris à décrypter l'histoire géologique des Pyrénées.</p>
      
      <h3>Lecture de paysage</h3>
      <p>Identifier les étages de végétation, comprendre l'érosion glaciaire, repérer les zones de pastoralisme... L'objectif était de donner aux élèves les clés pour comprendre leur environnement.</p>
      
      <h3>Sécurité et Autonomie</h3>
      <p>Une partie de la randonnée a été consacrée à l'orientation : lecture de carte IGN 1/25000 et utilisation de la boussole. Des compétences essentielles pour tout montagnard.</p>
    `
  }
];