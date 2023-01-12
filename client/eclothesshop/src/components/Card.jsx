import React from 'react'
import { Link } from 'react-router-dom'

const apiUploadURL ="http://localhost:1337"

function Card({item,}) {








   return (
    <div className='m-4 p-2 '>
      <Link to={`/product/${item.id}`}>
        <div className="featured-image-container   ">
          { item?.attributes.isNew ? <div className='p-2 m-1 absolute z-10  text-xs font-medium  border-2 text-white hover:font-black transition-all ease-in-out duration-500' ><span className=''>Must-Have</span></div> : null}
        
                <img  className='card-image image-hover ' src={apiUploadURL + item?.attributes.img.data.attributes.url} alt="" />
       

             <img className='card-image ' src={apiUploadURL + item?.attributes.img2.data.attributes.url} alt="secondImg" />
  
    
           

        </div>
        <div className="product_info p-2">

            <h3 className='text-md font-normal capitalize '>{item?.attributes.title}</h3>
            <div className='flex space-x-2'>
              <h6 className='text-gray-500 line-through'>₹ { item?.oldPrice || item?.attributes.price+50}</h6>
            <h5> <span >₹</span><strong>{item?.attributes.price}</strong> </h5>
            </div>


        </div>

       </Link>
    </div>
  )
}

export default Card