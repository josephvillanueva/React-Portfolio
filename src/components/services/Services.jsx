import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Cross-platform experience design</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>UI and UX consulting </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Web Design Layout</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>React.js Web Development</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>CSS Web Styling or UI Styled Frameworks. Tailwind, Bootstrap, etc.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>UI Styled Frameworks. Tailwind, Bootstrap, etc.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Others</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Business planning consultation </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Project management </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>3D Printing </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
