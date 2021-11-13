import React from "react";
import Footer from "../../components/footer";
import Hamburger from "../../components/hamburger";
import Header from "../../components/header";
import ProjectDescription from "../../components/projectDescription";
import Projects from "../../components/projects";
import Sidebar from "../../components/sidebar";

import '../../styles.scss'

const uidmaking = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <Sidebar active="projects" />
      <ProjectDescription />
      <Footer />
    </div>
  );
};

export default uidmaking;
