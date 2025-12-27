# Enzo Bagneris Portfolio

Refactorisation d'un portfolio React/TypeScript pour une architecture modulaire et prete pour Strapi.

## Stack

- React 19 + TypeScript 5.8
- React Router 6.22
- Vite 6.x
- Tailwind CSS local
- pnpm

## Scripts

- `pnpm dev` : lancement en mode dev
- `pnpm build` : build production
- `pnpm preview` : preview du build
- `pnpm docs:dev` : docs locales (Docusaurus)
- `pnpm docs:build` : build des docs
- `pnpm docs:api` : generation de la reference API (TypeDoc)

## Structure rapide

- `src/components` : UI, layout, features
- `src/pages` : pages et routes
- `src/data` : donnees JSON
- `src/hooks` : hooks pour charger les donnees
- `src/types` : types TypeScript
- `src/config` : configuration globale

## Notes

Les assets (images, fonts, video) sont locaux et references via `/assets/...`.
Les donnees statiques sont dans `src/data` et chargees par des hooks prets pour Strapi.
