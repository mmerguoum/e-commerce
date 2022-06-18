import React, { useState, useEffect } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
// import ProductItems from './ProductItems';
import Layout from '../../layout/Layout'
import MapGetAllProductInSite from './MapGetAllProductInSite';
import axios from 'axios'



const Products = () => {
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
  <Layout>
    <div className="h-screen">
      <Sidebar/>   
      <section className="h-screen w-screen bg-gray-50 from-pink-50 to-indigo-100 pl-80 px-56">
          <div className="grid justify-center sm:grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
              <div >
                  <img className="h-56 rounded lg:h-60 w-full object-cover" src="https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                  {/* {image} */}
              </div>

          </div>     
      </section>
      </div>
    </Layout>
  )
}

export default Products