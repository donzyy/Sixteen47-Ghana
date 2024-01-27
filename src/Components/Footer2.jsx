import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsTwitch, BsTwitterX } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Footer2() {

  const companyDescriptionAndLogo = [
    {logo:"/sixteen47.jpg", description:"Sixteen47 is a company that is based in ghana and its manging it's self well." },
  ]

  const socialMedia = [
    {icon: <BsFacebook size={22}/> , path: "https://www.facebook.com"},
    {icon: <BsInstagram size={22}/> , path: "https://www.instagram.com"},
    {icon: <BsTwitterX size={22}/> , path: "https://www.twitter.com"},
    {icon: <BsTiktok size={22}/> , path: "https://www.tiktok.com"},
  ]


  const footerNav = [
    {
      title: "Quick Links",
      links: [
        {
          linkName: "Home",
          path: "/"
        },
        {
          linkName: "About Us",
          path: "/"
        },
        {
          linkName: "Corporate Responsibility",
          path: "/"
        },
        {
          linkName: "News",
          path: "/"
        },
      ]
    },
    {
      title: "Quick Links",
      links: [
        {
          linkName: "Gallery",
          path: "/"
        },
        {
          linkName: "Contact Us",
          path: "/"
        },
        {
          linkName: "FAQ",
          path: "/"
        },
        {
          linkName: "Get a Quote",
          path: "/"
        },
      ]
    },
    {
      title: "Company Information",
      links: [
        {
          Email: "Email: Test@test.com",
        },
        {
          Phone: "Comapny Number: +233 434 434 2332",
        },
        {
          Location: "Location: Somewhere in Ghana",
        },
        {
          Something: "Something like that",
        },
      ]
    },
    /* {
      title: "Enquires",
      links: [
        {
          linkName: "Get a Quote",
          path: "/"
        },
      ]
    }, */
  ]

  return (
    <>
    <footer className='text-white bg-SixteenBlack px-4 py-5  mx-auto md:px-8'>
      <div className='gap-6 justify-between md:flex'>

        <div className='flex-1'>

          <div className='max-w-xs'>
            {companyDescriptionAndLogo.map((item, index) => (
            <div key={index}>
            <img src={item.logo} alt="" className='w-32' />
            <p className='leading-relaxed mt-2 text-[15px]'>
              {item.description}
            </p>
            </div>
            ))}
          </div>
          

          {/* <form onSubmit={(e) => e.preventDefault()} action="">
            <label className='block pt-4 pb-2' htmlFor="">Something for the vanishing</label>
            <div className='max-w-sm flex items-center border rounded-md p-1'>
              <input type="email" className='w-full p-2.5 outline-none' placeholder='' />
              <button className='p-2.5 rounded-md text-black bg-SixteenGold outline-none shadow-md focus:shadow-none sm:px-5'>Subscribe</button>
            </div>
          </form> */}
          </div>
          
          <div className='flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0'>
            {footerNav.map((item, index) => (
              <ul key={index} className='space-y-4'>
                <h4 className='text-white underline font-bold relative'>{item.title}</h4>
                {item.links.map((el, elIndex) => (
                  <li key={elIndex}>
                    {el.path ? (
                      <Link to={el.path} className='hover:text-SixteenGold'>
                        {el.linkName}
                      </Link>
                    ) : (
                      // Assuming it's a string value like "Email", "Phone", "Location"
                      <span>{el[Object.keys(el)[0]]}</span>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        
      <div className='mt-8 py-6 border-t items-center justify-between sm:flex'>

        <div className='mt-4 sm:mt-0'>
        &copy; 2023 Sixteen47 Ghana, LTD. All rights reserved.
        </div>

        <div className='mt-6 sm:mt-0'>
          <ul className='flex items-center space-x-4'>
          {socialMedia.map((item, index)=> (
            <li key={index} className='w-10 h-10 border rounded-full flex items-center justify-center fill-current hover:text-SixteenGold'>
              <a href={item.path} target='_blank' rel='noopener noreferrer'>
                {item.icon}
              </a>
            </li>
             ))}
          </ul>
        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer2
