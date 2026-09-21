import React from "react";
import "./services.css";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

const Services = () => {
  const servicesData = [
    {
      title: "Product & Requirements",
      description: [
        "Translating business needs into functional requirements and delivery-ready feature scopes.",
        "Writing user stories and acceptance criteria that hold up through implementation.",
        "Backlog refinement, feature prioritization, and requirements traceability.",
        "Product discovery, client workshops, and solution validation with stakeholders.",
      ],
    },
    {
      title: "UX & Design Systems",
      description: [
        "Mapping process and user flows, then turning them into wireframes and prototypes.",
        "Conducting UI and UX audits to enhance usability and engagement.",
        "Contributing design system standards, reusable patterns, and documentation.",
        "Running internal UI/UX training so delivery teams apply consistent practices.",
      ],
    },
    {
      title: "Technical Delivery",
      description: [
        "Building responsive web applications with React.js, Next.js, and Tailwind CSS.",
        "Sizing feasibility alongside engineers instead of guessing at it.",
        "Specifying API and integration requirements, including REST and GraphQL.",
        "Evaluating AI-assisted workflows for analysis, design, and documentation.",
      ],
    },
  ];

  // Every card starts open; each one still collapses independently.
  const [openServices, setOpenServices] = React.useState(
    () => new Set(servicesData.map((_, index) => index)),
  );

  const toggleService = (index) => {
    setOpenServices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {servicesData.map((service, index) => {
          const isOpen = openServices.has(index);
          return (
            <article className="service" key={service.title}>
              <button
                type="button"
                className="service_head"
                onClick={() => toggleService(index)}
                aria-expanded={isOpen}
              >
                <h3>{service.title}</h3>
                <BiChevronDown
                  className={`arrow-icon ${isOpen ? "active" : ""}`}
                />
              </button>
              <motion.ul
                className={`service_list ${isOpen ? "active" : ""}`}
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
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
          );
        })}
      </div>
    </section>
  );
};

export default Services;
