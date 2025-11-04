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
- Le serveur Vite + Express démarre sur http://localhost:8080
- Tester les API : `curl http://localhost:8080/api/ping`

## Build et exécution de production locale
```bash
pnpm build
pnpm start
```

## Déploiement Vercel
1. Connecter le dépôt GitHub sur Vercel.
2. Configurer les variables d'environnement nécessaires.
3. Vérifier que `vercel.json` est pris en compte (runtime `nodejs22.x`).
4. Lancer le déploiement et tester `https://<app>.vercel.app/api/ping`.

## Dépannage
- **Erreur "Function Runtimes must have a valid version"** : vérifier `"functions": {"api/**/*.ts": {"runtime": "nodejs22.x"}}` dans `vercel.json`.
- **404 sur la SPA** : confirmer la rewrite `/(.*) -> /index.html` dans `vercel.json`.
- **Mismatch Node** : contrôler `"engines": {"node": "22.x"}` dans `package.json` et exécuter `nvm use 22`.
