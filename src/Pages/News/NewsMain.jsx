import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleNews from '../../Components/HeaderTitleNews'
import axios from 'axios'

function NewsMain() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://lobster-app-yyv7h.ondigitalocean.app/api/broadcasts?populate=*';

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
       <div className='w-full bg-white py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black'>

            {news.map((items) => (
            <Link to={`/newsdetail/${items.id}`} key={items.id} state={items.attributes}>
            <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
              <img className='h-56 w-full object-cover' src={`https://lobster-app-yyv7h.ondigitalocean.app${items.attributes.coverImg.data.attributes.url}`} alt={items.attributes.broadcastImageDescription} />
              <div className='p-8'>
                <h3 className='font-bold text-2xl my-1'>{items.attributes.broadcastTitle}</h3>
                <p className='text-gray-600 text-xl'> {items.attributes.broadcastDescription}</p>
                <span className='block text-SixteenGold text-sm mt-1'>{items.attributes.broadcastDate}</span>
              </div>
            </div>
            </Link>
            ))}

          </div>
        </div>
       </div>
    </DefaultLayout>
  )
}

export default NewsMain
