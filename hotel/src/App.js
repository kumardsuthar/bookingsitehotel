
import React, { useState } from 'react';
 import '../src/css/header.css';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import Specialoffer from './pages/Specialoffer';
import Hotel from './pages/Hotel';
import Hotelcard from './component/Hotelcard';
import Blog from './pages/Blog';
import Login from './component/Login';
import Allcategories from './component/Allcategories';
import Profile from './component/Profile';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialoffer" element={<Specialoffer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactpage" element={<Contact />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/allcategories" element={<Allcategories />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Route */}
        {/* <Route 
          path="/login" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          } 
            
        /> */}

<Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
<Route 
  path="/profile" 
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Profile />
    </ProtectedRoute>
  } 
/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


