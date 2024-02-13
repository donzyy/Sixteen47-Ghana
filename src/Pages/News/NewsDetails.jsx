import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { useLocation, useParams } from 'react-router-dom'

function NewsDetails() {
  //const {id} = useParams();
  const { state } = useLocation();
  const { coverImg, broadcastTitle, broadcastContent, broadcastImageDescription } = state;

  
  return (
    <DefaultLayout>
      <div className='w-full pb-10 bg-white'>
        <div className='max-w-[1240px] mx-auto'>
          
          <div className=' grid lg:grid-cols-3 sm:grid-cols-3 xsm:grid-cols-1 md:gap-8 sm:gap-y-8 xsm:gap-y-8 px-4 sm:pt-20 md:mt-0 xsm:pt-20 text-black'>

            
            <div className='col-span-2'>
              <img className='h-56 w-full object-cover' src={`http://localhost:1337${coverImg.data.attributes.url}`} alt={broadcastImageDescription} />
              <h1 className='font-bold text-2xl my-1 pt-5'>{broadcastTitle}</h1>
              <div className='pt-5'>
                <p>{broadcastContent}</p>
              </div>
            </div>
           

          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default NewsDetails
