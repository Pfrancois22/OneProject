function ItemsRecherche({ nom, codeDepartement, codesPostaux, population }) {
    return (
      <li className="liRecherche">
        <span>{nom}-{codeDepartement}</span>
        <span>Code Postal : {codesPostaux[0]}</span>
        <span>Population : {population}</span>
      </li>
    );
  }
  
  export default ItemsRecherche;