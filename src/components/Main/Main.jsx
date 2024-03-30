
// import React from 'react'

import Article from "../Articles/Articles";
import RechercheVille from "../Formulaires/RechercheVille";

// function Main() {
//   return (
//     <main className='flex grow flex-col'>
//         <h2>Title article</h2>
//         <article>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam soluta dolor excepturi dignissimos unde sunt?</p>
//         </article>
//     </main>
//   )
// }

// export default Main


function Main() {
    return (
      <main className="container mx-auto flex-grow">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <RechercheVille />
        <Article />
    
      </div>
       
      </main>
    )
  }
  
  export default Main;