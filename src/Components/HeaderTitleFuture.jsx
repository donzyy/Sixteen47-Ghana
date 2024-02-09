import React from 'react'

function HeaderTitleFuture() {
  return (
    <div className="relative bg-SixteenGold">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          /* src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" */
          src='/FutureImages/Future1.jpg'
          alt=""
        />
        <div className="absolute inset-0 bg-SixteenGold mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Future Of Sixteen47</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
        Embark on a visionary journey with the 'Future of Sixteen47,' where timeless elegance meets cutting-edge innovation.
        Redefining fashion with a commitment to sustainability, Sixteen47 envisions a stylish future that transcends boundaries.
        </p>
      </div>
    </div>
  )
}

export default HeaderTitleFuture
