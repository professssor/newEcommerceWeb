import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PublicIcon from "@mui/icons-material/Public";
import Sidecart from "./Sidecart";
import { useRecoilValue } from "recoil";
import cartState from "../atoms/cart";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cartAmtNotification = useRecoilValue(cartState);
  const [openNav, setOpenNav] = useState(false);

    
  return (
    // main wrapper for nav bar

    <div className="">
      {/* nav bar for small screens */}
      <div
        className="
      smallscreennav"
      >
        <div className=" h-16  flex justify-between items-center p-2  lg:hidden">
          <div className="logoContainer">
            <a href="/">
              {" "}
              <h2 className="  customfontclass font-bold text-xl px-2 ">
        KICKINGKITS.COM
              </h2>
            </a>
          </div>
          <div className="iconcontainer flex space-x-2">
          <div
            onClick={(e) => setOpenNav(!openNav)}
            className="dropdowniConcontainer"
          >
            <MenuOpenIcon />
          </div>
          {/* for adding the cart in the small screen  */}
            <div onClick={(e) => setOpen(!open)} className="  ">
              <ShoppingCartOutlinedIcon className="text-purple-500 " />
              <div className=" notification h-4 w-4 text-xs  text-white inline-block  font-semibold rounded-full text-center bg-red-500 absolute ">
                {" "}
                {cartAmtNotification.length}
              </div>
            </div>
            </div>
        </div>
        {/* option display onclicking icon */}
        {openNav ? (
          <div className=" lg:hidden bg-black  options-container  text-white h-64 text-center ">
            <div className=" link-container">
            <a href="/products/2" className=" text-lg p-1  hover:text-gray-500">
              <h3>Men</h3>
            </a>
                
       
            <a href="/products/3" className=" text-lg p-1 hover:text-gray-500">
              <h3>Women</h3>
            </a>
            
                 
        
            </div>
        
             
          </div>
        ) : null}
      </div>
      <div className=" hidden wrapper lg:flex lg:justify-between md:items-center lg:p-4  lg: mb-2 ">
        {/* container for the left-side content */}
        <div className="  text-base font-light flex space-x-5  ">
          <div className="container flex ">
            <PublicIcon className="text-blue-700" />
            <KeyboardArrowDownIcon className="text-green-700" />
          </div>
          {/* container for the usd drop down */}
          <div className="container flex items-center ">
            <a href="#">
              <p>INR</p>
            </a>
            <KeyboardArrowDownIcon className="text-gray-400" />
          </div>

          <a href="/products/2">
            <p className="selection:text-purple-900">Men</p>
          </a>
          <a href="/products/3">
            <p>Women</p>
          </a>
      
         
          {/* <a href="/products/5">
            <p>Kids</p>
          </a>
          <a href="/products/4">
            <p>Accessories</p>
          </a> */}
        </div>

        {/* container for the middle-side content */}

        <div className="">
          <a href="/">
            {" "}
            <h2 className="customfontclass font-bold text-xl px-2 ">
         KICKINGKITS.COM
            </h2>
          </a>
        </div>
        {/* container for the right-side content */}
        <div className="text-base font-light flex space-x-5 ">
          <a href="#">
            <p>Homepage</p>
          </a>
          <a href="#">
            <p>About</p>
          </a>
          <a href="#">
            <p>Contact</p>
          </a>
          <a href="#">
            <p>Stores</p>
          </a>
          <div className="icon-container space-x-2 flex">
            <SearchIcon className="text-green-500 " />
            <PersonOutlineOutlinedIcon className="text-gray-600 " />
            <FavoriteBorderOutlinedIcon className="text-orange-500 " />

            <div onClick={(e) => setOpen(!open)} className="  ">
              <ShoppingCartOutlinedIcon className="text-purple-500 " />
              <div className=" notification h-4 w-4 text-xs  text-white inline-block  font-semibold rounded-full text-center bg-red-500 absolute ">
                {" "}
                {cartAmtNotification.length}
              </div>
            </div>
          </div>
     
        </div>
      </div>
           {open && <Sidecart />}
    </div>
  );
}
