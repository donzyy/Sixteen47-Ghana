import React from 'react'

function LogoCloud() {
    const logo= [
        {logo: 'https://static.wixstatic.com/media/32456b_5beaa430406943cdb20b66a6dd1b8be8~mv2.jpg/v1/fill/w_123,h_61,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ETI.jpg', desc: 'Ethical Training Initiative'},
        {logo: 'https://static.wixstatic.com/media/4c5401_fd8349e292914d3c87ac369808b35f1c~mv2.png/v1/crop/x_84,y_91,w_549,h_222/fill/w_135,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/USAID_Header_Post.png', desc: 'US AID'},
        {logo: 'https://static.wixstatic.com/media/32456b_5de348d9127a4d4cb6620de6814af612~mv2.jpg/v1/fill/w_142,h_61,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/sedex%20smeta.jpg', desc: 'Sedex'},
        {logo: 'https://static.wixstatic.com/media/4c5401_003af69a13524088b8a9521ffaf49e6b~mv2.jpg/v1/fill/w_81,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GIZ.jpg', desc: 'GIZ'},
        {logo: 'https://www.agamghana.org/wp-content/uploads/elementor/thumbs/AGAM-logo-qa7k39daha5xk0fw0vrdy9v8enxt9gd53cq5pfm3uo.png', desc: 'Association of Ghana Apparell Manufactures'},
        {logo: 'https://i0.wp.com/gamjobs.com/wp-content/uploads/2020/10/ILO.jpg?resize=200%2C133&ssl=1', desc: 'International Labour Organization'},
        {logo: 'https://www.yea.gov.gh/templates/yea/images/presets/preset1/logo.png', desc: 'Youth Employment Agency'},
        {logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ISO_9001-2015.svg/1200px-ISO_9001-2015.svg.png', desc: 'ISO 90001:2015'}

        /* {logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg'},
        {logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg'},
        {logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg'},
        {logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg'},
        {logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg'}, */
    ]
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>Our Partners</h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
            {logo.map((item, index) => (
            <img key={index} className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' width={158} height={48} src={item.logo} alt={item.desc} title={item.desc} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
