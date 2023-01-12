 import React from 'react'
 
 export default function Footer() {

   return (
    // wrapper for footer 
     <div className='footerWrapper flex flex-col m-10 '>
      <div className='firstpart flex flex-row  p-4 mt-4 item-center
      '>
        <div className='flex  ml-8 space-x-48 w-6/12
        '>
             {/* first column */}
      <div className='   footerSubs bg-'>
        <h2>Catergories</h2>
      <div className=' lorem-text'>

       <a className='hover:underline'  href="/products/1"><p>Men</p></a>
       <a className='hover:underline'  href="/products/2"><p>Women</p></a>
       <a className='hover:underline'  href="/products/3"><p>Kids</p></a>
       <a className='hover:underline'  href="/products/4"><p>Accessories</p></a></div></div>
       {/* second column */}
      <div className='   footerSubs'>
        <h2>Links</h2>
         <div className=' lorem-text'>
       <a    className='hover:underline' href=""><p>FAQ</p></a> 
       <a    className='hover:underline' href=""><p>Pages</p></a>
       <a    className='hover:underline' href=""><p>Stores</p></a>
       <a    className='hover:underline' href=""><p>Compare</p></a>
          <a  className='hover:underline'href=""><p>Cookies</p></a>
          </div>
        
        </div>
         </div>

         {/* *************************************** */}
         <div className='flex   w-6/12 justify-around  '>
          
        {/* third column */}
      <div className=' max-w-xs footerSubs '><h2>About</h2>
      <p className=' lorem-text mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam modi qui maxime soluta nisi vitae numquam ducimus id! Labore aspernatur ipsum sed, expedita unde modi veritatis vitae similique ratione quia </p></div>
      {/* fourth column */}
      <div className='  max-w-xs footerSub'>
        <h2 className='mt-2'>Contact</h2>
      <p className=' lorem-text' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam modi qui maxime soluta  </p></div>
         </div>
     
     
{/* **************************second part */}
      </div>
          <div className=' mt-6 secondpart flex justify-between  '>
            <div className='  w-6/12 flex justify-end items-center space-x-2 mr-16'>
        <h1 className='font-semibold'>Eastern Store</h1>
        <span className=' text-xs lorem-text'>© Copyright 2023. All Rights Reserved</span>
            </div>
       
          <div className='w-6/12 ml-0 '>
            <img className=' inline-block h-10' src="/images/payment.png" alt="" />
          </div>
             </div>
   
     </div>
   )
 }
 