import React from 'react'
import { Link } from "react-router-dom"

function GalleryLanding() {
  const images = {
    firstSection: [
      {
        imgSrc: '/00 - Pictures/Copia di _APA0009.jpg',
        title: '',
        des: ''
      },
      {
        imgSrc: '/00 - Pictures/Copia di _DSF0528.jpg',
        title: '',
        des: ''
      },
    ],
    secondSection: [
      {
        imgSrc: '/01 - Product Pictures/Copia di QURI5368.jpg',
        title: '',
        des: ''
      },
      {
        imgSrc: '/00 - Pictures/Copia di _APA0021.jpg',
        title: '',
        des: ''
      },
      {
        imgSrc: '/00 - Pictures/Copia di _APA0054.jpg',
        title: '',
        des: ''
      },
    ],
    thirdSection: [
      {
        imgSrc: '/01 - Product Pictures/Copia di QURI5192.jpg',
        title: '',
        des: ''
      },
      {
        imgSrc: '/01 - Product Pictures/Copia di QURI5184.jpg',
        title: '',
        des: ''
      },
    ]
  }
  return (
    <div className="relative overflow-hidden bg-SixteenLightWhite">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              From Vision to Reality
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              A Gallery Exhibit of Sixteen47's Corporate and Government Ventures
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="/00 - Pictures/Copia di _APA0009.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/00 - Pictures/Copia di _DSF0528.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/01 - Product Pictures/Copia di QURI5368.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/00 - Pictures/Copia di _APA0021.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/00 - Pictures/Copia di _APA0054.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/01 - Product Pictures/Copia di QURI5192.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="/01 - Product Pictures/Copia di QURI5184.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to={'/gallery'}> <a className="inline-block rounded-md border border-transparent bg-SixteenBlack py-3 px-8 text-center font-medium text-white hover:bg-SixteenGold">
                Gallery
              </a> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryLanding
