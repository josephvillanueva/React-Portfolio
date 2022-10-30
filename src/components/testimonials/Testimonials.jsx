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
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti porro repellendus explicabo aliquid repudiandae laudantium neque voluptates. Non possimus numquam temporibus! Veniam, odio quod quo exercitationem odit sunt molestiae non.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti porro repellendus explicabo aliquid repudiandae laudantium neque voluptates. Non possimus numquam temporibus! Veniam, odio quod quo exercitationem odit sunt molestiae non.",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti porro repellendus explicabo aliquid repudiandae laudantium neque voluptates. Non possimus numquam temporibus! Veniam, odio quod quo exercitationem odit sunt molestiae non.",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti porro repellendus explicabo aliquid repudiandae laudantium neque voluptates. Non possimus numquam temporibus! Veniam, odio quod quo exercitationem odit sunt molestiae non.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
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
        {data.map(({ avatar, name, review, key }) => {
          return (
            <SwiperSlide key={key} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
