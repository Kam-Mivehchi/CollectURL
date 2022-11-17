import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
   return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 ">
         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
               <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href='/'>
                  slate Color
               </a>
               <Link className="cursor-pointer  leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-white" to='/'>
                  {/* <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span> */}
                  Home
               </Link>
            </div>
            <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
               {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
                  <li className="nav-item">
                     <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/">
                        <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Home</span>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                        <span className="ml-2">Settings</span>
                     </a>
                  </li>
               </ul> */}
               {/* <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                  <div className="flex">
                     <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-slate-600 rounded-full text-sm bg-white items-center rounded-r-none pl-2 py-1 text-slate-800 border-r-0 placeholder-slate-300">
                        <i className="fas fa-search"></i>
                     </span>
                  </div>
                  <input type="text" className="px-2 py-1 h-8 border border-solid  border-slate-600 rounded-full text-sm leading-snug text-slate-700 bg-white shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-slate-300" placeholder="Search slate" />
               </div> */}
            </div>
         </div>
      </nav>
   )
}

export default NavBar