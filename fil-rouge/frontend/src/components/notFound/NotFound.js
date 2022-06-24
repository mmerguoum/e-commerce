import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Layout>
        <div className="flex h-screen w-screen items-center bg-gray-50">
            <div className="container flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
                <div className="mx-8 p-12 w-full lg:w-1/2">
                    <div className="font-dark mb-8 text-7xl font-extrabold text-yellow-700">404</div>
                        <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
                            Sorry we couldn't find the page you're are not loging
                        </p>

                        <Link
                            to="/login"
                            className="duration-400 inline rounded-lg border border-transparent bg-blue-300 px-5 py-3 text-sm font-medium leading-5 text-white shadow-2xl transition-all hover:bg-blue-800 focus:outline-none active:bg-blue-600"
                            >back to login
                        </Link>
                    </div>
                    <div className="mx-5 my-12 w-full h-screen lg:flex lg:w-1/2 lg:justify-end">
                    <img
                        src={require('../../assets/page-erreur-404.png')}
                        className="p-12 mb-12"
                        alt="Page not found"
                    />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default NotFound