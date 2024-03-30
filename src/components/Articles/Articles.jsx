import ListesVille from "../Listes/ListesVille";
import Titre_h2 from "../Titre/Titre_h2";

function Article({ repos, villeNom }) {
    return (
      <article className="bg-slate-100">
        <Titre_h2 cilleNom={villeNom} />
        <ListesVille repos={repos} />
      </article>
    );
  }

  export default Article;