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
      "Translate business needs into functional requirements, user flows, and acceptance criteria, and support Product Owner initiatives through backlog refinement, prioritization, client workshops, and solution reviews. Lead internal UI/UX training and help govern the SMITS design system.",
    tags: ["Product Owner Support", "Requirements", "Design Systems", "AI Workflows"],
  },
  {
    period: "Jul 2025 - Jun 2026",
    title: "IT Application Specialist, UI/UX",
    company: "SMITS, Inc. (San Miguel Corporation)",
    summary:
      "Redesigned enterprise and legacy interfaces by turning business and system requirements into user flows, wireframes, prototypes, and implementation-ready specifications, and helped establish a more structured UI/UX practice.",
    tags: ["UX Design", "Prototyping", "Specifications"],
  },
  {
    period: "Mar 2023 - Jun 2025",
    title: "Software Developer, Frontend",
    company: "Mashup Garage",
    summary:
      "Led the redesign and performance optimization of Metrobank's branding website, aligning business requirements and success measures with product goals, and built reusable React and Next.js component patterns.",
    tags: ["React.js", "Next.js", "Performance", "Design Systems"],
  },
  {
    period: "Jun 2022 - Mar 2023",
    title: "Junior Cloud Engineer",
    company: "Senti AI",
    summary:
      "Improved company Fastify, Lit, and Terraform templates to cut project setup effort, and contributed OCR and Google Cloud requirements for SM Prime's finance portal, which digitizes more than 50,000 files a month.",
    tags: ["Terraform", "Google Cloud", "OCR"],
  },
  {
    period: "Nov 2021 - Jun 2022",
    title: "Frontend Developer",
    company: "Anteriore Inc.",
    summary:
      "Built Playible.io with React and Tailwind CSS from product requirements and user stories, and led its technical transition to NEAR Protocol and GraphQL.",
    tags: ["React.js", "GraphQL", "NEAR Protocol"],
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
      <h5>Where I&apos;ve Worked</h5>
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
