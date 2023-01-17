import React from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from 'react';
 const data = [
"  https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.pexels.com/photos/7188095/pexels-photo-7188095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

   
  ];
  

const Slider = () => {
  const [currentSlide, setCurrentSlide]=useState(0);
  const prevImage =()=>{
    currentSlide===0 ?  setCurrentSlide(2): setCurrentSlide(currentSlide-1);
  };
    const nextImage =()=>{
          currentSlide===2 ?  setCurrentSlide(0): setCurrentSlide(currentSlide+1);
          
    }
 
  return (
    <div className=''>
        <div style={{transform: `translateX(-${currentSlide*100}vw)`}} className="image-container   xs:w-screen flex  " > <img  className ="image-dimension"src={data[0]} alt="" />
    <img  className ="image-dimension"src={data[1]} alt="" />
    <img  className ="image-dimension"src={data[2]} alt="" />
 </div>
 <div className="slider-icons-container   ">
<div onClick={prevImage} className='  border w-20  h-20  border-black hover:bg-black
hover:bg-black- '> 
  < WestOutlinedIcon className='text-white slider-icons ' />
  </div>
   <div onClick={nextImage} className='border w-20 h-20  border-black hover:bg-black'>
      <  EastOutlinedIcon className='text-white slider-icons' />
   </div>



 </div>
  </div>
  )
}

export default Slider