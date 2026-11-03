import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import "./process.css";

const stages = [
  { title: "Discovery", focus: "Understand the need", work: ["Discovery workshops", "Process mapping"], output: "Business needs and shared context" },
  { title: "Requirements", focus: "Define what matters", work: ["User stories", "Acceptance criteria"], output: "Prioritized backlog and feature scope" },
  { title: "UX design", focus: "Make the flow clear", work: ["Wireframes", "Prototypes"], output: "Usable flows and design guidance" },
  { title: "Delivery", focus: "Turn scope into software", work: ["Feasibility checks", "React development"], output: "Responsive applications and integrations" },
];

export default function Process() {
  const [activeStage, setActiveStage] = useState(-1);
  const reduceMotion = useReducedMotion();
  // With reduced motion the effect never runs, so no stage is highlighted.
  const highlighted = reduceMotion ? -1 : activeStage;

  // Cycle through the four stages, then leave a five-second pause.
  useEffect(() => {
    if (reduceMotion) return;

    let timer;
    const showStage = (index) => {
      setActiveStage(index);
      timer = window.setTimeout(() => {
        if (index < stages.length - 1) {
          showStage(index + 1);
        } else {
          setActiveStage(-1);
          timer = window.setTimeout(() => showStage(0), 5000);
        }
      }, 2000);
    };

    // Trigger the first fade after the initial inactive state has rendered.
    timer = window.setTimeout(() => showStage(0), 120);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <div className="process" role="group" aria-labelledby="process-heading">
      <p className="process-eyebrow">From idea to implementation</p>
      <h3 id="process-heading" className="process-title">How I work</h3>
      <div className="container process-container">
        <h4>From business need to working product</h4>
        <p className="process-intro">A connected path across product, design, and engineering.</p>
        <ol className="process-stages">
          {stages.map((stage, index) => (
            <li className={`process-stage${index === 1 ? " process-stage-focal" : ""}${highlighted === index ? " process-stage-active" : ""}`} key={stage.title}>
              <h5><span className="process-number">0{index + 1}</span> {stage.title}</h5>
              <dl>
                <div><dt>Focus</dt><dd>{stage.focus}</dd></div>
                <div><dt>Work</dt><dd>{stage.work.map((item) => <span key={item}>{item}</span>)}</dd></div>
                <div><dt>Output</dt><dd>{stage.output}</dd></div>
              </dl>
            </li>
          ))}
        </ol>
        <p className="process-note">Requirements connect the business need to design and delivery.</p>
        <p className="process-feedback">Feedback can refine the work at every stage.</p>
      </div>
    </div>
  );
}
