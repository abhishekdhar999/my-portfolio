import React, { useState } from 'react'
import logo from '../Images/logo.png'
import '../App.css'

import { Link } from 'react-router-dom';
// import { ResumeComponent } from './ResumeComponent';
import  ResumeComponent  from './ResumeComponent';
// import logoBlack from '../../src/logo_black.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const openMainMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div>


<nav className="bg-[#F6F1EC] border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    <a href="/" className="flex items-center justify-center">
      {/* <!-- Adjust the width and height on smaller screens using Tailwind's responsive prefixes --> */}
      <img src={logo} className="h-12 md:h-16 w-auto" alt="" />
      {/* <!-- Reduce the left margin on the text to bring it closer to the logo and adjust font size for smaller screens --> */}
      <span className="ml-2 md:ml-3 self-center text-base md:text-xl font-light whitespace-nowrap dark:text-orange-700 font-serif">Abhishek Dhar</span>
    </a>
          <button onClick={openMainMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {isOpen && <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
              <li>
<Link to="/" onClick={() => openMainMenu(false)}>
                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                </Link>
              </li>
             
              <li className='  '>
                <Link to="/about" onClick={() => openMainMenu(false)}>
                <a href="/about" className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  md:dark:hover:bg-red hover:bg-gray-600 ">About</a>
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => openMainMenu(false)}>
                  <a href="/explorepage" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-600 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent">Projects</a>
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={() => openMainMenu(false)}>
                  <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </Link>
              </li>
            </ul>
          </div>}


          <div className="shift hidden w-full md:block md:w-auto " id="navbar-default ">
            <ul className="font-medium flex flex-col p-6 md:p-4 mt-4 border border-solid border-neutral-950 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0    mx-6 ">
                

             
            
              <li className="">
                <div className='container cyan brackets'>

                <Link to="/">
                <span  className="custom-button block py-2 px-3 text-white  rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black font-sans font-bold text-lg hover:text-orange-600" aria-current="page">Home</span>
                </Link>
                </div>
              </li>
              
              <li>
                <Link to="/about">
                  <span className="custom-button block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0   md:dark:hover:bg-transparent font-sans font-bold text-lg hover:text-orange-600">About</span>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <span className="custom-button block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  md:dark:hover:bg-transparent font-sans font-bold text-lg hover:text-orange-600">Projects</span>
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <span  className="custom-button block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0   dark:hover:bg-gray-700  md:dark:hover:bg-transparent font-sans font-bold text-lg hover:text-orange-600">Contact</span>
                </Link>
              </li>

              <li>
                <Link to="/resume">
                  <span className="custom-button block py-4 px-3 text-gray-200 rounded   md:border-0  md:p-0    font-sans font-bold text-lg hover:text-gray-600 bg-orange-400  "> <span className='p-3'>Resume</span></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}


