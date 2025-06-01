import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, Outlet } from "react-router";

function Slider() {
  const swiperRef = useRef(null);



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
    <div className="bg-base-100 text-base-content">
      <div className="h-[calc(100vh-60px)] md:h-[520px] md:px-8 lg:px-0">
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper w-full mx-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid px-5 md:grid-cols-2 items-center my-3 md:justify-between max-w-6xl mx-auto h-full">
                <div className="lg:ml-20 text-center md:text-left w-full">
                  <h2 className="text-[30px] md:text-[50px] md:leading-[60px] font-medium">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-lg mt-5 text-center md:text-left">
                    {slide.description}
                  </p>
                  <Link to='/browsetips' className="btn mt-3" >Explore Now</Link>
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
      <Outlet />
    </div>
  </>
);

}

export default Slider;
