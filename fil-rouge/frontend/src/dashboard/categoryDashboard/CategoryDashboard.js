import React, { useState, useEffect } from 'react'
import AdminDashboard from '../adminDashbord/AdminDashboard'
import MapGetAllCategories from './MapGetAllCategories'
import axios from 'axios'

const CategoryDashboard = () => {
const [categories, setCategory] = useState([])

    const handleDelete = async (e, selectionId) => {
        console.log(selectionId)
        await axios.delete(`http://localhost:2000/api/category/${selectionId}`)
            .then(res => {
                    
                    const deleteCategory = categories.filter(e => e._id !== selectionId)
                    setCategory(deleteCategory)

            })
    }

    const url = "http://localhost:2000/api/category/getAll"

    useEffect(() => {
        getAllCategories()
    }, [])

    const getAllCategories = () => {
        axios.get(url).then((response) => {
            const allCategories = response.data
            console.log(allCategories)
            setCategory(allCategories)
        })
        .catch((error) => console.error(`Error: ${error}`))
    }


const [id, setId] = useState()

const handleId = (e, selectionId) => {
    setId(selectionId)
}
console.log(categories)
  return (
    <>
    <AdminDashboard/>
<div className="relative w-4/6 overflow-x-auto mx-auto rounded-lg sm:rounded-lg top-32 left-32">
<tbody className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-300">
                <tr>
                    <th scope="col" className="px-6 py-3 ">
                    Table Categories
                    </th>
                   
                </tr>
    </tbody>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-400 dark:border-gray-300">
                <tr>
                    <th scope="col" className="px-6 py-3">
                    Category name
                    </th>
                    <th scope="col" className="px-6 py-3 ml-24">
                    Options
                    </th>
                </tr>
            </thead>
            <MapGetAllCategories handleId={handleId} getAllCategories={categories} handleDelete={handleDelete}/>
        </table>
    </div>

</>
  )
}

export default CategoryDashboard