import React, { useState, useEffect } from 'react'
import AdminDashboard from '../adminDashbord/AdminDashboard';
import MapGetAllUsers from '../userDashboard/MapGetAllUser';
import axios from 'axios'
import { Link } from 'react-router-dom'


const UsersDashboard = () => {
const [users, setUsers] = useState([])

const handleDelete = async (e,selectionId) => {
    console.log(selectionId)
    await axios.delete(`http://localhost:2000/api/users/${selectionId}`)
    .then(res => {
        const deleteUser = users.filter(e => e._id !== selectionId)
        setUsers(deleteUser)
    })
}

const url = "http://localhost:2000/api/users/getUser"


    useEffect(() => {
        getAllUsers()
    },[])

    const getAllUsers = () => {
        axios.get(url).then((response) => {
            const allUsers = response.data
            console.log(allUsers)
            setUsers(allUsers)
        })
    }

    // const [userById, setUserById] = useState([])
    const [id, setId] = useState()

    const handleId = (e, selectionId) => {
        setId(selectionId)
    }
  return (
    <div>
        <AdminDashboard/>
        
    <div className="relative w-4/6 overflow-x-auto mx-auto rounded-lg sm:rounded-lg top-32 left-32">
            {/* <div className="sm:flex items-center justify-between">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"></p>
                    <div>
                        <button  className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <span className="text-sm font-medium leading-none text-white"><Link to="/AddUser">New User</Link></span>
                            
                        </button>
                    </div>
                </div> */}
                    
    <tbody className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">
                        Table Users
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
                        Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Adress
                        </th>
                        <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <MapGetAllUsers handleId = {handleId} getAllUsers={users} handleDelete={handleDelete}/>
            </table>
        </div>

    </div>
  )
}

export default UsersDashboard;