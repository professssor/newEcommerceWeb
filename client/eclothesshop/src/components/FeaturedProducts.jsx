import React from "react";
import useFetch from "../hooks/useFetch";

import Card from "./Card";


const FeaturedProducts = ({ type }) => {
  const {data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
 




  return (
    <div className="container py-4 mx-auto my-20 ">
      <div
        className="top flex  justify-between my-2 mx-20
     items-start"
      >
        <h1 className="text-2xl  font-black ">{type} Products</h1>
        <p className="w-4/12 lorem-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          placeat cumque? Excepturi eius inventore velit quaerat aliquam autem
          id minus.
        </p>
      </div>
      <div className="bottom flex  justify-center space-x-4">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
          
      </div>
    </div>
  );
};

export default FeaturedProducts;
