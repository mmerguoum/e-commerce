import React, { useState, useEffect } from 'react'
import AdminDashboard from '../adminDashbord/AdminDashboard';
import MapGetAllProducts from './MapGetAllProducts';
import axios from 'axios'

const ProductDashboard = () => {
const [products, setProduct] = useState([])

const handleDelete = async (e, selectionId) => {
    console.log(selectionId)
    await axios.delete(`http://localhost:2000/api/product/${selectionId}`)
        .then(res => {
            const deleteProduct = products.filter(e => e._id !== selectionId)
            setProduct(deleteProduct)
        })
}

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
    <>
        <AdminDashboard/>
    <div className="relative w-4/6 overflow-x-auto mx-auto rounded-lg sm:rounded-lg top-32 left-32">
    <tbody className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                        Table Products
                        </th>
                       
                    </tr>
        </tbody>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400 dark:border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Product name
                        </th>
                        {/* <th scope="col" className="px-6 py-3">
                        image
                        </th> */}
                        <th scope="col" className="px-6 py-3">
                        Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                        price
                        </th>
                        <th scope="col" className="px-6 py-3">
                        description
                        </th>
                        <th scope="col" className="px-6 py-3">
                        quantity
                        </th>
                        <th scope="col" className="px-6 py-3 ml-24">
                        Options
                        </th>
                    </tr>
                </thead>
                <MapGetAllProducts handleId={handleId} getAllProduct={products} handleDelete={handleDelete}/>
            </table>
        </div>

    </>
  )
}

export default ProductDashboard