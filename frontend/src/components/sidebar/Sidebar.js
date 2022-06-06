import React from 'react'

const Sidebar = () => {
  return (
    <div class="w-60 h-full shadow-md bg-white px-1 absolute overflow-auto">
        <div class="flex justify-center mt-8">
            <div class="mb-3 xl:w-96">
                <input
                type="search"
                class="
                    form-control
                    block
                    w-48
                    px-3
                    py-1.5
                    ml-4
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border-none
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    
                "
                id="exampleSearch"
                placeholder="Search"
                />
            </div>
        </div>
    <ul class="relative">
        <li class="relative">
            <a class="flex items-center text-md  px-6 overflow-hidden text-gray-700 rounded ease-in-out font-bold" >                
                <span>Category</span>
            </a>
        </li>
        <li class="relative">
            <a class="flex items-center text-sm  px-10 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">            
                <span>All</span>
            </a>
        </li>
        <li class="relative">
            <a class="flex items-center text-sm  px-10 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <span> Peinture Acrylique Abstraite </span>
            </a>
        </li>
        <li class="relative">
            <a class="flex items-center text-sm px-10 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <span> Peinture Acrylique Fluide </span>
            </a>
        </li>
    </ul>
    <ul class="relative">
        <li class="relative">
            <a class="flex items-center text-md p10 4 px-6 overflow-hidden text-gray-700 rounded ease-in-out font-bold" >                
                <span>Tableaux</span>
            </a>
        </li>
        <li class="relative">
            <a class="flex items-center text-sm  px-10 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">            
                <span>Dyptique</span>
            </a>
        </li>
        <li class="relative">
            <a class="flex items-center text-sm  px-10 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <span> triptyque </span>
            </a>
        </li>
        <li class="relative">
            <a class="flex items-center text-sm px-10 h-10 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <span> quadruple </span>
            </a>
        </li>
    </ul>
</div>
  )
}

export default Sidebar