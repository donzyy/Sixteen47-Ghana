import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'

function NewsDetails() {
  return (
    <DefaultLayout>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-4">Exploring the Wonders of React</h1>

      {/* Blog Image */}
      <img
        className="w-full h-64 object-cover object-center rounded-md mb-6"
        src="https://placekitten.com/1200/600"
        alt="Blog Cover"
      />

      {/* Blog Description */}
      <div className="prose max-w-none mb-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum enim ut dui bibendum, in varius
          augue aliquet. Donec tincidunt est vel odio aliquet, ut convallis turpis posuere.
        </p>
        <p>
          Sed condimentum nunc vel tortor venenatis, sit amet ultrices velit commodo. Fusce vestibulum odio et
          lobortis bibendum. Proin ut mi nec turpis bibendum pharetra. Nam vel facilisis lectus.
        </p>
        {/* Add more paragraphs as needed */}
      </div>

      {/* Recommended Reads */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended Reads</h2>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <img
              className="w-full h-40 object-cover object-center rounded-md mb-2"
              src="https://placekitten.com/800/500"
              alt="Recommended Read 1"
            />
            <p className="text-gray-600">10 Tips for Efficient React Development</p>
          </li>
          <li>
            <img
              className="w-full h-40 object-cover object-center rounded-md mb-2"
              src="https://placekitten.com/801/500"
              alt="Recommended Read 2"
            />
            <p className="text-gray-600">Building Scalable React Applications</p>
          </li>
          <li>
            <img
              className="w-full h-40 object-cover object-center rounded-md mb-2"
              src="https://placekitten.com/802/500"
              alt="Recommended Read 3"
            />
            <p className="text-gray-600">React Hooks: A Comprehensive Guide</p>
          </li>
        </ul>
      </div>
    </div>
    </DefaultLayout>
  )
}

export default NewsDetails
