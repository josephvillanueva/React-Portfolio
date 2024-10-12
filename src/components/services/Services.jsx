import React from "react";
import "./services.css";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

const Services = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const toggleService = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const servicesData = [
    {
      title: "UI/UX Design",
      description: [
        "Creating intuitive and user-centric designs for cross-platform applications.",
        "Conducting UI and UX audits to enhance usability and engagement.",
        "Crafting visually appealing web layouts that align with brand identity.",
      ],
    },
    {
      title: "Web Development",
      description: [
        "Building responsive and interactive web applications using React.js.",
        "Implementing modern styling frameworks like Tailwind CSS and Bootstrap for optimal user experiences.",
        "Developing efficient and maintainable code to ensure robust functionality.",
      ],
    },
    {
      title: "Consulting Services",
      description: [
        "Providing business planning consultations to streamline project execution.",
        "Offering expertise in project management to facilitate timely delivery and team collaboration.",
        "Advising on innovative technologies and strategies, including 3D printing applications.",
      ],
    },
  ];

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {servicesData.map((service, index) => (
          <article className="service" key={index}>
            <div className="service_head" onClick={() => toggleService(index)}>
              <h3>{service.title}</h3>
              <BiChevronDown
                className={`arrow-icon ${
                  activeIndex === index ? "active" : ""
                }`}
              />
            </div>
            <motion.ul
              className={`service_list ${
                activeIndex === index ? "active" : ""
              }`}
              initial={{ maxHeight: 250 }}
              animate={{ maxHeight: activeIndex === index ? 250 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.description.map((desc, i) => (
                <li key={i}>
                  <BiCheck className="service_list-icon" />
                  <p>{desc}</p>
                </li>
              ))}
            </motion.ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
