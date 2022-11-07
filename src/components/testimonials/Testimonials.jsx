import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Angelo Amadora",
    github: "https://www.linkedin.com/in/angelo-amadora-056b62201/",
    review:
      "Previous Team Lead in Anteriore Solutions",
  },
  {
    name: "Kim Fajardo",
    github: "https://www.linkedin.com/in/kimpfajardo/",
    review:
      "Previous Co-worker and Mentor in Anteriore Solutions",
  },
  {
    name: "Gio Velez",
    github: "https://www.linkedin.com/in/gio-anton-velez-ab0aa1a7/",
    review:
      "Previous Co-worker in Metatech Labs and colleague in Senti.ai",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Previous Co-workers</h5>
      <h2>Character Reference</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ avatar, name, review, key, github }) => {
          return (
            <SwiperSlide key={key} className="testimonial">
              <h5 className="client_name">
                <a href={github} target="_blank">
                  {name}
                </a>
              </h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
