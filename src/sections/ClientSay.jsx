import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import SlideComponent from "../components/SlideComponent";

const NextArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute right-4 top-[50%] -translate-y-[50%] z-10'>
      <IoIosArrowForward className="arrowDesign"/>
    </div>
  )
}

const PrevArrow = ({onClick }) => {
  return (
    <div onClick={onClick} className='absolute left-4 top-[50%] -translate-y-[50%] z-10'>
        <IoIosArrowBack className="arrowDesign"/>
    </div>
  )
}

const ClientSay = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 10000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


  return (
      <div className="w-full">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="w-full">
              <SlideComponent />
            </div>
            <div className="w-full">
              <SlideComponent />
            </div>
            <div className="w-full">
              <SlideComponent />
            </div>
          </Slider>
        </div>
      </div>
  );
}

export default ClientSay;