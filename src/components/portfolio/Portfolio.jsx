import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import WIP from "../../assets/WIP.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Playible: Next-Gen Fantasy Sports on NEAR",
    github: "https://playible.club/playible-next-gen-nft-fantasy-sports/",
    demo: "https://app.playible.io/",
    tech: [
      "React.js",
      "Node.js",
      "GraphQL",
      "Tailwind",
      "Blockchain - NEAR Protocol",
      "Postman",
    ],
  },
  {
    id: 2,
    image: IMG2,
    title: "AI Object Detector",
    github: "https://github.com/josephvillanueva/ai-object-detector",
    demo: "https://ai-object-detector-three.vercel.app/",
    tech: ["React.js", "Next.js", "Node.js", "Tailwind", "Tensorflow"],
  },
  {
    id: 3,
    image: IMG3,
    title: "GHIPY Clone",
    github: "https://github.com/josephvillanueva/ai-object-detector",
    demo: "https://giphy-clone.vercel.app/",
    tech: [
      "React.js",
      "React Icons",
      "Vite",
      "Node.js",
      "Tailwind",
      "GIPHY API",
    ],
  },
  {
    id: 4,
    image: WIP,
    title: "React Query Project",
    github: "https://github.com/josephvillanueva/react-query",
    demo: "https://react-query-josephvillanueva.vercel.app/",
    tech: ["React.js", "Vite", "React Query"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work/Involvements</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo, tech }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="porfolio_item_content">
                <div className="portfolio_item-image">
                  <img src={image} alt="" />
                </div>
              </div>
              <div className="portfolio_item_container">
                <h3>{title}</h3>
                <div className="portfolio_tech">
                  {tech.map((yes) => {
                    return (
                      <div className="portfolio_tech_background">
                        <div className="portfolio_tech_item">{yes}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
