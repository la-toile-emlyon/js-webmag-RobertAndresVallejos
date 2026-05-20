AOS.init();
// BONUS 1 : Alert sur le bouton CTA
function alertFunction() {
  alert("⚠️ ALERTE ⚠️");
}
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
      let themesBoutonContenaire = document.getElementById('themes-nav');
      let titreBoutonTous = `<button class="nav-theme-btn active">Tous</button>`;
      themesBoutonContenaire.innerHTML = titreBoutonTous;

      data.journal.themes.forEach(themeBouton => {
        let nomBoutonTheme = themeBouton.nom;

        const contenuBoutonsThemes = `
            <button class="nav-theme-btn">${themeBouton.nom}</button>
          `
        themesBoutonContenaire.insertAdjacentHTML('beforeend', contenuBoutonsThemes);
      });

      
      // BONUS 2 : Filtrage par thème
          
      // let themesBoutonContenaire = document.getElementById('themes-nav');
      // let titreBoutonTous = `<button class="nav-theme-btn active">Tous</button>`;
      // themesBoutonContenaire.innerHTML = titreBoutonTous;

      // function creerBouton(bouton) {
      //   let themesBoutonContenaire = document.getElementById('themes-nav');
      //   let nomBoutonTheme = bouton.nom;

      //   const contenuBoutonsThemes = `
      //       <button class="nav-theme-btn">${bouton.nom}</button>
      //     `;
      //   themesBoutonContenaire.insertAdjacentHTML('beforeend', contenuBoutonsThemes);
      // }

      // data.journal.themes.forEach(element => {
      //   creerBouton(element);
      // });

      // let buttonTous = document.getElementById('1');
      // let buttonClassiquesIncontournables = data.journal.themes[0].nom;
      // let buttonEsthetiqueEtNarration = data.journal.themes[1].nom;
      // let buttonThematiquesAdultes = data.journal.themes[2].nom;
      // let buttonDebatsEtAnalyses = data.journal.themes[3].nom;
      // let buttonCreationEtPartenariats = data.journal.themes[4].nom;
      // let buttonCultureEtValeurs = data.journal.themes[5].nom;

      // buttonClassiquesIncontournables.addEventListener("click", function(){
      //   // let themesBoutonContenaire = document.getElementById('themes-nav');
      //   // let filteredCategory = "Classiques incontournables";
      //   let filteredCategory = "Classiques incontournables";
      //   themesBoutonContenaire.innerHTML = '';

      //     data.journal.themes.forEach(product => {
      //     if(product.theme.nom == filteredCategory){
      //       creerBouton(product);
      //       // AFFICHER LA CREATIdata.journal.themes
      //       // ON D'ARTICLE
      //     }
      //   });
      // });

      //   buttonEsthetiqueEtNarration.addEventListener("click", function(){
      //     let themesBoutonContenaire = document.getElementById('themes-nav');// TEST
      //     let filteredCategory = "Esthétique & narration";
      //     themesBoutonContenaire.innerHTML = '';

      //     products.forEach(product => {
      //       if(product.theme.nom == filteredCategory){
      //         createCard(product);
      //       }
      //     });
      //   });


      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let articlePrincipalContenaire = document.getElementById('article-principal');
      let imageArticlePrincipal = data.journal.articlePrincipal.image;
      let themeArticlePrincipal = data.journal.articlePrincipal.theme;
      let titreArticlePrincipal = data.journal.articlePrincipal.titre
      let descriptionArticlePrincipal = data.journal.articlePrincipal.description;
      let dateArticlePrincipal = data.journal.articlePrincipal.date;

      let contenu = `
        <img style="object-position: top;" id="hero-image" src="${imageArticlePrincipal}">
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
      let imageArticle = article.image;
      let themeArticle = article.theme;
      let titreArticle = article.titre;
      let dateArticle = article.date;

        const contenuArticles = `
          <div class="article-card" data-aos="fade-up" data-aos-duration="1000">
            <img src="${imageArticle}" style="object-position: top;" alt="${imageArticle}">
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
          <div class="theme-item" data-aos="flip-left">
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
          <div class="author-card" data-aos="zoom-in">
              <img class="author-image" src="${photoAuteur}">
              <h3>${prenomAuteur}</h3>
              <p class="author-role">${experienceAuteur}</p>
              <p class="author-bio">${presentationAuteur}</p>
          </div>
        `
        auteursContenaire.insertAdjacentHTML('beforeend', contenuAuteurs);
      });

      // TODO 7: REMPLIR LE CALL TO ACTION

      let callToActionContenaire = document.getElementById('call-to-action');

      const contenuCallToAction = `
        <p>Rejoignez notre newsletter pour suivre vos idols préférés</p>
        <button class="cta-button" data-aos="fade-down" onclick="alertFunction()">S'abonner</button>
      `

      callToActionContenaire.insertAdjacentHTML('beforeend', contenuCallToAction);

      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA
      // Réponse : script.js ligne 2-5

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();