import React from 'react'
import { Link } from 'react-router-dom'

function CorporateResponsibilityLanding() {
    const responsibility = {
        corporateIncentives: [
             {
                name: 'Vision',
                imageSrc: 'https://cdn-icons-png.freepik.com/256/2421/2421304.png',
                description: "To lead, provide best quality products and services to our global customers in fulfilment of our corporate creed of making good clothes in a good way",
            },
            {
                name: 'Mission',
                imageSrc: 'https://cdn-icons-png.freepik.com/256/3176/3176382.png',
                description: "To drive product innovation, offer superior design, quality and added values to our business partners and customers",
            },
           {
                name: 'Ethics',
                imageSrc: 'https://cdn-icons-png.freepik.com/256/10966/10966244.png?semt=ais',
                description: "We take pride in achieving recognition for our responsible practices, having met Ethical trading Initiative requirements, we a proud member of sedex . We are ISO9001,2015 certified these were achieved with regular audits conducted by relevant organizations further validate our dedication to ethical and socially responsible operations.",
            },
        ],
        corporateResponsibilityAndTitle: [ 
            {
            title:'Corporate Responsibility',
            description: 'Sixteen47 Ghana is committed to making a positive impact on society through our Corporate Social Responsibility initiatives, focusing on sustainable development, community engagement, and environmental stewardship. We believe in contributing to a brighter and more equitable future for all.',
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
                        <h3 className='text-sm font-semibold text-gray-900'>
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
                    <Link className='bg-SixteenBlack text-white hover:bg-SixteenGold rounded px-4 py-4' to={'/corporateresponsibility'}>Read More</Link>
                </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateResponsibilityLanding
