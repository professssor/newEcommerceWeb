import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {  useRecoilState } from "recoil";
import cartState from "../atoms/cart";



const apiUploadURL = "http://localhost:1337";

function Product() {
  const subCategoryId = parseInt(useParams().id);
  // to transfer info to cart page
  const [cart, setCart] = useRecoilState(cartState);
// use state to send an alert div when add to cart is being pressed after item is already present in cart
  const [revealText,setRevealText]=useState(false);
  //use recoil state to transfer product data over for functions in sidecart component


  // handle the click event after add to cart is clicked
  const handleClick = () => {
    // check to see and not add item in the side cart if it already exits there
    const item = cart.find((item) => item.id === data.id);
    if (item) {
       const updatedCart = cart.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
         quantity: item.quantity + quantitySelected,
        };
      
      } return item;
    });

      setCart(updatedCart);
     
      // reveals the error notification for the same
    setRevealText(true);
    } else {
    setCart([...cart, { ...data, quantity: quantitySelected }]);
    }
    // set timeout function to remove the error message after 10 sec 
 setTimeout(() => {
  setRevealText(false)
  
 }, 10000);
    
  };

  const { data, error, loading } = useFetch(
    `/products/${subCategoryId}?populate=*`
  );



 


// })
  
//  });

  // use state declarations**************
  // use state for main image
  const [mainImage, setMainImage] = useState("img");

  // use state for the side images
  const [clickedImageOne, setClickedImageOne] = useState();
  const [clickedImageTwo, setClickedImageTwo] = useState();
  // use state for the quanity button
  const [quantitySelected, setQuantitySelected] = useState(1);





  return (
    <div className="product-page-container flex justify-around  flex-wrap  mb-32 ">
      {/* left part of the */}

      {loading ? (
        " Loading"
      ) : (
        <>
          <div className="  selected-product-images  flex  mt-12 ">


            <div className=" hidden sm:block image-stack flex-1 ">
              <img
                className={`w-24 h-24 object-cover my-4 ${
                  clickedImageOne ? `imageborder` : ""
                }`}
                src={apiUploadURL + data?.attributes?.img?.data?.attributes.url}
                alt=""
                onClick={(e) => {
                  setMainImage("img");
                  setClickedImageOne(true);
                  setClickedImageTwo(false);
                }}
              />
              <img
                className={`w-24 h-24 object-cover my-4 ${
                  clickedImageTwo ? `imageborder` : ""
                }`}
                src={
                  apiUploadURL + data?.attributes?.img2?.data?.attributes.url
                }
                alt=""
                onClick={(e) => {
                  setMainImage("img2");
                  setClickedImageTwo(true);
                  setClickedImageOne(false);
                }}
              />
            </div>
            <div className="main-product-image   flex-5 ">
              <img
                className="w-full h-full  object-cover"
                src={
                  apiUploadURL +
                  data?.attributes?.[mainImage]?.data?.attributes.url
                }
                alt=""
              />
            </div>
          </div>
        </>
      )}

      {/* right part of the page */}
      <div className="rightpart mt-0    ">
        <div className="details my-4 ">
          <h1 className=" m-2 text-2xl font-black capitalize">
            {data?.attributes?.title}{" "}
          </h1>
          <h5 className="m-2 ">
            {" "}
            <span className="text-green-400">₹</span>{" "}
            <span className="font-semibold text-xl ">
              {" "}
              {data?.attributes?.price}
            </span>{" "}
          </h5>
          <p className=" m-2 lorem-text relative  ">{data?.attributes?.desc}</p>
        </div>
        {/* container for the button for quantity */}
        <div className="quantity-button-container   flex items-center  w-32 justify-between my-6 ">
          {/* minus button */}
          <section className="">
            <button
              className="font-black  quantity-button focus:outline-none "
              onClick={(e) => {
                setQuantitySelected(Math.max(quantitySelected - 1, 0));
              
               
              }}
            >
              -
            </button>
          </section>
          <h6 className="mx-2">{quantitySelected}</h6>

          {/* plus button */}
          <section className=" ">
            <button
              className="  quantity-button font-black  focus:outline-none "
              onClick={(e) => {
                setQuantitySelected(quantitySelected + 1);
           
              }}
            >
              +
            </button>
          </section>
        </div>
        {/* add to cart */}
        <div>
          <button
            onClick={handleClick}
            className="text-white font-medium text-sm bg-blue-300 hover:bg-blue-600 w-full  p-2 mt-6 mb-2  focus:outline-none  "
          >
            {" "}
            <AddShoppingCartIcon />      Add to cart
          </button>
        {/* error text hidden div */}
          <div className=  {`moreThanOneItemAlert   ${revealText?"": "hidden" }  w-8/12 bg-gray-200 text-xs text-center h-8 rounded-full  `}>
          <span className=" text-yellow-500 m-2"><ErrorOutlineIcon/></span>  
           <span>item is already present in cart, click again to increase the quantity  </span> </div>
          {/* wishlist button */}
          <div className="compare-buttons  text-xs font-thin flex ">
            <button className="focus:outline-none">
              {" "}
              <span className="text-red-400  ">
                <FavoriteBorderIcon />{" "}
              </span>{" "}
              ADD TO WISHLIST
            </button>
            <button className="focus:outline-none">
              <span className="text-green-400 ">
                <BalanceIcon />{" "}
              </span>{" "}
              Add TO COMPARE{" "}
            </button>
          </div>
          <hr className="w-10/12" />
          <div className="lorem-text p-1 my-4 capitalize">
            {/* miscleniouss information */}
            <h6 className="my-1">Lorem ipsum .</h6>
            <h6 className="my-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto.
            </h6>
            <h6 className="my-1">Lorem ipsum dolor sit.</h6>
          </div>
          <hr className="w-10/12" />
          <div className="lorem-text p-2  ">
            <h3>description</h3>
            <hr className="w-10/12" />
            <h3>additional information</h3>
            <hr className="w-10/12" />
            <h3>FAQ</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
