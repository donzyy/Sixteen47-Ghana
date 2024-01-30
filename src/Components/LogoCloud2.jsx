import React from 'react'

function LogoCloud2() {
    const logo= [
        {logo: 'https://newsnowgh.com/wp-content/uploads/2021/01/Ghana_Army-1.jpg', desc: 'Ghana Army'},
        {logo: 'https://s3-eu-west-1.amazonaws.com/cdn1.mullenlowegroup.com/uploads/sites/59/2017/11/gtp-logo.png', desc: 'GTP'},
        {logo: '/sixteen47.jpg', desc: 'Sixteen47 Store'},
        {logo: 'https://npassnit.org/wp-content/uploads/2023/05/cropped-unnamed.png', desc: 'National Pensioners Association'},
        {logo: 'https://christiebrownonline.com/cdn/shop/files/CB_Logo_Black_225x.png?v=1675933421', desc: 'Christie Brown'},
        {logo: 'https://wearghana.com/wp-content/uploads/2023/11/wear-ghana-logo.png', desc: 'Wear Ghana'},
        {logo: 'https://static.wixstatic.com/media/13a8c9_67c5a808cc1a45a2bf3d86996216207d~mv2.png/v1/crop/x_585,y_837,w_2328,h_808/fill/w_152,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/13a8c9_67c5a808cc1a45a2bf3d86996216207d~mv2.png', desc: 'Appointed Time'},
        {logo: 'https://www.nsuomnam.com/wp-content/uploads/2023/08/NsuomNam_Logo_FINAL.svg', desc: 'Nsuomnam'},
    ]
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>Our Customers</h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            {logo.map((item, index) => (
            <img key={index} className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' width={158} height={48} src={item.logo} alt={item.desc} title={item.desc} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud2
