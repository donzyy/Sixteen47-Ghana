import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleContactUs from '../../Components/HeaderTitleContactUs'
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs'


function ContactUs() {
  return (
    
    
    <DefaultLayout>
      
      <HeaderTitleContactUs />

    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">

        <div className="divide-y-2 divide-gray-200">
            
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Get in touch</h2>

            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div className='border px-6 py-auto pt-1 pb-1 border-SixteenGold'>

                <h3 className="text-lg font-medium leading-6 text-gray-900">Office Telephone</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    {/* <dt className="sr-only">Email</dt> */}
                    <dd>+233 55 022 7615</dd>
                  </div>
                  {/* <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div> */}
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Email</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    {/* <dt className="sr-only">Email</dt> */}
                    <dd>infosixteen47@gmail.com</dd>
                  </div>
                  {/* <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div> */}
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Websites</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    {/* <dt className="sr-only">Email</dt> */}
                    <dd><a href="https://sixteen47store.com/" target='_blank' rel='noopener noreferrer' className=' hover:text-SixteenGold'>sixteen47store.com</a></dd>
                  </div>
                  {/* <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div> */}
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Social Media Handles</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    {/* <dt className="sr-only">Email</dt> */}
                    <dd className='flex justify-start gap-1 hover:text-SixteenGold'><BsFacebook  size={23} /><a href="https://web.facebook.com/Sixteen47Ghana/" target='_blank' rel='noopener noreferrer'>Sixteen47Ghana </a></dd>
                    <dd className='flex justify-start mt-2 gap-1 hover:text-SixteenGold'><BsInstagram  size={23} /><a href="https://www.instagram.com/sixteen47store/" target='_blank' rel='noopener noreferrer'>sixteen47store </a></dd>
                    <dd className='flex justify-start mt-2 gap-1 hover:text-SixteenGold'><BsTiktok  size={23} /><a href="https://www.tiktok.com/@sixteen47official" target='_blank' rel='noopener noreferrer'>sixteen47official </a></dd>
                    <dd className='flex justify-start mt-2 gap-1 hover:text-SixteenGold'><BsYoutube  size={23} /><a href="https://www.youtube.com/@sixteen47ghltd" target='_blank' rel='noopener noreferrer'>sixteen47ghltd </a></dd>
                  </div>
                  {/* <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div> */}
                </dl>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Locations</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Physical Location</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>47 Kwame Nkrumah Avenue Adjabeng, Freezone Enclave</p>
                  {/* <p className="mt-1">Los Angeles, CA 90210</p> */}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Ghana Post Digital Location</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>GA-105-8740</p>
                  {/* <p className="mt-1">New York, NY 12345</p> */}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Postal Address</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>CT1104-Accra-Cantoments,</p>
                  <p className="mt-1">Greater Accra Region</p>
                </div>
              </div>
              {/* <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Chicago</h3>
                <div className="mt-2 text-base text-gray-500">
                  <p>726 Mavis Island</p>
                  <p className="mt-1">Chicago, IL 60601</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </DefaultLayout>
    
  
   
   
  )
}

export default ContactUs
