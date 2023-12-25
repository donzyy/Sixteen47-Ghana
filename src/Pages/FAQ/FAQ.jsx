import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { Disclosure } from '@headlessui/react'
import { BsChevronDown, BsChevronUp, BsPlusLg, BsPlusSquare } from 'react-icons/bs'


function FAQ() {
    const faqs = [
        {
          question: "What's the best thing about Switzerland?",
          answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        // More questions...
      ]

  return (
    <DefaultLayout>

        {/* Header Tile */}
        <div className="relative bg-SixteenGold">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          /* src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" */
          src='/Images/Sixteen47-Ghana-Header4.jpg'
          alt=""
        />
        <div className="absolute inset-0 bg-SixteenGold mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
    {/* Header Tile */}

    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <BsChevronUp className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <BsChevronDown className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>

    </DefaultLayout>
  )
}

export default FAQ
