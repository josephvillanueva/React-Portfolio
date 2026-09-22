import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { IoClose } from "react-icons/io5";
import PLAYIBLE from "../../assets/portfolio1.jpg";
import OBJECT_DETECTOR from "../../assets/ai-object-detector.jpg";
import GIPHY_CLONE from "../../assets/giphy-clone.jpg";
import RECIPE_RANDOMIZER from "../../assets/recipe-randomizer.jpg";
import BACKLOG_BOARD from "../../assets/backlog-board.jpg";
import SPEND_MASTER from "../../assets/spend-master.jpg";
import FRAUD_MASTER from "../../assets/fraud-master.jpg";
import BACKLOG_BOARD_ARCH from "../../assets/architecture/backlog-board.svg";
import OBJECT_DETECTOR_ARCH from "../../assets/architecture/ai-object-detector.svg";
import GIPHY_CLONE_ARCH from "../../assets/architecture/giphy-clone.svg";
import RECIPE_RANDOMIZER_ARCH from "../../assets/architecture/recipe-randomizer.svg";
import SPEND_MASTER_ARCH from "../../assets/architecture/spend-master.svg";
import FRAUD_MASTER_ARCH from "../../assets/architecture/fraud-master.svg";

const projects = [
  {
    id: 1,
    image: BACKLOG_BOARD,
    title: "Backlog Board: TanStack Query Demo",
    github: "https://github.com/josephvillanueva/react-query",
    demo: "https://react-query-josephvillanueva.vercel.app/",
    architecture: {
      src: BACKLOG_BOARD_ARCH,
      alt: "React components call query hooks, which patch the QueryClient cache and call a simulated API that saves to localStorage. Failed saves roll the cache back and raise a toast.",
    },
    tech: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Optimistic Updates",
      "Vite",
    ],
  },
  {
    id: 6,
    image: SPEND_MASTER,
    title: "Spend Master: Procurement Spend Analytics",
    github: "https://github.com/josephvillanueva/spend-master",
    demo: "https://spend-master-demo.netlify.app/",
    architecture: {
      src: SPEND_MASTER_ARCH,
      alt: "Generated transactions pass through role scoping into the dashboard, the analysis wizard, and the chat. Analysis falls back to local findings without AI, and an optional AI proxy only gets summaries and a small sample.",
    },
    tech: [
      "Product Prototype",
      "JavaScript",
      "Chart.js",
      "Role-based Access",
      "AI Findings (optional)",
    ],
  },
  {
    id: 7,
    image: FRAUD_MASTER,
    title: "Fraud Master: Credit Memo Risk Review",
    github: "https://github.com/josephvillanueva/fraud-master",
    demo: "https://fraud-master-demo.netlify.app/",
    architecture: {
      src: FRAUD_MASTER_ARCH,
      alt: "Generated credit memos are scored by a rules engine and routed to Investigate, Review, or Straight-through for reviewers. Case explanations pass through local masking before an optional AI proxy.",
    },
    tech: [
      "Product Prototype",
      "JavaScript",
      "Risk Scoring Rules",
      "Role-based Access",
      "AI Explanations (optional)",
    ],
  },
  {
    id: 2,
    image: PLAYIBLE,
    title: "Playible: Next-Gen Fantasy Sports on NEAR",
    // The product has shut down and its site and app no longer resolve, so
    // the card says so instead of linking to dead pages.
    status: "Product shut down. The app and site are no longer online.",
    tech: [
      "React.js",
      "Node.js",
      "GraphQL",
      "Tailwind CSS",
      "Blockchain - NEAR Protocol",
      "Postman",
    ],
  },
  {
    id: 3,
    image: OBJECT_DETECTOR,
    title: "AI Object Detector",
    github: "https://github.com/josephvillanueva/ai-object-detector",
    demo: "https://ai-object-detector-josephvillanueva.vercel.app/",
    architecture: {
      src: OBJECT_DETECTOR_ARCH,
      alt: "Webcam frames feed a detection loop that runs COCO-SSD through TensorFlow.js in the browser and draws boxes on a canvas overlay. Only the page and the model weights are downloaded.",
    },
    tech: ["Next.js 15", "React 19", "TensorFlow.js", "COCO-SSD", "Tailwind CSS"],
  },
  {
    id: 4,
    image: GIPHY_CLONE,
    title: "GIPHY Clone",
    github: "https://github.com/josephvillanueva/giphy-clone",
    demo: "https://giphy-clone.vercel.app/",
    architecture: {
      src: GIPHY_CLONE_ARCH,
      alt: "React Router renders pages that load data through a useGiphy hook and the GIPHY API. Favorites live in a shared context and are saved to localStorage.",
    },
    tech: ["React 18", "Vite", "React Router", "Tailwind CSS", "GIPHY API"],
  },
  {
    id: 5,
    image: RECIPE_RANDOMIZER,
    title: "Recipe Randomizer",
    github: "https://github.com/josephvillanueva/RecipeRandomizerNext",
    demo: "https://recipe-randomizer-next.vercel.app/",
    architecture: {
      src: RECIPE_RANDOMIZER_ARCH,
      alt: "The browser calls two Next.js API routes on Vercel. A shared helper adds the API key and calls the Spoonacular API, and recipe photos go through the Next.js image optimizer.",
    },
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "API Routes",
      "Tailwind CSS",
      "Spoonacular API",
    ],
  },
];

const ArchitectureDialog = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return (
    // A click on the backdrop lands on the dialog element itself; Escape and
    // the close button are the keyboard routes, so this needs no key handler.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      className="architecture_dialog"
      aria-labelledby="architecture-title"
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      {project && (
        <div className="architecture_dialog-body">
          <div className="architecture_dialog-head">
            <h3 id="architecture-title">{project.title}: architecture</h3>
            <button
              type="button"
              className="architecture_dialog-close"
              onClick={onClose}
              aria-label="Close"
            >
              <IoClose aria-hidden="true" />
            </button>
          </div>
          <p className="architecture_dialog-hint">
            Scroll sideways to see the whole diagram.
          </p>
          <div className="architecture_dialog-scroll">
            <img
              src={project.architecture.src}
              alt={project.architecture.alt}
            />
          </div>
        </div>
      )}
    </dialog>
  );
};

const Portfolio = () => {
  const [archProject, setArchProject] = useState(null);

  return (
    <section id="portfolio">
      <h5>My Recent Work/Involvements</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {projects.map((project) => {
          const { id, image, title, github, demo, tech, architecture, status } =
            project;
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_content">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
              </div>
              <div className="portfolio_item_container">
                <h3>{title}</h3>
                <div className="portfolio_tech">
                  {tech.map((techItem, index) => (
                    <div key={index} className="portfolio_tech_background">
                      <div className="portfolio_tech_item">{techItem}</div>
                    </div>
                  ))}
                </div>
                <div className="portfolio_item-cta">
                  {github && (
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Code
                    </a>
                  )}
                  {architecture && (
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setArchProject(project)}
                    >
                      Architecture
                    </button>
                  )}
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {status && <p className="portfolio_status">{status}</p>}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <ArchitectureDialog
        project={archProject}
        onClose={() => setArchProject(null)}
      />
    </section>
  );
};

export default Portfolio;
