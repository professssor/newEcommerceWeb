import React from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from 'react';
 const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        <div style={{transform: `translateX(-${currentSlide*100}vw)`}} className="image-container  flex  " >
    <img  className ="image-dimension"src={data[0]} alt="" />
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