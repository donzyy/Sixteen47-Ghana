import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function NewsLanding() {
    const newsPost = [
        {
            title: 'What is SaaS? Software as a Service Explained',
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
            img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            date: 'Jan 4 2022',
            href: 'javascript:void(0)',
        },
        {
            title: 'What is SaaS? Software as a Service Explained',
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
            img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            date: 'Jan 4 2022',
            href: 'javascript:void(0)',
        },
        {
            title: 'What is SaaS? Software as a Service Explained',
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
            img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            date: 'Jan 4 2022',
            href: 'javascript:void(0)',
        },
        {
        title: "What is SaaS? Software as a Service Explained",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "Jan 4 2022",
        href: "javascript:void(0)"
        },
        {
            title: "What is SaaS? Software as a Service Explained",
            desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
            },
            {
                title: "What is SaaS? Software as a Service Explained",
                desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
                img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                date: "Jan 4 2022",
                href: "javascript:void(0)"
                },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust the number of slides to show based on your design
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
    }

  return (
    <>
    {/* <section className='py-32'>
        <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
            <div className='space-y-5 sm:text-center sm:max-w-md sm:mx-auto'>
                <h1 className='text-gray-800 text-3xl font-extrabold sm:text-4xl'>News Posts</h1>
            </div>
            
            <ul className='grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3'>
             <Slider {...settings}>
                {newsPost.map((items,index) => (
                <li key={index} className='w-full mx-auto group sm:max-w-sm'>
                    <Link to={items.href}>
                    <img className='w-full rounded-lg' src={items.img} alt={items.title} />
                    <div className='mt-3 space-y-2'>
                        <span className='block text-SixteenGold text-sm'>{items.date}</span>
                        <h3 className='text-lg text-gray-800 duration-150 group-hover:text-SixteenGold font-semibold'>{items.title}</h3>
                        <p className='text-gray-600 text-sm duration-150 group-hover:text-gray-800'>{items.desc}</p>
                    </div>
                    </Link>
                </li>
                ))}
                </Slider>
            </ul>
            

            <div className='flex justify-center mt-8'>
                <Link to={''} className='px-6 py-3 text-white bg-SixteenBlack rounded-md hover:bg-SixteenGold'>
                    View More
                </Link>
            </div>
        </div>
    </section> */}

    {/* <div className='w-3/4 m-auto'>
        <div className='mt-20'></div>
    </div> */}

<section className='py-32'>
      <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className='space-y-5 sm:text-center sm:max-w-md sm:mx-auto'>
          <h1 className='text-gray-800 text-3xl font-extrabold sm:text-4xl'>News Posts</h1>
        </div>
        <Slider {...settings}>
          {newsPost.map((item, index) => (
            <div key={index} className='w-full mx-auto group sm:max-w-sm'>
              <Link to={item.href}>
                <img className='w-full rounded-lg' src={item.img} alt={item.title} />
                <div className='mt-3 space-y-2'>
                  <span className='block text-SixteenGold text-sm'>{item.date}</span>
                  <h3 className='text-lg text-gray-800 duration-150 group-hover:text-SixteenGold font-semibold'>{item.title}</h3>
                  <p className='text-gray-600 text-sm duration-150 group-hover:text-gray-800'>{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex justify-center mt-8'>
                <Link to={''} className='px-6 py-3 text-white bg-SixteenBlack rounded-md hover:bg-SixteenGold'>
                    View More
                </Link>
            </div>
    </section>
    </>
  )
}

export default NewsLanding
