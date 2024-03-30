

import React, { useState } from 'react'

function ApiVilleGouv() {

    const [repos, setrepos] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const getRepos = async (ville = "") => {
        setIsLoading(true);

       const url = `https://geo.api.gouv.fr/communes?nom=${ville}&fields=code,nom,codeDepartement,population,codesPostaux`;

        const response = await fetch(url);
        const data = await response.json();

        setrepos(data);
        console.log(data);
        setIsLoading(false);
    };
        return { repos, isLoading, getRepos };
    }
 

export default ApiVilleGouv