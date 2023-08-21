import React from "react";
import ProjectDescriptionTBWA from "../../components/projectDescriptionTBWA";
import Sidebar from "../../components/sidebar";
import Hamburger from "../../components/hamburger";
import Header from "../../components/header";
import SEO from "../../components/seo";
import Footer from "../../components/footer";

const tbwa = () => {
  return (
    <div>
      <SEO title="projects" />
      <Header />
      <Hamburger />
      <Sidebar active="projects" />
      <ProjectDescriptionTBWA />
      <Footer />
    </div>
  );
};

export default tbwa;
