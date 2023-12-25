import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";


function Footer() {
  return (
    
    <footer className="mt-24 bg-SixteenBlack sm:mt-12">
    <div className="mx-auto max-w-md overflow-hidden py-12 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        
          <div className="px-5 py-2">
           <Link to={'/faq'}> <a  className="text-base text-SixteenWhite hover:text-SixteenGold"> 
            FAQ
            </a>
            </Link>
          </div>

          <div className="px-5 py-2">
           <Link to={'/contactus'}> <a  className="text-base text-SixteenWhite hover:text-SixteenGold"> 
            Contact Us
            </a>
            </Link>
          </div>

          <div className="px-5 py-2">
           <Link to={'/aboutus'}> <a  className="text-base text-SixteenWhite hover:text-SixteenGold"> 
            About Us
            </a>
            </Link>
          </div>

          <div className="px-5 py-2">
           <Link to={'/gallery'}> <a  className="text-base text-SixteenWhite hover:text-SixteenGold"> 
            Gallery
            </a>
            </Link>
          </div>
       
      </nav>

      <div className="mt-8 flex justify-center space-x-6">
       
          <a  className="text-SixteenWhite hover:text-SixteenGold">
            <span className="sr-only">Something</span>
          <BsFacebook size={30} fill='currentColor' />
          </a>

          <a  className="text-SixteenWhite hover:text-SixteenGold">
            <span className="sr-only">Something</span>
          <BsInstagram size={30} fill='currentColor' />
          </a>

          <a  className="text-SixteenWhite hover:text-SixteenGold">
            <span className="sr-only">Something</span>
          <BsTwitterX size={30} fill='currentColor' />
          </a>
       
      </div>
      <p className="mt-8 text-center text-base text-SixteenWhite">
        &copy; 2023 Sixteen47 Ghana, LTD. All rights reserved.
      </p>
    </div>
  </footer>

    
  )
}

export default Footer
