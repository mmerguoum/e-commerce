import React from 'react'
import { Link } from 'react-router-dom'


const AdminDashboard = () => {

  return (
    <div className = "fixed">
          <nav className="bg-white border-b border-yellow-200 fixed z-30 w-full fixed">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
         <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
               <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                  <svg id="toggleSidebarMobileHamburger" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <svg id="toggleSidebarMobileClose" className="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
               </button>
               <a href="https://demo.themesberg.com/windster/" className="text-xl font-bold flex items-center lg:ml-2.5">
               <img src={require('../../assets/logo.png')} className="h-16 w-24 mr-2" alt="Windster Logo"/>
               </a>
            </div>
            <div className="flex items-center">

               <Link to="/" className="hidden sm:inline-flex ml-5 text-white bg-yellow-700 hover:bg-black focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
                  <svg className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gem" role="img" xmlns="" viewBox="0 0 512 512">
                  <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                  </svg>
                  Go to Home Page
               </Link>
            </div>
         </div>
      </div>
   </nav>
       <div className="flex overflow-hidden bg-yellow-400">
          <aside id="sidebar" className="fixed hidden z-20 bg-yellow-400 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
             <div className="relative flex-1 flex flex-col min-h-0 border-r h-max border-yellow-200 bg-white pt-0">
                <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                   <div className="flex-1 px-3 bg-white divide-y space-y-1">
                      <ul className="space-y-2 pb-2 pt-12 h-full pl-6 bg-yellow-500 rounded-xl">
                         <li>
                            <Link to="/AdminDashboard" className="text-base text-white font-normal rounded-lg flex items-center  group">
                               <svg className="w-6 h-6 text-gray-500 mb-3 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                               </svg>
                               <span className="ml-3 mb-3 ">Dashboard</span>
                            </Link>
                         </li>
                         <li>
                            <Link to="/UsersDashboard" className="text-base text-white font-normal rounded-lg hover:bg-yellow-700 flex items-center p-2 group ">
                               <svg className="w-6 h-6 ml-4 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                               </svg>
                               <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
                            </Link>
                         </li>
                         <li>
                            <Link to="/ProductDashboard" className="text-base text-white font-normal rounded-lg hover:bg-yellow-700 flex items-center p-2 group ">
                               <svg className="w-6 h-6 ml-4 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                               </svg>
                               <span className="ml-3 flex-1 whitespace-nowrap">Products</span>
                            </Link>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </aside>
          <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
          <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">   
          </div>
       </div>
    </div>
  )
}

export default AdminDashboard