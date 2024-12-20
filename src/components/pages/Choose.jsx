import React from 'react'
import Star from '../../assets/Star.png'
import HandShake from '../../assets/handShake.png'
import Doller from '../../assets/Doller.png'

const Choose = () => {
    const chooseData = [
        {
            id: 1,
            title: "Exceptional Value:",
            description: "Discover our thoughtfully designed packages that combine affordability with exceptional quality, ensuring a memorable and enriching experience for your spiritual journey.",
            icon: Doller
        },
        {
            id: 2,
            title: "Unwavering Trust:",
            description: "We pride ourselves on the trust our clients place in us. Our dedicated team ensures a seamless and trustworthy service throughout your sacred pilgrimage.",
            icon: HandShake
        },
        {
            id: 3,
            title: "Decades of Expertise:",
            description: "With years of experience in providing Hajj and Umrah packages, we are committed to offering exceptional service and an unparalleled understanding of our clients needs.",
            icon: Star
        }
    ]




  return (
    <div className='choose-container sm:h-[60vh] h-[110vh] w-full flex flex-col justify-center items-center'>
        <div className='choose-container-title text-center'>
            <h1 className='text-4xl font-bold text-orange-500'>Why Choose Us</h1>
        </div>
        <div className='choose-container-content sm:h-[50vh] h-[100vh] w-[80vw] flex flex-col sm:flex-row justify-center items-center gap-10 mt-[7%] sm:mt-[0%] '>
            {chooseData.map((item) => (
                <div className='choose-container-content-item sm:w-[40%] w-[100%]  sm:h-[90%] h-[60%] border-2 border-orange-500 rounded-lg p-4 flex flex-col justify-center items-center shadow-2xl space-y-3'>
                    <img src={item.icon} alt={item.title} className='w-[100px] h-[100px] sm:w-[90px] sm:h-[90px]' />
                    <h2 className='text-2xl font-bold text-orange-500'>{item.title}</h2>
                    <p className='text-center text-sm text-gray-500'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Choose