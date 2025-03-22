# SPEEDCLEAN72 - Site Web de Nettoyage Professionnel

Solution complète de présentation des services de nettoyage pour particuliers et professionnels au Mans

## 🧹 Fonctionnalités

- Site vitrine responsive avec présentation des services
- Galerie avant/après avec lazy loading
- Section témoignages clients
- Formulaire de contact intégré
- Optimisation SEO (meta tags, schema.org)
- Compatibilité mobile-first
- Animations CSS performantes

## 🛠 Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/votre-utilisateur/speedclean72.git
cd speedclean72
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Démarrer le serveur de développement :
```bash
node server.js
```

## ⚙ Configuration

Renommer `.env.example` en `.env` et remplir les variables :
```ini
SMTP_HOST=your_smtp_server
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
CONTACT_EMAIL=dorian.speedclean@gmail.com
```

## 📁 Structure du Projet

```
speedclean72/
├── public/              # Fichiers statiques
│   ├── images/          # Assets visuels
│   ├── style.css        # Feuille de style principale
│   └── script.js        # Logique front-end
├── server.js            # Serveur Node.js
├── app.js               # Configuration principale
├── contact.html         # Page de contact
├── index.html           # Page d'accueil
├── send_email.php       # Gestionnaire d'envoi d'emails
└── process_images.py    # Scripts de traitement d'images
```

## 📦 Dépendances

| Technologie | Version | Usage |
|-------------|---------|-------|
| Node.js     | 18.x    | Backend |
| Font Awesome| 6.0.0   | Icônes |
| Google Fonts| Poppins | Typographie |
| PHP         | 8.1+    | Envoi d'emails |
| Python      | 3.10+   | Scripts image |

## 🤝 Contribution

1. Créer une nouvelle branche :
```bash
git checkout -b feature/nouvelle-fonctionnalite
```

2. Valider les changements :
```bash
git commit -m "Description des modifications"
```

3. Pousser la branche :
```bash
git push origin feature/nouvelle-fonctionnalite
```

## 📄 License  
MIT © [Dorian Speedclean](mailto:dorian.speedclean@gmail.com)

## 📬 Contact  
Dorian - [06 12 34 56 78](tel:+33612345678)  
72 Rue du Progrès, 72000 Le Mans  
[dorian.speedclean@gmail.com](mailto:dorian.speedclean@gmail.com)
