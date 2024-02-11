import React from 'react'

function HeaderTitleNews() {
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
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">News</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
        Dive into the latest happenings with Sixteen47 News – where fashion meets updates.
        Stay in the loop with our innovative releases, sustainability initiatives, and everything that defines the pulse of style.
        </p>
      </div>
    </div>
  )
}

export default HeaderTitleNews
