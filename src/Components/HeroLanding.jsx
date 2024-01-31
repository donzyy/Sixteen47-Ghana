import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

function HeroLanding() {
    const carouselData = [
        {
            imageUrl: '/public/00 - Pictures/Copia di _DSF0205.jpg',
            title: 'Discover the Latest Collection',
            description: 'Explore our new arrivals and find the perfect pieces for your wardrobe.',
            buttonLink: '/',
            buttonLinkDescription: 'Do something here',
        },
        {
            imageUrl: '/public/00 - Pictures/Copia di _DSF0238.jpg',
            title: 'Discover the Latest Video',
            description: 'Explore our new arrivals and find the perfect pieces for your wardrobe.',
            buttonLink: '/',
            buttonLinkDescription: 'Do something here and thats it.',
        },
        {
            imageUrl: '/public/00 - Pictures/Copia di _DSF0275.jpg',
            title: 'Discover the Latest Video',
            description: 'Explore our new arrivals and find the perfect pieces for your wardrobe.',
            buttonLink: '/',
            buttonLinkDescription: 'Do something here and thats it.',
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    }

  return (
    <Slider {...settings}>
        {carouselData.map((items, index) => (
    <div key={index} className="bg-white">
      <div className="relative bg-gray-900">

        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            /* src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" */
            /* src="/Images/Sixteen47-Ghana-Hero.jpg" */
            src={items.imageUrl}
            /* alt="Sixteen47-Ghana Hero Image" */
            alt={`Hero Image ${index + 1}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">{items.title}</h1>
          <p className="mt-4 text-xl text-white">
            {items.description}
          </p>
          <Link
            to={items.buttonLink}
            className="mt-8 inline-block rounded-md border border-transparent bg-SixteenGold py-3 px-8 text-base font-medium text-SixteenWhite hover:bg-SixteenGold"
          >
            {items.buttonLinkDescription}
          </Link>
        </div>
      </div>
    </div>
    ))}
    </Slider>
  )
}

export default HeroLanding
