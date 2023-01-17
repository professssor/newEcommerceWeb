 import React from 'react'
 
 export default function Footer() {

   return (
    // wrapper for footer 
     <div className='footerWrapper m-10  '>
      <div className='firstpart md:flex md:flex-wrap md:flex-row  p-4 mt-4 justify-between
   '>
        <div className='flex flex-row   w-full flex-wrap   md:w-6/12
        '>
             {/* first column */}
      <div className='  md:footerSubs w-6/12 lorem-text'>
        <h2 className='text-sm text-black font-medium'>Catergories</h2>


       <a className='hover:underline'  href="/products/1"><p>Football</p></a>
       <a className='hover:underline'  href="/products/2"><p>Cleats</p></a>
       <a className='hover:underline'  href="/products/3"><p>Equipments</p></a>
       <a className='hover:underline'  href="/products/4"><p>Apparel</p></a>
       </div>
       {/* second column */}
      <div className='   md:footerSubs w-6/12  '>
        <h2>Links</h2>
         <div className=' lorem-text'>
       <a  id="links"  className='hover:underline' href=""><p>FAQ</p></a> 
       <a    className='hover:underline' href=""><p>Pages</p></a>
       <a    className='hover:underline' href=""><p>Stores</p></a>
       <a    className='hover:underline' href=""><p>Compare</p></a>
          <a  className='hover:underline'href=""><p>Cookies</p></a>
          </div>
        
        </div>
         </div>

         {/* *************************************** */}
         <div className=' md:flex w-full   md:w-6/12  md:justify-around  '>
          
        {/* third column */}
      <div id={'section1'}     className='  md:footerSubs my-6 w-full'><h2>About</h2>
      <p className=' lorem-text mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam modi qui maxime soluta nisi vitae numquam ducimus id! Labore aspernatur ipsum sed, expedita unde modi veritatis vitae similique ratione quia </p></div>
      {/* fourth column */}
      <div className=' w-full md:footerSub my-6 w'>
        <h2 className='mt-2'>Contact</h2>
      <p className=' lorem-text' > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam modi qui maxime soluta  </p></div>
         </div>
     
       </div>
{/* **************************second part */}
    
          <div className='w-full md:6/12 text-center mt-6 secondpart md:flex  md:flex-row md:justify-center mt-12  '>
            <div className=' md:mr-4   md:flex justify-end items-center space-x-2 '>
        <h1 className='font-semibold text-xs'>Eastern Store</h1>
        <span className=' text-xs lorem-text  '>© Copyright 2023. All Rights Reserved</span>
            </div>
       
          <div className='md:ml-4 '>
            <img className=' mx-auto h-10' src="/images/payment.png" alt="" />
          </div>
             </div>
   
     </div>
   )
 }
 