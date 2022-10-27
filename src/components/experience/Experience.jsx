import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Stack Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>React.js</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Stack Experience</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
