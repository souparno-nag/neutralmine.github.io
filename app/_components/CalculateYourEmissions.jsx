import Image from 'next/image'
import React from 'react'
import mine1 from "../../public/mines/mine2.jpg"
const CalculateYourEmissions = ({ direction }) => {
    return (
        <div className={`w-full flex justify-${direction}`}>
            <div className="p-3 m-6 overflow-clip rounded-xl flex flex-col w-[65vw] h-[13rem]  border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2 duration-300">
                <div className="flex gap-3">
                    <div className="flex flex-col">
                        <div className="text-5xl ">Let's go net zero</div>
                        <div className="text-gray-500 ">We help you calculate your emissions, so that you can reduce your carbon footprint and contribute to a greener future. Whether you're a business, an individual, or an organization, our tools are designed to break down complex data into simple metrics, enabling you to track your environmental impact. With clear insights and real-time analytics, you can take informed steps towards reducing your carbon footprint, achieving sustainability goals, and contributing to a cleaner planet.</div>
                    </div>
                    {/* <div className="overflow-clip w-full h-200"> */}
                    {/* <Image src="/images/coal_mine1.jpg" alt="coal_mine1" width={1920} height={1080} className="object-contain" /> */}
                    <div className=" rounded-xl w-full h-full m-15 overflow-clip">
                        <Image src={mine1} alt="mine1" />
                    </div>
                </div >
                <div>

                </div>
            </div >
        </div>
    )
}

export default CalculateYourEmissions