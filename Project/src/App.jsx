import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div>
        <Home/>
        <About/>
        <Portfolio />
        <Contact />
      </div>
    </div>
   
  );
}

export default App