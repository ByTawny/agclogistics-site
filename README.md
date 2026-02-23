# AGC Logistics — Site Web

Site web officiel d'AGC Logistics, société de livraison à domicile de médicaments en Martinique.

**Stack :** Next.js 14+ (App Router) · TypeScript · Tailwind CSS · shadcn/ui · MDX

---

## Installation

### Prérequis
- Node.js 18+
- npm

### Cloner et installer

```bash
git clone <votre-repo> agclogistics-site
cd agclogistics-site
npm install
```

### Variables d'environnement

```bash
cp .env.example .env.local
# Éditez .env.local avec vos vraies valeurs
```

### Démarrer en développement

```bash
npm run dev
# → http://localhost:3000
```

---

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (ex: `https://agclogistics.mq`) |
| `CONTACT_EMAIL` | Email de réception des formulaires |
| `RESEND_API_KEY` | Clé API Resend (recommandé) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Alternative SMTP |

> **Logique email :** Resend prioritaire → SMTP si pas de Resend → console (dev)

---

## Scripts

```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # ESLint
```

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx              # Layout global (Header + Footer + SEO + JSON-LD)
│   ├── page.tsx                # Accueil (Hero, garanties, audiences, process, FAQ)
│   ├── sitemap.ts              # Sitemap automatique
│   ├── robots.ts               # robots.txt
│   ├── services/page.tsx       # Services
│   ├── pharmacies/page.tsx     # Pharmacies B2B
│   ├── patients/page.tsx       # Patients B2C
│   ├── comment-ca-marche/      # Processus détaillé
│   ├── zones-couvertes/        # Zones géographiques
│   ├── faq/                    # FAQ complète
│   ├── a-propos/               # À propos
│   ├── contact/
│   │   ├── page.tsx            # Page contact
│   │   ├── ContactForm.tsx     # Formulaire client (honeypot + validation)
│   │   └── actions.ts          # Server Action + Resend/SMTP
│   ├── blog/
│   │   ├── page.tsx            # Listing articles
│   │   └── [slug]/page.tsx     # Article dynamique
│   ├── mentions-legales/
│   └── politique-confidentialite/
├── components/
│   ├── ui/                     # Button, Card, Badge, Accordion, Input, Select...
│   └── layout/                 # Header (sticky, mobile), Footer
├── content/blog/               # Articles MDX (3 initiaux)
└── lib/
    ├── utils.ts                # cn()
    ├── constants.ts            # Nav, zones, emails
    └── blog.ts                 # getAllPosts / getPostBySlug
```

---

## Déploiement Vercel

### 1. Pousser sur GitHub

```bash
git init && git add . && git commit -m "feat: initial AGC Logistics site"
git remote add origin https://github.com/<org>/agclogistics-site.git
git push -u origin main
```

### 2. Importer dans Vercel

1. [vercel.com](https://vercel.com) → New Project → importer le repo
2. Framework : **Next.js** (auto-détecté)
3. Ajouter les **Environment Variables** (voir tableau ci-dessus)
4. Deploy

### 3. Domaine personnalisé

Dans Vercel → Settings → Domains → `agclogistics.mq`

DNS chez votre registrar :
```
A    @    76.76.21.21
CNAME www  cname.vercel-dns.com
```

### 4. Configurer Resend

1. Créer compte sur [resend.com](https://resend.com)
2. Ajouter domaine `agclogistics.mq` → vérifier DNS
3. Créer API Key → ajouter dans Vercel env vars
4. L'expéditeur dans `contact/actions.ts` est `noreply@agclogistics.mq`

---

## Ajouter un article de blog

```mdx
---
title: "Titre de l'article"
description: "Description SEO"
date: "2024-06-01"
author: "Équipe AGC Logistics"
category: "Guide pratique"
slug: "mon-slug-url"
---

Contenu Markdown...
```

→ Fichier dans `src/content/blog/` → apparaît automatiquement dans `/blog`

---

## Vérification Lighthouse

```bash
npm run build && npm run start
# Chrome DevTools → Lighthouse → Analyser
```

Cibles : Performance > 90 · Accessibilité > 95 · SEO > 95

---

## ⚠️ TODO avant mise en ligne

| Fichier | À compléter |
|---|---|
| `src/lib/constants.ts` | Téléphone, adresse, email réels |
| `src/app/mentions-legales/page.tsx` | SIRET, forme juridique, adresse, responsable légal |
| `src/app/a-propos/page.tsx` | Présentation équipe, photos |
| `src/app/comment-ca-marche/page.tsx` | Délais exacts par zone |
| `src/app/page.tsx` | Vrais témoignages clients |
| `src/components/layout/Header.tsx` | Logo réel (remplacer Package2) |
| `contact/actions.ts` | Vérifier domaine Resend |
| `.env.local` | Toutes les variables de production |

---

## Licence

Propriété exclusive d'AGC Logistics. Tous droits réservés.
