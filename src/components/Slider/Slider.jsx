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
  title: "Urban Gardening Meetup",
  description:
    "Join fellow plant lovers for a hands-on workshop on balcony and container gardening.",
  image: "https://i.ibb.co/RG87qpm4/slider-3.png",
  date: "2025-06-15",
},
{
  title: "Composting 101: From Waste to Wealth",
  description:
    "Learn the art of composting at home and reduce your carbon footprint while enriching your garden soil.",
  image: "https://i.ibb.co/zhcZSrVD/slider-2.png",
  date: "2025-06-22",
},
{
  title: "Hydroponics for Beginners",
  description:
    "Discover how to grow fresh herbs and veggies without soil — perfect for small spaces and curious minds.",
  image: "https://i.ibb.co/hR6fTNwf/slider-1.png",
  date: "2025-07-01",
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
                    <p className="font-semibold text-xl pt-2">{slide.date}</p>
                    <Link to="/browsetips" className="btn mt-3">
                      Explore Now
                    </Link>
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
