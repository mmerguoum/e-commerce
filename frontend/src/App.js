import React from 'react';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
  return (
      <Router>
      <Navbar />
        <Routes>           
          <Route path='/' element={<Home/>}/>
          <Route path='Products' element={<Products/>}/>
        </Routes>
        <Footer/>
      </Router>


  );
}

export default App;
