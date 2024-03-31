// import { useState } from "react";

// function RechercheVille({ getRepos, isLoading }) {
//   const [villeNom, setVilleNom] = useState("");

//   const [searchType, setSearchType] = useState("ville");

//   const clicRecherche = (event) => {
//     event.preventDefault();
//     // const villeNom = event.target.villeNom.value;
//     getRepos(villeNom, searchType);
//   };

//   return (
//     <>
//       {/* je fabrique le formulaire que je retourne là ou j'en ai besoin */}
//       <form className="formulaire_recherche_ville" onSubmit={clicRecherche}>
//         <div className="flex justify-between mb-3">
//           <label htmlFor="villeNom">
//             {searchType === "ville"
//               ? "Recherche par ville"
//               : "Recherche par code postal"}
//           </label>
//         </div>
//         <div className="inputRechercheVille">
//           <input
//             className="border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring focus:border-blue-300 shadow-lg"
//             type="text"
//             id="villeNom"
//             placeholder={
//               searchType === "ville"
//                 ? "Entrez le nom de la ville"
//                 : "Entrez le code postal"
//             }
//             onChange={(e) => setVilleNom(e.target.value)}
//           />
//           {/* <button type="submit">Lancer la recherche</button> */}
//           {/* <button
//             type="button"
//             disabled={isLoading}
//             className="bg-green-800 text-white font-bold py-2 px-4 rounded-md shadow-lg mx-6"
//           >
//             {isLoading ? "Chargement..." : "Lancer la recherche"}
//           </button> */}
//           <div className="flex md:flex-col">
//             <button
//               type="button"
//               onClick={() => setSearchType("ville")}
//               className={`bg-${
//                 searchType === "ville" ? "green" : "gray"
//               }-800 text-white font-bold py-2 px-4 rounded-md shadow-lg mb-2`}
//             >
//               Recherche par ville
//             </button>
//             <button
//               type="button"
//               onClick={() => setSearchType("codePostal")}
//               className={`bg-${
//                 searchType === "codePostal" ? "green" : "gray"
//               }-800 text-white font-bold py-2 px-4 rounded-md shadow-lg`}
//             >
//               Recherche par code postal
//             </button>
//           </div>
//           <button
//             type="submit"
//             disabled={isLoading}
//             className="bg-green-800 text-white font-bold py-2 px-4 rounded-md shadow-lg mx-6"
//           >
//             {isLoading ? "Chargement..." : "Lancer la recherche"}
//           </button>
//         </div>
//       </form>
//     </>
//   );
// }

// export default RechercheVille;

import { useState } from "react";

function RechercheVille({ getRepos, isLoading }) {
  const [villeNom, setVilleNom] = useState("");
  const [searchType, setSearchType] = useState("ville"); // Par défaut, la recherche est par ville

  const clicRecherche = (event) => {
    event.preventDefault();
    getRepos(villeNom, searchType);
  };

  return (
    <form className="flex flex-col w-full">
      {/* Label */}
      <label htmlFor="villeNom" className="mb-2 font-extrabold">
        Recherche par {searchType === "ville" ? "ville" : "code postal"}
      </label>

      <div className="flex justify-between items-center mb-3">
        {/* Input */}
        <input
          className="border border-gray-300 rounded-md p-2 mb-2"
          type="text"
          id="villeNom"
          placeholder={
            searchType === "ville"
              ? "Entrez le nom de la ville"
              : "Entrez le code postal"
          }
          onChange={(e) => setVilleNom(e.target.value)}
        />

        {/* Boutons */}
        <div className="flex flex-col gap-y-5 ml-2">
          <button
            type="button"
            onClick={() => setSearchType("ville")}
            className={`bg-${
              searchType === "ville" ? "green" : "gray"
            }-800 text-white font-bold py-2 px-4 rounded-md shadow-lg mb-2 sm:mb-0 sm:mr-2`}
          >
            Recherche par ville
          </button>
          <button
            type="button"
            onClick={() => setSearchType("codePostal")}
            className={`bg-${
              searchType === "codePostal" ? "green" : "gray"
            }-800 text-white font-bold py-2 px-4 rounded-md shadow-lg`}
          >
            Recherche par code postal
          </button>
        </div>
      </div>

      {/* Bouton "Lancer la recherche" */}
      <div className="flex justify-end items-end w-full">
        <button
          type="submit"
          onClick={clicRecherche}
          disabled={isLoading}
          className="bg-green-800 text-white font-bold py-2 px-4 rounded-md shadow-lg mt-2"
        >
          {isLoading ? "Chargement..." : "Lancer la recherche"}
        </button>
      </div>
    </form>
  );
}

export default RechercheVille;
