import React from 'react'
import { BsDiscord, BsFan, BsFillMegaphoneFill, BsGithub, BsPlus } from 'react-icons/bs'

function CorporateCodeOfConduct() {
    const integrations = [
        {
            title: "Equality",
            desc: "Plenty information Plenty information Plenty information Plenty information",
            icon: "https://img.freepik.com/free-vector/gender-equality-concept-illustration_114360-21982.jpg?w=740&t=st=1707316721~exp=1707317321~hmac=7e87e504b92f9c425402d8d7743a40e6bae4507bdf5d64e1340583a8f76a8734"
    
        }, {
            title: "Compentation",
            desc: "Ut enim ad minim veniam",
            icon: "https://img.freepik.com/free-photo/3d-render-black-hand-with-gold-coins-fall-palm_107791-16591.jpg?w=740&t=st=1707317165~exp=1707317765~hmac=581620237360fc8315b81e952ab6522d005fbd572d202b1264ee47d89a028b12"
    
        }, {
            title: "Compliance",
            desc: "Ut enim ad minim veniam",
            icon: "https://img.freepik.com/free-vector/check-mark-shield-with-shadow_78370-4413.jpg?w=740&t=st=1707317324~exp=1707317924~hmac=11e3aac65612761c7c3de1c68997e01f8070b6298ef7870406c50677ab3a3462"
    
        },
    ]
  return (
    <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-md">
                <h1 className="text-black text-xl font-extrabold sm:text-2xl">Code of Conduct At Sixteen47 Ghana</h1>
                <p className="text-gray-600 mt-2">Extend and automate your workflow by using integrations for your favorite tools.</p>
            </div>
            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    integrations.map((item, idx) => (
                        <li key={idx} className="border rounded-lg">
                            <div className="flex items-start justify-between p-4">
                                <div className="space-y-2">
                                    {/* {item.icon} */}
                                    <img src={item.icon} alt="" />
                                    <h4 className="text-gray-800 font-semibold">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                                <button className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">
                                    <BsPlus size={24} />
                                </button>
                            </div>
                            {/* <div className="py-5 px-4 border-t text-right">
                                <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                                    View integration
                                </a>
                            </div> */}
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default CorporateCodeOfConduct
