import React from 'react'

const HeaderTitleContactUs = () => {
  return (
    <div className="relative bg-gray-500">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="/00 - Pictures/Copia di _DSF0548.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
        Work with us! Contact us to learn more about sourcing from Sixteen47
        </p>
      </div>
    </div>
  )
}

export default HeaderTitleContactUs
