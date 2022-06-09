import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import ProductItems from './ProductItems';
import Layout from '../../layout/Layout'



const Products = () => {
  return (
  <Layout>
    <div className="h-screen">
      <Sidebar/>   
      <section className="h-screen w-screen bg-gray-50 from-pink-50 to-indigo-100 pl-80 px-56">
      <ProductItems/>     
      </section>
      </div>
    </Layout>
  )
}

export default Products