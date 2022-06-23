import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import {useNavigate } from 'react-router'
import {useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import {loginAction, setRoleAction, setIdAction } from '../../actions/authActions';
import axios from 'axios'


const Login = () => {

    const [submit, setSubmit] = useState(false)
    const [isAdmin, setIsAdmin] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [data, setData] = useState({
        email : "",
        password: ""
    });
    
    

    const handleEmail = (e) => {
        setData({ ...data,email: e.target.value })
    }

    const handlePassword = (e) => {
        setData({ ...data, password: e.target.value })
    }


    const API_URL = 'http://localhost:2000/api/auth/login'
    const login =(email, password)=> {
        return axios.post(API_URL, {
          email: email,
          password: password,
        });
      }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        
        login(data.email, data.password).then((response) => {
        (async () => {
            console.log(jwtDecode(response.data.token))
            await dispatch(loginAction());
            await dispatch(setRoleAction(jwtDecode(response.data.token).role))
            await dispatch(setIdAction(jwtDecode(response.data.token)._id))
        })()
        setSubmit(true);
        navigate('/') 
      })
     
    }




  return (

<div className="container mx-auto mt-28">
  <div className="flex justify-center px-6 my-12">
   <div className="w-full xl:w-3/4 lg:w-11/12 flex">
    <div
     className="w-full h-auto bg-yellow-600 hidden bg-blend-darken lg:block lg:w-5/12 bg-cover rounded-l-lg">
        <img className="h-full p-8" src={require('../../assets/Login.webp')}/>
    </div>

    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
     <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
     <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
      <div className="mb-4 md:flex md:justify-between">
      </div>
      <div className="mb-4">
       <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
        Email
       </label>
       <input
        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="ex : email@gmail.com ..."
        email={data.email}
        onChange={handleEmail}
       />
      </div>
      <div className="mb-4 md:flex md:justify-between">
       <div className="mb-4 md:mr-2 md:mb-0">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
         Password
        </label>
        <input
         className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
         id="password"
         type="password"
         placeholder="Enter your password..."
         password={data.password}
         onChange={handlePassword}
        />
       </div>
      </div>
      <div className="mb-6 text-center">
       <button
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleSubmit}
       >
        login Account
       </button>
      </div>
      <hr className="mb-6 border-t" />
      <div className="flex justify-between">
       <a
        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
        href="#"
       >
        Forgot Password?
       </a>
       <Link to="/Signup"
        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
        href="#"
       >
        Create a new compte
       </Link>
      </div>
      <div className="text-center">
      </div>
     </form>
    </div>
   </div>
  </div>
 </div>
  )
}

export default Login