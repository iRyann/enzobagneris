# 🤖 PROMPT CODEX - REFACTORING PROJET ENZO BAGNERIS

## 🎯 CONTEXTE DU PROJET

Tu vas refactoriser un portfolio React/TypeScript pour un animateur nature. Le code actuel fonctionne mais souffre de problèmes majeurs de structure, sécurité et maintenabilité. L'objectif est de préparer le terrain pour une future intégration avec Strapi CMS.

**État actuel :**

- ❌ Architecture plate (tous les composants dans `/components`)
- ❌ Données hardcodées dans les composants
- ❌ Composants monolithiques (200+ lignes)
- ❌ Pas de réutilisabilité
- ❌ Vulnérabilités XSS (`dangerouslySetInnerHTML` non sécurisé)
- ❌ Dépendances externes (CDN Tailwind, Google Fonts, images Picsum/Unsplash)
- ❌ Pas de documentation ni commentaires
- ❌ Types TypeScript incomplets

**Stack technique :**

- React 19 + TypeScript 5.8
- React Router 6.22
- Vite 6.4
- Tailwind CSS (actuellement via CDN)
- Lucide React (icons)
- Package manager : **pnpm**

---

## 🎯 OBJECTIFS PRINCIPAUX

### 1. ARCHITECTURE & MODULARITÉ

✅ Créer une structure de dossiers claire et scalable
✅ Séparer responsabilités (UI / Layout / Features / Pages)
✅ Composants atomiques réutilisables
✅ Aucun composant > 150 lignes

### 2. LOCALISATION COMPLÈTE

✅ Installer Tailwind localement (supprimer CDN)
✅ Héberger Google Fonts localement
✅ Remplacer toutes les images externes par des placeholders locaux
✅ Aucune dépendance CDN externe

### 3. DONNÉES EXTERNALISÉES

✅ Créer des fichiers JSON pour tout le contenu statique
✅ Types TypeScript stricts pour chaque structure de données
✅ Hooks personnalisés pour charger les données (prêts pour Strapi)

### 4. SÉCURITÉ

✅ Sanitization HTML avec DOMPurify
✅ Validation données avec Zod
✅ Pas de `dangerouslySetInnerHTML` sans protection

### 5. DOCUMENTATION

✅ Commentaires JSDoc sur toutes les fonctions/composants
✅ README.md détaillé par dossier
✅ Fichier ARCHITECTURE.md expliquant la structure
✅ Exemples d'usage pour chaque composant UI

### 6. PRÉPARATION STRAPI

✅ Hooks abstraits (faciles à remplacer par fetch API)
✅ Types compatibles avec structure Strapi
✅ Séparation claire données / présentation

---

## 📁 NOUVELLE STRUCTURE CIBLE

```
src/
├── assets/                          # Assets locaux
│   ├── fonts/                       # Fonts téléchargées
│   │   ├── Lora/
│   │   └── PlayfairDisplay/
│   ├── images/                      # Images du site
│   │   ├── placeholders/            # Placeholders temporaires
│   │   ├── hero/
│   │   ├── projects/
│   │   └── team/
│   └── icons/                       # SVG icons custom
│
├── components/
│   ├── ui/                          # Composants réutilisables de base
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── README.md
│   │   ├── Card/
│   │   ├── Section/
│   │   ├── Badge/
│   │   ├── Typography/
│   │   └── index.ts                 # Export centralisé
│   │
│   ├── layout/                      # Layouts et structure
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── NavItem.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── README.md
│   │   ├── Footer/
│   │   ├── PageLayout/
│   │   └── index.ts
│   │
│   └── features/                    # Features métier
│       ├── blog/
│       │   ├── BlogList/
│       │   ├── BlogCard/
│       │   ├── BlogPost/
│       │   ├── BlogHeader/
│       │   └── index.ts
│       ├── portfolio/
│       │   ├── PortfolioGrid/
│       │   ├── ProjectCard/
│       │   ├── PrinciplesList/
│       │   ├── ScientificIllustration/
│       │   └── index.ts
│       ├── contact/
│       │   ├── ContactForm/
│       │   └── ContactInfo/
│       ├── hero/
│       │   ├── Hero/
│       │   └── HeroVideo/
│       └── about/
│           ├── AboutSection/
│           ├── PartnersList/
│           └── SkillsGrid/
│
├── pages/                           # Pages/Routes
│   ├── HomePage.tsx
│   ├── BlogPage.tsx
│   ├── BlogPostPage.tsx
│   ├── PortfolioPage.tsx
│   ├── ServicesPage.tsx
│   ├── CVPage.tsx
│   └── index.ts
│
├── hooks/                           # Hooks personnalisés
│   ├── useBlogPosts.ts
│   ├── useProjects.ts
│   ├── useServices.ts
│   ├── usePartners.ts
│   ├── useSanitizedHTML.ts
│   ├── useScrollToTop.ts
│   ├── useMediaQuery.ts
│   └── index.ts
│
├── lib/                             # Utilitaires & helpers
│   ├── utils.ts                     # cn() et helpers généraux
│   ├── sanitize.ts                  # DOMPurify wrapper
│   ├── validation.ts                # Schémas Zod
│   ├── date.ts                      # Formatage dates
│   ├── constants.ts                 # Constantes globales
│   └── index.ts
│
├── data/                            # Données statiques (JSON)
│   ├── blog.json
│   ├── projects.json
│   ├── services.json
│   ├── partners.json
│   ├── cv.json
│   └── README.md                    # Structure des données
│
├── types/                           # Types TypeScript
│   ├── index.ts                     # Export tous les types
│   ├── blog.types.ts
│   ├── portfolio.types.ts
│   ├── service.types.ts
│   ├── common.types.ts
│   └── strapi.types.ts              # Types pour future intégration
│
├── config/                          # Configuration
│   ├── site.config.ts               # Config générale du site
│   ├── navigation.config.ts         # Config navigation
│   └── theme.config.ts              # Config couleurs/fonts
│
├── styles/                          # Styles globaux
│   ├── globals.css                  # Styles de base + Tailwind
│   └── fonts.css                    # @font-face declarations
│
├── App.tsx                          # Point d'entrée app
├── main.tsx                         # Point d'entrée React
└── vite-env.d.ts                    # Types Vite
```

---

## 🔧 TÂCHES À RÉALISER (ÉTAPE PAR ÉTAPE)

### 📦 ÉTAPE 1 : SETUP & DÉPENDANCES

**1.1 Installer les nouvelles dépendances**

```bash
# Sécurité
pnpm add dompurify zod
pnpm add -D @types/dompurify

# Utilitaires
pnpm add clsx tailwind-merge

# Tailwind local (supprimer CDN)
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D @tailwindcss/typography

# Fonts locales
pnpm add -D fontsource-lora fontsource-playfair-display
```

**1.2 Configurer Tailwind localement**

- Créer `tailwind.config.js` avec les couleurs du thème nature
- Supprimer `<script src="https://cdn.tailwindcss.com">` de `index.html`
- Importer Tailwind dans `src/styles/globals.css`

**1.3 Télécharger et configurer les fonts locales**

- Importer Lora et Playfair Display depuis fontsource
- Créer `src/styles/fonts.css` avec @font-face

**1.4 Créer structure de dossiers**

- Créer tous les dossiers vides de la structure cible
- Créer fichiers `README.md` dans chaque dossier principal

---

### 🔐 ÉTAPE 2 : SÉCURITÉ (PRIORITÉ CRITIQUE)

**2.1 Créer hook useSanitizedHTML**

```typescript
// src/hooks/useSanitizedHTML.ts

import { useMemo } from "react";
import DOMPurify from "dompurify";

/**
 * Hook pour sanitizer du HTML brut et prévenir les attaques XSS
 *
 * @param html - Chaîne HTML à sanitizer
 * @returns HTML sécurisé prêt pour dangerouslySetInnerHTML
 *
 * @example
 * const sanitized = useSanitizedHTML(post.content);
 * return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
 */
export function useSanitizedHTML(html: string): string {
  return useMemo(() => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "em",
        "u",
        "a",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "code",
        "pre",
        "img",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "class"],
      ALLOW_DATA_ATTR: false,
    });
  }, [html]);
}
```

**2.2 Créer schémas de validation Zod**

```typescript
// src/lib/validation.ts

import { z } from "zod";

/**
 * Schéma de validation pour le formulaire de contact
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),
  email: z.string().email("Email invalide"),
  subject: z
    .string()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(200, "Le sujet est trop long"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message est trop long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

**2.3 Remplacer tous les dangerouslySetInnerHTML**

- Identifier chaque usage dans le code actuel
- Wrapper avec useSanitizedHTML
- Commenter le code pour expliquer pourquoi

---

### 📝 ÉTAPE 3 : TYPES & CONFIGURATION

**3.1 Créer tous les types TypeScript**

```typescript
// src/types/common.types.ts

/**
 * Asset image avec metadata
 */
export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * Metadata SEO pour pages et contenus
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
```

```typescript
// src/types/blog.types.ts

import type { ImageAsset, SEOMetadata } from "./common.types";

/**
 * Catégories disponibles pour les articles de blog
 */
export type BlogCategory =
  | "Pédagogie"
  | "Science"
  | "Chantier Nature"
  | "Montagne";

/**
 * Article de blog complet
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  coverImage: ImageAsset;
  gallery?: ImageAsset[];
  featured?: boolean;
  seo?: SEOMetadata;
}
```

```typescript
// src/types/portfolio.types.ts

/**
 * Projet du portfolio
 */
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  target: string; // Ex: "Scolaire (3-6 ans)"
  description: string;
  coverImage: ImageAsset;
  gallery?: ImageAsset[];
  principlesEnvironmental: Principle[];
  principlesPedagogical: Principle[];
  icon: "Leaf" | "Microscope" | "Hammer" | "Map";
  date?: string;
  category: "animation" | "montagne" | "mediation";
  seo?: SEOMetadata;
}

/**
 * Principe (environnemental ou pédagogique)
 */
export interface Principle {
  text: string;
  order?: number;
}
```

**3.2 Créer configuration du site**

```typescript
// src/config/site.config.ts

/**
 * Configuration générale du site
 * Centralise toutes les informations importantes
 */
export const siteConfig = {
  name: "Enzo Bagneris",
  title: "Enzo Bagneris | Animateur Nature & Médiateur Scientifique",
  description:
    "Médiateur scientifique environnemental dédié à la gestion des milieux naturels.",
  url: "https://enzobagneris.fr",

  author: {
    name: "Enzo Bagneris",
    email: "contact@enzobagneris.fr",
    phone: "+33 6 00 00 00 00",
  },

  social: {
    instagram: "https://instagram.com/enzobagneris",
    linkedin: "https://linkedin.com/in/enzobagneris",
  },

  location: "Pyrénées, France",
} as const;
```

```typescript
// src/config/theme.config.ts

/**
 * Configuration du thème visuel
 * Couleurs de la palette "nature"
 */
export const themeConfig = {
  colors: {
    dark: "#284B3A", // Deep forest green
    light: "#F3EFE7", // Cream/Beige background
    accent: "#D85C36", // Rust/Mushroom orange
    soft: "#F2AFA0", // Soft pinkish accent
    text: "#1F1F1F", // Dark charcoal
    muted: "#5A5A5A", // Gray text
  },

  fonts: {
    serif: '"Lora", serif',
    display: '"Playfair Display SC", serif',
    heading: '"Playfair Display", serif',
  },
} as const;
```

---

### 📊 ÉTAPE 4 : EXTERNALISER LES DONNÉES

**4.1 Créer fichiers JSON pour chaque type de contenu**

```json
// src/data/blog.json
[
  {
    "id": "classe-decouverte",
    "slug": "classe-decouverte-montagne",
    "title": "Classe découverte en montagne",
    "subtitle": "À la découverte de la faune et de la flore",
    "excerpt": "Retour sur une semaine d'immersion avec les 3-6 ans en montagne pyrénéenne.",
    "content": "<p>L'organisation d'une classe découverte...</p>",
    "category": "Pédagogie",
    "tags": ["Scolaire", "Montagne", "Faune"],
    "publishedAt": "2023-10-12",
    "coverImage": {
      "url": "/assets/images/projects/classe-decouverte.jpg",
      "alt": "Enfants en classe découverte observant la nature"
    },
    "featured": true
  }
]
```

```json
// src/data/projects.json
[
  {
    "id": "classe-decouverte",
    "slug": "classe-decouverte-montagne",
    "title": "Classe découverte en montagne",
    "subtitle": "À la découverte de la faune et de la flore",
    "target": "Scolaire (3 à 6 ans)",
    "description": "Programme immersif d'une semaine...",
    "coverImage": {
      "url": "/assets/images/projects/classe-decouverte.jpg",
      "alt": "Groupe d'enfants en randonnée"
    },
    "principlesEnvironmental": [
      {
        "text": "Découverte de la montagne pyrénéenne : sensibilisation aux milieux locaux.",
        "order": 1
      },
      {
        "text": "Biodiversité : initiation aux rapaces diurnes (espèces emblématiques).",
        "order": 2
      }
    ],
    "principlesPedagogical": [
      {
        "text": "Approche ludique : puzzles, énigmes, supports visuels adaptés aux non-lecteurs.",
        "order": 1
      },
      {
        "text": "Pédagogie active : manipulation d'objets concrets.",
        "order": 2
      }
    ],
    "icon": "Leaf",
    "category": "animation",
    "date": "2023-10"
  }
]
```

**4.2 Créer README.md expliquant la structure des données**

```markdown
// src/data/README.md

# 📊 Structure des Données

Ce dossier contient toutes les données statiques du site en JSON.

## Fichiers

### blog.json

Articles de blog du site.

- **Structure**: Array<BlogPost>
- **Utilisation**: Import dans `useBlogPosts` hook
- **Future**: Remplacé par API Strapi

### projects.json

Projets du portfolio.

- **Structure**: Array<Project>
- **Utilisation**: Import dans `useProjects` hook

...
```

---

### 🎨 ÉTAPE 5 : COMPOSANTS UI RÉUTILISABLES

**Pour chaque composant UI, créer :**

1. Le composant TypeScript avec JSDoc
2. Les variants/options
3. Un fichier README.md avec exemples
4. Export dans index.ts

**Exemple : Button**

```typescript
// src/components/ui/Button/Button.tsx

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props du composant Button
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variant visuel du bouton
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

  /**
   * Taille du bouton
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * État de chargement
   * Affiche un spinner et désactive le bouton
   */
  loading?: boolean;

  /**
   * Largeur pleine
   */
  fullWidth?: boolean;
}

/**
 * Composant Button réutilisable avec variants
 *
 * @example
 * <Button variant="primary" size="lg">
 *   Cliquez ici
 * </Button>
 *
 * @example
 * <Button variant="outline" loading>
 *   Chargement...
 * </Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Styles de base
    const baseStyles = [
      'inline-flex items-center justify-center',
      'font-display tracking-widest uppercase',
      'transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ].join(' ');

    // Variants
    const variants = {
      primary: 'bg-nature-dark text-nature-light hover:bg-nature-accent focus:ring-nature-dark',
      secondary: 'bg-nature-accent text-nature-light hover:bg-nature-dark focus:ring-nature-accent',
      outline: 'border-2 border-nature-dark text-nature-dark hover:bg-nature-dark hover:text-nature-light focus:ring-nature-dark',
      ghost: 'text-nature-dark hover:bg-nature-dark/10 focus:ring-nature-dark',
    };

    // Sizes
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-12 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Chargement...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

```markdown
// src/components/ui/Button/README.md

# Button Component

Composant bouton réutilisable avec plusieurs variants et tailles.

## Import

\`\`\`typescript
import { Button } from '@/components/ui';
\`\`\`

## Usage

### Basic

\`\`\`tsx
<Button>Click me</Button>
\`\`\`

### Variants

\`\`\`tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
\`\`\`

### Sizes

\`\`\`tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
\`\`\`

### Loading state

\`\`\`tsx
<Button loading>Chargement...</Button>
\`\`\`

## Props

| Prop      | Type                                             | Default   | Description        |
| --------- | ------------------------------------------------ | --------- | ------------------ |
| variant   | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | Style visuel       |
| size      | 'sm' \| 'md' \| 'lg'                             | 'md'      | Taille du bouton   |
| loading   | boolean                                          | false     | État de chargement |
| fullWidth | boolean                                          | false     | Largeur 100%       |
```

**Composants UI à créer (avec même pattern) :**

- Button ✅ (exemple ci-dessus)
- Card
- Section
- Badge
- Typography (H1, H2, H3, Paragraph)
- Input (pour formulaire)
- Textarea

---

### 🧩 ÉTAPE 6 : HOOKS PERSONNALISÉS

**Pattern pour tous les hooks :**

```typescript
// src/hooks/useBlogPosts.ts

import { useState, useEffect } from "react";
import type { BlogPost } from "@/types";
import blogData from "@/data/blog.json";

/**
 * Hook pour récupérer les articles de blog
 *
 * @returns {Object} State avec posts, loading, error
 *
 * @example
 * const { posts, loading, error } = useBlogPosts();
 *
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage error={error} />;
 *
 * return <BlogList posts={posts} />;
 */
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        // TODO: Remplacer par fetch Strapi API
        // const response = await fetch('/api/posts');
        // const data = await response.json();

        // Pour l'instant : données JSON locales
        setPosts(blogData as BlogPost[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
```

**Hooks à créer (même pattern) :**

- useBlogPosts ✅
- useBlogPost(slug: string)
- useProjects
- useServices
- usePartners
- useSanitizedHTML (déjà fait)

---

### 🏗️ ÉTAPE 7 : REFACTORISER LES COMPOSANTS EXISTANTS

**Pour chaque gros composant actuel, appliquer ce pattern :**

1. **Identifier les responsabilités** (affichage, logique, données)
2. **Découper en sous-composants**
3. **Externaliser la logique dans des hooks**
4. **Commenter avec JSDoc**
5. **Créer README.md**

**Exemple : Portfolio**

```
// AVANT (200 lignes monolithiques)
components/Portfolio.tsx

// APRÈS (modulaire)
components/features/portfolio/
├── PortfolioGrid/
│   ├── PortfolioGrid.tsx         (50 lignes)
│   └── README.md
├── ProjectCard/
│   ├── ProjectCard.tsx            (80 lignes)
│   ├── ProjectCardImage.tsx       (30 lignes)
│   ├── ProjectCardFooter.tsx      (20 lignes)
│   └── README.md
├── PrinciplesList/
│   ├── PrinciplesList.tsx         (40 lignes)
│   └── README.md
└── index.ts
```

**PortfolioGrid.tsx refactorisé :**

```typescript
// src/components/features/portfolio/PortfolioGrid/PortfolioGrid.tsx

import { ProjectCard } from '../ProjectCard';
import { Section } from '@/components/ui';
import { useProjects } from '@/hooks';
import type { Project } from '@/types';

/**
 * Props du composant PortfolioGrid
 */
interface PortfolioGridProps {
  /**
   * Titre de la section
   * @default "Exemples d'Interventions"
   */
  title?: string;

  /**
   * Description de la section
   */
  description?: string;

  /**
   * Nombre maximum de projets à afficher
   */
  limit?: number;
}

/**
 * Grille des projets du portfolio
 *
 * Affiche les projets sous forme de grille responsive.
 * Utilise le hook useProjects pour charger les données.
 *
 * @component
 * @example
 * <PortfolioGrid limit={4} />
 */
export function PortfolioGrid({
  title = "Exemples d'Interventions",
  description = "Des projets concrets menés sur le terrain, alliant rigueur scientifique et pédagogie active pour tous les publics.",
  limit
}: PortfolioGridProps) {
  const { projects, loading, error } = useProjects();

  // Appliquer la limite si spécifiée
  const displayedProjects = limit
    ? projects.slice(0, limit)
    : projects;

  if (loading) {
    return <PortfolioGridSkeleton />;
  }

  if (error) {
    return <PortfolioGridError error={error} />;
  }

  return (
    <Section variant="light" className="relative">
      {/* Décoration d'arrière-plan */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-nature-accent rounded-full blur-3xl opacity-20" />

      <div className="relative z-10">
        {/* En-tête */}
        <PortfolioGridHeader
          title={title}
          description={description}
        />

        {/* Grille de projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/**
 * En-tête de la grille de portfolio
 */
function PortfolioGridHeader({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-16">
      <span className="font-heading italic text-2xl text-nature-accent block mb-2">
        Portfolio
      </span>
      <h2 className="font-display text-5xl md:text-6xl text-nature-dark">
        {title}
      </h2>
      <p className="mt-4 text-nature-text max-w-2xl text-lg">
        {description}
      </p>
    </div>
  );
}

/**
 * Skeleton loader pendant le chargement
 */
function PortfolioGridSkeleton() {
  return (
    <Section variant="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-96 bg-nature-dark/10 rounded-3xl animate-pulse"
          />
        ))}
      </div>
    </Section>
  );
}

/**
 * Affichage d'erreur
 */
function PortfolioGridError({ error }: { error: Error }) {
  return (
    <Section variant="light" className="text-center">
      <h2 className="font-display text-3xl text-nature-dark mb-4">
        Erreur de chargement
      </h2>
      <p className="text-nature-muted">{error.message}</p>
    </Section>
  );
}
```

---

### 📄 ÉTAPE 8 : DOCUMENTATION

**8.1 Créer ARCHITECTURE.md à la racine**

```markdown
# 🏗️ Architecture du Projet

Ce document explique l'organisation du code et les patterns utilisés.

## Structure des Dossiers

### /src/components

Tous les composants React organisés par responsabilité :

- **ui/** : Composants réutilisables de base (Button, Card, etc.)
- **layout/** : Structure de page (Navbar, Footer, etc.)
- **features/** : Composants métier spécifiques (Blog, Portfolio, etc.)

### /src/hooks

Hooks personnalisés pour la logique réutilisable.
Pattern : `use{Nom}` → retourne `{ data, loading, error }`

### /src/data

Données JSON statiques. Seront remplacées par Strapi API.

### /src/types

Types TypeScript pour toutes les structures de données.

## Patterns Utilisés

### Composition de Composants

Privilégier plusieurs petits composants plutôt qu'un gros.

❌ **Mauvais :**
\`\`\`tsx
function BigComponent() {
// 300 lignes de code...
}
\`\`\`

✅ **Bon :**
\`\`\`tsx
function ParentComponent() {
return (
<>
<Header />
<Content />
<Footer />
</>
);
}
\`\`\`

### Custom Hooks pour la Logique

Extraire la logique métier des composants.

✅ **Bon :**
\`\`\`tsx
function BlogPage() {
const { posts, loading } = useBlogPosts();
return <BlogList posts={posts} loading={loading} />;
}
\`\`\`

### Props Typées avec JSDoc

Documenter toutes les props avec JSDoc.

### Séparation Données / Présentation

Les composants reçoivent les données en props, ne les chargent pas directement.

## Préparation Strapi

### Hooks Abstraits

Les hooks comme `useBlogPosts` sont prêts pour être modifiés :

\`\`\`typescript
// Version JSON actuelle
import data from '@/data/blog.json';
setPosts(data);

// Futur : Strapi API
const response = await fetch('/api/posts');
setPosts(await response.json());
\`\`\`

### Types Compatibles

Les types sont conçus pour matcher la structure Strapi.
```

**8.2 README.md par composant feature**

Chaque composant feature doit avoir un README expliquant :

- Son rôle
- Comment l'utiliser
- Props disponibles
- Exemples

**8.3 Commentaires inline**

Commenter les parties complexes du code :

```typescript
/**
 * Calcule la durée de lecture estimée d'un article
 * Basé sur une moyenne de 200 mots par minute
 *
 * @param content - Contenu HTML de l'article
 * @returns Durée en minutes
 */
function calculateReadingTime(content: string): number {
  // Retirer les balises HTML pour compter uniquement le texte
  const text = content.replace(/<[^>]*>/g, "");

  // Compter les mots (séparés par des espaces)
  const wordCount = text.split(/\s+/).length;

  // Calcul : 200 mots/minute, arrondi au supérieur
  return Math.ceil(wordCount / 200);
}
```

---

### 🖼️ ÉTAPE 9 : LOCALISATION DES ASSETS

**9.1 Images placeholders**

Créer des images placeholder SVG pour remplacer Picsum/Unsplash :

```typescript
// src/assets/images/placeholders/project-placeholder.svg
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#F3EFE7"/>
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Arial"
    font-size="24"
    fill="#284B3A"
  >
    Image de projet
  </text>
</svg>
```

Ou utiliser des images libres de droits et les stocker localement :

```
src/assets/images/
├── hero-mountain.jpg
├── projects/
│   ├── classe-decouverte.jpg
│   ├── phyt-abeilles.jpg
│   └── ...
└── team/
    └── enzo-portrait.jpg
```

**9.2 Remplacer toutes les URLs externes**

Rechercher et remplacer :

- `https://picsum.photos/*` → `/assets/images/placeholders/*`
- `https://images.unsplash.com/*` → `/assets/images/*`

---

### ✅ ÉTAPE 10 : VALIDATION & TESTS

**10.1 Vérifier que tout fonctionne**

- [ ] Site se lance sans erreur (`pnpm dev`)
- [ ] Toutes les pages s'affichent correctement
- [ ] Navigation fonctionne
- [ ] Formulaire de contact fonctionne (validation)
- [ ] Aucune console error
- [ ] Aucune dépendance CDN externe

**10.2 Tests TypeScript**

```bash
# Vérifier qu'il n'y a pas d'erreurs TypeScript
pnpm tsc --noEmit
```

**10.3 Build de production**

```bash
pnpm build
pnpm preview
```

---

## 📋 CHECKLIST FINALE

### Structure

- [ ] Nouvelle arborescence créée
- [ ] Tous les fichiers organisés
- [ ] Index exports créés

### Dépendances

- [ ] Tailwind installé localement
- [ ] Fonts installées localement
- [ ] DOMPurify + Zod installés
- [ ] Aucune dépendance CDN dans index.html

### Sécurité

- [ ] Hook useSanitizedHTML créé et testé
- [ ] Schémas Zod pour validation
- [ ] Tous les dangerouslySetInnerHTML protégés

### Types & Config

- [ ] Types complets pour toutes les structures
- [ ] site.config.ts créé
- [ ] theme.config.ts créé
- [ ] navigation.config.ts créé

### Données

- [ ] Toutes les données externalisées en JSON
- [ ] README.md dans /data expliquant la structure

### Composants UI

- [ ] Button créé et documenté
- [ ] Card créé et documenté
- [ ] Section créé et documenté
- [ ] Badge créé et documenté
- [ ] Typography créé et documenté
- [ ] Exports centralisés dans index.ts

### Hooks

- [ ] useBlogPosts créé
- [ ] useBlogPost créé
- [ ] useProjects créé
- [ ] useServices créé
- [ ] usePartners créé
- [ ] useSanitizedHTML créé

### Composants Features

- [ ] Blog refactorisé (BlogList, BlogCard, BlogPost)
- [ ] Portfolio refactorisé (PortfolioGrid, ProjectCard)
- [ ] Contact refactorisé (ContactForm avec validation)
- [ ] Hero refactorisé
- [ ] About refactorisé

### Documentation

- [ ] README.md principal mis à jour
- [ ] ARCHITECTURE.md créé
- [ ] README.md par feature créé
- [ ] JSDoc sur tous les composants/fonctions
- [ ] Commentaires inline sur code complexe

### Assets

- [ ] Fonts locales configurées
- [ ] Images placeholders créées
- [ ] Aucune URL externe (Picsum, Unsplash, etc.)

### Validation

- [ ] Site fonctionne en dev (`pnpm dev`)
- [ ] Aucune erreur TypeScript
- [ ] Build production réussit
- [ ] Aucune console error
- [ ] UI préservée à l'identique

---

## 🎯 RÈGLES ABSOLUES À RESPECTER

### 1. PRÉSERVATION DE L'UI

❌ **NE JAMAIS** modifier l'apparence visuelle
✅ Seule la structure du code change
✅ Le site doit être visuellement identique avant/après

### 2. COMMENTAIRES & DOCUMENTATION

❌ **AUCUN** composant sans JSDoc
❌ **AUCUN** dossier sans README.md
✅ Chaque fonction/composant documenté
✅ Code complexe commenté inline

### 3. MODULARITÉ

❌ **AUCUN** composant > 150 lignes
❌ **AUCUNE** duplication de code
✅ Composants atomiques réutilisables
✅ Séparation claire des responsabilités

### 4. TYPES TYPESCRIPT

❌ **AUCUN** `any`
❌ **AUCUNE** prop non typée
✅ Types stricts partout
✅ Interfaces documentées

### 5. LOCALISATION

❌ **AUCUNE** dépendance CDN
❌ **AUCUNE** image externe (Picsum, Unsplash)
✅ Tout en local (fonts, images, libs)

### 6. PRÉPARATION STRAPI

✅ Hooks abstraits (faciles à modifier)
✅ Types compatibles avec structure Strapi
✅ Séparation données/présentation

---

## 🚀 ORDRE D'EXÉCUTION

Suivre **STRICTEMENT** cet ordre :

1. ✅ Setup & Dépendances (ÉTAPE 1)
2. ✅ Sécurité (ÉTAPE 2) - **PRIORITÉ CRITIQUE**
3. ✅ Types & Configuration (ÉTAPE 3)
4. ✅ Externaliser données (ÉTAPE 4)
5. ✅ Composants UI (ÉTAPE 5)
6. ✅ Hooks (ÉTAPE 6)
7. ✅ Refactoring composants (ÉTAPE 7)
8. ✅ Documentation (ÉTAPE 8)
9. ✅ Localisation assets (ÉTAPE 9)
10. ✅ Validation finale (ÉTAPE 10)

---

## 💬 NOTES POUR TOI, CODEX

- **Sois méticuleux** : Chaque composant doit être parfait
- **Commente tout** : JSDoc + commentaires inline
- **Teste au fur et à mesure** : Vérifie que le site fonctionne après chaque étape
- **Demande confirmation** : Si tu as un doute sur une décision architecturale
- **Préserve l'UI** : Le visuel ne doit PAS changer
- **Pense Strapi** : Les hooks doivent être faciles à adapter pour une API

**Objectif final :** Code **production-ready**, **scalable**, **maintenable**, **documenté**, et **prêt pour Strapi** !

Bonne chance ! 🚀
