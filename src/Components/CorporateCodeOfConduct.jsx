import React, {useState} from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'

function CorporateCodeOfConduct() {
    const integrations = [
        {
            title: "Equality",
            desc: "Sixteen47 Ghana Limited Equal wage for equal work policy is systematically enforced thanks to a transparent grading system designed by the HR and the Finance departments. This system is developed in line with the Anti-discrimination policy and is communicated to every worker for the purpose of transparency and accountability",
            icon: "https://img.freepik.com/free-vector/gender-equality-concept-illustration_114360-21982.jpg?w=740&t=st=1707316721~exp=1707317321~hmac=7e87e504b92f9c425402d8d7743a40e6bae4507bdf5d64e1340583a8f76a8734"
    
        }, {
            title: "Compentation",
            desc: "Sixteen47 Ghana Ltd considers that the contribution by our employees to the business is the key to the company success and they should be rewarded accordingly. Compensations and benefits at sixteen47 Ghana are fair and comply with our antidiscrimination and equality policies, which for example means that there should be no structural differences in compensation between genders. Furthermore compensation and benefits will always comply with local legislation and collective agreements. Equal compensation for work of equal value applies regardless of contract. The compensation levels at SIXTEEN47 GHANA should primarily reflect the competence, responsibility and contribution of the employee. This policy declares the basic principles and the minimum standards for compensation and benefits within SIXTEEN47 GHANA. This policy complies with The ILO convention on minimum wage (C131) and the ILO Convention on equal remuneration (C100).",
            icon: "https://img.freepik.com/free-photo/3d-render-black-hand-with-gold-coins-fall-palm_107791-16591.jpg?w=740&t=st=1707317165~exp=1707317765~hmac=581620237360fc8315b81e952ab6522d005fbd572d202b1264ee47d89a028b12"
    
        }, {
            title: "Compliance",
            desc: "We are committed to ensuring that all company laws and regulations are compliant with national and local laws and regulations.",
            icon: "https://img.freepik.com/free-vector/check-mark-shield-with-shadow_78370-4413.jpg?w=740&t=st=1707317324~exp=1707317924~hmac=11e3aac65612761c7c3de1c68997e01f8070b6298ef7870406c50677ab3a3462"
    
        },{
            title: "Environmental",
            desc: "Sixteen 47 Gh Ltd is committed to driving the Environmental Management System within the functional units in the organization by integrating sustainable practices with other business principles as core values of the organisation. To achieve this, management accepts responsibility and accountability for the prevention of pollution, responsible consumption and production while carrying out apparel manufacturing to local and global clients.",
            icon: "https://img.freepik.com/free-vector/round-leaves-growing-logo_78370-2369.jpg?w=740&t=st=1707321902~exp=1707322502~hmac=1426d7eeddb83f6484e2896fb3293b8fa1fb815396bbbf6e4670027697cbc704"
    
        },{
            title: "Freedom Of Association",
            desc: "SIXTEEN47 GHANA LIMITED supports freedom of association and collective bargaining as part of its commitment to support the fair and equitable treatment of workers. Sixteen Ghana LTD sees worker freedom to join unions or worker organizations and collective bargaining as basic building blocks for healthy employer-worker relations",
            icon: "https://globalnaps.org/wp-content/uploads/2017/10/Freedom-of-association.jpg"
    
        },{
            title: "Health and Safety",
            desc: "Sixteen47 Gh Ltd considers its employees to be its most valuable assets. We are therefore dedicated to providing and maintaining a working environment that is safe and without risk to the health of all our employees. In ensuring a safe and healthy working environment, all employees including management are responsible and accountable for the implementation of this policy.",
            icon: "https://img.freepik.com/free-photo/3d-render-hand-holding-heart-with-pulse-line-beat_107791-17213.jpg?w=740&t=st=1707322900~exp=1707323500~hmac=e779c039c749dea67e15441fbdb0c59ba96c8d20495fa1dc2c5c8b99332a6c1e"
    
        },{
            title: "Hours Of Work",
            desc: "We are committed not to exceed the hours of work according to the applicable national and local laws and regulations.",
            icon: "https://img.freepik.com/free-vector/red-clock-3d-vector-illustration-timer-symbol-social-media-apps-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_778687-1725.jpg?w=740&t=st=1707323046~exp=1707323646~hmac=8077673dd803dbedef9a9487fe994fd7879e1f78f7166aba77fb2b57332f4eab"
    
        },{
            title: "Prohibition Of Child-Labour",
            desc: "Child labour is a crime under the International Labor Organization (ILO) conventions and the constitution of Ghana. As a company that understands the importance of creating an inclusive environment where all workers feel comfortable, safe, and free from inappropriate and disrespectful conduct, we prohibit all forms of child labor within and outside our company. The purpose of this policy is to clearly set out the rules on age limit for workers and work performed by young workers to ensure adherence to local law and relevant international standards on child protection. In addition, the policy provides guidance on the processes to control compliance and how to resolve any issues identified.",
            icon: "https://img.freepik.com/free-vector/hand-drawn-handyman-cartoon-illustration_23-2150802650.jpg?w=740&t=st=1707323626~exp=1707324226~hmac=62264167f0816f87771f751b6efb18eb9d9962d6db2d1ec3e548f3b5a24e35b1"
    
        },{
            title: "Prohibition Of Forced-Labour",
            desc: "Sixteen47 Ghana Ltd. shall not use forced labour neither in its direct operations nor through any of its contractors and suppliers. Sixteen47 Ltd. thereby adopts Part XIV of Ghana Labour Act, 2003, Act 651 on “Forced Labour”. With reference to Ghana Labour Act 2003, Act 651 Section 117, “Forced Labour” means work or service that is exacted from a person under threat of a penalty for which that person has not offered himself or herself voluntarily",
            icon: "https://img.freepik.com/free-photo/burden-symbol-3d-illustration_183364-80080.jpg?w=740&t=st=1707324042~exp=1707324642~hmac=495195f827a85303284af1fe4ae2ed69fb9deb74453d21570209bc83082dc966"
    
        },
    ]

    const [showDesc, setShowDesc] = useState(Array(integrations.length).fill(false));

    const toggleDescription = (index) => {
        const newShowDesc = [...showDesc];
        newShowDesc[index] = !newShowDesc[index];
        setShowDesc(newShowDesc);
      };


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
                                   {showDesc[idx] && <p className="text-gray-600 text-sm">{item.desc}</p>}
                                </div>
                                <button onClick={() => toggleDescription(idx)} className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100" >
                                    {showDesc[idx] ? <BsDash size={24} /> : <BsPlus size={24} />}
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default CorporateCodeOfConduct
