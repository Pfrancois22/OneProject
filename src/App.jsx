
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
