import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useLocation } from 'react-router-dom';
import { LuBell } from "react-icons/lu";
import user from "../../../assets/user.png"
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    // Define Page Titles
  const pageTitles = {
    "/admin": "Dashboard",
    "/admin/city": "Add City",
    "/admin/product": "Add Product",
    "/admin/services": "Add Services",
  };

  // Get the current page title or default to "Page Not Found"
  const currentPage = pageTitles[location.pathname] || "Page Not Found";
  return (
    <div className='flex border-b-2 pr-5 border-gray-400 shadow-lg h-[74px] justify-between items-center'>
      <div className='p-4'>
        <h1 className='text-[24px] font-medium '>{currentPage}</h1>
        </div>
      <div className='flex space-x-6 items-center'>
      <div className='relative  w-[300px] font-medium'>
      <span className='absolute left-3 top-3 text-xl '><CiSearch /></span>
        <input type='text ' placeholder='Search' 
        className=' focus:outline-none focus:ring-2 bg-[#EBF2F1] focus:ring-blue-200  
        border border-gray-400 md:px-9 md:py-2  md:w-[300px] rounded-full' />              
       </div>
       <div className='relative flex items-center justify-between '>
       <span className=' text-3xl px-4 border-l-2 border-r-2  border-gray-400'><LuBell /></span>
       <span className='absolute z-10 text-[10px] -top-2 right-5 bg-red-600 text-white rounded-full px-1 py-0.5'>2</span>
       </div>

       <div className='flex items-center justify-between'>
        <div>
            <img src={user} className='w-[] h-[] '
             alt='user-icon '/>
        </div>
        <div className=''>
            <p className='font-medium text-sm'>Kristin Watson</p>
            <p className='text-xs'>Designation</p>
        </div>
        <div className="relative inline-block">
      {/* Button to open dropdown (only shows arrow) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className=" px-4 py-2 rounded-md flex items-center"
      >
        <IoIosArrowDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-4 mt-2 w-22 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
      </div>
      </div>

     

      
    </div>
  )
}

export default Header
