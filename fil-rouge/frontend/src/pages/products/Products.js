import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import ProductItems from './ProductItems';


const Products = () => {
  return (
    <div className="h-screen">
      <Sidebar/>   
      <section class="h-screen w-screen bg-gray-50 from-pink-50 to-indigo-100 pl-80 px-56">
      <ProductItems/>     
      </section>
      </div>

  )
}

export default Products