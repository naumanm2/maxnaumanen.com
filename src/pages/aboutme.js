import React from "react";
import AboutMe from "../components/aboutme";
import Footer from "../components/footer";
import Hamburger from "../components/hamburger";
import Header from "../components/header";
import Resume from "../components/resume";
import Sidebar from "../components/sidebar";

import "../styles.scss";

const aboutme = () => {
  return (
    <div>
      <Header />
      <Hamburger />
      <Sidebar active="aboutme" />
      {/* <div style={{ height: "80vh", overflowY: "scroll" }}> */}
      <div className="aboutmewrapper">
        <AboutMe />
        <Resume />
      </div>
      <Footer />
    </div>
  );
};

export default aboutme;
