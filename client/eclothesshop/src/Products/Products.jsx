import React from 'react'
import List from '../components/List'
import {useParams} from "react-router-dom"
import { useState } from 'react';
import useFetch from '../hooks/useFetch';



function Products() {
  const categoryId= parseInt(useParams().id) 

  const [maxPrice, setMaxPrice]= useState(1000);
  const [sort,setSort]=useState() ;
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
  
    <div className='  products-filter-container w-3/12  min-w-max  '>
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
 
        {/* <section className='' >
            <input type="checkbox" id ="1"value={1} name="hat" />
        <label htmlFor="1"> Hat</label>
        </section>
      <section className=''>
             <input type="checkbox" id ="2"value={2} />
        <label htmlFor="shirt"> Shirt</label>
      </section>
      <section  className=''>
            <input type="checkbox" id ="2"value={2} />
        <label htmlFor="trouser"> Trouser</label>
        </section> */}
    
      </div>
      <div className=''>
               <h1 className="heading-filter-columm ">Filter by price </h1>
               <span>0</span>
               <input type="range"   min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
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
    <div className="w-full   product-showcase  mx-10 flex flex-col items-center " >
      <div className=' w-full  h-64 product-showcase-header-image rounded-md '> 
          <img  className='rounded-md stock-img  object-cover' src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg" alt="" />
      </div>
    <div className= 'rounded-md  mt-6  p-2  '>
       <List catId={categoryId}  sort={sort} maxPrice ={maxPrice} selectedCat={selectedbox} />
    </div>
     
     
    </div>
   </div>
  )
}


export default Products