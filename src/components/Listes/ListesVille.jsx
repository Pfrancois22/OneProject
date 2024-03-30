
import ItemsRecherche from './LiListes/ItemsRecherche';

function ListesVille({repos}) {
  return (
    <>
         <ul className='ListRecherche p-2 shadow-lg'>
            {/* <li className="enteteList">
                <span>Résultats</span>

                <button className="changeFormat" >Changer le format</button>
            </li> */}
            {repos.map((repo) => {
                return (
                    <ItemsRecherche
                        key={repo.siren}
                        nom={repo.nom}
                        codeDepartement={repo.codeDepartement}
                        codesPostaux={repo.codesPostaux}
                        population={repo.population }
                    />
                )
            })}
        </ul>
    </>
  )
}

export default ListesVille