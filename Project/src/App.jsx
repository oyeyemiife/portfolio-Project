import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div className='app-container'>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App