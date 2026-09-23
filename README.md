# R3.01-Memory

Projet de jeu de mémoire réalisé en JavaScript Vanilla ES6 avec une mise en page CSS Grid.

Lien de production : https://github.com/LFtaine/R3.01-Memory

## Description

Ce projet consiste en un jeu de mémoire classique où le joueur doit retrouver les paires d'images en cliquant sur les cartes. Le jeu est développé en JavaScript natif sans framework, avec une interface simple et responsive.

## Technologies utilisées

- Vanilla JS ES6
- HTML5
- CSS Grid
- API Picsum pour générer des images aléatoires

## Fonctionnalités

- Accessibilité renforcée avec ARIA et navigation clavier
- Mélange des cartes via l'algorithme de Fisher-Yates
- Gestion de l'asynchronisme avec `setTimeout` pour le retour des cartes cachées
- Système de comptage des coups et des paires trouvées
- Rejouer une partie avec bouton dédié
- Timer de partie

## Lancement local

1. Clonez le dépôt :
   ```bash
   git clone <url-du-depot>
   ```
2. Ouvrez le dossier du projet.
3. Lancez un serveur local, par exemple :
   ```bash
   python -m http.server 8000
   ```
4. Ouvrez dans votre navigateur :
   ```bash
   http://localhost:8000
   ```

## Structure du projet

- `index.html` : structure de la page
- `CSS/style.css` : styles et mise en page
- `JS/script.js` : logique du jeu, mélange, clics, timer et victoire

## Auteur

Projet réalisé dans le cadre de la ressource R3.01.