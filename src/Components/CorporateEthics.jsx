import React from 'react'

function CorporateEthics() {
  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                alt=""
                src="https://img.freepik.com/free-vector/hand-drawn-business-ethics_23-2148754603.jpg?w=996&t=st=1707311718~exp=1707312318~hmac=75c622fd4fcb9d369fc6b89567b546b33fe72d8d345a3b04e835eff4f4bb8a63"
                className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="lg:py-24">
                <h2 className="text-3xl font-bold sm:text-4xl">Ethics</h2>

                <p className="mt-4 text-gray-600">
                At Sixteen47, our commitment extends to considering the needs of all stakeholders: our local community, dedicated employees, and valued buyers. Our policies and practices are designed to uphold the highest standards of ethical conduct, ensuring compliance with the laws and regulations of the countries and regions where we operate.
                We take pride in achieving recognition for our responsible practices, having met Ethical trading Initiative requirements, we a proud member of sedex . We are ISO9001,2015 certified these were achieved with regular audits conducted by relevant organizations further validate our dedication to ethical and socially responsible operations.
                </p>

            {/*  <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Get Started Today
                </a> */}
            </div>
            </div>
        </div>
  </section>
  )
}

export default CorporateEthics
