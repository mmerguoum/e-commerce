import React, { useState } from 'react';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/products/Products';
import About from './pages/About';
import Login from './pages/signin/Login';
import Signup from './pages/signup/Signup';
import Cart from './pages/Cart';
import AdminDashboard from './components/dashboard/AdminDashboard'
import UsersDashboard from './components/dashboard/UsersDashboard';
import ProductDashboard from './components/dashboard/ProductDashboard';



const App = () => {

  return (
  <>
      <Router>
        <Routes>           
          <Route path='/' element={<Home/>}/>
          <Route path='Products' element={<Products/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='AdminDashboard' element={<AdminDashboard/>}/>
          <Route path='UsersDashboard' element={<UsersDashboard/>}/>
          <Route path='ProductDashboard' element={<ProductDashboard/>}/>
        </Routes>
      </Router>
  </>

  );
}

export default App;
