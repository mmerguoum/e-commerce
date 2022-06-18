import React, {useState} from 'react';
import axios from 'axios';
import AdminDashboard from '../adminDashbord/AdminDashboard';
import { useNavigate } from "react-router";






const AddProduct = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    // const [image, setImage] = useState("")

    
    const submitHundler = (e) => {
        e.preventDefault()
        console.log(e)
        navigate('/ProductDashboard')
    }
   

    const handleName = (e) => {
        return setName(e.target.value)
    }
    // const handleImage = (e) => {
    //     return setImage(e.target.value)
    // }
    const handlePrice = (e) => {
        return setPrice(e.target.value)
    }
    const handleCategory = (e) => {
        return setCategory(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleQuantity = (e) => {
        setQuantity(e.target.value)
    }
 
    

    const API_URL = 'http://localhost:2000/api/product/create'

    const addProduct = async () => {
        const data = new FormData()
        data.append("name",name)
        data.append("price",price)
        data.append("description",description)
        data.append("quantity",quantity)
        data.append("category",category)
        // data.append("image",image)

       try {
          const result = axios.post(API_URL , data).data
          return result
       } catch (error) {
         console.log(error)
       }
     }
    

     return (
        <>
        <AdminDashboard/>
      <div className="flex items-center justify-center p-8 mb-12">
        <div className="mx-auto w-full max-w-[550px] border mt-16 border-yellow-600 p-8 rounded-md">
          
            <form  
            className="w-68 h-max" 
            method="POST"
            onSubmit={submitHundler}>
    
            <div className="mb-3">
                <label
                for="name"
                className="mb-3 block text-base font-medium text-yellow-900"
                >
                Name
                </label>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleName}
                placeholder="Name..."
                className="w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
                />
            </div>
            {/* <div className="mb-6">
                <label
                for="subject"
                className="mb-3 block text-base font-medium text-yellow-900"
                >
                image
                </label>
                <input
                type="file"
                name="image"
                id="image"
                value={image}
                onChange={handleImage}
                placeholder="Enter your subject"
                className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
                />
            </div> */}
            <div className="mb-3">
                <label
                for="category"
                className="mb-3 block text-base font-medium text-yellow-900"
                >
                category
                </label>
                <input
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={handleCategory}
                placeholder="choose Your Category..."
                className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
                />
            </div>
            <div className="mb-3">
                <label
                for="price"
                className="mb-3 block text-base font-medium text-yellow-900"
                >
                Price
                </label>
                <input
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={handlePrice}
                placeholder="Price..."
                className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
                />
            </div>
            <div className="mb-6">
                <label
                for="subject"
                className="mb-3 block text-base font-medium text-yellow-900"
                >
                quantity
                </label>
                <input
                type="number"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={handleQuantity}
                placeholder="Quantity..."
                className="w-full rounded-md h-10 border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
                />
            </div>
            <div className="mb-3">
            <label
            for="message"
            className="mb-3 block text-base font-medium text-yellow-900"
            >
            Description
            </label>
            <textarea
            rows="4"
            name="message"
            id="message"
            value={description}
            onChange={handleDescription}
            placeholder="Type your message..."
            className="w-full resize-none h-24 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-sm text-gray-600 outline-none focus:border-yellow-400 focus:shadow-md"
            ></textarea>
        </div>
            <div>
            <button
                className="hover:shadow-form rounded-md bg-yellow-700 py-2 px-8 text-base font-semibold text-white outline-none"
                onClick={addProduct}
                >
                Submit
                </button>
            </div>
            </form>
        </div>
    </div>  
    
    </>
      )
}

export default AddProduct