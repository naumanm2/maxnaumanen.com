import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FaExternalLinkAlt } from "react-icons/fa";

import { BsArrowLeft } from "react-icons/bs";

const ProjectDescriptionML = () => {
  return (
    <div>
      <div className="projects">
        <div className="container">
          <div className="inner-wrapper">
            <Link to="/projects">
              <BsArrowLeft className="icon" />
            </Link>
            <h1>Machine Learning</h1>
          </div>
          <p className="date">fall semester 2020</p>
          <h2>Briefly</h2>
          <p>
            I trained a model to identify letters that are often seen in counter
            robot measures. I tried three models: SVC, Random forest with 100
            trees and KNN with neighbours ranging from 1 to 8. Model that proved
            most accurate in validation and training turned out to be SVC.
          </p>
          <div className="image-gallery ml">
            <div className="image n1">
              <StaticImage src="../images/ML.png" alt="resultsgats" />
            </div>
          </div>
          <div className="img-text">scores with SVC</div>
          <p>
            find out more about code itself and stuff from{" "}
            <a href="https://github.com/naumanm2/machine_learning"> github. </a>{" "}
            <FaExternalLinkAlt className="icon" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionML;
