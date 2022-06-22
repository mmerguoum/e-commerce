import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router'


const Signup = () => {

  
const[fullName, setFullName] = useState('')
const[email, setEmail] = useState('')
const[phone, setPhone] = useState('')
const[adress, setAdress] = useState('')
const[password, setPassword] = useState('')
const[confirmPassword, setConfirmPassword] = useState('')

const navigate = useNavigate()

const handleFullName = (e) => {
  return setFullName(e.target.value)
}

const handleEmail = (e) => {
  return setEmail(e.target.value)
}

const handlePhone = (e) => {
  return setPhone(e.target.value)
}
const handleAdress = (e) => {
  return setAdress(e.target.value)
}

const handlePassword = (e) => {
  return setPassword(e.target.value)
}


const API_URL = 'http://localhost:2000/api/auth/register'
  const handleRegister = async () => {
    const 
    _user = {
      fullName,
      phone,
      adress,
      email,
      password
    }
    try{
      const result = await axios.post(API_URL, _user).data
    } catch (error){
      console.log(error)
    }
    navigate("/login")
  }

  return (
  <div className="container mx-auto w-full">
    <div className="flex justify-center px-6 my-28">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
       <div className="w-full bg-yellow-600 hidden bg-blend-darken lg:block lg:w-5/12 bg-cover rounded-l-lg">
          <img className="h-full p-8" src={require('../../assets/Signup.png')}/>
       </div>

        <div className="w-full h-4/5 lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className=" text-2xl text-center">Create an Account!</h3>
            <form className="px-8 mt-8 pb-4 mb-4 bg-white rounded">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" >
                Name
                </label>
                <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                placeholder="Name complete ..."
                 value={fullName}
                 onChange={handleFullName}
                />
              </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="w-80 mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" >
                Email
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="ex : email@gmail.com ..."
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" >
                Phone
              </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="Enter your Phone ..."
              value={phone}
                onChange={handlePhone}
            />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="adress">
              Adress
            </label>
              <input
              className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="adress"
              type="adress"
              placeholder="Enter your Adress ..."
               value={adress}
               onChange={handleAdress}
              />
          </div>
          <div className="mb-4 md:flex md:justify-center">
            <div className="mb-4 w-76 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-center text-gray-700" htmlFor="password">
                Password
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-black-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password..."
                value={password}
                onChange={handlePassword}
              />
            </div>
          
          </div>
            <div className="mb-6 text-center">
              <button
              className="w-full px-4 py-2 mb-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleRegister}
              >
              Register Account
              </button>
            
          <hr className="mt-4 border-t" />
            <div className="text-center">
                <Link to="/Login" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                  Go To Login
                </Link>
             </div>
             </div>
           </form>
         </div>
        </div>
    </div>
  </div>
  )
}

export default Signup