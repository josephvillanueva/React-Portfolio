import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const productSkills = [
  "Requirements Analysis",
  "User Stories & Acceptance Criteria",
  "Backlog Refinement",
  "Feature Prioritization",
  "Product Discovery",
  "Process & User Flow Mapping",
  "Stakeholder Management",
  "Client Workshops",
  "Requirements Traceability",
  "Agile Delivery",
];

const technicalSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
  "Design Systems",
  "Prototyping",
  "Git & GitHub",
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Product &amp; Business Analysis</h3>
          <div className="experience_content">
            {productSkills.map((skill) => (
              <article key={skill} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Technical</h3>
          <div className="experience_content">
            {technicalSkills.map((skill) => (
              <article key={skill} className="experience_details">
                <BsPatchCheckFill className="experience_details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
