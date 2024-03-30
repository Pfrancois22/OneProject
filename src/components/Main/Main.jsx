import Articles from "../Articles/Articles";
import RechercheVille from "../Formulaires/RechercheVille";
import ApiVilleGouv from "../../utils/ApiVilleGouv";
import { useState } from "react";

function Main() {
  const { repos, isLoading, getRepos } = ApiVilleGouv();
  const [villeNom, setVilleNom] = useState("");

  const handleVilleNomChange = (nom) => {
    setVilleNom(nom);
  };

  return (
    <main className="container mx-auto flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <RechercheVille
          getRepos={getRepos}
          isLoading={isLoading}
          onVilleNomChange={handleVilleNomChange}
        />
        <Articles repos={repos} villeNom={villeNom} />
      </div>
    </main>
  );
}

export default Main;
