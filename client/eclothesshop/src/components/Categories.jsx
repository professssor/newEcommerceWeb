import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories-container  ">
      <div className="men ">
              <Link to={`/products/2`}>
            <button className=" aligning text-lg font-medium relative bg-black text-white  h-16 w-40 ">MEN</button>
            </Link>
        <img className="img-properties" src="https://images.unsplash.com/photo-1623451377886-36671ab29f50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
   
       
      </div>
<div className="women">
    <Link to={`/products/3`}><button className=" aligning bg-black text-lg  font-medium relative  h-16 w-40   text-white ">WOMEN </button></Link>

    
   <img className="img-properties" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
   
 
    </div>

 

      
      {/* first  row */}
      {/* <div className="col"> 
        <div className="row ">
            <img className='img-properties'
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        <button className="category-button   text-sm font-thin "><a className="" href="/products/1">Upper </a></button>
        </div>
        <div className="row">
         <img className='img-properties'
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            
          />
            <button className="category-button   text-sm font-thin "><a className="" href="/products/5">Equipments</a></button>
        </div>
      </div> */}
      {/* second row */}
      {/* <div className="col">
        <div className="row">
 
        <img className='img-properties'
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <button className="category-button   text-sm font-thin "><a className="" href="/products/3">Cleats</a></button>
        </div>
      </div> */}
      {/* third  row */}
      {/* <div className="col col-l">
        <div className="row">
          <div className="row">
          
          <img className='img-properties'
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
                <button className="category-button    text-sm font-thin "><a className="" href="/products/2">Lower</a></button>
              </div>
        
            <div className="row">
             
                 <img className='img-properties'
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> 
                <button className="category-button    text-sm font-thin "><a className="" href="/products/6">supplements</a></button>
              </div>
         


        </div>
        <div className="row">
       <img className='img-properties '
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <button className="category-button   text-sm font-thin "><a className="" href="/products/4"> football</a></button>
        </div>
      </div> */}
    </div>
  );
}

export default Categories;
