import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
function Contact() {
  return (
    <div className='contact-item-container flex  bg-green-100  justify-between md:justify-center items-center p-4 space-x-4  md:space-x-20 h-40 mb-10'>
        <div className='first block '>
            <h4 className=''>GET IN TOUCH</h4>
        </div>
        <div className='second  block  '>
            <form  className=' flex   border-2 border-black ' action="">
                <input placeholder=' enter your email ' className=' contact-input outline-none bg-transparent  text-center text-md font-semibold   opacity-70 ' type="text" name="" id="" />
                <button className=' p-2 bg-black text-white text-sm font-hairline hover:text-black hover:bg-white '><a href="#">JOIN</a></button>
            </form>
           
        </div>
        <div className='third  flex   md:space-y-1 justify-between  md:space-x-3 md:flex-wrap '>
           < FacebookIcon/>
              < InstagramIcon/>
                 < TwitterIcon/>
                    < GoogleIcon/>
                    <PinterestIcon/>
           

        </div>

    </div>
  )
}

export default Contact