import React, { useState } from 'react'
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function Header() {

  const [menuOpen, setMenuOpen] =useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className='relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6'>
        <div className='flex justify-between'>
          <Link to={'/'}>
            <img className='h-20 w-20' src="/sixteen47.jpg" alt="Sixteen47-Ghana Logo" />
          </Link>
          <button className='text-SixteenBlack outline-none sm:hidden' onClick={toggleMenu}>
            <BsList size={30} />
          </button>
        </div>
        <ul className={`${ menuOpen ? 'block' : 'hidden'} bg-SixteenWhite shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto`}>
          <div className='order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-y-0'>
          <Link to={'/'}> <li className='text-SixteenGold hover:text-SixteenBlack border border-SixteenGold rounded-3xl px-4 py-2 '>Home</li> </Link>
          <Link to={'/contactus'}>  <li className='text-SixteenBlack hover:text-SixteenGold'>Contact Us</li> </Link>
           <Link to={'/aboutus'}> <li className='text-SixteenBlack hover:text-SixteenGold'>About Us</li> </Link>
           <Link to={'/gallery'}> <li className='text-SixteenBlack hover:text-SixteenGold'>Gallery</li> </Link>
            
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
