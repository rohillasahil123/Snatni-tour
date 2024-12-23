import { useState, useEffect } from "react";
import Gita1 from "../../assets/GitaMohtsav.jpeg";
import Gita2 from "../../assets/GitaMohtsav1.jpeg";
import Gita3 from "../../assets/GitaMohtsav2.jpg";
import Gita4 from "../../assets/GitaMohtsav3.jpeg";
import famous1 from "../../assets/cultural.webp";
import famous2 from "../../assets/Gita9.webp";
import famous3 from "../../assets/Spiritual.webp";

const GitaMohtsav = () => {
  const [isImage, setIsImage] = useState(0);

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
  ];
  const famousGita = [
    {
      id: 1,
      image: famous1,
      des: "Here is an illustration of the Gita Mohatsav festival showcasing its vibrant and spiritual essence.",
    },
    {
      id: 2,
      image: famous2,
      des: "Here is another representation capturing the grandeur and cultural richness of the Gita Mohatsav festival.",
    },
    {
      id: 3,
      image: famous1,
      des: "Here’s another depiction showcasing key moments and activities of the Gita Mohatsav festival.",
    },
  ];

  const handleImage = () => {
    setIsImage(isImage === 0 ? ImageData.length - 1 : isImage - 1);
  };

  useEffect(() => {
    const TimerSlidedr = setInterval(() => handleImage(), 3000);
    return () => clearInterval(TimerSlidedr);
  }, [isImage]);

  return (
    <div className="w-[100%] h-[170vh] sm:h-[150vh] flex flex-col sm:justify-center justify-start items-center">
      <div>
        <h1 className="text-5xl text-orange-500 font-extrabold">
          Gita Mohtsav
        </h1>
      </div>
      <div className="w-[97%] sm:h-[85vh] h-[30vh] mt-6 ">
        {ImageData.map((items, i) => (
          <div
            key={i}
            className={`w-[100%] h-[80%] ${isImage === i ? "block" : "hidden"}`}
          >
            <img
              src={items.image}
              alt=""
              className="h-[90%] w-[100%] rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-[-9%]  justify-center text-center items-center">
        <h1 className="text-2xl  font-extrabold text-orange-600 ">
          Think About GitaMohtsav
        </h1>
        <p className="text-sm text-gray-600 w-[93%] mt-[2%] ">
          Gita Mohatsav is a grand celebration honoring the timeless teachings
          of the Bhagavad Gita, a spiritual guide for humanity. Held annually in
          Kurukshetra, Haryana, it commemorates the day Lord Krishna imparted
          divine wisdom to Arjuna on the battlefield of Mahabharata. The
          festival features vibrant cultural events, spiritual discourses,
          exhibitions, and performances, drawing devotees and scholars
          worldwide. Pilgrims visit sacred sites like Brahma Sarovar to offer
          prayers. Gita Jayanti, the focal point of the festival, inspires
          individuals to embrace dharma, selflessness, and inner peace. Gita
          Mohatsav serves as a reminder of the Gita's universal message,
          transcending time and boundaries.
        </p>
      </div>

      <div className="h-[60%]  flex flex-col mt-[4%] sm:flex-row space-y-4 justify-around items-center  ">
        {famousGita.map((items, index) => (
          <div
            className="h-[90%] w-[90%]  sm:w-[20%] bg-gray-100 shadow-2xl rounded-md text-center"
            key={index}
          >
            <div>
              <img
                src={items.image}
                alt=""
                className="h-[20%] w-full object-cover rounded-md"
              />
              <h1 className="text-sm w-[92%] text-orange-800 mt-[4%]">
                {items.des}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitaMohtsav;
