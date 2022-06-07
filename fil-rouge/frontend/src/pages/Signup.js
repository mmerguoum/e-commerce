import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
  <div className="container mx-auto">
    <div className="flex justify-center px-6 my-12">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex">
       <div className="w-full h-auto bg-yellow-600 hidden bg-blend-darken lg:block lg:w-5/12 bg-cover rounded-l-lg">
          <img className="h-full" src={require('../assets/Signup.png')}/>
       </div>

        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" >
                Name
                </label>
                <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                placeholder="Name"
                //  value={name}
                //  onChange={handleName}
                />
              </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
              <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              //  value={email}
              //  onChange={handleEmail}
              />
          </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              //   value={password}
              //   onChange={handlePassword}
              />
              <p className="text-xs italic text-red-500">Please choose a password.</p>
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                Confirm Password
              </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="c_password"
              type="password"
              placeholder="******************"
            />
            </div>
          </div>
            <div className="mb-6 text-center">
              <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
              //  onClick={regesterHandler}
              >
              Register Account
              </button>
            </div>
          <hr className="mb-6 border-t" />
            <div className="text-center">
                <Link to="/Login" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                  Go To Login
                </Link>
             </div>
           </form>
         </div>
        </div>
    </div>
  </div>
  )
}

export default Signup