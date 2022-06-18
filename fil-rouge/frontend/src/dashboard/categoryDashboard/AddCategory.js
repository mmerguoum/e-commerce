import React, {useState} from 'react';
import axios from 'axios';
import AdminDashboard from '../adminDashbord/AdminDashboard';
import { useNavigate } from "react-router";

const AddCategory = () => {
    const [name, setName] = useState("")
  
    const navigate = useNavigate() 
    const submitHundler = (e) => {
        e.preventDefault()
        console.log(e)
        navigate("/CategoryDashboard")
    }
   

    const handleName = (e) => {
        return setName(e.target.value)
    }
    
 
    

    const API_URL = 'http://localhost:2000/api/category/create'

    const addCategory = async () => {
        const data = new FormData()
        data.append("name",name)
 

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
            <div>
            <button
                className="hover:shadow-form rounded-md bg-yellow-700 py-2 px-8 text-base font-semibold text-white outline-none"
                onClick={addCategory}
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

export default AddCategory