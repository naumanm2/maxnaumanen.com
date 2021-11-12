import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";

import { Link } from "gatsby";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="professional">
          <ul className="pro-projects">
            <h1>professional</h1>
            <li className="i1">
              <h2>2021</h2>
              <h3>
                <a href="https://www.burgercompany.fi">burgercompany.fi</a>{" "}
                <FaExternalLinkAlt className="extIcon"/>
              </h3>
              <p>visual identity, website for burger company</p>
            </li>
          </ul>
        </div>
        <div className="school">
          <ul className="school-projects">
            <h1>school projects</h1>
            <li className="i1">
              <h2>2021</h2>
              <h3>
                <Link to="/projects/uid-making-project">
                  User Inspired Design Making –project
                </Link>
              </h3>
              <p>
                I worked with a beautiful team to create a concept of
                'doggy-bag' for graduating middle schoolers to level out income
                inequality through equal access to financial knowledge.
              </p>
            </li>
            <li className="i2">
              <h2>2020</h2>
              <h3>
                <a href="https://stormy-mountain-32205.herokuapp.com/#/">
                  Design of WWW-services
                </a>{" "}<FaExternalLinkAlt className="extIcon" />
              </h3>
              <p>
                We created a website concept that would help museum visitors to
                inspect current exhibitions.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
