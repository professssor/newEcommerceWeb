import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

function List({ catId, sort, maxPrice, selectedCat }) {




 

  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${selectedCat.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort} `
  );

  
  return (
    <div className="flex">
      {/* {data?.map((item) => <Card item={item} key={item.id} />)} */}

      {loading
        ? "loading Please wait"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
