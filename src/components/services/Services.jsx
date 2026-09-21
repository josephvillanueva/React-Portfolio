import React from "react";
import "./services.css";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { motion, useReducedMotion } from "framer-motion";

// Slow start, long settle. Shared by the panel and the chevron so they move
// as one.
const EASE = [0.16, 1, 0.3, 1];

const Services = () => {
  const servicesData = [
    {
      title: "Product & Requirements",
      description: [
        "Translating business needs into functional requirements and delivery-ready feature scopes.",
        "Writing user stories and acceptance criteria that hold up through implementation.",
        "Refining and prioritizing the backlog, with each item traced back to the requirement it serves.",
        "Running discovery workshops with clients and checking proposed solutions against what they asked for.",
      ],
    },
    {
      title: "UX & Design Systems",
      description: [
        "Mapping process and user flows, then turning them into wireframes and prototypes.",
        "Auditing existing screens for usability problems and turning the findings into fixes.",
        "Writing design system standards and the component guidance that teams build from.",
        "Running internal UI/UX training so delivery teams apply consistent practices.",
      ],
    },
    {
      title: "Technical Delivery",
      description: [
        "Building responsive web applications with React.js, Next.js, and Tailwind CSS.",
        "Sizing feasibility alongside engineers instead of guessing at it.",
        "Specifying API and integration requirements, including REST and GraphQL.",
        "Trying out AI-assisted workflows in analysis and design work, and keeping the ones that hold up.",
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

  const reduceMotion = useReducedMotion();
  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: EASE };

  return (
    <section id="services">
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
                aria-controls={`service-panel-${index}`}
              >
                <h3>{service.title}</h3>
                <BiChevronDown
                  className={`arrow-icon ${isOpen ? "active" : ""}`}
                />
              </button>
              {/* Only the outer wrapper animates height; the padding lives on
                  the list inside it, so nothing snaps while it opens. */}
              <motion.div
                id={`service-panel-${index}`}
                className="service_panel"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { height: "auto" },
                  closed: { height: 0 },
                }}
                transition={transition}
                inert={!isOpen}
              >
                <motion.ul
                  className="service_list"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -8 },
                  }}
                  transition={transition}
                >
                  {service.description.map((desc, i) => (
                    <li key={i}>
                      <BiCheck className="service_list-icon" />
                      <p>{desc}</p>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
