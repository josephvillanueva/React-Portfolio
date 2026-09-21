import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const skills = {
    product: [
      { name: "Requirements Analysis", experience: "Current focus" },
      { name: "User Stories", experience: "Current focus" },
      { name: "Acceptance Criteria", experience: "Current focus" },
      { name: "Backlog Refinement", experience: "Current focus" },
      { name: "Feature Prioritization", experience: "Current focus" },
      { name: "Product Discovery", experience: "Current focus" },
      { name: "Process & User Flows", experience: "Experienced" },
      { name: "Stakeholder Management", experience: "Experienced" },
      { name: "Client Workshops", experience: "Experienced" },
      { name: "Agile Delivery", experience: "Experienced" },
      { name: "Requirements Traceability", experience: "Experienced" },
      { name: "Design Systems", experience: "Experienced" },
    ],
    technical: [
      { name: "React.js", experience: "Experienced" },
      { name: "Next.js", experience: "Experienced" },
      { name: "TypeScript", experience: "Experienced" },
      { name: "JavaScript", experience: "Experienced" },
      { name: "HTML & CSS", experience: "Experienced" },
      { name: "Tailwind CSS", experience: "Experienced" },
      { name: "Framer Motion", experience: "Experienced" },
      { name: "Node.js", experience: "Experienced" },
      { name: "REST API", experience: "Experienced" },
      { name: "GraphQL", experience: "Experienced" },
      { name: "Fastify", experience: "Experienced" },
      { name: "Terraform", experience: "Experienced" },
    ],
  };

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <article className="experience_details" key={index}>
        <BsPatchCheckFill className="experience_details-icon" />
        <div>
          <h4>{skill.name}</h4>
          <small className="text-light">{skill.experience}</small>
        </div>
      </article>
    ));
  };

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Product &amp; Business Analysis</h3>
          <div className="experience_content">
            {renderSkills(skills.product)}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Technical Foundation</h3>
          <div className="experience_content">
            {renderSkills(skills.technical)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
