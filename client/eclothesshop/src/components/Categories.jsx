import React from "react";

function Categories() {
  return (
    <div className="categories-container  ">
      
      {/* first  row */}
      <div className="col"> 
        <div className="row ">
            <img className='img-properties'
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        <button className="category-button   text-sm font-thin "><a className="" href="/products/3">Grills</a></button>
        </div>
        <div className="row">
         <img className='img-properties'
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            
          />
            <button className="category-button   text-sm font-thin "><a className="" href="/products/3">feminist</a></button>
        </div>
      </div>
      {/* second row */}
      <div className="col">
        <div className="row">
 
        <img className='img-properties'
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <button className="category-button   text-sm font-thin "><a className="" href="/products/2">MKBHD</a></button>
        </div>
      </div>
      {/* third  row */}
      <div className="col col-l">
        <div className="row">
          <div className="row">
          
          <img className='img-properties'
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
                <button className="category-button    text-sm font-thin "><a className="" href="/products/2">Coder</a></button>
              </div>
        
            <div className="row">
             
                 <img className='img-properties'
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              /> 
                <button className="category-button    text-sm font-thin "><a className="" href="/products/3">Designer</a></button>
              </div>
         


        </div>
        <div className="row">
       <img className='img-properties '
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <button className="category-button   text-sm font-thin "><a className="" href="/products/2">top G</a></button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
