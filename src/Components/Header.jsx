import React, { useState } from 'react'
import { BsList, BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import Banner from './Banner';

function Header() {


  const [menu, setMenu]= useState(false)

  const headerNav = [
    {title: "Home", path: "/"},
    {title: "About Us", path: "/aboutus"},
    {title: "Corporate Responsibility", path:"/corporateresponsibility"},
    {title: "News", path:"/d"},
    {title: "Gallery", path:"/gallery"},
    {title: "Contact Us", path:"/contactus"}
  ]
 

  return (
   <>
   <Banner />
   <nav className='bg-white w-full border-b lg:border-0 lg:static'>
    <div className='items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8'>
      <div className='flex items-center justify-between py-3 lg:py-5 lg:block'>
        <Link to="/">
          <img src="/sixteen47.jpg" width={120}  height={50} alt="Sixteen47 Logo" />
        </Link>

        <div className='lg:hidden'>
          <button className='text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border' onClick={()=> setMenu(!menu)}>
            {
              menu ? (
                <BsX size={40} fill='currentColor' />
              ) : (
                <BsList size={40} fill='currentColor' />
              )
            }
          </button>
        </div>
      </div>

      <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${ menu ? 'block' : 'hidden'}`}>
        {/* <ul className='justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
          {
            //map through the array of objects and create a list item for each one
            headerNav.map((item, index)=>{
              return(
                <li key={index} className='text-SixteenBlack  font-medium hover:text-SixteenGold'>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul> */}
        <ul className='justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0'>
              {headerNav.map((item, index) => (
                <li key={index} className='text-SixteenBlack font-medium text-center hover:text-SixteenGold'>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
              {/* Move the "Get a Quote" button inside the mobile view menu */}
              <li className='py-3 text-center font-bold text-white bg-SixteenGold rounded-md shadow lg:hidden'>
                <Link to='/quote'>
                  <button>
                    Get a Quote
                  </button>
                </Link>
              </li>
            </ul>
      </div>

      <div className='hidden lg:inline-block'>
        <Link to="/quote" className='py-3 px-4 font-bold text-white bg-SixteenGold rounded-md shadow'>
          <button>
            Get a Quote
          </button>
        </Link>
      </div>

    </div>
   </nav>
   </>
  )
}

export default Header
