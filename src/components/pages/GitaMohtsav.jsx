import { useState , useEffect } from 'react'
import Gita1 from "../../assets/GitaMohtsav.jpeg"
import Gita2 from "../../assets/GitaMohtsav1.jpeg"
import Gita3 from "../../assets/GitaMohtsav2.jpg"
import Gita4 from "../../assets/GitaMohtsav3.jpeg"  

const GitaMohtsav = () => {
    const [isImage , setIsImage] = useState(0)

    const ImageData = [ 
        {
            id: 1,
            image: Gita1,
            name: "Gita Mohtsav",
        },
        {
            id: 2,
            image: Gita2,
            name: "Gita Mohtsav",
        },
        {
            id: 3,
            image: Gita3,
            name: "Gita Mohtsav",
        },
        {
            id: 4,
            image: Gita4,
            name: "Gita Mohtsav",
        },
    ]


    const handleImage = ()=>{
        setIsImage(isImage === 0 ? ImageData.length - 1 : isImage - 1)
    }


    useEffect(()=>{
        const TimerSlidedr = setInterval(()=>(
            handleImage()
        ), 3000)
        return ()=> clearInterval(TimerSlidedr)
    }, [isImage])


  return (
    <div className='w-[100%] h-[100vh] flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-5xl text-orange-500 font-extrabold'>Gita Mohtsav</h1>
        </div>
        <div className= 'w-[90%] h-[80vh] mt-6 '>
            {
                ImageData.map((items , i) => (
                    <div key={i} className={`w-[100%] h-[80%] ${isImage === i ? "block" : "hidden"}`}>  
                        <img src={items.image} alt="" className='h-[90%] w-[100%] rounded-lg' />
                        </div>
                ))
            }
        </div>
    </div>
  )
}

export default GitaMohtsav