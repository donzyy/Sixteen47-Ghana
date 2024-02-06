import React from 'react'

function MessageFromCEO() {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="bg-SixteenGold pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
            <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src="/2024_02_06_11_46_IMG_9407-copy.JPG"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  
                  <p className="mt-6 text-2xl font-medium text-white">
                  On behalf of the Sixteen47 Ghana Ltd team and myself, I extend a warm invitation for you to collaborate with us. As a prominent entity in Ghana, Sixteen47, led by myself Nura Salifu, is deeply committed to delivering top-notch, consistent, and timely garments with an enduring focus on sustainability and corporate responsibility.
                 With over 10 years of manufacturing experience, the management team at Sixteen47 possesses the expertise to cater to a diverse range of customer needs, from early development to bulk production.
                  Our company operates with a team of seasoned professionals and boasts a well-equipped manufacturing facility, including advanced cutting and finishing departments.
                  I invite you to explore the potential of Sixteen47 Ghana Ltd in sourcing to supply and deliver world-class finished apparel and garment solutions for both youth and adults.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">Nura Salifu</p>
                  <p className="text-base font-medium text-indigo-100">CEO at Sixteen47</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageFromCEO
