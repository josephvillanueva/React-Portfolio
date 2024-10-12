import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const skills = {
    frontend: [
      { name: "HTML", experience: "Experienced" },
      { name: "CSS", experience: "Experienced" },
      { name: "JavaScript", experience: "Experienced" },
      { name: "React.js", experience: "Experienced" },
      { name: "Bootstrap", experience: "Experienced" },
      { name: "Tailwind CSS", experience: "Experienced" },
      { name: "Framer Motion", experience: "Experienced" },
    ],
    backend: [
      { name: "Node.js", experience: "Experienced" },
      { name: "Solidity", experience: "Experienced" },
      { name: "Fastify", experience: "Experienced" },
      { name: "REST API", experience: "Experienced" },
      { name: "GraphQL", experience: "Experienced" },
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
          <h3>Frontend Stack Experience</h3>
          <div className="experience_content">
            {renderSkills(skills.frontend)}
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Stack Experience</h3>
          <div className="experience_content">
            {renderSkills(skills.backend)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
