import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'

function AboutUs() {
    const features = [
        {
          name: 'Sleek design',
          description:
            'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
        },
        { name: 'Comfort handle', description: 'Shaped for steady pours and insulated to prevent burns.' },
        {
          name: 'One-button control',
          description:
            'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
        },
        { name: 'Long spout', description: "Designed specifically for controlled pour-overs that don't slash or sputter." },
      ]

  return (
    <DefaultLayout>

        {/* Header Tile */}
        <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          /* src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" */
          src='/Images/Sixteen47-Ghana-Header1.jpg'
          alt=""
        />
        <div className="absolute inset-0 bg-SixteenGold mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
        <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
        </p>
      </div>
    </div>
    {/* Header Tile */}


    {/* <div className="my-5 relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 className="font-semibold leading-6 text-indigo-600">Work with us</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Our Process</h3>
            <p className="mt-8 text-lg text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
            <div className="prose prose-indigo mt-5 text-gray-500">
              <p>
                Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget
                pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
              </p>
              <p>
                Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
                fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
              </p>
              <p>
                Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
              </p>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
              </p>
              <h3>How we’re different</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus,
                eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare
                suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}


{/* <div className="bg-white">
      <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="font-medium text-gray-500">Machined Kettle</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Elegant simplicity</p>
            </div>

            <dl className="mt-10 space-y-10">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

<div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              Leatherbound Daily Journal
            </h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
            <p className="mt-4 text-gray-500">
              We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
              use.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>

    </DefaultLayout>
  )
}

export default AboutUs
