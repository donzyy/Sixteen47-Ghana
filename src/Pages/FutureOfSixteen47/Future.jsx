import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleFuture from '../../Components/HeaderTitleFuture'

function Future() {
    const futurePhotos = [
        {
            imageUrl: '/FutureImages/Future1.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future2.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future3.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future4.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future5.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future6.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future7.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future8.png',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future9.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future10.jpg',
            imageDescription: 'Sixteen47 Future',
        },
        {
            imageUrl: '/FutureImages/Future11.jpg',
            imageDescription: 'Sixteen47 Future',
        },
    ]
  return (
    <DefaultLayout>
        <HeaderTitleFuture />
        <div className='my-5 grid grid-cols-2 md:grid-cols-3 gap-4'>
       {futurePhotos.map((items, index) => (
        <div key={index}>
            <img  className='h-auto max-w-full rounded-lg' src={items.imageUrl} alt={items.imageDescription} />
        </div>
        ))}
       </div>
    </DefaultLayout>
  )
}

export default Future
