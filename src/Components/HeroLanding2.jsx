import React from 'react'
import { Link } from "react-router-dom"
import {BsChevronLeft, BsChevronRight, BsCircle} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination,Autoplay,} from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import 'swiper/css'
import '../Components/styles.css'


function HeroLanding2() {
  const carouselData = [
    {
      imageUrl: '/00 - Pictures/Copia di _DSF0205.jpg',
      /* imageUrl: '/leio-mclaren-9NVEXH3Q4fg-unsplash.jpg', */
      heroTitle: 'Hero Title 1',
      heroDescription: 'Hero Description 1',
      buttonLink: '/aboutus',
      buttonLabel: 'Button 1',
    },
    {
      imageUrl: '/00 - Pictures/Copia di _DSF0238.jpg',
      heroTitle: 'Hero Title 2',
      heroDescription: 'Hero Description 2',
      buttonLink: '/aboutus',
      buttonLabel: 'Button 2',
    },
    {
      imageUrl: '/00 - Pictures/Copia di _DSF0275.jpg',
      heroTitle: 'Hero Title 3',
      heroDescription: 'Hero Description 3',
      buttonLink: '/aboutus',
      buttonLabel: 'Button 3',
    },
  ]

  const swiperSettings = {
    spaceBetween: 1,
    slidesPerView: 1,
    modules: [Navigation, Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
     
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    loop: true,
    autoplay: {
      delay: 5000,
    }
  }
  
  
  return (
    <Swiper {...swiperSettings} className='mySwiper'>
      {carouselData.map((items, index) => (
    <div key={index} className='bg-white'>
      <div className='relative bg-gray-900'>
        <SwiperSlide key={items.heroTitle}>
        <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
          <img src={items.imageUrl} alt={items.heroTitle} />
        </div>
        <div aria-hidden='true' className='absolute inset-0 bg-gray-900 opacity-50' /> 

        <div className='relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0'>
          <h1 className='text-4xl font-bold tracking-tight text-white lg:text-6xl'> {items.heroTitle} </h1>
          <p className='mt-4 text-xl text-white'> {items.heroDescription} </p>
          <Link to={items.buttonLink} className='mt-8 inline-block rounded-md border border-transparent bg-SixteenGold py-3 px-8 text-base font-medium text-SixteenWhite hover:bg-SixteenGold'> {items.buttonLabel} </Link>
        </div>
        </SwiperSlide>
      </div>
    </div>
    ))}
    <div className='swiper-button-next text-white'>
      <BsChevronLeft size={23} />
    </div>
    <div className='swiper-button-prev text-white'>
      <BsChevronRight size={23} />
    </div>
    <div className='swiper-pagination'>
      <BsCircle className='swiper-pagination-bullet' size={23} />
    </div>
    </Swiper>
  )
}

export default HeroLanding2
