import React, { useRef } from "react";
import "./experience.css";
import { BsBuilding, BsCalendar3 } from "react-icons/bs";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const roles = [
  {
    period: "Jul 2026 - Present",
    title: "Systems Analyst, UI/UX Lead",
    company: "SMITS, Inc. (San Miguel Corporation)",
    summary:
      "Turn business needs into requirements and acceptance criteria that developers can build from, and support Product Owner initiatives through backlog refinement, prioritization, client workshops, and solution reviews. Also run internal UI/UX training, so far for 50 colleagues across business analysis, project management, systems analysis, development, and QA, and help govern the SMITS design system.",
    tags: ["Product Owner Support", "Requirements", "Design Systems", "AI Workflows"],
  },
  {
    period: "Jul 2025 - Jun 2026",
    title: "IT Application Specialist, UI/UX",
    company: "SMITS, Inc. (San Miguel Corporation)",
    summary:
      "Redesigned enterprise and legacy interfaces by turning business and system requirements into user flows, wireframes, prototypes, and implementation-ready specifications, and helped establish a more structured UI/UX practice.",
    tags: ["UX Design", "Prototyping", "Specifications", "Legacy Redesign"],
  },
  {
    period: "Mar 2023 - Jun 2025",
    title: "Software Developer, Frontend",
    company: "Mashup Garage",
    summary:
      "Led the redesign and performance optimization of Metrobank's branding website, aligning business requirements and success measures with product goals, and built reusable React and Next.js component patterns. Also served as the frontend team's informal technical lead, coordinating day-to-day delivery and providing implementation guidance across the team.",
    tags: ["React.js", "Next.js", "Informal Tech Lead", "Design Systems"],
  },
  {
    period: "Jun 2022 - Mar 2023",
    title: "Junior Cloud Engineer",
    company: "Senti AI",
    summary:
      "Reworked the company's starter templates (Fastify and Lit services on Terraform-managed infrastructure) so new projects took less setup, and contributed OCR and Google Cloud requirements for SM Prime's finance portal, which digitizes more than 50,000 files a month.",
    tags: ["Terraform", "Google Cloud", "OCR", "Fastify"],
  },
  {
    period: "Nov 2021 - Jun 2022",
    title: "Frontend Developer",
    company: "Anteriore Inc.",
    summary:
      "Built Playible.io with React and Tailwind CSS from product requirements and user stories, and led its technical transition to NEAR Protocol and GraphQL.",
    tags: ["React.js", "Tailwind CSS", "GraphQL", "NEAR Protocol"],
  },
  {
    period: "Jul 2020 - Present",
    title: "Strategic Marketing and Operations Lead",
    company: "A&J 3D Printing Services (e-commerce, Shopee)",
    summary:
      "Run operations and go-to-market for a 3D printing store alongside my main role. Grew revenue nearly 8x over three years, ran concept, A/B, and user testing for new product lines, and earned Shopee Preferred Seller status.",
    tags: ["Go-to-market", "A/B Testing", "E-commerce", "Operations"],
  },
  {
    period: "Dec 2019 - Nov 2021",
    title: "Founder and Product Design Engineer",
    company: "MetaTech Lab",
  },
  {
    period: "May 2018 - Dec 2019",
    title: "Product Design Engineer, Intern",
    company: "Proudcloud",
  },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // The line starts filling as the timeline enters and is full by the time
  // its last entry is comfortably on screen.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 90%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "0px 0px -15% 0px" },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <section id="experience">
      <h2>My Experience</h2>

      <div className="container timeline" ref={timelineRef}>
        <div className="timeline_track" aria-hidden="true">
          <motion.div
            className="timeline_progress"
            style={{ scaleY: reduceMotion ? 1 : progress }}
          />
        </div>

        <ol className="timeline_list">
          {roles.map((role, index) => (
            <motion.li
              key={`${role.company}-${role.period}`}
              className="timeline_item"
              {...reveal}
            >
              <span className="timeline_marker" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="timeline_content">
                <p className="timeline_date">
                  <BsCalendar3 aria-hidden="true" />
                  <span>{role.period}</span>
                </p>
                <h3 className="timeline_title">{role.title}</h3>
                <p className="timeline_company">
                  <BsBuilding aria-hidden="true" />
                  <span>{role.company}</span>
                </p>
                {role.summary && (
                  <p className="timeline_summary">{role.summary}</p>
                )}
                {role.tags && (
                  <ul className="timeline_tags" aria-label="Focus areas">
                    {role.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
