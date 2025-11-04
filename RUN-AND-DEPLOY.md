# Run & Deploy Guide

## Prérequis (Arch Linux)
- `git`
- Gestionnaire de versions Node (`nvm` recommandé) avec Node.js 22 installé
- `pnpm`

## Installation
```bash
nvm install 22
nvm use 22
pnpm install
```

## Développement local
```bash
pnpm dev
```
- Le serveur Vite démarre sur http://localhost:8080

## Build et prévisualisation de production
```bash
pnpm build
pnpm preview --host
```

## Déploiement Vercel
1. Connecter le dépôt GitHub sur Vercel.
2. Configurer les variables d'environnement nécessaires.
3. Vérifier que `vercel.json` est pris en compte pour la réécriture SPA.
4. Lancer le déploiement et tester `https://<app>.vercel.app/`.

## Dépannage
- **404 sur la SPA** : confirmer la réécriture `/(.*) -> /index.html` dans `vercel.json` ou `netlify.toml`.
- **Mismatch Node** : contrôler `"engines": {"node": "22.x"}` dans `package.json` et exécuter `nvm use 22`.
