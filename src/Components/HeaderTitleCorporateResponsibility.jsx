import React from 'react'

function HeaderTitleCorporateResponsibility() {
  return (
    <div className="relative bg-SixteenGold">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          /* src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" */
          /* src='/Images/Sixteen47-Ghana-Header3.jpg' */
          /* src='http://localhost:1337/uploads/Sixteen47_Ghana_Header3_7d4bc43124.jpg' */
          src='/00 - Pictures/Copia di _DSF0528.jpg'
          alt=""
        />
        <div className="absolute inset-0 bg-SixteenGold mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Corporate Social Responsibility</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
        Sixteen47 is dedicated to upholding social responsibility by actively engaging in sustainability initiatives, community participation, and responsible governance practices.
        </p>
      </div>
    </div>
  )
}

export default HeaderTitleCorporateResponsibility
