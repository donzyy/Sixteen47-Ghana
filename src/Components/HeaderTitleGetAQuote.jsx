import React from 'react'

function HeaderTitleGetAQuote() {
  return (
    <div className="relative bg-SixteenGold">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src='/00 - Pictures/Copia di _DSF0504.jpg'
          alt=""
        />
        <div className="absolute inset-0 bg-SixteenGold mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Get A Quote</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
        Unlock personalized solutions tailored to your needs by requesting a quote from Sixteen47. Whether you're looking for services, products, or solutions, our team is ready to assist you. Take the first step towards your goals with a customized quote that aligns with your requirements.
        </p>
      </div>
    </div>
  )
}

export default HeaderTitleGetAQuote
