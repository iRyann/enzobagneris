# Audit Technique Post-Modifications

## 📊 Vue d'ensemble

Le projet a bénéficié d'améliorations significatives en termes de structure et de modularité. Cependant, plusieurs points critiques nécessitent encore une attention particulière avant la phase 2 (intégration Stripe).

---

## 🔴 Problèmes Critiques

### 1. **Sécurité - Sanitization HTML**

**Localisation**: `src/hooks/useSanitizedHTML.ts`, `src/components/features/blog/BlogPost/BlogPost.tsx`

**Problème**:

- Utilisation de `dangerouslySetInnerHTML` sans validation côté serveur
- Configuration DOMPurify trop permissive pour du contenu utilisateur

**Impact**:

- Risque XSS si le contenu JSON est compromis
- Vulnérabilité lors de la migration vers Strapi

**Solution requise**:

```typescript
// Configuration DOMPurify plus stricte
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "br", "strong", "em", "h3", "ul", "ol", "li"],
    ALLOWED_ATTR: [], // Aucun attribut autorisé par défaut
    KEEP_CONTENT: true,
    RETURN_DOM_FRAGMENT: false,
  });
}
```

---

### 2. **Architecture - Couplage fort avec les données statiques**

**Localisation**: Tous les hooks dans `src/hooks/`

**Problème**:

- Imports directs des fichiers JSON dans les hooks
- Pas d'abstraction pour la couche de données
- Migration Strapi nécessitera de modifier tous les hooks

**Impact**:

- Maintenance difficile
- Duplication de code lors de la migration
- Tests unitaires complexes

**Solution requise**: Créer une couche d'abstraction `DataService`

---

### 3. **Scaling & Responsive - Problème de viewport**

**Localisation**: Styles globaux et composants

**Problème constaté**:

- Site nécessite 80% de zoom sur écran 25 pouces
- Unités de taille fixes plutôt que fluides
- Container max-width probablement trop large

**Impact**:

- Expérience utilisateur dégradée sur grands écrans
- Doute sur le vrai responsive

**Solution requise**:

```css
/* Ajuster les breakpoints et containers */
@theme {
  --breakpoint-2xl: 1400px; /* Au lieu de 1536px */
  --container-max: 1280px;
}
```

---

## 🟠 Problèmes Majeurs

### 4. **Gestion d'état - Absence de cache**

**Localisation**: Hooks de chargement de données

**Problème**:

- Rechargement des données à chaque navigation
- Pas de mise en cache des appels API (préparation Strapi)
- État `loading` répétitif

**Impact**:

- Performance dégradée
- Expérience utilisateur moins fluide
- Coût API inutile (futur Strapi)

---

### 5. **TypeScript - Types incomplets**

**Localisation**: `src/types/`, plusieurs composants

**Problèmes**:

- Types `any` implicites dans certains composants
- Props non typées dans `PrinciplesList`
- Absence de types pour les réponses d'erreur

**Exemple**:

```typescript
// types/common.types.ts - Manque
export interface APIError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}
```

---

### 6. **Validation - Formulaire de contact**

**Localisation**: `src/components/features/contact/ContactForm/ContactForm.tsx`

**Problème**:

- Pas de débounce sur la validation
- Erreurs affichées brutalement
- Pas de retour visuel sur le succès

---

## 🟡 Améliorations Recommandées

### 7. **Performance - Optimisation des images**

**Problème**:

- Utilisation de SVG placeholders (OK pour dev)
- Pas de lazy loading explicite
- Pas de formats modernes (WebP, AVIF)

### 8. **Accessibilité - ARIA et focus**

**Problèmes mineurs**:

- Certains boutons manquent de `aria-label` descriptifs
- Pas de gestion du focus trap dans le menu mobile
- Contraste limite sur certains textes `text-nature-muted`

### 9. **SEO - Metadata dynamiques**

**Problème**:

- Metadata statiques dans `index.html`
- Pas de balises Open Graph dynamiques par page
- Manque de Schema.org markup

### 10. **Tests - Couverture nulle**

**Constat**:

- Aucun test unitaire ou d'intégration
- Critique avant migration Strapi

---

## 📋 Priorités pour Phase 1.5 (Pre-Stripe)

### Priorité P0 (Bloquant)

1. ✅ Sécurité: Durcir sanitization HTML
2. ✅ Architecture: Créer `DataService` abstraction layer
3. ✅ Scaling: Corriger viewport et responsive

### Priorité P1 (Important)

4. ⚠️ Cache: Implémenter React Query ou cache manuel
5. ⚠️ Types: Compléter définitions TypeScript
6. ⚠️ Formulaire: Améliorer UX validation

### Priorité P2 (Nice to have)

7. 🔵 Performance: Lazy loading images
8. 🔵 A11y: Audit WAVE complet
9. 🔵 SEO: React Helmet pour metadata
10. 🔵 Tests: Setup Jest + React Testing Library

---

## 🎯 Plan d'action immédiat

### Semaine 1: Fondations solides

- [ ] **Agent 1**: Créer `DataService` et migration hooks
- [ ] **Agent 2**: Corriger scaling responsive
- [ ] **Agent 3**: Durcir sécurité sanitization

### Semaine 2: Stabilisation

- [ ] **Agent 4**: Implémenter cache (React Query)
- [ ] **Agent 5**: Compléter types TypeScript
- [ ] **Agent 6**: Améliorer formulaire contact

### Semaine 3: Qualité

- [ ] **Agent 7**: Setup tests unitaires
- [ ] **Agent 8**: Audit accessibilité
- [ ] **Agent 9**: Optimisation performance

---

## 🔄 Préparation Phase 2 (Stripe)

### Prérequis techniques

1. ✅ `DataService` pour abstraire appels API
2. ✅ Cache pour éviter re-fetch prix
3. ✅ Validation formulaires robuste
4. ⚠️ Gestion d'erreur unifiée
5. ⚠️ Tests E2E pour paiement

### Architecture cible Stripe

```
src/
├── services/
│   ├── api/
│   │   ├── DataService.ts       [P0 - Créer]
│   │   ├── StripeService.ts     [Phase 2]
│   │   └── PaymentService.ts    [Phase 2]
│   └── cache/
│       └── QueryClient.ts       [P1 - Créer]
├── features/
│   └── payment/                 [Phase 2]
│       ├── CheckoutForm/
│       ├── PaymentSuccess/
│       └── PricingTable/
```

---

## 📊 Métriques de succès

### Avant Phase 2

- [ ] 0 warning TypeScript
- [ ] 0 vulnérabilité npm audit
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Couverture tests > 70%

### Architecture

- [ ] Tous les hooks utilisent `DataService`
- [ ] Aucun import direct de JSON
- [ ] Cache implémenté (React Query ou manuel)
- [ ] Gestion d'erreur centralisée

---

# 🤖 AGENTS.md (à créer)

Voir le fichier séparé `AGENTS.md` pour les prompts détaillés par agent et priorité.

---

## Notes finales

**Points positifs constatés**:

- ✅ Structure de dossiers claire et maintenable
- ✅ Séparation UI/Features bien respectée
- ✅ Types de base correctement définis
- ✅ Hooks pattern bien utilisé

**Dettes techniques identifiées**:

- 🔴 Sécurité sanitization
- 🔴 Couplage fort données
- 🔴 Scaling viewport
- 🟠 Absence de cache
- 🟠 Tests manquants

**Estimation effort Phase 1.5**: ~3 semaines développeur full-time

---

# AGENTS.md

## 🎯 Agents de développement - Phase 1.5 (Pre-Stripe)

Ce fichier contient les spécifications détaillées pour chaque agent de développement à exécuter séquentiellement avant l'intégration Stripe.

---

## 📋 Vue d'ensemble des priorités

```
P0 (Bloquant) - Semaine 1
├── Agent 1: DataService Abstraction Layer
├── Agent 2: Responsive Scaling Fix
└── Agent 3: Security Hardening

P1 (Important) - Semaine 2
├── Agent 4: Cache Implementation
├── Agent 5: TypeScript Completion
└── Agent 6: Form UX Enhancement

P2 (Quality) - Semaine 3
├── Agent 7: Testing Setup
├── Agent 8: Accessibility Audit
└── Agent 9: Performance Optimization
```

---

## 🔴 P0 - AGENT 1: DataService Abstraction Layer

### Objectif

Créer une couche d'abstraction pour toutes les opérations de données, facilitant la migration vers Strapi et l'ajout de Stripe.

### Fichiers à créer

```
src/services/
├── api/
│   ├── DataService.ts
│   ├── BaseService.ts
│   └── types.ts
└── README.md
```

### Fichiers à modifier

- `src/hooks/useBlogPosts.ts`
- `src/hooks/useBlogPost.ts`
- `src/hooks/useProjects.ts`
- `src/hooks/useServices.ts`
- `src/hooks/usePartners.ts`

### Spécifications techniques

#### 1. BaseService.ts

```typescript
// Classe abstraite pour tous les services
export abstract class BaseService<T> {
  protected abstract endpoint: string;

  protected async fetchData(): Promise<T[]> {
    // Pour l'instant, import JSON
    // Plus tard, appel API Strapi
  }

  protected handleError(error: unknown): never {
    // Gestion d'erreur centralisée
  }
}
```

#### 2. DataService.ts

```typescript
export class BlogService extends BaseService<BlogPost> {
  protected endpoint = "/api/blog";

  async getAll(): Promise<BlogPost[]> {
    /* ... */
  }
  async getBySlug(slug: string): Promise<BlogPost | null> {
    /* ... */
  }
  async getFeatured(): Promise<BlogPost[]> {
    /* ... */
  }
}

export class ProjectService extends BaseService<Project> {
  /* ... */
}
export class ServiceItemService extends BaseService<ServiceItem> {
  /* ... */
}
export class PartnerService extends BaseService<Partner> {
  /* ... */
}
```

#### 3. Singleton instances

```typescript
// src/services/api/index.ts
export const blogService = new BlogService();
export const projectService = new ProjectService();
export const serviceItemService = new ServiceItemService();
export const partnerService = new PartnerService();
```

### Migration des hooks

```typescript
// AVANT
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  // ...
  setPosts(blogData as BlogPost[]); // Import direct JSON
}

// APRÈS
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  // ...
  const data = await blogService.getAll();
  setPosts(data);
}
```

### Tests requis

- [ ] Tous les hooks retournent les mêmes données qu'avant
- [ ] Gestion d'erreur fonctionne
- [ ] TypeScript compile sans erreur

### Critères de validation

- ✅ Aucun import direct de JSON dans les hooks
- ✅ Tous les services héritent de `BaseService`
- ✅ Interface cohérente pour tous les services
- ✅ Documentation README.md complète

---

## 🔴 P0 - AGENT 2: Responsive Scaling Fix

### Objectif

Corriger le problème de scaling nécessitant 80% de zoom sur écran 25 pouces et assurer un vrai responsive design.

### Problème identifié

```css
/* Problème actuel probable */
.container {
  max-width: 1536px; /* Trop large */
}

h1 {
  font-size: 4rem; /* Fixe, non fluide */
}
```

### Fichiers à modifier

- `tailwind.config.cjs`
- `src/styles/globals.css`
- `src/components/features/hero/Hero/Hero.tsx`
- `src/components/layout/Navbar/Navbar.tsx`

### Solution technique

#### 1. Ajuster Tailwind config

```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      // Breakpoints ajustés
      screens: {
        "2xl": "1400px", // Au lieu de 1536px
        "3xl": "1920px", // Nouveau pour très grands écrans
      },
      // Container avec max-width raisonnable
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px", // Max 1400px
        },
      },
    },
  },
};
```

#### 2. Typography fluide

```css
/* src/styles/globals.css */
@layer base {
  html {
    /* Base 16px à 1024px, 18px à 1920px */
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
  }

  h1 {
    /* Tailles fluides au lieu de fixes */
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }
}
```

#### 3. Composants à ajuster

```typescript
// Hero.tsx - Exemple
<h1 className="font-display text-[clamp(3rem,6vw,5rem)] md:text-[clamp(4rem,7vw,6rem)]">
  ENZO<br />BAGNERIS
</h1>
```

#### 4. Grid responsive amélioré

```typescript
// PortfolioGrid.tsx
<div className="grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-8 xl:gap-12">
  {/* Projects */}
</div>
```

### Tests requis

- [ ] Tester sur écran 13" (1280x800)
- [ ] Tester sur écran 15" (1920x1080)
- [ ] Tester sur écran 25" (2560x1440)
- [ ] Tester sur écran 32" (3840x2160)
- [ ] Vérifier avec DevTools responsive mode

### Critères de validation

- ✅ Aucun besoin de zoom sur écran 25 pouces
- ✅ Texte lisible sur tous les écrans (14px minimum)
- ✅ Pas de débordement horizontal
- ✅ Lighthouse Mobile score > 90

---

## 🔴 P0 - AGENT 3: Security Hardening

### Objectif

Durcir la sécurité de la sanitization HTML et préparer l'application pour du contenu dynamique (Strapi).

### Fichiers à modifier

- `src/lib/sanitize.ts`
- `src/hooks/useSanitizedHTML.ts`
- `src/components/features/blog/BlogPost/BlogPost.tsx`

### Vulnérabilités identifiées

#### 1. Configuration DOMPurify trop permissive

```typescript
// PROBLÈME ACTUEL
ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li',
               'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote',
               'code', 'pre', 'img'], // Trop de tags
ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class'], // 'class' dangereux
```

### Solution technique

#### 1. Sanitization stricte

```typescript
// src/lib/sanitize.ts
import DOMPurify from "dompurify";

/**
 * Configuration stricte pour contenu blog
 */
const BLOG_CONFIG: DOMPurify.Config = {
  ALLOWED_TAGS: [
    "p",
    "br",
    "strong",
    "em",
    "h3",
    "h4", // Seulement sous-titres
    "ul",
    "ol",
    "li",
    "blockquote",
    "code", // Inline code seulement
  ],
  ALLOWED_ATTR: {
    a: ["href", "rel"], // rel pour noopener
  },
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
  // Force noopener pour les liens
  ADD_ATTR: ["rel"],
  FORCE_BODY: true,
};

/**
 * Sanitize HTML pour blog posts
 */
export function sanitizeHtml(html: string): string {
  const clean = DOMPurify.sanitize(html, BLOG_CONFIG);

  // Post-traitement: ajouter noopener sur tous les liens
  const parser = new DOMParser();
  const doc = parser.parseFromString(clean, "text/html");
  doc.querySelectorAll("a").forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("target", "_blank");
  });

  return doc.body.innerHTML;
}

/**
 * Validation supplémentaire avant sanitization
 */
export function validateHtmlInput(html: string): {
  valid: boolean;
  error?: string;
} {
  // Vérifier taille
  if (html.length > 50000) {
    // 50KB max
    return { valid: false, error: "Content too large" };
  }

  // Vérifier patterns suspects
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i, // onclick, onerror, etc.
    /<iframe/i,
    /<object/i,
    /<embed/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(html)) {
      return { valid: false, error: "Suspicious content detected" };
    }
  }

  return { valid: true };
}
```

#### 2. Hook avec validation

```typescript
// src/hooks/useSanitizedHTML.ts
import { useMemo } from "react";
import { sanitizeHtml, validateHtmlInput } from "@/lib/sanitize";

export function useSanitizedHTML(html: string): {
  sanitized: string;
  error: string | null;
} {
  return useMemo(() => {
    // Validation préalable
    const validation = validateHtmlInput(html);
    if (!validation.valid) {
      console.error("[Security] HTML validation failed:", validation.error);
      return {
        sanitized: "<p>Contenu invalide</p>",
        error: validation.error || "Invalid content",
      };
    }

    try {
      const sanitized = sanitizeHtml(html);
      return { sanitized, error: null };
    } catch (error) {
      console.error("[Security] Sanitization failed:", error);
      return {
        sanitized: "<p>Erreur de traitement</p>",
        error: "Sanitization failed",
      };
    }
  }, [html]);
}
```

#### 3. Composant avec gestion d'erreur

```typescript
// BlogPost.tsx
export function BlogPost() {
  const { post, loading } = useBlogPost(slug);
  const { sanitized, error } = useSanitizedHTML(post?.content || '');

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-800">
          Une erreur de sécurité a été détectée dans le contenu.
        </p>
      </div>
    );
  }

  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
```

#### 4. Content Security Policy (CSP)

```html
<!-- index.html -->
<meta
  http-equiv="Content-Security-Policy"
  content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self';
  frame-ancestors 'none';
"
/>
```

### Tests requis

```typescript
// src/lib/__tests__/sanitize.test.ts
describe("sanitizeHtml", () => {
  it("should remove script tags", () => {
    const input = '<p>Hello</p><script>alert("XSS")</script>';
    const output = sanitizeHtml(input);
    expect(output).not.toContain("<script");
  });

  it("should remove event handlers", () => {
    const input = '<p onclick="alert()">Click</p>';
    const output = sanitizeHtml(input);
    expect(output).not.toContain("onclick");
  });

  it("should allow safe tags", () => {
    const input = "<p><strong>Bold</strong> <em>italic</em></p>";
    const output = sanitizeHtml(input);
    expect(output).toContain("<strong>");
    expect(output).toContain("<em>");
  });

  it("should add noopener to links", () => {
    const input = '<a href="https://example.com">Link</a>';
    const output = sanitizeHtml(input);
    expect(output).toContain('rel="noopener noreferrer"');
  });
});
```

### Critères de validation

- ✅ Tous les tests de sécurité passent
- ✅ OWASP ZAP scan sans vulnérabilité critique
- ✅ CSP implémenté et fonctionnel
- ✅ Gestion d'erreur robuste
- ✅ Logs de sécurité en place

---

## 🟠 P1 - AGENT 4: Cache Implementation

### Objectif

Implémenter un système de cache pour éviter les rechargements inutiles et préparer l'optimisation des appels API (Strapi, Stripe).

### Choix technique: React Query

#### Pourquoi React Query ?

- ✅ Standard de l'industrie
- ✅ Cache intelligent automatique
- ✅ Gestion du stale/refetch
- ✅ DevTools intégrés
- ✅ Support TypeScript natif
- ✅ Prêt pour SSR (futur Next.js ?)

### Installation

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools
```

### Fichiers à créer

```
src/lib/
├── queryClient.ts
└── queries/
    ├── blogQueries.ts
    ├── projectQueries.ts
    ├── serviceQueries.ts
    └── partnerQueries.ts
```

### Fichiers à modifier

- `src/App.tsx` (ajouter QueryClientProvider)
- Tous les hooks de données

### Implémentation

#### 1. Configuration QueryClient

```typescript
// src/lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache 5 minutes par défaut
      staleTime: 5 * 60 * 1000,
      // Garde en cache 10 minutes
      gcTime: 10 * 60 * 1000,
      // Retry 2 fois en cas d'échec
      retry: 2,
      // Pas de refetch automatique au focus
      refetchOnWindowFocus: false,
      // Refetch si réseau revient
      refetchOnReconnect: true,
    },
  },
});
```

#### 2. Query Hooks

```typescript
// src/lib/queries/blogQueries.ts
import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/services/api";
import type { BlogPost } from "@/types";

export const blogKeys = {
  all: ["blog"] as const,
  lists: () => [...blogKeys.all, "list"] as const,
  list: (filters: string) => [...blogKeys.lists(), { filters }] as const,
  details: () => [...blogKeys.all, "detail"] as const,
  detail: (slug: string) => [...blogKeys.details(), slug] as const,
};

export function useBlogPostsQuery() {
  return useQuery({
    queryKey: blogKeys.lists(),
    queryFn: () => blogService.getAll(),
    select: (data) =>
      data.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
  });
}

export function useBlogPostQuery(slug: string | undefined) {
  return useQuery({
    queryKey: blogKeys.detail(slug || ""),
    queryFn: () => blogService.getBySlug(slug || ""),
    enabled: !!slug, // Ne lance pas si pas de slug
  });
}

export function useFeaturedBlogPostsQuery() {
  return useQuery({
    queryKey: [...blogKeys.lists(), "featured"],
    queryFn: () => blogService.getFeatured(),
  });
}
```

#### 3. Migration des hooks existants

```typescript
// src/hooks/useBlogPosts.ts - AVANT
export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await blogService.getAll();
        setPosts(data);
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

// APRÈS - Simple wrapper
export function useBlogPosts() {
  const { data, isLoading, error } = useBlogPostsQuery();

  return {
    posts: data || [],
    loading: isLoading,
    error: error as Error | null,
  };
}
```

#### 4. App Provider

```typescript
// src/App.tsx
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <PageLayout>
          <ScrollToAnchor />
          <Routes>{/* ... */}</Routes>
        </PageLayout>
      </MemoryRouter>

      {/* DevTools en développement seulement */}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
```

#### 5. Prefetching (bonus)

```typescript
// src/components/features/blog/BlogCard/BlogCard.tsx
import { useQueryClient } from '@tanstack/react-query';
import { blogKeys } from '@/lib/queries/blogQueries';

export function BlogCard({ post }: BlogCardProps) {
  const queryClient = useQueryClient();

  const handleMouseEnter = () => {
    // Prefetch au hover pour instant loading
    queryClient.prefetchQuery({
      queryKey: blogKeys.detail(post.slug),
      queryFn: () => blogService.getBySlug(post.slug),
    });
  };

  return (
    <article onMouseEnter={handleMouseEnter}>
      {/* ... */}
    </article>
  );
}
```

### Tests requis

- [ ] Vérifier que les données sont mises en cache (DevTools)
- [ ] Navigation blog → article → retour = instant
- [ ] Pas de double appel sur le même slug
- [ ] Error handling fonctionne

### Critères de validation

- ✅ React Query DevTools fonctionnels
- ✅ Cache visible et efficace
- ✅ Aucun rechargement inutile
- ✅ Performance perçue améliorée

---

## 🟠 P1 - AGENT 5: TypeScript Completion

### Objectif

Compléter les définitions TypeScript manquantes et éliminer tous les `any` implicites.

### Fichiers à créer

```
src/types/
├── api.types.ts
├── error.types.ts
└── utility.types.ts
```

### Fichiers à modifier

- `src/types/index.ts`
- `src/components/features/portfolio/PrinciplesList/PrinciplesList.tsx`
- `src/lib/sanitize.ts`
- Tous les services

### Améliorations TypeScript

#### 1. Types d'erreur

```typescript
// src/types/error.types.ts
export interface APIError {
  message: string;
  code: string;
  statusCode?: number;
  details?: Record<string, unknown>;
  timestamp?: string;
}

export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "AppError";
  }

  toJSON(): APIError {
    return {
      message: this.message,
      code: this.code,
      statusCode: this.statusCode,
      details: this.details,
      timestamp: new Date().toISOString(),
    };
  }
}

// Erreurs spécifiques
export class NotFoundError extends AppError {
  constructor(resource: string, identifier: string) {
    super(
      "NOT_FOUND",
      `${resource} with identifier "${identifier}" not found`,
      404,
    );
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: Record<string, unknown>) {
    super("VALIDATION_ERROR", message, 400, details);
  }
}
```

#### 2. Types utilitaires

```typescript
// src/types/utility.types.ts

/**
 * Rend tous les champs optionnels sauf certains
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * Type pour les états de chargement async
 */
export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: APIError };

/**
 * Type pour les réponses paginées
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

/**
 * Type pour les filtres de recherche
 */
export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  dateFrom?: string;
  dateTo?: string;
  sortBy?: "date" | "title" | "relevance";
  sortOrder?: "asc" | "desc";
}
```

#### 3. Types API

```typescript
// src/types/api.types.ts
import type { APIError } from "./error.types";

/**
 * Configuration d'un endpoint API
 */
export interface EndpointConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

/**
 * Options de requête
 */
export interface RequestOptions {
  signal?: AbortSignal;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>;
}

/**
 * Réponse API générique
 */
export interface APIResponse<T> {
  data: T;
  meta?: {
    timestamp: string;
    requestId: string;
  };
  error?: APIError;
}
```

#### 4. Props strictement typées

```typescript
// src/components/features/portfolio/PrinciplesList/PrinciplesList.tsx
import type { LucideIcon } from 'lucide-react';

export interface PrinciplesListProps {
  title: string;
  icon: LucideIcon; // Type strict au lieu de React.ReactNode
  items: string[];
  accentClass: `text-${string}` | `bg-${string}`; // Template literal types
  borderClass: `border-${string}`;
  titleClassName?: string;
}

export function PrinciplesList(props: PrinciplesListProps) {
  const { title, icon: Icon, items, accentClass, borderClass, titleClassName } = props;

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-2 rounded-full ${accentClass}`}>
          <Icon size={18} />
        </div>
        <h4 className={`font-bold font-display tracking-wide uppercase text-sm ${titleClassName || ''}`}>
          {title}
        </h4>
      </div>
      {/* ... */}
    </div>
  );
}
```

#### 5. Service avec types stricts

```typescript
// src/services/api/BaseService.ts
import type { APIResponse, RequestOptions } from "@/types/api.types";
import { AppError, NotFoundError } from "@/types/error.types";

export abstract class BaseService<T> {
  protected abstract endpoint: string;

  protected async fetchData(options?: RequestOptions): Promise<T[]> {
    try {
      // Implémentation avec types stricts
      const response = await this.request<T[]>("GET", this.endpoint, options);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async request<R>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    path: string,
    options?: RequestOptions,
  ): Promise<APIResponse<R>> {
    // Implémentation typée
    throw new Error("Not implemented");
  }

  protected handleError(error: unknown): AppError {
    if (error instanceof AppError) {
      return error;
    }

    if (error instanceof Error) {
      return new AppError("UNKNOWN_ERROR", error.message);
    }

    return new AppError("UNKNOWN_ERROR", "An unknown error occurred");
  }
}
```

### Configuration tsconfig stricte

```json
// tsconfig.json - Ajouter
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  }
}
```

### Tests requis

```bash
# Vérifier qu'il n'y a plus d'erreurs TS
pnpm tsc --noEmit

# Vérifier le strict mode
pnpm tsc --strict --noEmit
```

### Critères de validation

- ✅ `pnpm tsc --noEmit` passe sans erreur
- ✅ Aucun `any` explicite ou implicite
- ✅ Tous les props sont strictement typés
- ✅ Gestion d'erreur typée

---

## 🟠 P1 - AGENT 6: Form UX Enhancement

### Objectif

Améliorer l'expérience utilisateur du formulaire de contact avec validation en temps réel, feedback visuel et gestion d'état avancée.

### Fichiers à modifier

- `src/components/features/contact/ContactForm/ContactForm.tsx`
- `src/lib/validation.ts`

### Fichiers à créer

```
src/hooks/
├── useDebounce.ts
└── useFormValidation.ts
```

### Améliorations UX

#### 1. Hook de debounce

```typescript
// src/hooks/useDebounce.ts
import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

#### 2. Hook de validation
}
        return false;
      }
    },
    [schema]
  );

  const validateAll = useCallback(
    (data: T) => {
      const result = schema.safeParse(data);
      
      if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        setState({
          errors: Object.fromEntries(
            Object.entries(errors).map(([key, value]) => [
              key,
              value?.[0] || 'Invalid value',
            ])
          ) as Partial<Record<keyof T, string>>,
          touched: Object.fromEntries(
            Object.keys(data).map(key => [key, true])
          ) as Partial<Record<keyof T, boolean>>,
          isValid: false,
        });
        return false;
      }

      setState({
        errors: {},
        touched: {},
        isValid: true,
      });
      return true;
    },
    [schema]
  );

  const resetValidation = useCallback(() => {
    setState({
      errors: {},
      touched: {},
      isValid: false,
    });
  }, []);

  return {
    ...state,
    validateField,
    validateAll,
    resetValidation,
  };
}
```


# 📝 Prompt Principal - Exécution Séquentielle

Voici le prompt à donner pour lancer la phase 1.5 complète :

---

## PROMPT COMPLET POUR AGENT AUTONOME

```markdown
# Mission: Refonte Architecture Pre-Stripe - Phase 1.5

Tu es un développeur senior React/TypeScript chargé de préparer ce portfolio pour l'intégration Stripe. Tu dois exécuter **séquentiellement** les 6 agents prioritaires (P0 et P1) définis dans AGENTS.md.

## Contexte du projet

Portfolio professionnel d'Enzo Bagneris (animateur nature) avec:
- Stack: React 19 + TypeScript 5.8 + Vite 6 + Tailwind 4
- Architecture: Features + Layout + UI components
- Données: JSON statique (à migrer vers Strapi en Phase 2)
- Objectif: Préparer intégration paiements Stripe

## Problèmes identifiés lors de l'audit

### 🔴 Critiques (P0)
1. **Couplage fort** avec données statiques JSON
2. **Scaling responsive** nécessite 80% zoom sur 25"
3. **Sécurité** sanitization HTML trop permissive

### 🟠 Importants (P1)
4. **Absence de cache** → rechargements inutiles
5. **Types incomplets** → any implicites
6. **UX formulaire** → validation brutale

## Ordre d'exécution STRICT

### AGENT 1: DataService Abstraction Layer
**Objectif**: Découpler la logique de données pour faciliter migration Strapi + Stripe

**Actions**:
1. Créer `src/services/api/BaseService.ts`
   - Classe abstraite générique
   - Gestion d'erreur centralisée
   - Interface unifiée pour tous les services

2. Créer services concrets:
   - `BlogService extends BaseService<BlogPost>`
   - `ProjectService extends BaseService<Project>`
   - `ServiceItemService extends BaseService<ServiceItem>`
   - `PartnerService extends BaseService<Partner>`

3. Exporter singletons:
   ```typescript
   // src/services/api/index.ts
   export const blogService = new BlogService();
   export const projectService = new ProjectService();
   // etc.
   ```

4. Migrer tous les hooks pour utiliser les services:
   ```typescript
   // AVANT
   import blogData from '@/data/blog.json';
   
   // APRÈS
   import { blogService } from '@/services/api';
   const data = await blogService.getAll();
   ```

**Validation**:
- ✅ Aucun import direct de JSON dans les hooks
- ✅ Tous les hooks retournent les mêmes données
- ✅ TypeScript compile sans erreur

---

### AGENT 2: Responsive Scaling Fix
**Objectif**: Corriger le problème de zoom 80% requis sur grands écrans

**Actions**:
1. Ajuster `tailwind.config.cjs`:
   ```javascript
   screens: {
     '2xl': '1400px', // Au lieu de 1536px
   },
   container: {
     screens: { '2xl': '1400px' },
   }
   ```

2. Créer typographie fluide dans `globals.css`:
   ```css
   html {
     fonitunes linuxt-size: clamp(16px, 1vw + 0.5rem, 18px);
   }
   h1 {
     font-size: clamp(2.5rem, 5vw, 4rem);
   }
   ```

3. Modifier Hero.tsx pour utiliser clamp():
   ```tsx
   className="text-[clamp(3rem,6vw,5rem)]"
   ```

4. Tester sur:
   - 1280px (laptop)
   - 1920px (desktop)
   - 2560px (27")
   - 3840px (4K)

**Validation**:
- ✅ Pas de zoom nécessaire sur 25"
- ✅ Texte lisible (min 14px)
- ✅ Pas de débordement horizontal

---

### AGENT 3: Security Hardening
**Objectif**: Durcir sanitization HTML contre XSS

**Actions**:
1. Modifier `src/lib/sanitize.ts`:
   ```typescript
   const BLOG_CONFIG = {
     ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'h3', 'h4', 'ul', 'ol', 'li', 'blockquote', 'code'],
     ALLOWED_ATTR: { 'a': ['href', 'rel'] },
     ALLOW_DATA_ATTR: false,
   };
   ```

2. Ajouter validation préalable:
   ```typescript
   export function validateHtmlInput(html: string): { valid: boolean; error?: string }
   ```

3. Modifier `useSanitizedHTML` pour retourner `{ sanitized, error }`

4. Ajouter CSP dans `index.html`:
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline';">
   ```

**Validation**:
- ✅ Tests sanitization passent
- ✅ Tentatives XSS bloquées
- ✅ CSP fonctionnel

---

### AGENT 4: Cache Implementation (React Query)
**Objectif**: Éviter rechargements inutiles, préparer appels API

**Actions**:
1. Installer:
   ```bash
   pnpm add @tanstack/react-query @tanstack/react-query-devtools
   ```

2. Créer `src/lib/queryClient.ts`:
   ```typescript
   export const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         staleTime: 5 * 60 * 1000,
         gcTime: 10 * 60 * 1000,
       },
     },
   });
   ```

3. Créer query hooks dans `src/lib/queries/`:
   ```typescript
   // blogQueries.ts
   export function useBlogPostsQuery() {
     return useQuery({
       queryKey: ['blog', 'list'],
       queryFn: () => blogService.getAll(),
     });
   }
   ```

4. Wrapper `App.tsx`:
   ```tsx
   <QueryClientProvider client={queryClient}>
     <App />
     <ReactQueryDevtools />
   </QueryClientProvider>
   ```

5. Migrer hooks existants pour utiliser React Query

**Validation**:
- ✅ DevTools React Query visibles
- ✅ Navigation blog → article → retour = instant
- ✅ Pas de double fetch

---

### AGENT 5: TypeScript Completion
**Objectif**: Éliminer tous les `any` et compléter types

**Actions**:
1. Créer `src/types/error.types.ts`:
   ```typescript
   export interface APIError {
     message: string;
     code: string;
     statusCode?: number;
   }
   
   export class AppError extends Error { /* ... */ }
   ```

2. Créer `src/types/utility.types.ts`:
   ```typescript
   export type AsyncState<T> = 
     | { status: 'idle' }
     | { status: 'loading' }
     | { status: 'success'; data: T }
     | { status: 'eitunes linuxrror'; error: APIError };
   ```

3. Typer strictement `PrinciplesList`:
   ```typescript
   icon: LucideIcon; // Au lieu de React.ReactNode
   ```

4. Activer strict mode dans `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "strict": true,
       "noUncheckedIndexedAccess": true,
       "noImplicitAny": true
     }
   }
   ```

**Validation**:
- ✅ `pnpm tsc --noEmit` sans erreur
- ✅ Aucun `any` explicite/implicite

---

## Instructions d'exécution

1. **Exécute les agents DANS L'ORDRE** (1 → 2 → 3 → 4 → 5 → 6)
2. **Valide chaque agent** avant de passer au suivant
3. **Commit après chaque agent** avec message clair
4. **Teste maitunes linuxnuellement** après chaque agent
5. **Documente** les changements dans CHANGELOG.md

## Critères de succès global

### Techniqueitunes linux
- [ ] `pnpm tsc --noEmit` passe
- [ ] `pnpm build` sans erreur
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Aucun console.error en prod

### Architecture
- [ ] Aucun import direct de JSON
- [ ] Cache React Query fonctionnel
- [ ] Types stricts partout
- [ ] Sécurité XSS renforcée

## Livrables attendus

1. **Code**: Tous les fichiers modifiés/créés
2. **CHANGELOG.md**: Détail des modifications par agent
3. **Tests**: Preuve de validation pour chaque agent
4. **Documentation**: README.md des nouveaux services

## Notes importantes

- **Ne touche PAS à l'UI** (couleurs, espacements, etc.)
- **Conserve** la structure de dossiers actuelle
- **Respecte** les conventions de nommage existantes
- **Teste** après chaque agent avant de continuer
- **Prépare** l'arrivée de Stripe (API calls, cache)

---

## Début de mission

Tu commences par **AGENT 1: DataService Abstraction Layer**.

Confirme que tu as bien compris la mission et démarre.
```

