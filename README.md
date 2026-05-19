# Webmag — Évaluation JavaScript & DOM

Projet de magazine en ligne. Tu dois générer dynamiquement le contenu d'une page HTML à partir d'un fichier JSON, en utilisant uniquement JavaScript.

---

## Mise en place

1. Récupère ton jeu de données sur **[la-toile-paris.github.io/data-randomizer](https://la-toile-paris.github.io/data-randomizer/)** et copie le JSON
2. Colle le contenu dans le fichier `data.json`
3. Complète `script.js` — **ne modifie pas** `index.html` ni `style.css` (au début, après tu peux le customiser)

> Pour avoir une idée du résultat attendu, consulte `resultat.png` à la racine du projet.

---

## Ce que tu dois faire

Tout le code est à écrire dans la fonction `getData()` de `script.js`, dans la zone indiquée.

### TODO 1 — Header
Afficher dans le header :
- le nom du journal
- la phrase d'accroche

### TODO 2 — Navigation
Dans `#themes-nav`, générer :
- un bouton **Tous** (classe `nav-theme-btn active`) en premier
- un bouton par thème (classe `nav-theme-btn`)

### TODO 3 — Article principal
Dans article-principal, afficher :
- une image
- un badge de thème
- le titre
- la description
- la date

### TODO 4 — Grille d'articles
Dans `articles-grid`, générer une carte par article.  
Chaque carte contient : image, badge thème, titre, date.

### TODO 5 — Thèmes
Dans `themes-list`, afficher chaque thème avec son nom et sa description.

### TODO 6 — Auteurs
Dans `authors-list`, afficher chaque auteur avec :
- sa photo
- son prénom
- son type d'expérience
- sa présentation

### TODO 7 — Call to action
Dans `call-to-action`, afficher le texte d'appel à l'action et un bouton.

---

## Bonus

| # | Bonus | Description |
|---|---|---|
| 1 | **Alerte CTA** | Un `alert()` s'affiche quand on clique sur le bouton call-to-action |
| 2 | **Filtrage par thème** | Les boutons de navigation filtrent les articles ; le bouton "Tous" réinitialise |
| 3 | **Tri par popularité** | Les articles sont triés par `popularite` (du plus élevé au plus bas) |

---

## Barème

| Critère | Points |
|---|---|
| Attitude | /2 |
| Récupération des données JSON | /1 |
| Navigation dans les données | /3 |
| Génération de contenu HTML avec JS | /3 |
| Qualité du code JavaScript | /4 |
| Intégrations d'APIs | /1 |
| Qualité de l'UI | /2 |
| Degré d'interactivité | /4 |
| **Total** | **/20** |
