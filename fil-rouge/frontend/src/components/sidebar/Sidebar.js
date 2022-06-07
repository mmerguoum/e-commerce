import React from 'react'

const Sidebar = () => {
  return (
<div className="flex flex-row h-max text-gray-900 fixed sm:justify-content bg-white">
    <aside
      className="sidebar w-64  md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-out"
    >
    <div className="flex justify-center mt-8">
                     <div className="mb-3 xl:w-96">
                 <input
                 type="search"
                 className="
                     form-control
                     block
                     w-48
                     px-3
                     py-1.5
                     ml-4
                     text-base
                     font-normal
                     text-gray-700
                     bg-gray-100 bg-clip-padding
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
      <div className="sidebar-content px-4 py-6">
        <ul className="flex flex-col w-full">
        <li className="my-px">
            <span className="flex font-medium text-sm text-gray-900 px-4 uppercase">Category</span>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-gray-700 text-xs">All</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-gray-700 text-xs">Abstract Acrylic Painting</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-gray-700 text-xs">Fluid Acrylic Paint</span>
            </a>
          </li>
          <li className="my-px">
            <span className="flex font-medium text-sm text-gray-900 px-4 pt-4 uppercase">Tables</span>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-gray-700 text-xs">Standard</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-gray-700 text-xs">Diptych</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700">
              <span className="ml-3 text-gray-700 text-xs">Triptych</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-8 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="ml-3 text-gray-700 text-xs">quadruple</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>


  )
}

export default Sidebar