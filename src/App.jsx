import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import UXCaseStudies from "./components/caseStudies/UXCaseStudies";
import Process from "./components/process/Process";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ThemeToggle from "./components/theme/ThemeToggle";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Services />
      <UXCaseStudies />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
