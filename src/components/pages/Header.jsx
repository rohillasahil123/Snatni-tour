import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'



const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
   <div className='h-auto md:h-[18vh] w-full'>
     {/* Top bar */}
     <div className='h-auto py-2 md:h-[40%] bg-orange-600 text-white'>
       <div className='flex flex-col md:flex-row md:space-x-5 space-y-1 md:space-y-0 px-5'>
         <h1 className='text-sm md:text-base'>Phone : 9991462406</h1>
         <h1 className='text-sm md:text-base'>Gmail : Info@sanatni.com</h1> 
       </div>
     </div>
      {/* Main header */}
     <div className='h-auto md:h-[60%] border shadow-xl p-4 md:p-0'>
       <div className='flex justify-between md:justify-around items-center text-orange-600'>
         {/* Logo section */}
         <div className='flex items-center'>
           <img src={logo} alt="" className='h-[50px] md:h-[80px] w-[70px] md:w-[100px] md:mt-[-5%]' />
           <h1 className='mt-0 md:mt-4 font-bold text-sm md:text-base'>Sanatni-Tour</h1>
         </div>
          {/* Mobile menu button */}
         <button 
           className='md:hidden'
           onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
           </svg>
         </button>
          {/* Desktop menu */}
         <div className='hidden md:flex space-x-6 uppercase font-bold hover:cursor-pointer'>
           <div><Link to="/"> Home </Link></div>
           <div><Link to="/about"> About Us </Link></div>
           <div><Link to="/gita-mohtsav"> Gita Mahotsav </Link></div>
           <div>kumbh mela</div>
           <div>Vaishno Devi</div>
           <div>Khatu Shyam</div>
         </div>
       </div>
        {/* Mobile menu */}
       {isMenuOpen && (
         <div className='md:hidden mt-4 space-y-3 uppercase font-bold'>
           <div className='p-2 hover:bg-orange-100'><Link to="/"> Home </Link></div>
           <div className='p-2 hover:bg-orange-100'><Link to="/about"> About Us </Link></div>
           <div className='p-2 hover:bg-orange-100'><Link to="/gita-mohtsav"> Gita Mahotsav </Link></div>
           <div className='p-2 hover:bg-orange-100'>kumbh mela</div>
           <div className='p-2 hover:bg-orange-100'>Vaishno Devi</div>
           <div className='p-2 hover:bg-orange-100'>Khatu Shyam</div>
         </div>
       )}
     </div>
   </div>
 )
} 

export default Header