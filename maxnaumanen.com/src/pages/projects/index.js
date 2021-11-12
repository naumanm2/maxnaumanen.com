import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Projects from "../../components/projects";
import Sidebar from "../../components/sidebar";

const projects = () => {
  return (
    <div>
      <Header />
      <Sidebar active="projects"/>
      <Projects />
      <Footer />
    </div>
  );
};

export default projects;
