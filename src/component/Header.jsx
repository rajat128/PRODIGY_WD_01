import React from 'react'
import { NavLink ,Link} from 'react-router-dom'

function Header() {
  return (
   <>
   <header className='bg-gray-900 '>
        <nav>
    <ul className='flex justify-between px-28 py-6 max-sm:px-0 max-md:px-10 '>
       <li>
       <div id="logo" className=''>
            <Link to="https://prodigyinfotech.dev/"className='font-sans font-extrabold text-xl text-white ' id="nav">
            <img src="https://prodigyinfotech.dev/assets/images/logo/logo.svg"></img></Link>
           </div>
       </li>
        <li className='mt-4 ' >
            <NavLink  className={({isActive})=> ` font-sans font-extrabold text-xl text-gray-100 ${isActive?"text-blue-400":"text-white"}  hover:text-green-300 list-none max-md:text-base`}   to="/" >
                HOME
            </NavLink>
        </li>
        <li  className='mt-4' >
            <NavLink className={({isActive})=> ` font-sans font-extrabold text-xl text-gray-100 ${isActive?"text-blue-400":"text-white"}  hover:text-green-300 max-md:text-base`}   to="/about">
               ABOUT
            </NavLink>
        </li>
        <li  className='mt-4'>
            <NavLink className={({isActive})=> ` font-sans font-extrabold text-xl text-gray-100 ${isActive?"text-blue-400":"text-white"}  hover:text-green-300 max-md:text-base`}   to="/contact">
                CONTACT
            </NavLink>
        </li>
        <li  className='mt-4'>
            <Link className="font-sans font-extrabold text-xl text-white hover:text-green-300 max-md:text-base"  to="https://github.com/rajat128">
               MY WORK
            </Link>
        </li>
       
    </ul>
        </nav>
    </header>
   </>
  )
}

export default Header
