import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useRecoilState, useRecoilValue } from "recoil";
import cartState from "../atoms/cart";
import { loadStripe } from "@stripe/stripe-js";

import { axiosInstance } from "../axiosInstance";

import { Link } from "react-router-dom";

const apiUploadURL = "http://localhost:1337";

function Sidecart() {

  // value of the cart array  to be used
  const products = useRecoilValue(cartState);


  // data for product from product page
  // const productInfo = useRecoilValue(productDataPassed);

  // used to delete items /reset the cart
  const [cart, setCart] = useRecoilState(cartState);


  //info about the quantity of product selected by the user

  const totalAmt = () => {
    let total = 0;

    products.forEach(
      (item) => (total += item.quantity * item.attributes.price)
    );

    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MOIJVSCmAaBuDjlj1RTcllJ40qXnadwbb4IrQjVAtHXhz4UUaIGr6RMkWYfmp8ZejXT5V2M2I948hCNWKDCicmn00liTJIwGc"
  );
  // function to handle stripe integration 
  const handlePayment = async () => {

    try {
      const stripe = await stripePromise;
   

      const res = await axiosInstance.post("/orders", {
        products,
      });
    

  
         await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id

      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sidecart-container   bg-gray-100  p-1  ">
      <h1 className="capitalize text-center text-sm mb-2 p-1">
        Products in your cart
      </h1>
      {/* traversing the cart array we got grom the cart state */}
      {products.map((item) => (

          <div key={item.id} className="ml-6 " >
                     <Link to={`/product/${item.id}`}>
            <div className="sidecart-product-details flex items-center  m-1">
              <div className="side-img-container h-24 w-20  m-1 rounded-full ">
                <img
                  className="h-full w-full object-cover rounded-sm "
                  src={
                    apiUploadURL + item?.attributes?.img?.data?.attributes.url
                  }
                  alt=""
                />
              </div>

              <div className="pro-details capitalize flex-col flexjustify-around m-1  w-48  ">
                <h1 className="font-bold ">{item?.attributes?.title}</h1>
                <p className="lorem-text">{item?.attributes?.desc}</p>
                <div className="item-price text-blue-500 ">
                  {item.quantity} × ₹{item?.attributes?.price}{" "}
                </div>
              </div>
              <div
                onClick={() =>
                  setCart(products.filter((val) => val.id !== item.id))
                }
                className="  hover:bg-gray-400 rounded-full p-1 text-red-400"
              >
                <DeleteOutlineIcon />
              </div>
            </div>

            <hr className="mx-auto w-64 mt-4" />
                     </Link>
          </div>

      ))}

      {products.length > 0 ? (
        <div className="  container-checkout flex flex-col justify-center items-center ">
          <div className="subtotal flex  space-x-16 justify-between  text-center   w-8/12  mb-4">
            <h1 className="uppercase  text-sm">subtotal</h1>
            <h1>
              <span className="text-sm  text-green-400"></span>
              <span className="font-bold">
                <span className="font-light ">₹</span>
                {totalAmt()}
              </span>{" "}
            </h1>
          </div>

          {/* button to proceed to payment gateway */}
          <button
          onClick={handlePayment}
            
            className="bg-blue-300 text-white hover:bg-green-400 focus:outline-none uppercase text-xs h-10 w-6/12  
         "
          >
            proceed to checkout
          </button>

          {/* button to reset the cart */}
          <button
            onClick={() => {
              setCart([]);
            }}
            className="block capitalize text-red-600 font-light text-sm my-3 p-1 hover:underline  focus:outline-none"
          >
            reset cart
          </button>
        </div>
      ) : (
        <p className="text-xs text-center text-gray-500 "> no items in cart</p>
      )}
    </div>
  );
}

export default Sidecart;
