import React, { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import MapGetAllProductInSite from './MapGetAllProductInSite';
import axios from 'axios'
// import Sidebar from '../../components/sidebar/Sidebar';



const Products = () => {
  const [products, setProduct] = useState([])

// const handleSearch = async (e, key) => {
//     console.log(key)
//     await axios.delete(`http://localhost:2000/api/product/search/${key}`)
//         .then(res => {
//             const searchProduct = products.filter(e => e.name == key)
//             setProduct(searchProduct)
//         })
// }

const url = "http://localhost:2000/api/product/getAll"

useEffect(() => {
    getAllProduct()
}, [])

const getAllProduct = () => {
    axios.get(url).then((response) => {
        const allProducts = response.data
        console.log(allProducts)
        setProduct(allProducts)
    })
    .catch((error) => console.error(`Error: ${error}`))
}


const [id, setId] = useState()

const handleId = (e, selectionId) => {
    setId(selectionId)
}
console.log(products)
  return (
    <Layout>
        <div className>
        <div className="flex justify-center w-full mt-6 lg:mb-0">
                <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font text-gray-900">Products</h1>
        </div>
        {/* <div className="font-sans text-black bg-white flex items-center justify-end mr-8 mt-12 ">
            <div className="border border-yellow-500 rounded flex hover:border-0">
                <input type="text"
                 className=" px-4 py-2" 
                 placeholder="Search... "
                 />
                <button className="flex items-center justify-center px-4 ">
                <svg className="h-4 w-4 text-yellow-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                </button>
            </div>
        </div> */}
        <form className="flex justify-end items-center mr-8">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-56">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-white border border-yellow-700 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5  dark:bg-white dark:border-yellow-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-yellow-600 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-white dark:hover:bg-white> dark:focus:ring-yellow-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strok-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </form>
        <main className="grid grid-cols-4 items-center mb-32 mt-24  justify-center h-full w-full " >
            
            <MapGetAllProductInSite handleId={handleId} getAllProduct={products} />
        </main>
        </div>
    </Layout>
  )
}

export default Products