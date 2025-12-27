# Architecture du Projet

## Structure des dossiers

- `src/components/ui` : composants reutilisables (Button, Card, etc.)
- `src/components/layout` : structure de page (Navbar, Footer, PageLayout)
- `src/components/features` : composants metier par domaine (blog, portfolio, contact)
- `src/pages` : pages et routes
- `src/hooks` : logique reutilisable et chargement de donnees
- `src/data` : contenu statique en JSON (pret pour Strapi)
- `src/types` : types TypeScript centralises
- `src/config` : configuration du site et navigation
- `src/styles` : styles globaux et fonts locales

## Patterns

### Composition

Favoriser des composants courts et specialises plutot que des monolithes.

### Hooks

Les hooks exposent un etat `{ data, loading, error }` ou equivalent pour faciliter
la migration vers des appels API Strapi.

### Separation donnees / presentation

Les donnees sont chargees depuis `src/data` via des hooks, et les composants se
concentrent sur le rendu.

## Preparation Strapi

Les hooks et types sont concus pour remplacer facilement les imports JSON par des
appels API Strapi.
