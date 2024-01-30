import React from 'react'
import { Link } from 'react-router-dom'

function CorporateResponsibilityLanding() {
    const responsibility = {
        corporateIncentives: [
             {
                name: 'A Corporate Responsibility',
                imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
                description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
            },
            {
                name: '10-year warranty',
                imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
                description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
            },
           {
                name: 'Exchanges',
                imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
                description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
            },
        ],
        corporateResponsibilityAndTitle: [ 
            {
            title:'Corporate Responsibility',
            description: 'Something plenty Information here.',
        },
      ]
    }

  return (
    <div className='bg-SixteenLightWhite'>
      <div className='mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4'>
        <div className='mx-auto max-w-2xl px-4 lg:max-w-none'>
            
            <div className='max-w-3xl'>
            {responsibility.corporateResponsibilityAndTitle.map((item, index) => (
                <div key={index}>
                <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
                     {item.title}
                </h2>
                <p className='mt-4 text-gray-500'>
                    {item.description}
                </p>
                </div>
                ))}
            </div>

            <div className='mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3'>
                {responsibility.corporateIncentives.map((item, index) => (
                <div key={index} className='sm:flex lg:block'>
                    <div className='sm:flex-shrink-0'>
                        <img className='h-16 w-16' src={item.imageSrc} alt="" />
                    </div>
                    <div className='mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0'>
                        <h3 className='text-sm font-medium text-gray-900'>
                            {item.name}
                        </h3>
                        <p className='mt-2 text-sm text-gray-500'>
                            {item.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>
            
            <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <Link className='bg-SixteenBlack text-white rounded px-4 py-4' to={''}>Read More</Link>
                </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateResponsibilityLanding
