import React  from 'react';
import {  BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/products/Products';
import About from './pages/About';
import Login from './pages/signin/Login';
import Signup from './pages/signup/Signup';
import Cart from './pages/Cart';
import AdminDashboard from '../src/dashboard/adminDashbord/AdminDashboard'
import UsersDashboard from '../src/dashboard/userDashboard/UsersDashboard';
import ProductDashboard from '../src/dashboard/productDashboard/ProductDashboard';
import CategoryDashboard from './dashboard/categoryDashboard/CategoryDashboard';
import UpdateProducts from './dashboard/productDashboard/UpdateProducts';
import UpdateUser from './dashboard/userDashboard/UpdateUser';
import AddProduct from './dashboard/productDashboard/AddProduct';
import AddCategory from './dashboard/categoryDashboard/AddCategory';
import ProductItems from './pages/products/ProductItems'



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
          <Route path='CategoryDashboard' element={<CategoryDashboard/>}/>
          <Route path='UpdateUser/:id' element={<UpdateUser/>}/>
          <Route path='UpdateProducts/:id' element={<UpdateProducts/>}/>
          <Route path='AddProduct' element={<AddProduct/>}/>
          <Route path='AddCategory' element={<AddCategory/>}/>
          <Route path='ProductItems/:id' element={<ProductItems/>}/>

        </Routes>
      </Router>
  </>

  );
}

export default App;
