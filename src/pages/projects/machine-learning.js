import React from "react";
import Footer from "../../components/footer";
import Hamburger from "../../components/hamburger";
import Header from "../../components/header";
import ProjectDescriptionML from "../../components/projectDescriptionML";
import Projects from "../../components/projects";
import Sidebar from "../../components/sidebar";

import '../../styles.scss'

const machinelearning = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <Sidebar active="projects" />
      <ProjectDescriptionML />
      <Footer />
    </div>
  );
};

export default machinelearning;
