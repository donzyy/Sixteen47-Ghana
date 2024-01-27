import React from 'react'

function AboutUsLanding() {
  const aboutUsInfo = {
    title: [
      {subtitle: 'What ever i feel like placing here',information: "All these plenty things about the work. I'm tired rough."}
    ]
  }

  return (
    <div className="bg-SixteenSlate">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {aboutUsInfo.title.map((item, index)=> (
            <div key={index}>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            About Us
            <br />
            {item.subtitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            {item.information}
          </p>
          </div>
          ))}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-sm bg-SixteenGold px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-SixteenGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-SixteenBlack"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsLanding
