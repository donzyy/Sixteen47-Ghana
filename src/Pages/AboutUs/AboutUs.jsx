import React, {useState} from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleAboutUs from '../../Components/HeaderTitleAboutUs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MessageFromCEO from '../../Components/MessageFromCEO'
import MessageFromCEO2 from '../../Components/MessageFromCEO2'
import YouTube from 'react-youtube'

function AboutUs() {
  const videoId = 'fFfv91UVT_A'

  return (
    <DefaultLayout>
      <HeaderTitleAboutUs />
      <section className='py-28 relative bg-white'>
        <div className='relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
          <div className='max-w-xl md:mx-auto'>
            <h1 className='text-black text-3xl font-semibold sm:text-4xl underline'>About Sixteen47 Ghana</h1>
            <p className='text-black text-xl mt-3'>
            Sixteen47 Ghana Ltd, an independent, family-run, and family-owned ethical garment manufacturer, proudly owns labels such as Oudrado, Swanky, and Sixteen47. Our operations are located in the heart of Accra, Ghana. With a dedicated workforce of 200 employees, we specialize in providing cutting, sewing, and finishing services, encompassing accessories and embroidery.
          Our commitment to ethical practices is evident in our manufacturing processes. Specializing in the production of t-shirts, uniforms, and fashion items for both youth and adults, we offer a versatile range of products. As a company with a global perspective, we ship our products worldwide, reaching customers across different regions.
          The central location in Accra positions us strategically, allowing us to play a pivotal role in the local community and contribute significantly to the global garment industry.
            </p>
          </div>
        </div>
      </section>

      <MessageFromCEO2 />

      <section className='py-28 relative bg-white'>
        <div className='relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
          <div className='max-w-xl md:mx-auto'>
            <h1 className='text-black text-3xl font-semibold sm:text-4xl underline'>Our History</h1>
            <p className='text-black text-xl mt-3'>
            Sixteen47 Ghana Limited, is a wholly Ghanaian-owned enterprise specializing in apparel design, manufacturing, and export. With an impressive track record spanning two decades, Sixteen47 has traditionally specialized in the production of uniforms for esteemed clients such as the Forestry Commission, the Sanitation Agency, and the government's school uniform program within the local market. The Company has made its mark globally by exporting to renowned apparel brands including Harrods, Selfridges, House of Fraser, and The French and Teague label, all under the aegis of the Ghana Free Zone Authority license. In 2018, the old owner sold the company to Nura salifu and she has since been the CEO.
          However, the year 2019 brought an unforeseen challenge to the business landscape as the Covid-19 pandemic disrupted operations. In response to these circumstances, the current shareholders assumed control of the company in 2018, steering it towards a strategic realignment. This transformation entailed a deliberate shift in focus, with an emphasis on the development and production of high-quality woven products for the security services and other affordable apparel destined for the local market.
          The Company's resilience, adaptability, and commitment to delivering exceptional clothing solutions continue to underscore its mission and position within the apparel industry. With the ongoing commitment of the current shareholders and their forward-thinking approach, Sixteen47 remains dedicated to serving both local and global markets, making its mark as a leader in apparel design and manufacturing
            </p>
          </div>
        </div>
      </section>

      <section className='py-28 relative bg-SixteenSlate'>
        <div className='relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8'>
        <div className="bg-SixteenGold text-white py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold underline mb-4">Vision | Mission | Core Values</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="pt-4">
            <h2 className="text-2xl font-bold mb-2">Vision</h2>
            <p className="text-lg text-white">
            To lead, provide best quality products and services to our global customers in fulfilment of our corporate creed of making good clothes in a good way
            </p>
          </div>

          {/* Mission */}
          <div className="pt-4">
            <h2 className="text-2xl font-bold mb-2">Mission</h2>
            <p className="text-lg text-white">
            To drive product innovation, offer superior design, quality and added values to our business partners and customers
            </p>
          </div>

          {/* Core Values */}
          <div className="pt-4">
            <h2 className="text-2xl font-bold mb-2">Core Values</h2>
            <ul className='text-lg text-white'>
              <li>1.	Skill Enhancement and Training</li>
              <li>2.	Operational Efficiency</li>
              <li>3.	Market Competitiveness</li>
              <li>4.	Employee Satisfaction and Retention</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
      </section>

      

    

    <section className="py-28 relative bg-white">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
            <YouTube className='flex justify-center '  videoId= {videoId} />
            </div>
            <div className="absolute top-0 w-full h-full" ></div>
        </section>
    </DefaultLayout>
  )
}

export default AboutUs
