import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { Link } from 'react-router-dom'
import LogoCloud from '../../Components/LogoCloud'
import FAQ2 from '../FAQ/FAQ2'
import AboutUsLanding from '../../Components/AboutUsLanding'
import StatsboardLanding from '../../Components/StatsboardLanding'
import GalleryLanding from '../../Components/GalleryLanding'


function LandingPage() {

  

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="bg-white">
      <div className="relative bg-gray-900">

        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            /* src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" */
            src="/Images/Sixteen47-Ghana-Hero.jpg"
            alt="Sixteen47-Ghana Hero Image"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
            while they're still in stock.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>
    </div>
    {/* Hero Section */}

    {/* Gallery Section */}
    <GalleryLanding /> 
    {/* Gallery Section */}

   {/* Stat Board */}
   <StatsboardLanding/>
   {/* Stat Board */}

      {/* About Us Landing */}
      <AboutUsLanding />
      {/* About Us Landing */}

      {/* FAQ */}
      {/* <FAQ2/> */}
      {/* FAQ */}

      {/* LogoCloud */}
      <LogoCloud />
      {/* LogoCloud */}
   
    </DefaultLayout>
  )
}

export default LandingPage
