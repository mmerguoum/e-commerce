import React from 'react'
import AdminDashboard from './AdminDashboard';

const ProductDashboard = () => {
  return (
    <div>
        <AdminDashboard/>
    <div className="relative w-4/6 overflow-x-auto mx-auto rounded-lg sm:rounded-lg top-32 left-32">
    <tbody className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                        Table Products
                        </th>
                       
                    </tr>
        </tbody>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400 dark:border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
            <tbody>
                <tr className="dark:text-gray-700 border-b dark:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-gray-700 whitespace-nowrap">
                    Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                    Sliver
                    </td>
                    <td className="px-6 py-4">
                    Laptop
                    </td>
                    <td className="px-6 py-4">
                    $2999
                    </td>
                    <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 mr-8 hover:underline">Edit</a>
                    <a href="#" className="font-medium text-blue-600 dark:text-red-500  hover:underline">Delete</a>
                    </td>
                </tr>
                   
            </tbody>
            </table>
        </div>

    </div>
  )
}

export default ProductDashboard