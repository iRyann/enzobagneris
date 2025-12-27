---
sidebar_position: 2
---

# Architecture

Le projet suit une organisation par features avec des composants partages.

## Dossiers principaux

- `src/components` : composants UI, layout et features.
- `src/hooks` : hooks applicatifs.
- `src/services` : couche de donnees, preparee pour Strapi et Stripe.
- `src/types` : definitions TypeScript partagees.

## Flux de donnees

1. Les hooks appellent les services.
2. Les services encapsulent l'acces aux donnees.
3. Les vues consomment les hooks.
