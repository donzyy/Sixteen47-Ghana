import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { Link } from 'react-router-dom'
import HeaderTitleNews from '../../Components/HeaderTitleNews'
import axios from 'axios'


function NewsMain2() {
    const [news, setNews] = useState([]);

  useEffect(() => {
    /* const apiUrl = 'https://lobster-app-yyv7h.ondigitalocean.app/api/broadcasts?populate=*'; */
    const apiUrl = 'https://sixteen-strapi-cms-jwfvf.ondigitalocean.app/api/broadcasts?populate=*'

    axios.get(apiUrl)
      .then((response) => {
        console.log('Data:', response.data);
        
        // Check if the response data contains "data" and is an array
        if (response.data && Array.isArray(response.data.data)) {
          setNews(response.data.data); // Update the state with the fetched data
        } else {
          console.error('Invalid data format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures the effect runs once when the component mounts

  return (
    <DefaultLayout>
        <HeaderTitleNews />
        <div className='container my-24 mx-auto md:px-6'>
            <section className='mb-32 text-center md:text-left'>
                <h2 className='mb-12 text-center text-3xl font-bold'>Our Latest News Updates</h2> 
                {news.map((items) => (
                <div key={items.id} className='mb-6 flex flex-wrap'>
                    <div className='mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12'>
                        <div className='relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg'>
                            <img className='"w-full' src={`https://sixteen-strapi-cms-jwfvf.ondigitalocean.app${items.attributes.coverImg.data.attributes.url}`} alt={items.attributes.broadcastImageDescription} />
                            <Link to={`/newsdetail/${items.id}`} state={items.attributes}>
                                <div className='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[#d3e05c44]'></div>
                            </Link>
                        </div>
                    </div>

                    <div className='mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12'>
                        <h5 className='mb-3 text-lg font-bold'>{items.attributes.broadcastTitle}</h5>
                        <p className='mb-6 text-SixteenGold'><small>Date: {items.attributes.broadcastDate}</small></p>
                        <p className='text-neutral-500 '>{items.attributes.broadcastDescription}</p>
                    </div>
                </div>
                ))}
            </section>
        </div>
    </DefaultLayout>
  )
}

export default NewsMain2
