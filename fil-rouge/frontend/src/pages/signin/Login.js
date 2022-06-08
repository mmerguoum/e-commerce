import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'



const Login = () => {

    const [data, setData] = useState({
        email : "",
        password: ""
    });
    const [submit, setSubmit] = useState(false)
    
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setData({ ...data,email: e.target.value })
    }


  return (

<div className="container mx-auto ">
    <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-yellow-600 hidden bg-blend-darken lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img className="h-full" src={require('../../assets/Login.webp')}/>
            </div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                    <div className="mb-4 md:flex md:justify-between"></div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            // email={data.email}
                            // onChange={handleEmail}
                        />
                    </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                    </label>
                    <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    // password={data.password}
                    // onChange={handlePassword}
                    />
                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
            </div>
            <div className="mb-6 text-center">
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    // onClick={login}
                    >
                    login Account
                </button>
            </div>
        <hr className="mb-6 border-t" />
            <div className="h-24 flex justify-between block">
                <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#">
                    Forgot Password?
                </a>
                <Link to="/Signup" className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
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