<<<<<<< HEAD
# 🌟 Baraka Michael - Portfolio Professionnel & HealthTech

Bienvenue sur le dépôt de mon portfolio professionnel. Je suis **Baraka Michael (Baraka Michael KLG)**, étudiant en Pharmacie (L3) à l'Université Officielle de Bukavu, passionné par la fusion entre la **santé** et la **technologie (HealthTech)**.

Ce projet présente mon profil, mes compétences techniques en développement de logiciels, mes certifications et mes réalisations concrètes comme *PharmaStock Manager* et *DrugInfo API*.

## 🚀 Fonctionnalités & Optimisations

- **Design Premium & Adaptatif** : Interface fluide, moderne et réactive développée avec React et Tailwind CSS.
- **Thématisation Dynamique** : Support complet des modes Sombre (Dark Mode), Clair (Light Mode) et Système.
- **Optimisation SEO Avancée** :
  - Métadonnées complètes, OpenGraph (LinkedIn/Facebook) et Twitter Cards.
  - Hook personnalisé `useSEO` pour la mise à jour dynamique des titres et descriptions par page.
  - Données structurées JSON-LD (Schema.org) pour le référencement naturel.
  - Fichiers `robots.txt` et `sitemap.xml` préconfigurés pour les crawlers de Google.
- **Architecture Modulaire** : Composants réutilisables et séparation claire des responsabilités.

---

## 🛠️ Stack Technique

- **Frontend** : React 19, TypeScript, Vite
- **Routage** : React Router DOM 7
- **Style & Animations** : Tailwind CSS v4, Motion (Framer Motion)
- **Icônes** : Lucide React
- **Backend & APIs (Projets Référencés)** : Node.js (Express), Python (Flask, SQLite)

---

## 📂 Structure du Projet

```text
Portfolio-/
├── public/                 # Assets statiques accessibles directement
│   ├── robots.txt          # Directives de crawling SEO
│   └── sitemap.xml         # Liste des URLs indexables
├── src/
│   ├── assets/             # Images et certificats
│   ├── components/         # Composants d'interface (Navbar, Footer, Hero...)
│   │   ├── Navbar.tsx      # Barre de navigation avec sélecteur de thème
│   │   ├── Footer.tsx      # Pied de page avec liens utiles
│   │   └── Projects.tsx    # Présentation des projets de développement
│   ├── hooks/
│   │   └── useSEO.ts       # Hook de gestion dynamique du titre et de la description
│   ├── pages/              # Pages principales du routeur
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── App.tsx             # Composant racine avec gestion de thème et routage
│   ├── index.css           # Styles globaux et variables de thème
│   └── main.tsx            # Point d'entrée de l'application
├── index.html              # Document HTML principal (SEO statique & JSON-LD)
├── package.json            # Dépendances et scripts de build
├── tsconfig.json           # Configuration TypeScript
└── vite.config.ts          # Configuration de Vite
```

---

## 💻 Démarrage Local

### Prérequis

Assurez-vous d'avoir installé **Node.js** (v18 ou supérieur) sur votre machine.

### Installation

1. Clonez ce dépôt ou accédez au dossier du projet :
   ```bash
   cd Portfolio-
   ```

2. Installez les dépendances npm :
   ```bash
   npm install
   ```

3. Lancez le serveur de développement local :
   ```bash
   npm run dev
   ```
   L'application sera accessible par défaut sur [http://localhost:3000](http://localhost:3000).

---

## 📦 Production & Déploiement

### Compiler pour la production
Pour générer les fichiers optimisés pour la mise en ligne dans le dossier `dist/` :
```bash
npm run build
```

### Déploiement recommandé
Le projet est prêt à être déployé sur **Vercel** ou **Netlify** :
1. Connectez votre dépôt GitHub à la plateforme choisie.
2. Choisissez la configuration par défaut pour une application **Vite**.
3. Déployez ! La plateforme s'occupe de la compilation et mettra à jour votre site automatiquement à chaque `git push`.

---

## ✉️ Contact & Liens
- **LinkedIn** : [Baraka Michael KLG](https://www.linkedin.com/in/baraka-michael-klg)
- **GitHub** : [@barakamichaelklg-code](https://github.com/barakamichaelklg-code)
- **Localisation** : Bukavu, Sud-Kivu, RDC
