import { useState } from "react";

function RechercheVille({ getRepos, isLoading }) {
  const [villeNom, setVilleNom] = useState("");

  const clicRecherche = (event) => {
    event.preventDefault();
    // const villeNom = event.target.villeNom.value;
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
          <input
            className="border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring focus:border-blue-300 shadow-lg"
            type="text"
            id="villeNom"
            placeholder="Entrez le nom de la ville"
            onChange={(e) => setVilleNom(e.target.value)}
          />
          {/* <button type="submit">Lancer la recherche</button> */}
          <button type="submit" disabled={isLoading}
            className="bg-green-800 text-white font-bold py-2 px-4 rounded-md shadow-lg mx-6">
            {isLoading ? "Chargement..." : "Lancer la recherche"}
          </button>
        </div>
      </form>
    </>
  );
}

export default RechercheVille;
