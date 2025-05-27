import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Outlet } from "react-router";

function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
    }
  }, []);

  const slides = [
    {
      title: "Grow with Confidence",
      description:
        "Track watering, fertilizing, and health — your plants deserve the best care.",
      image: "https://i.ibb.co/RG87qpm4/slider-3.png",
    },
    {
      title: "Your Plant’s Personal Assistant",
      description:
        "Simplify plant care with smart reminders and personalized schedules.",
      image: "https://i.ibb.co/zhcZSrVD/slider-2.png",
    },
    {
      title: "Healthy Plants, Happy Life",
      description:
        "Monitor every detail and keep your indoor garden thriving year-round.",
      image: "https://i.ibb.co/hR6fTNwf/slider-1.png",
    },
  ];

  return (
    <>
    
  
    <div
      className="bg-background dark:bg-dark-background "
      style={{ color: "black" }}
    >
      <div className="h-[calc(100vh-60px)] md:h-[520px] md:px-8 lg:px-0 ">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid px-5 md:grid-cols-2 items-center md:justify-between max-w-6xl mx-auto h-full">
                <div className="lg:ml-20 text-center md:text-left w-full">
                  <h2 className=" text-[30px] md:text-[50px] text-black md:leading-[60px] font-medium">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg mt-5 text-black text-center md:text-left">
                    {slide.description}
                  </p>
                </div>
                <div className="row-start-1 md:row-start-auto">
                  <img
                    className="mx-auto md:mx-0 h-[350px] object-contain lg:w-auto lg:ml-auto md:h-[500px]"
                    alt=""
                    src={slide.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
    <div className="w-[90%] mx-auto"> 

        <Outlet></Outlet>
    </div>
      </>
  );
}

export default Slider;
