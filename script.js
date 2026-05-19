function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);

      // TODO 1: REMPLIR LE HEADER
      
      let titreContenaire = document.getElementById('nom-journal');
      let titre = data.journal.nomJournal;
      titreContenaire.innerHTML = titre;

      let sousTitreContenaire = document.getElementById('phrase-accroche');
      let sousTitre = data.journal.phraseAccroche;
      sousTitreContenaire.innerHTML = sousTitre;

      // TODO 2: REMPLIR LA NAVIGATION
      
      let themesnavContenaire = document.getElementById('themes-nav');
      let theme1 = data.journal.themes[0].nom;
      let theme2 = data.journal.themes[1].nom;
      let theme3 = data.journal.themes[2].nom;
      let theme4 = data.journal.themes[3].nom;
      let theme5 = data.journal.themes[4].nom;
      let theme6 = data.journal.themes[5].nom;

      let boutonsNavbar = `
        <button class="nav-theme-btn active">${theme1}</button>
        <button class="nav-theme-btn">${theme2}</button>
        <button class="nav-theme-btn">${theme3}</button>
        <button class="nav-theme-btn">${theme4}</button>
        <button class="nav-theme-btn">${theme5}</button>
        <button class="nav-theme-btn">${theme6}</button>
      `
      
      themesnavContenaire.insertAdjacentHTML("beforeend", boutonsNavbar);

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let articlePrincipalContenaire = document.getElementById('article-principal');
      let titreArticlePrincipal = data.journal.articlePrincipal.titre
      let descriptionArticlePrincipal = data.journal.articlePrincipal.description;
      let dateArticlePrincipal = data.journal.articlePrincipal.date;
      let themeArticlePrincipal = data.journal.articlePrincipal.theme;
      let imageArticlePrincipal = data.journal.articlePrincipal.image;

      let contenu = `
        <img id="hero-image" src="${imageArticlePrincipal}">
        <div class="hero-info">
          <div class="theme-badge">${themeArticlePrincipal}</div>
          <h2 id="hero-titre">${titreArticlePrincipal}</h2>
          <h3 id="hero-description">${descriptionArticlePrincipal}.</h3>
          <h3 class="date">${dateArticlePrincipal}</h3>
        </div>
         
      `
      
      articlePrincipalContenaire.insertAdjacentHTML("beforeend", contenu);

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
     
      data.journal.articles.forEach( article => {
      let articleContenaire = document.getElementById('articles-grid');
      let titreArticle = article.titre;
      let dateArticle = article.date;
      let themeArticle = article.theme;
      let imageArticle = article.image;

        const contenuArticles = `
          <div class="article-card">
            <img src="${imageArticle}" alt="${imageArticle}">
            <div class="article-content">
                <div class="theme-badge">${themeArticle}</div>
                <h3>${titreArticle}</h3>
                <div class="article-author">${dateArticle}</div>
            </div>
          </div>
        `;
        articleContenaire.insertAdjacentHTML('beforeend', contenuArticles);
      });

      // TODO 5: REMPLIR LES THEMES

      data.journal.themes.forEach(theme => {
        let themesContenaire = document.getElementById('themes-list');
        let nomTheme = theme.nom;
        let descriptionTheme = theme.description;

        const contenuThemes = `
          <div class="theme-item">
              <h3>${nomTheme}</h3>
              <p>${descriptionTheme}</p>
          </div>
        `
        themesContenaire.insertAdjacentHTML('beforeend', contenuThemes);
      });

      // TODO 6: REMPLIR LES AUTEURS

      data.journal.auteurs.forEach(auteur => {
        let auteursContenaire = document.getElementById('authors-list');
        let photoAuteur = auteur.photo;
        let prenomAuteur = auteur.prenom;
        let experienceAuteur = auteur.typeExperience;
        let presentationAuteur = auteur.presentation;

        const contenuAuteurs = `
          <div class="author-card">
              <div class="author-image">${photoAuteur}</div>
              <h3>${prenomAuteur}</h3>
              <p class="author-role">${experienceAuteur}</p>
              <p class="author-bio">${presentationAuteur}</p>
          </div>
        `
        auteursContenaire.insertAdjacentHTML('beforeend', contenuAuteurs);
      });

      // TODO 7: REMPLIR LE CALL TO ACTION

      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
