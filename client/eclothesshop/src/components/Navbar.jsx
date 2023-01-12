import React, { useState } from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PublicIcon from '@mui/icons-material/Public';
import Sidecart from './Sidecart';
import { useRecoilValue } from 'recoil';
import cartState from '../atoms/cart';

export default function Navbar() {
   const[open ,setOpen]=useState(false);
   const cartAmtNotification = useRecoilValue(cartState)
  return (
    // main wrapper for nav bar
    
    <div className='wrapper flex justify-between items-center p-4   mb-2 '>
       
       {/* container for the left-side content */}
            <div className="  text-base font-light flex space-x-5  ">
                <div className="container flex ">

     < PublicIcon className='text-blue-700'/>
      < KeyboardArrowDownIcon className='text-green-700'/>
   </div >
      {/* container for the usd drop down */}
   <div className="container flex items-center ">
      <a href="#"><p>USD</p></a> 
         < KeyboardArrowDownIcon className='text-gray-400'/>
   </div>


       <a href="/products/2"><p>Men</p></a> 
       <a href="/products/3"><p>Women</p></a>
       <a href="/products/5"><p>Kids</p></a>
       <a href="/products/4"><p>Accessories</p></a>
      </div>
 

        {/* container for the middle-side content */}

     <div className="">
  <a href="/"> <h2 className='font-bold text-xl px-2 text-orange-500'>EASTERN  STORE</h2></a>
     </div>
            {/* container for the right-side content */}
     <div className="text-base font-light flex space-x-5 ">



       <a href="#"><p>Homepage</p></a> 
       <a href="#"><p>About</p></a>
       <a href="#"><p>Contact</p></a>
       <a href="#"><p>Stores</p></a>
       <div className="icon-container space-x-2 flex">
       <SearchIcon className='text-green-500 '/>
       <PersonOutlineOutlinedIcon className='text-gray-600 '/>
       <FavoriteBorderOutlinedIcon className='text-orange-500 '/>
      
      <div onClick={e=>setOpen(!open)} className='  '>
        <ShoppingCartOutlinedIcon  className='text-purple-500 '/>
               <div className= ' notification h-4 w-4 text-xs  text-white inline-block  font-semibold rounded-full text-center bg-red-500 absolute '> {cartAmtNotification.length}</div>
       
        </div> 
  
 
</div>
{open&& <Sidecart/>}
       </div>

       

      
 
     </div>
  

    
  
 
  )
}
