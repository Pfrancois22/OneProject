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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-1 lg:col-span-1">
          <RechercheVille
            getRepos={getRepos}
            isLoading={isLoading}
            onVilleNomChange={handleVilleNomChange}
          />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <Articles repos={repos} villeNom={villeNom} />
        </div>
      </div>
    </main>
  );
}

export default Main;
