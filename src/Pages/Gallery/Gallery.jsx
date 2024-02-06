import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleGallery from '../../Components/HeaderTitleGallery'

function Gallery() {
    const galleryPhotos = [
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0205.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0238.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0275.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0312.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0329.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0339.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0396.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0454.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0457.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0466.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0471.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0504.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0528.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0537.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0548.jpg',
            imageDescription: 'An image',
        },
        {
            imageUrl: '/00 - Pictures/Copia di _DSF0568.jpg',
            imageDescription: 'An image',
        },
    ]
  return (
    <DefaultLayout>
       <HeaderTitleGallery />
       <div className='my-5 grid grid-cols-2 md:grid-cols-3 gap-4'>
       {galleryPhotos.map((items, index) => (
        <div key={index}>
            <img  className='h-auto max-w-full rounded-lg' src={items.imageUrl} alt={items.imageDescription} />
        </div>
        ))}
       </div>
    </DefaultLayout>
  )
}

export default Gallery
