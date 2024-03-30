// import Titre_h1 from "../Titre/Titre_h1";

// function Header() {
//   return (

//     <header className="bg-fond-header bg-no-repeat bg-center h-40  bg-contain w-screen bg-rose-700 flex flex-col justify-center">
//         <Titre_h1 />
//     </header>

//   )
// }

// export default Header


import Titre_h1 from "../Titre/Titre_h1";

function Header() {
  return (
    <header className="bg-fond-header bg-no-repeat bg-[length:1600px_250px] h-40 flex items-center mb-6">
      <div className="container mx-auto ">
        <Titre_h1 />
      </div>
    </header>
  )
}

export default Header;