import React, { useEffect, useState } from "react";
import vasnodevitemple from "../../assets/Vaishno_Devi.avif";
import khumbmela from "../../assets/khumb-mela.webp";
import gitamohtsav from "../../assets/Gitamohtsav.jpg";
import khatushyam from "../../assets/khatu_shayam_mela.jpeg";
import mata_temple from "../../assets/mata_temple.jpg";

const Slider = () => {
  const imageData = [
    {
      id: 1,
      url: vasnodevitemple,
    },
    {
      id: 2,
      url: khumbmela,
    },
    {
      id: 3,
      url: gitamohtsav,
    },
    {
      id: 4,
      url: khatushyam,
    },
  ];

  const [sliderImage, setSliderImage] = useState(0);

  useEffect(() => {
    const timeinter = setInterval(() => {
      setSliderImage(sliderImage === 0 ? imageData.length - 1 : sliderImage - 1);
    }, 3000);
    return () => clearInterval(timeinter);
  }, [sliderImage]);

  return (
    <div className="h-[90vh] sm:h-[170vh] w-full  ">
      <div className="w-[99%] h-[20%] sm:h-[45%]" style={{ justifySelf: "center" }}>
        {imageData.map((item, index) => (
          <div 
            className={`w-[100%] h-[100%] bg-red-500 mt-1 sm:mt-3 rounded-lg ${
              sliderImage === index ? "block" : "hidden"
            }`}
            key={index}
          >
            <img src={item.url} alt="" className="h-[100%] w-[100%]  rounded-lg" />
          </div>
        ))}
      </div>
      <div className="h-[65vh] sm:h-[80vh] w-full flex justify-center sm:justify-around flex-col sm:flex-row  sm:mt-[1%] mt-[4%] text-center items-center ">
        <div className="h-[30%]  sm:h-[70%] w-[90%]  sm:w-[45%] ">
      <h1 className="text-orange-600 font-semibold sm:text-4xl text-2xl">Welcome to RealSanatni Your Trusted Partner for Vaishno_Devi & Gita Mhotsav  Journeys</h1>  
      <h5 className="sm:text-lg text-sm">
          AI realsanatni is a highly esteemed and respected brand, approved by IATA/TAAI/IATO and MCA/EPFO/ESI/GST & INCOME TAX. It is a professionally managed organization dedicated to serving the travel community. As an ISO 9001:2008 certified organization, we ensure the highest quality of services. We also specialize in organizing spiritual journeys, including religious pilgrimages to sacred Hindu destinations such as Char Dham Yatra, Kashi, Vaishno Devi, and other revered sites, providing a seamless and professionally guided experience for devotees.
      </h5>
        </div>
        <div className="h-[50%] sm:h-[90%] w-[100%] sm:w-[45%] rounded-lg mt-[35%] sm:mt-[7%] " >
            <img src={mata_temple} alt="" srcset="" className="h-[100%] sm:h-[90%] w-[90%] rounded-lg" style={{justifySelf:"center"}}/>
        </div>

      </div>
    </div>
  );
};

export default Slider;
