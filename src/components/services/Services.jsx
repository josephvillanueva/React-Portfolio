import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = [
  {
    title: "Product & Requirements",
    items: [
      "Product discovery and solution validation",
      "Functional requirements and delivery-ready scopes",
      "User stories, acceptance criteria, and traceability",
      "Backlog refinement and feature prioritization",
    ],
  },
  {
    title: "UX & Design Systems",
    items: [
      "User flows, wireframes, and prototypes",
      "Design system standards and governance",
      "Reusable interface patterns and documentation",
      "Internal UI/UX training for delivery teams",
    ],
  },
  {
    title: "Technical Delivery",
    items: [
      "React.js and Next.js application development",
      "Feasibility assessment alongside engineering",
      "API and integration requirements",
      "AI-assisted delivery workflows",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Do</h5>
      <h2>Services</h2>
      <div className="container services_container">
        {services.map(({ title, items }) => (
          <article key={title} className="service">
            <div className="service_head">
              <h3>{title}</h3>
            </div>
            <ul className="service_list">
              {items.map((item) => (
                <li key={item}>
                  <BiCheck className="service_list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
