import React from 'react'

function StatsboardLanding() {
  return (
    <div className="bg-SixteenGold">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quick Overview
          </h2>
          <p className="mt-3 text-xl text-SixteenBlack sm:mt-4">
            This entails everything from our production capacity to our service fulfilment
          </p>
        </div>
        <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-SixteenBlack">Production Capacity(Month)</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">12k Units</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-SixteenBlack">Machine Capacity</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">200+</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-SixteenBlack">Direct/Indirect Staff</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">73% / 27%</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default StatsboardLanding
