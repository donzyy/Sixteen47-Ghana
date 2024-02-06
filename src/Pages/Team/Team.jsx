import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import HeaderTitleMeetTeam from '../../Components/HeaderTitleMeetTeam'

function Team() {
  const team = [
    {
      imageSrc: '/2024_02_06_11_46_IMG_9407-copy.JPG',
      name: 'Nura Salifu',
      title: 'CEO',
      positionDescription: "Nura Salifu is a serial Ghanaian entrepreneur. She is the owner and CEO of Sixteen Ghana Ltd, an apparel design, manufacturing, export and retail. Sixteen47 currently undertakes contract manufacturing for both local and foreign apparel brands and currently employs close to 300 Ghanaians. The 38-year-old Salifu also owns several other businesses in Ghana including Coolsculpting Ghana Ltd, Beauty Technicians,Star Apparel and Star Print & Packaging Ltd. In the USA she also owns Portmanteau LLC and investments in the fast food and fine dining industry.  She is also a shareholder of Arc Net Solutions LLC which specializes in security systems down and upstream sectors of the Oil and Gas industry.  Currently, she serves on the board of a US Technology Company. Mrs. Nura Salifu is a consummate Sales & Marketing Professional with extensive knowledge in B2Band business development from Fort Valley State University, USA. She is married with three children. Mrs. Salifu is passionate about youth empowerment and charity courses and volunteered for several nonprofit institutions in Africa and the USA.",
    },
    {
      imageSrc: '/TeamImages/MosesSixteen47.jpg',
      name: 'Moses Laar',
      title: 'Factory  Manager',
      positionDescription: 'Laar Moses is a Garment Industry Expert, and the current factory manager for  Sixteen 47 who has worked and developed different factories in Ghana. He has 9  years Working and consulting experience in the apparel industry. He has taken various  portfolios which includes: Production Manager, Social Compliance Manager at both Dtrt and Maagrace, Factory manager at Sixteen 47. Assistant Factory Manager at Dtrt, Warehouse Manager dtrt, and a Lead Project Manager for Covid-19 PPES Production at Dtrt. Moses was part of the first ever Wrap Gold certification to be awarded to a  Garment Industry in West Africa. Moses has consulted for Unijay Company Ltd, House of Damaris, Manice  Garments, Cyndex ltd. He is currently the Lead Consultant for a Factory Setup at the Northern region called Northshore Apparel Gh. Mr. Laar was also the lead Consultant for ATL investor visit by Wcc group from Tiawan. He was appointed to represent the Apparel sector for the GIPC(Ghana to Europe Fair 2022  I.e Denmark,Finland and Sweden) He also represented sixteen47 at Ethiopian Fashion Week At Addiss Ababa. USAID Moses Laar is a living testimony of Usaid works in Ghana. A Scholarship for his(Senior HighNight Shift production Manager, -Dignity Dtrt Ghana Ltd 2014-2016 African Trade Hub in 2004. After School, he introduced him to the Apparel sector through DTRT and that has been his career path.',
    },
    {
      imageSrc: '/TeamImages/FreddySixteen47.jpg',
      name: 'Nyarko Fredrick',
      title: 'Industrial Engineer/Administrator',
      positionDescription: 'Fredrick has qualifications in Bsc Business Administration. He has on-hand job experience at GIZ Training ( I.E, Production, compliance) and a total of 4 years of work experience.',
    },
    {
      imageSrc: '/TeamImages/PhilipSixteen47.jpg',
      name: 'Philip Nutifafa',
      title: 'Merchandiser',
      positionDescription: 'An astute Merchandizer with over 3 years of experience. Helped to execute projects for brands like GTP, Wear Ghana, and Sixteen47 to mention a few. A holder of intermediate certificate in Export Management. An affable and agile straight to the point individual who is able to blend multi talents into the delivery of both long and short term solutions in any garment manufacturing space.',
    },
    /* {
      imageSrc: '',
      name: 'John Doe',
      position: 'CEO & Founder',
      positionDescription: '',
    },
    {
      imageSrc: '',
      name: 'John Doe',
      position: 'CEO & Founder',
      positionDescription: '',
    }, */
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
                    Welcome to our talented and dedicated team at Sixteen47 Ghana. We take pride in our diverse group of individuals, each bringing unique skills and expertise to the table. Get to know the faces behind our success and discover the passion that drives us forward.
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
                                        <p className="text-sm text-gray-600 mt-2"> {item.positionDescription} </p>
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
