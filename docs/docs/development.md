---
sidebar_position: 5
---

# Developpement

## Scripts

- `pnpm docs:dev` : lance la doc en local.
- `pnpm docs:build` : build statique.
- `pnpm docs:api` : genere la reference API.

## Workflow

1. Ecrire ou mettre a jour les docs dans `docs/docs`.
2. Lancer `pnpm docs:api` apres un changement de types.
3. Verifier avec `pnpm docs:build`.
