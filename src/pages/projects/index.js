import React from "react";
import Footer from "../../components/footer";
import Hamburger from "../../components/hamburger";
import Header from "../../components/header";
import Projects from "../../components/projects";
import Sidebar from "../../components/sidebar";

import '../../styles.scss'

const projects = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <Sidebar active="projects"/>
      <Projects />
      <Footer />
    </div>
  );
};

export default projects;
