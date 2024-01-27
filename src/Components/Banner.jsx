import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Banner() {
    const contactInformation = [
        {Email: "Test Email", Phone: "+233 504 040 4944"},
    ]

    const socialMedial = [
        {icon:<BsFacebook size={22} />,  path: "https://www.facebook.com"},
        {icon:<BsInstagram size={22} />, path: "https://www.instagram.com"},
        {icon:<BsTwitterX size={22} />,  path: "https://www.twitter.com"},
        {icon:<BsTiktok size={22} />,  path: "https://www.tiktok.com"}
    ]

  return (
    <div className="relative bg-SixteenBlack hidden md:block">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            {/* <span className="hidden md:inline mr-7">We announced a new product!</span> */}
            {contactInformation.map((item, index) => (
            <span key={index} className="hidden md:inline">Email: {item.Email} | Office Telephone: {item.Phone} </span>
            ))}
          </p>
        </div>
        
        <div className='absolute inset-y-0 right-0 gap-5 flex items-start pt-1 mt-2 pr-1 sm:items-start sm:pt-1 sm:pr-2'>
           {/* <Link to="" ><BsFacebook size={22} className='text-white hover:text-SixteenGold' fill='currentColor' /></Link>
            <Link to=""><BsInstagram size={22} className='text-white hover:text-SixteenGold' fill='currentColor' /></Link>
            <Link to="" ><BsTwitterX size={22} className='text-white hover:text-SixteenGold' fill='currentColor' /></Link> */}
            {socialMedial.map((item, index) => (
                <a className='text-white hover:text-SixteenGold' target='_blank' rel='noopener noreferrer' fill='currentColor' key={index} href={item.path}> {item.icon} </a>
            ))}
        </div>  

      </div>
    </div>
  )
}

export default Banner
