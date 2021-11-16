import React from "react";
import Footer from "../../components/footer";
import Hamburger from "../../components/hamburger";
import Header from "../../components/header";
import Projects from "../../components/projects";
import SEO from "../../components/seo";
import Sidebar from "../../components/sidebar";

import '../../styles.scss'

const projects = () => {
  return (
    <div>
      <SEO title="projects"/>
      <Header />
      <Hamburger />
      <Sidebar active="projects"/>
      <Projects />
      <Footer />
    </div>
  );
};

export default projects;
