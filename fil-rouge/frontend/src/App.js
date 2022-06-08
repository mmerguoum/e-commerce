import React from 'react';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Products from './pages/products/Products';
import About from './pages/About';
import Login from './pages/signin/Login';
import Signup from './pages/signup/Signup';
import Cart from './pages/Cart';



const App = () => {
  return (
  <>
      <Router>
      <Navbar />
        <Routes>           
          <Route path='/' element={<Home/>}/>
          <Route path='Products' element={<Products/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='Signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </Router>
  </>

  );
}

export default App;
