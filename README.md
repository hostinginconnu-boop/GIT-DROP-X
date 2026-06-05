
GitDrop X ⚡

Livré complet — Interface ultime pour push sur GitHub sans ligne de commande

https://via.placeholder.com/1200x400/0a0a0a/00ffcc?text=GitDrop+X

✨ Fonctionnalités

Catégorie Fonctionnalité
🔐 Token Gate Accès bloqué jusqu’à validation du token GitHub avec lien direct vers github.com/settings/tokens/new et guide pas à pas
🌍 i18n Switch EN / FR disponible sur la gate et dans l’application
🎯 Création repo Création automatique du dépôt (vérifie s’il existe déjà)
📁 Drag & Drop Upload multi‑fichiers, suppression individuelle
⚡ Console live Logs en temps réel avec couleurs (success / error / info / warn)
📊 Compteurs session Repos créés / Fichiers uploadés / Commits effectués
📈 Barre progression Progression par fichier
🔒 Public / Private Choix de la visibilité du dépôt
✅ Result card Lien direct vers le dépôt GitHub après push
🖤 Design Dark mode, grille néon, glassmorphism, scanline, animations full

🚀 Démo en ligne

➡️ https://githubdrop.com

📦 Déploiement

Compatible Heroku, Render, Railway – le port est géré via process.env.PORT.

Prérequis

· Node.js (v16+)
· Compte GitHub

Installation locale

```bash
git clone https://github.com/your-username/gitdrop-x.git
cd gitdrop-x
npm install
npm start
```

Variables d’environnement

Variable Description
PORT Port d’écoute (défaut : 3000)

Aucune clé API tierce – tout passe par l’authentification GitHub.

🎮 Utilisation

1. Accédez à githubdrop.com
2. Générez un token GitHub avec droits repo
3. Collez le token dans l’interface
4. Choisissez le nom du dépôt et sa visibilité
5. Glissez / déposez vos fichiers
6. Cliquez sur Push to GitHub
7. Récupérez le lien direct vers votre dépôt

📄 Licence

MIT

---

Made with ⚡ by invonnu boy
