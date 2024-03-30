// import { useState } from 'react'
// import './App.css'
// import Header from './components/Header/Header';
// import Main from './components/Main/Main'
// import Footer from './components/Footer/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className='container max-w-screen-xl bg-gray-100 flex flex-col min-h-screen '>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   )
// }

// export default App

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-gray-300 flex flex-col h-screen min-w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
