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
    <main className="flex items-center p-10 w-full h-full bg-white">
	<div className="border-t border-b pt-32 grid grid-cols-2 gap-8">
		<div className="flex flex-col justify-start">
			<div className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
				style={{minHeigth:"320px"}}>
				<img className="w-full h-max object-cover" src={`http://localhost:2000/uploads/${product.productPictures && product.productPictures[0].img}`}/>
            </div>
			</div>
			<div className="flex flex-col mt-12">
				<div className="flex flex-col gap-4">
					<h1 className="capitalize text-4xl font-extrabold">{product.name}</h1>
					<h2 className="text-3xl">{product.price} درهم</h2>
					<p className="text-lg text-gray-500	">{product.description}</p>
					<div className="flex items-center gap-4 my-6 cursor-pointer ">
						<div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">Add to cart</div>
	
					</div>
				</div>
			</div>
		</div>
</main>
</Layout>
  )
}

export default ProductItems