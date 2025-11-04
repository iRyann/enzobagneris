# Exécuter en local & déployer sur Vercel

## Prérequis
- Node.js 22 (`nvm use` utilise le `.nvmrc`)
- pnpm installé globalement: `npm i -g pnpm`

## Installation
```bash
pnpm install
```

## Lancer en développement

```bash
pnpm dev
```

* Front: Vite (HMR)
* API locale: Express (endpoints existants, ex. `/api/ping`, `/api/demo`)

## Vérifier l'API locale

* `curl http://localhost:8080/api/ping`
* `curl http://localhost:8080/api/demo`

> Variables d’environnement : créez un fichier `.env` à la racine si besoin (ex: `PING_MESSAGE="hello"`).

## Build de production (local)

```bash
pnpm build
# client -> dist/spa
# serveur -> dist/server
```

## Démarrer en production (local)

```bash
pnpm start
# sert dist/spa avec Express et redirige les routes SPA vers index.html
```

---

# Déploiement sur Vercel

## 1) Importer le repo

* Connecter GitHub à Vercel, **Importer le dépôt**.
* Décocher les frameworks si non détecté, Vercel utilisera `vercel.json`.

## 2) Variables d’environnement (Project Settings → Environment Variables)

* `PING_MESSAGE` (optionnel)
* Redéploiement après ajout/modif.

## 3) Build & routes

* Vercel exécute: `pnpm install && pnpm build`
* Sert la **SPA** depuis `dist/spa`
* Les endpoints `/api/*` sont des **fonctions serverless** (runtime Node.js 20 côté Vercel au moment de l'écriture).

## 4) Domaine

* Ajouter votre NDD dans Vercel (Project → Domains), suivre les instructions DNS (CNAME/ALIAS).
* Une fois la propagation DNS faite, la SPA et l’API fonctionnent sur votre domaine.

## 5) Validation

* SPA: ouvrir la page d’accueil
* API: `curl https://votre-domaine.tld/api/ping`

## Dépannage rapide

* 404 en SPA: vérifier les `rewrites` dans `vercel.json` → `/(.*) -> /index.html`
* 404 API: vérifier que les fichiers existent dans `/api` et que le build a bien inclus les fonctions.
* Erreurs environnement: vérifier les variables dans le dashboard Vercel.

---

## Post-actions (à lancer)
1. `pnpm install`
2. `pnpm prepare` (installe Husky)
3. `pnpm validate` (lint + format check + typecheck)
4. `pnpm dev` (vérifie que tout tourne)
5. Pusher la branche → importer sur Vercel → ajouter le NDD.
