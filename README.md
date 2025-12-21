# Enzo Bagneris – Animateur nature

Cartographie du site, de ses choix techniques et recommandations pour préparer les futures pages.

## Stack et dépendances

- **Vite React 19 TypeScript** : base front-end. Scripts disponibles : `pnpm dev`, `pnpm build`, `pnpm preview`. 【F:package.json†L1-L19】
- **Icônes** : `lucide-react` pour les pictogrammes (Menu, X, Leaf, etc.). 【F:package.json†L11-L16】【F:components/Navbar.tsx†L1-L2】
- **Styles** : Tailwind via CDN configuré directement dans `index.html` avec palette personnalisée (`nature.*`) et polices Google Fonts (Lora, Playfair Display/SC). 【F:index.html†L11-L71】
- **Config** : alias `@` vers la racine, exposition éventuelle de clés Gemini via `vite.config.ts`. 【F:vite.config.ts†L1-L24】

## Architecture des sources

```
App.tsx                  # Composition des sections et ancrage principal
index.tsx                # Point d'entrée ReactDOM
components/
  Navbar.tsx             # Navigation sticky  burger mobile  smooth scroll
  Hero.tsx               # Section d’accueil avec vidéo et CTA
  About.tsx              # Références et présentation
  Services.tsx           # Cartes descriptives d’offres
  Contact.tsx            # Bloc contact  réseaux
  Footer.tsx             # Liens de bas de page
types.ts                 # Interfaces (ServiceItem, Partner, NavItem)
```

### Routage et navigation

- Navigation mono-page par ancres (`#home`, `#about`, `#services`, `#contact`). Les IDs sont définis dans `App.tsx` autour des sections. 【F:App.tsx†L11-L31】
- Le `Navbar` applique un effet de scroll (fond coloré ombre) via `window.scrollY` et ferme le menu mobile après navigation. 【F:components/Navbar.tsx†L10-L60】
- Le scroll est déclenché en douceur avec `Element.scrollIntoView({ behavior: 'smooth' })`. 【F:components/Navbar.tsx†L25-L35】

### Découpage fonctionnel

- **App.tsx** : assemblage des sections et structure de page (header fixe, main, footer). 【F:App.tsx†L3-L32】
- **Navbar.tsx** : état local `isScrolled` et `isMobileMenuOpen`, menu desktop mobile, logo icône feuille. 【F:components/Navbar.tsx†L9-L80】
- **Hero.tsx** : texte d’introduction, double accent “Animateur nature / Initiateur montagnisme”, vidéo d’arrière-plan (source Pexels) et lien vers section suivante. 【F:components/Hero.tsx†L5-L91】【F:components/Hero.tsx†L109-L137】
- **About.tsx** : logos partenaires (placeholder texte), photo ronde, focus GMNF et trois piliers (Médiation scientifique, Montagne, Gestion de projet). 【F:components/About.tsx†L1-L81】【F:components/About.tsx†L97-L146】
- **Services.tsx** : tableau `services` typé `ServiceItem`, rendu alterné texte/image avec CTA. 【F:components/Services.tsx†L1-L70】【F:types.ts†L1-L16】
- **Contact.tsx** : blocs mail/téléphone, zones décoratives, localisation et liens Instagram/LinkedIn. 【F:components/Contact.tsx†L1-L95】【F:components/Contact.tsx†L97-L152】
- **Footer.tsx** : liens d’ancrage, mentions légales/CGV placeholders, copyright dynamique. 【F:components/Footer.tsx†L1-L35】

### Données et assets

- Images et vidéo chargées depuis des URLs publiques (`picsum.photos`, Pexels) ; aucune gestion d’assets locaux. 【F:components/Hero.tsx†L93-L113】【F:components/Services.tsx†L5-L31】
- Typage centralisé dans `types.ts` mais certaines constantes (partners, navItems) restent locales aux composants.

### Styles

- Palette personnalisée (`nature.dark/light/accent/soft/text/muted`) et familles de police définies dans la configuration Tailwind inline. 【F:index.html†L21-L65】
- Quelques styles globaux (barre de défilement, `text-outline`) définis en `<style>` dans `index.html`. 【F:index.html†L66-L80】
- Classes Tailwind utilisées directement dans JSX ; pas de fichiers CSS additionnels.

## Évaluation (modularité, propreté)

- **Points forts** :
  - Découpage clair par section, chaque composant étant autonome et lisible.
  - Typage disponible pour les services et navigation, prêt à être étendu.
  - Utilisation cohérente de Tailwind et d’icônes partagées (lucide-react).
- **Points à surveiller** :
  - Dépendance au CDN Tailwind : absence de purge/config locale, pas de PostCSS ni de fichier CSS dédié.
  - Assets distants placeholders : fragilité réseau et absence d’optimisation ou de fallback local.
  - Pas de gestion de routing pour de vraies pages multiples (uniquement ancres).
  - Cohabitation importmap CDN bundling Vite : vérifier si usage voulu ou résidu expérimental.

## Guide pour ajouter de nouvelles pages/sections

1. **Créer un composant dédié** dans `components/` (ex. `NewPage.tsx`) en utilisant les classes Tailwind existantes pour conserver la charte (palette `nature.*`, polices `font-display/serif/heading`).
2. **Exporter et insérer** le composant dans `App.tsx` en l’encapsulant dans un conteneur avec un `id` unique (pour le scroll ou une future route). 【F:App.tsx†L11-L31】
3. **Mettre à jour la navigation** : ajouter l’entrée dans `navItems` de `Navbar.tsx` (et créer le nouvel ancrage). 【F:components/Navbar.tsx†L3-L16】
4. **Typage** : si la section manipule des données structurées (listes, cartes), ajouter ou étendre les interfaces dans `types.ts` pour favoriser la réutilisation. 【F:types.ts†L1-L16】
5. **Assets** : privilégier des fichiers locaux (ex. `public/`) ou un CDN maîtrisé ; prévoir des attributs `alt`/`poster` explicites pour l’accessibilité et les performances.
6. **Responsive & accessibilité** : respecter la grille existante (`md:grid-cols-2`, `space-y-*`) et ajouter des libellés (ex. `aria-label` sur les boutons/menu mobile si besoin). Le `scrollIntoView` gère déjà un défilement doux ; conserver cette expérience sur les nouvelles entrées.
7. **Option routing** : si de vraies pages sont nécessaires, introduire `react-router` ou un équivalent puis migrer les sections en routes tout en conservant `Navbar` comme layout commun.

## Axes prioritaires de travail

1. **Industrialiser le style** : installer Tailwind en mode build (configuration locale, purge, thèmes dans `tailwind.config.{js,ts}`) pour supprimer la dépendance CDN et gagner en performance/maintenabilité.
2. **Stabiliser les assets** : rapatrier les images/vidéos dans `public/` (ou un CDN contrôlé), ajouter des tailles/fallbacks et optimiser le poids.
3. **Navigation évolutive** : préparer l’arrivée de pages supplémentaires via un routeur ou, à minima, des composants de section paramétrables et un store centralisé pour les éléments de menu.
4. **Accessibilité & SEO** : compléter les `alt`, améliorer la hiérarchie des titres (un seul `h1` global), ajouter des métadonnées supplémentaires (Open Graph) et vérifier le contraste des couleurs.
5. **Qualité & automatisation** : ajouter linter/formatter (ESLint/Prettier), tests légers (ex. React Testing Library) et pipeline CI pour valider build et qualité du code.

---

Dernière mise à jour : générée automatiquement pour documenter l’état actuel du projet.
