import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
   const role = useSelector(state=>state.role)
   const auth = useSelector(state=>state.authenticated)
   const state = useSelector(state=>state)
   

   const API_URL = 'http://localhost:2000/api/auth/logout'
      const logout = async () => {
        try{
          await axios.post(API_URL)
          localStorage.clear()
          window.location.href = "/";
        }catch(error){
          console.log(error)
        }
        
      }

   const authRouter = () =>{
    
      return (
        <button type="button" className=" mr-10 block py-2 pr-4 pl-3 bg-gray-700 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600">
            <Link to="/" onClick={logout}><i className="fas fa-user mr-1"></i>Logout</Link></button>
      )
   }
   
   const adminRouter = () => {
     return (<li>
            <Link to="/AdminDashboard" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0 md:dark:hover:text-yellow-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-yellow-600 md:dark:hover:bg- dark:border-gray-700">Dashboard</Link>
            </li>)
   }
   
  return (

    <nav className="bg-white border-gray-200 p-8 sm:px-4 py-2.5 rounded sticky top-0 z-50">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={require("../../assets/logo.png")} className="mr-10 h-16 w-32 " alt="Flowbite Logo"/>
        
        </Link>
      <div className="flex md:order-2">
          <button type="button" className=" mr-10 block py-2 pr-4 pl-3 bg-gray-700 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600">
            <Link to="/Cart"><i className="fas fa-shopping-cart mr-1"></i>Cart</Link></button>
         { auth? authRouter() : (<button type="button" className=" mr-10 block py-2 pr-4 pl-3 bg-gray-700 rounded md:bg-transparent md:text-yellow-600 md:p-0 dark:text-yellow-600">
            <Link to="/Login"><i className="fas fa-user mr-1"></i>Login</Link></button>)}
        
      </div>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <ul className="flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                  <Link to="/" className="block py-2 r-4 pl-3 text-white bg-black-700 rounded md:bg-transparent md:text-black-700 md:p-0 dark:text-yellow-600" aria-current="page">Home</Link>
              </li>
              <li>
                  <Link to="/Products" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0 md:dark:hover:text-yellow-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-yellow-600 md:dark:hover:bg- dark:border-gray-700">Products</Link>
              </li>
              <li>
                  <Link to="/About" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-600 md:p-0 md:dark:hover:text-yellow-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-yellow-600 md:dark:hover:bg- dark:border-gray-700">About</Link>
              </li>
              {
                (role==='admin') && adminRouter()
              }
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;