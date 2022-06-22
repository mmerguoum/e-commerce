import React from 'react'
import { Link } from 'react-router-dom'

const RowUser = ({id, fullName, email, adress, phone, role, handleDelete}) => {
  return (
    <>
        <tbody>
            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">                        
                       <div className="pl-4">
                           {fullName}
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                           {email}
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                          {phone}  
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                          {adress}        
                       </div>
                   </div>
               </td>
               <td className="pl-4 cursor-pointer">
                   <div className="flex items-center">
                       <div className="pl-4">
                          {role}        
                       </div>
                   </div>
               </td>
              <td className="px-6 py-4 text-center flex justify-between">
                    <Link to={`/UpdateUser/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mt-4">Edit</Link>
                    <Link to={""} onClick={(e)=> { window.confirm( 'Are you sure you want to delete this Card?') && handleDelete(e,id) }} href="#" className="font-medium text-blue-600 dark:text-red-500 hover:underline  mt-4">Delete</Link>
              </td>
            </tr>
                   
            </tbody>
    </>
  )
}

export default RowUser