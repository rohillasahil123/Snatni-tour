import React from "react";
import { FaOm } from "react-icons/fa";
import divine from "../../assets/Divine.jpeg";
import saffron from "../../assets/saffron.jpeg";

const allPackage = [
  {
    id: 1,
    name: "Confrot Travling in Gita Mohtsav",
    price: 5000,
    HotelName: "Hotel Saffron",
    time: "7Days",
    Distance: "1000km",
    image: saffron,
  },
  {
    id: 2,
    name: "Deluxe Travling in Gita Mohtsav",
    price: 10000,
    HotelName: "Divine clarks inn suites",
    time: "7Days",
    Distance: "1000km",
    image: divine,
  },
  {
    id: 2,
    name: "Deluxe Travling in Gita Mohtsav",
    price: 10000,
    HotelName: "Divine clarks inn suites",
    time: "7Days",
    Distance: "1000km",
    image: divine,
  },
];

const GitaPackage = () => {
  return (
    <div className="h-[170vh] sm:h-[100vh] w-[100%] ">
      <div className="h-10 w-full text-center items-center">
        <h1 className="text-orange-500 font-bold text-2xl">GITA MOHTSAV</h1>
        <div className="flex justify-center">
          -------
          <FaOm size={30} />
          -------
        </div>
      </div>

      <h1 className="mt-[7%] sm:mt-[3%] text-center items-center w-[90%] font-semibold ml-[3%] ">
        we ensure the highest quality of services. We also specialize in
        organizing spiritual journeys, including religious pilgrimages to sacred
        Hindu destinations such as Char Dham Yatra, Kashi, Vaishno Devi, and
        other revered sites, providing a seamless and professionally guided
        experience for devotees.
      </h1>
    <div className="flex flex-col sm:flex-row sm:space-x-5 space-x-0 sm:h-[70vh] h-[50vh] mt-[99%] sm:mt-[0%] justify-center items-center">
        {
            allPackage.map((packageItem ,i ) => (
                <div key={i} className=" sm:h-[90%] sm:w-[23%] h-[90%] w-[90%] border items-center sm:mt-[3%]   shadow-xl">
                    <img src={packageItem.image} alt="" className="h-[40%] mt-[3%] rounded-md w-[95%]" style={{justifySelf:"center"}} />
                    <div className="mt-6" style={{justifySelf:"center"}} >
                  <h4> <span className="font-semibold">Title: </span>{packageItem.name}</h4>
                  <h4> <span className="font-semibold">Hotel Name :</span> :{packageItem.HotelName}</h4>
                  <h4> <span className="font-semibold">Duration :</span> {packageItem.time}</h4>
                  <h4><span className="font-semibold">Distance :</span>{packageItem.Distance}</h4> 
                  <h4> <span className="font-semibold">Price :</span>{packageItem.price} ₹</h4>
                </div>
                <hr className="border-t-1 border-gray-500 mt-5" />
                <div className="flex justify-around w-full mt-2">
                  <button type="button" className="bg-orange-500 h-9 text-white rounded w-[40%] text-[15px] hover:bg-orange-900  ">View Details</button>
                  <button type="button" className="bg-orange-500 h-9 text-white rounded w-[40%] text-[15px] hover:bg-orange-900  ">Book Now</button>
                </div>
                </div>
            ))
        }
    
    </div>
    </div>
  );
};

export default GitaPackage;
