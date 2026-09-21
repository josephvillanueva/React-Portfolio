import React from "react";
import "./testimonials.css";
import { Pagination, Navigation, Keyboard, A11y } from "swiper/modules";
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
      <h2>Character Reference</h2>
      <Swiper
        className="container testimonials_container"
        modules={[Pagination, Navigation, Keyboard, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        speed={600}
        a11y={{
          enabled: true,
          containerRoleDescriptionMessage: "carousel",
          itemRoleDescriptionMessage: "character reference",
          prevSlideMessage: "Previous character reference",
          nextSlideMessage: "Next character reference",
          paginationBulletMessage: "Go to character reference {{index}}",
        }}
      >
        {data.map(({ name, review, github }) => {
          return (
            <SwiperSlide key={name} className="testimonial">
              <h3 className="client_name">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} on LinkedIn, opens in a new tab`}
                >
                  {name}
                </a>
              </h3>
              <p className="client_review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
