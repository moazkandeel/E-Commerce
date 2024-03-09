import React from "react";
import axios from "axios";
import Slider from "react-slick";
import { useQuery } from "react-query";

export default function CategoriesSlider() {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false
  };

  const { data, isLoading, isError } = useQuery("Categories", getCategories);

  async function getCategories() {
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="row">
      <Slider {...settings}>
        {data?.data.map((category) => (
          <div key={category._id} className="col-md-2">
            <div className="img">
              <img
                src={category.image}
                height={200}
                className="w-100"
                alt={category.name}
              />
              <p>{category.name}</p>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
