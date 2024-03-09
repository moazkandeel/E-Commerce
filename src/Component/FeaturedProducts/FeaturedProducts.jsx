import React, { useContext, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CartContext } from "../../Context/CartContext";
import { CounterContext } from "../../Context/CounterContext";
import { WishListContext } from "../../Context/WishListContext";
import { useState } from "react";

export default function FeaturedProducts() {
  const { setcount } = useContext(CartContext);

  const { changeCount } = useContext(CounterContext);
 
  const { addToCart } = useContext(CartContext);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw error;
    }
  };

  let {addToWishList,getWishItem}= useContext(WishListContext)
  const { data, isLoading, isError } = useQuery("featuredProducts", getProducts);

  const postToCart = async (id) => {
    try {
      const { data } = await addToCart(id);
      if (data.status === "success") {
        toast.success(data.message);
        setcount(data.numOfCartItems);
        
      }
    } catch (error) {
      toast.error("Failed to add product to cart");
      console.error("Error adding product to cart:", error);
    }
  };
  async function postToWishList(productId) {
    let {data}=await addToWishList(productId)
    if(data.status=='success'){
      toast.success(data.message,{duration:2000,icon:<i className="fa-solid fa-heart heart text-danger fa-3x"></i>
    })
   
    }
    else{
      toast.error(data.message,{duration:2000})
    }
  }
  const [Check, setCheck] = useState([]);
  async function getItems() {
    let {data}=await getWishItem()
    setCheck(data?.data.map((id)=>{
      return id._id
    }))
    
}
function test(id){
  if(Check?.includes(id)){
  return  <i className="fa-solid fa-heart fs-2 text-danger heart cursor-pointer"></i>
  }else{
    return <i className="fa-solid fa-heart fs-2 heart cursor-pointer"></i>
  }
 }
 useEffect(()=>{getItems()})


  if (isLoading) {
    return (
      <div className="loading-spinner">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass="d-flex justify-content-center mt-5 "
          visible={true}
        />
      </div>
    );
  }

  
 
  
  return (
    <div>
     
      <div className="row gy-4  py-5">
        {data?.data.map((product) => (
          <div className="col-lg-2" key={product.id}>
            <div className="product p-2 shadow">
              <Link to={`/productdetails/${product.id}`}>
            
              
                <img
                  src={product.imageCover}
                  className="w-100"
                  alt={product.title}
                />
                <span className="font-sm text-main">
                  {product.category.name}
                </span>
                <h3>{product.title.split(" ").splice(0, 2).join(" ")}</h3>
                <div className="d-flex py-3 justify-content-between align-item-center">
                  <span className="font-sm">{product.price}EGP</span>
                  <span className="font-sm">
                    <i className="fas fa-star rating-color me-1"></i>
                    {product.ratingsAverage}
                  </span>
                </div>
              </Link>
              <span className='' onClick={()=>{
                postToWishList(product._id);
              
              }}> {test(product._id)}</span>
              

              <button
                onClick={() => {
                  postToCart(product.id);
                  changeCount(product.id);
                }}
                className="btn bg-main text-main-light w-100 btn-sm"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
