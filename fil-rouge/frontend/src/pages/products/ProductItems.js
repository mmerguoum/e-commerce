import React, { useState, useEffect } from 'react'
import Layout from '../../layout/Layout'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const ProductItems = () => {
	const navigate = useNavigate() 
	const [ product, setProduct ] = useState("")
    const {id} = useParams();
    
  console.log('idddd',id)
    
    const getProductById = async()=>{
        const res = await axios.get(`http://localhost:2000/api/product/${id}`);
		console.log('jhdfhiuh',res)   
		setProduct(res.data)  
        return res;
    }
       
           useEffect( () => {
               getProductById()
					
                //  , productPictures: product.data.productPictures

           },[]);

console.log('productPictures : ',product.productPictures && product.productPictures[0].img)
  return (
    <Layout>
    <main className="flex items-center px-36 w-full h-full bg-white">
	<div className="border-t border-b pt-12 grid grid-cols-2 gap-8">
		<div className="flex flex-col justify-start">
			<div className="flex flex-col w-5/6 object-cover h-5/6 justify-items-start border rounded-lg overflow-hidden"
				style={{minHeigth:"320px"}}>
				<img className="w-full h-max object-cover" src={`http://localhost:2000/uploads/${product.productPictures && product.productPictures[0].img}`}/>
            </div>
			</div>
			<div className="flex flex-col mt-12">
				<div className="flex flex-col gap-4">
					<h1 className="capitalize text-3xl font-extrabold">{product.name}</h1>
					<h2 className="text-2xl">{product.price} درهم</h2>
					<p className="text-md text-gray-500	">{product.description}</p>
					<div className="flex items-center gap-4 my-6 cursor-pointer ">
						<button className="bg-yellow-600 px-5 py-2 text-white rounded-lg w-1/4 text-center">Add to cart</button>
	
					</div>
				</div>
			</div>
		</div>
</main>
</Layout>
  )
}

export default ProductItems