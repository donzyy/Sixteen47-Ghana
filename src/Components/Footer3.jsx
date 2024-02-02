import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Footer3() {
    const footerNav ={
        QuickLink1: [
            {name: 'Home', path: '/'},
            {name: 'About Us', path: '/aboutus'},
            {name: 'Corporate Responsibility', path: '/corporateresponsibility'},
            {name: 'News', path: '/d'},
        ],
        QuickLink2: [
            {name: 'Gallery', path: '/gallery'},
            {name: 'Contact Us', path: '/contactus'},
            {name: 'FAQ', path: '/faq'},
            {name: 'Get a Quote', path: '/quote'},
            {name: 'Meet the team', path: '/team'},
        ],
        companyInformation: [
            {Email: 'infosixteen47@gmail.com'},
            {companyNumber: '+233 55 022 7615'},
            {Location: '47 Kwame Nkrumah Avenue, Adabraka Accra, Ghana.'},
        ],
        /* menu4: [
            {something: '', something: ''},
            {something: '', something: ''},
            {something: '', something: ''},
            {something: '', something: ''},
        ], */
        socialMedia: [
            {icon: <BsFacebook size={22}/> , path: "https://www.facebook.com/Sixteen47Ghana/"},
            {icon: <BsInstagram size={22}/> , path: "https://www.instagram.com/sixteen47store/"},
            {icon: <BsTiktok size={22}/> , path: "https://www.tiktok.com/@sixteen47official"},
            {icon: <BsYoutube size={22}/> , path: "https://www.youtube.com/@sixteen47ghltd"},
        ],
        copyRightInformation: [
           {copyInfo:`© ${new Date().getFullYear()} Sixteen47 Ghana. All rights reserved.`,}
        ],
        logoAndDescription: [
            {logo:"/sixteen47.jpg", description:'Sixteen47 is an online platform that connects business and plenty extra stuff.'}
        ],
    }

  return (
    <footer className='bg-SixteenBlack' aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>Footer</h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32'>

            <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                <div className='space-y-8'>
                    {footerNav.logoAndDescription.map((item,index) => (
                    <div key={index}>
                    <img className='h-25' src={item.logo} alt="Sixteen47 Logo" />
                    <p className='text-sm leading-6 text-SixteenWhite'>{item.description}</p>
                    </div>
                    ))}

                    <div className='flex space-x-6'>
                        {footerNav.socialMedia.map((item, index) => (

                        <a key={index} href={item.path} target='_blank' rel='noopener noreferrer' className="text-SixteenWhite hover:text-SixteenGold">
                            {/* <span className='sr-only'>{item.icon}</span> */}
                            {item.icon}
                        </a>
                        ))}
                    </div>
                </div>

                <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
                    <div className='md:grid md:grid-cols-2 md:gap-8'>
                        <div>
                            <h3 className='text-sm font-semibold leading-6 text-SixteenWhite underline'>Quick List</h3>
                            <ul role='list' className='mt-6 space-y-4'>
                                {footerNav.QuickLink1.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className='text-sm leading-6 text-SixteenWhite hover:text-SixteenGold'>{item.name}</Link>
                                </li>
                                 ))}
                            </ul>
                        </div>

                        <div className='mt-10 md:mt-0'>
                            <h3 className='text-sm font-semibold leading-6 text-SixteenWhite underline'>Quick List</h3>
                            <ul className='mt-6 space-y-4' role='list'>
                                {footerNav.QuickLink2.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className='text-sm leading-6 text-SixteenWhite hover:text-SixteenGold'>{item.name}</Link>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='md:grid md:grid-cols-2 md:gap-8'>
                        <div>
                            <h3 className='text-sm font-semibold leading-6 text-SixteenWhite underline'>Company Information</h3>
                            <ul role='list' className='mt-6 space-y-4'>
                                {footerNav.companyInformation.map((item, index) => (
                                <li key={index}>
                                    <p className='text-sm leading-6 text-SixteenWhite'>{item.Email} {item.Location} {item.companyNumber} </p>
                                </li>
                                ))}
                            </ul>
                        </div>

                        {/* <div className='mt-10 md:mt-0'>
                            <h3 className='text-sm font-semibold leading-6 text-SixteenWhite underline'>Menu 4</h3>
                            <ul role='list' className='mt-6 space-y-4'>
                                <li>
                                    <Link className='text-sm leading-6 text-SixteenWhite hover:text-SixteenGold'>Iterate and map over here</Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>

                </div>
            </div>

            <div className='mt-16 border-t border-SixteenWhite pt-8 sm:mt-20 lg:mt-24'>
                <div>
                {footerNav.copyRightInformation.map((item, index) => (
                <p key={index} className='text-xs leading-5 text-SixteenWhite'>{item.copyInfo}</p>
                ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer3
