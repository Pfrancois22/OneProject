function ItemsRecherche({ nom, codeDepartement, codesPostaux, population }) {
  return (
    <li className="flex bg-orange-200 p-3 m-2 even:bg-gray-300 shadow-md">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="flex justify-center">
          <span>
            {nom}-{codeDepartement}
          </span>
        </div>
        <div className="flex justify-center">
          <span>Code Postal : {codesPostaux[0]}</span>
        </div>
        <div className="flex justify-center">
          <span>Population : {population}</span>
        </div>
      </div>
    </li>
  );
}

export default ItemsRecherche;
