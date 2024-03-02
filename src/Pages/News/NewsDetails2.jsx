import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { useLocation } from 'react-router-dom'

function NewsDetails2() {
   const { state } = useLocation();
  const { coverImg, broadcastTitle, broadcastContent, broadcastImageDescription } = state; 

  return (
    <DefaultLayout>
      <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white'>
        <div className='flex justify-between px-4 mx-auto max-w-screen-xl'>
          <article className='mx-auto w-full max-w-2xl'>
            <header className='mb-4 lg:mb-6'>
              <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl'>{broadcastTitle}</h1>
            </header>
            <p>{broadcastContent}</p>
            <p></p>
            <figure className='mt-2 w-auto h-auto rounded-lg overflow-hidden ring-1 ring-black/5'>
              <img src={`https://sixteen-strapi-cms-jwfvf.ondigitalocean.app${coverImg.data.attributes.url}`} alt={broadcastImageDescription} />
            </figure>
            <figcaption className='mt-2 text-center'>{broadcastImageDescription}</figcaption>
          </article>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default NewsDetails2
