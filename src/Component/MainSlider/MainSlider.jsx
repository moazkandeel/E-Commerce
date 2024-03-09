import React from "react";
import slider1 from "../../Assets/images/slider-image-3.jpeg";
import slider2 from "../../Assets/images/slider-image-2.jpeg";
import slider3 from "../../Assets/images/slider-image-1.jpeg";
import img2 from "../../Assets/images/grocery-banner.png";
import img1 from "../../Assets/images/grocery-banner-2.jpeg";
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <>
      <div className="row my-3 gx-0">
        <div className="col-md-9">
          <Slider {...settings}>
            <img src={slider1} height={400} className="w-100" alt="" />
            <img src={slider2} height={400} className="w-100" alt="" />
            <img src={slider3} height={400} className="w-100" alt="" />
          </Slider>
        </div>
        <div className="col-md-3">
          <div className="images">
            <img src={img1} height={200} className="w-100" alt="" />
            <img src={img2} height={200} className="w-100" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
