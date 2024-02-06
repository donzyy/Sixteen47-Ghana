import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleMeetTeam from '../../Components/HeaderTitleMeetTeam'

function Team() {
  const team = [
    {
      imageSrc: '/2024_02_06_11_46_IMG_9407-copy.JPG',
      name: 'Nura Salifu',
      title: 'CEO',
    },
    {
      imageSrc: '',
      name: 'John Doe',
      title: 'CEO & Founder',
    },
    {
      imageSrc: '',
      name: 'John Doe',
      title: 'CEO & Founder',
    },
    {
      imageSrc: '',
      name: 'John Doe',
      title: 'CEO & Founder',
    },
    {
      imageSrc: '',
      name: 'John Doe',
      position: 'CEO & Founder',
    },
  ]
  return (
    <DefaultLayout>
      <HeaderTitleMeetTeam />
      <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.imageSrc}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-black font-semibold">{item.name}</h4>
                                        <p className="text-SixteenGold">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    </DefaultLayout>
  )
}

export default Team
