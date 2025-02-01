import './App.css';

import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Header/>
       
       <Routes>
                <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>




      <Footer/>
      </div>

  );
}

export default App;
