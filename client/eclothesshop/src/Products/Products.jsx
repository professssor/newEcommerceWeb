import React from 'react'
import List from '../components/List'
import {useParams} from "react-router-dom"
import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



function Products() {
  const categoryId= parseInt(useParams().id) 


  const [maxPrice, setMaxPrice]= useState(10000);
  const [sort,setSort]=useState("asc") ;
  // for fetc hing data with help of usefetch custom hook
  const {data, error, loading}= useFetch(`/sub-categories?{filters][categories][id][$eql]=${categoryId}`);



// for checkbox info
const [selectedbox,setSelectedBox]=useState([]);




// function for handle the check state 
const handleChange=(e)=>{
  const value= e.target.value;

  const isChecked=e.target.checked;
  setSelectedBox(isChecked?[...selectedbox, value]: selectedbox.filter(item=>item!==value ))


}
  return (
    <div className=' flex '>
      {/* the product catergories and filter code */}
  
    <div className=' hidden md:block products-filter-container w-3/12  min-w-max  '>
      <div className='my-4  '>
        <h1 className="heading-filter-columm  ">Product Categories</h1>

        {data?.map((item)=>
          (
               <div className='' key={item.id}  >
            <input type="checkbox" id ={item.id} value={item.id} name="hat" onChange={handleChange} />
        <label htmlFor={item.id}>{item.attributes.title} </label>
        </div>
          )
        )}
 

    
      </div>
      <div className=''>
               <h1 className="heading-filter-columm ">Filter by price </h1>
               <span>0</span>
               <input type="range"   min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)} />
               <span>{maxPrice}</span>
      </div>
      <div className=''>
               <h1 className="heading-filter-columm ">Sort by </h1>
               <section>
                    <input  type="radio"   id="asc" value= "asc" name="price" onChange={ e=>setSort("asc")}  />
               <label htmlFor="asc"> Price [low to high]</label>
               </section>
           <section>
                 <input  type="radio"  name="price" id="desc" value="desc" onChange={ e=>setSort("desc")} />
               <label htmlFor="desc">Price [high to low]</label>
           </section>
           
      </div>

      
    </div>


    {/* the product show case code */}
    <div className="w-full  product-showcase  mx-10 flex flex-col  flex-wrap items-center " >
     
      <div className=' w-full  h-64 product-showcase-header-image rounded-md '> 
          <img  className='rounded-md stock-img  object-cover' src="https://i.pinimg.com/originals/77/f1/bf/77f1bfbedd14cbd04360164e6fce42a0.jpg" alt="" />
      </div>
       <h1 className='font-light text-3xl  w-full p-2'>{categoryId===2? "Men's section": "Women's section"} <span><CheckCircleOutlineIcon/></span></h1>
    <div className= 'rounded-md  mt-6  p-2  bg-gray-100 border-1 w-full mx-auto '>
  <List catId={categoryId}  sort={sort} maxPrice ={maxPrice} selectedCat={selectedbox} />
    
    </div>
     
     
    </div>
   </div>
  )
}


export default Products