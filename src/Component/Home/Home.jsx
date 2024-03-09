import React, { useContext } from "react";
import { useState } from "react";
import Products from "../Products/Products.jsx";
import { CounterContext } from "../../Context/CounterContext.js";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.jsx";
import MainSlider from "../MainSlider/MainSlider.jsx";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider.jsx";
import { Helmet } from "react-helmet";

export default function Home() {
  let {changeCount} = useContext(CounterContext)
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Featured Products</title>
                
            </Helmet>
      <MainSlider/>
      <CategoriesSlider/>
      <FeaturedProducts />
    </>
  );
}
