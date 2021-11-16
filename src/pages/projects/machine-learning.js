import React from "react";
import Footer from "../../components/footer";
import Hamburger from "../../components/hamburger";
import Header from "../../components/header";
import ProjectDescriptionML from "../../components/projectDescriptionML";
// import Projects from "../../components/projects";
import SEO from "../../components/seo";
import Sidebar from "../../components/sidebar";

import '../../styles.scss'

const machinelearning = () => {
  return (
    <div>
      <SEO title="machine learning"/>
      <Header />
      <Hamburger />
      <Sidebar active="projects" />
      <ProjectDescriptionML />
      <Footer />
    </div>
  );
};

export default machinelearning;
