import React from "react";
import "./testimonials.css";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    name: "Leonell Cruz",
    github: "https://www.linkedin.com/in/leonellcruz/",
    review: "Current team member in Mashup Garage",
  },
  {
    name: "Alyssa Marcos",
    github: "https://www.linkedin.com/in/alyssamarcos/",
    review: "Co-founder of A&J 3D Printing Services",
  },
  {
    name: "Gio Velez",
    github: "https://www.linkedin.com/in/gio-anton-velez-ab0aa1a7/",
    review: "Previous Co-worker in Metatech Labs and colleague in Senti.ai",
  },
  {
    name: "Angelo Amadora",
    github: "https://www.linkedin.com/in/angelo-amadora-056b62201/",
    review: "Previous Team Lead in Anteriore Solutions",
  },
  {
    name: "Kim Fajardo",
    github: "https://www.linkedin.com/in/kimpfajardo/",
    review: "Previous Co-worker and Mentor in Anteriore Solutions",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Previous Co-workers</h5>
      <h2>Character Reference</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        speed={600}
        effect="slide"
      >
        {data.map(({ name, review, github }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <h5 className="client_name">
                <a href={github} target="_blank" rel="noreferrer">
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
