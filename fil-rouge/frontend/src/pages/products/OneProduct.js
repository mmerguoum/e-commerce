import React from 'react'
import { Link } from 'react-router-dom'




const OneProduct = ({ id, productPictures, price }) => {
  return (


  <div className="flex mx-auto overflow-hidden relative justify-end cursor-pointer capitalize grid-col rounded-md w-56 h-80  object-cover text-white  hover:shadow-2xl bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out">
		<Link to={`/productItems/${id}`}><img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center " src={`http://localhost:2000/uploads/${productPictures[0].img}`} /></Link>
		<div className="absolute p-3 bg-white rounded-bl-lg flex text-yellow-600 flex-col">
			<span>Prix :</span>
			<span className="font-semibold capitalize" >{price} درهم</span>
		</div>
	</div>
     
  )
} 

export default OneProduct