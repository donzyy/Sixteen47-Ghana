import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

function FAQ2() {
    const faqs = [
        {
          question: "What's the best thing about Switzerland?",
          answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        // More questions...
      ]
  return (
    <>
    {/*  <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto -mt-5 sm:mt mb-7'>

   <div class="mx-auto max-w-7xl px-6 py-24 sm:py-12 lg:py-13 lg:px-8">
      <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
    </div>

    <div className='mx-auto py-5'>
      <details className='group'>
        <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
          <span className='font-semibold text-SixteenBlack text-2xl'>Frequently Asked Question</span>
          <span className='transition group-open:rotate-180  text-SixteenGold'><BsChevronDown size={24} shapeRendering='geometricPrecision'/></span>
        </summary>
        <p className='mt-4.5 group-open:animate-fadeIn'>Plenty Things are scaring me</p>
      </details>
    </div>


    

   </div> */}

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
    </>
  )
}

export default FAQ2
