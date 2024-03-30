import { useState } from "react";



function RechercheVille() {
  const clicRecherche = (event) => {
    event.preventDefault();
    const villeNom = event.target.villeNom.value;
    getRepos(villeNom);
  };

  return (
    <>
      {/* je fabrique le formulaire que je retourne là ou j'en ai besoin */}
      <form className="formulaire_recherche_ville" onSubmit={clicRecherche}>
        <div className="flex justify-between mb-3">
          <label htmlFor="villeNom">Recherche par ville</label>
        </div>
        <div className="inputRechercheVille">
          <input type="text" id="villeNom" placeholder="Entrez le nom dela ville" />
          <button type="submit">Lancer la recherche</button>
        </div>
      </form>
    </>
  );
}

export default RechercheVille;
