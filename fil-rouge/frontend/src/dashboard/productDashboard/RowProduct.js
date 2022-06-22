import React from 'react'
import { Link } from 'react-router-dom'


const RowProduct = ({id, name, price, quantity, description, category, handleDelete, productPictures}) => {

  return (
    <>
        <tbody>
            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">                        
                       <div className="pl-4">
                           {name}
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                        <img className="w-12 h-8" src={`http://localhost:2000/uploads/${productPictures[0].img}`} />
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                           {category}
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                          {price} Dh  
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                          {description}        
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                           {quantity}   
                       </div>
                   </div>
               </td>
              <td className="px-6 py-4 text-center flex">
                    <Link to={`/UpdateProducts/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-4 mr-8">Edit</Link>
                    <Link to={""} onClick={(e)=> { window.confirm( 'Are you sure you want to delete this Card?') && handleDelete(e,id) }} href="#" className="font-medium text-blue-600 dark:text-red-500 hover:underline mt-4">Delete</Link>
              </td>
            </tr>
                   
            </tbody>
    </>
  )
}

export default RowProduct