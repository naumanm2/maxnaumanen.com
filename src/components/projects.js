import React from "react";

import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import { Link } from "gatsby";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1>work</h1>
        <div className="professional">
          <ul className="pro-projects">
            <h2>professional</h2>
            <li className="i1">
              <div className="hs">
                <div className="left-wrapper">
                  <h3>TBWA\Helsinki</h3>
                  <h5>2021–</h5>
                </div>
                <div className="right-wrapper">
                  <Link to="/projects/tbwa">
                    <button className="button-general">
                      <div>See more</div>
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
              <p>
                working as junior digital designer, i do every task technical i
                can help with. mainly ui design, tbwahelsinki.fi, html5 banner
                animation
              </p>
              <h3>
                <a href="https://www.burgercompany.fi">burgercompany.fi</a>{" "}
                <FaExternalLinkAlt className="extIcon" />
              </h3>
              <p>visual identity, website for burger company</p>
              <div className="technique-keywords">
                {/* <h3>techniques used:</h3> */}
                #illustrator #photoshop #indesign #XD #gatsby
              </div>
            </li>
          </ul>
        </div>
        <div className="school">
          <ul className="school-projects">
            <h2>school projects</h2>
            <li className="i1">
              <h3 className="dt year">2021</h3>
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
              <div className="technique-keywords">
                {/* <h3>techniques used:</h3> */}
                #ucd
              </div>
            </li>
            <li className="i2">
              <h3 className="dt year">2020</h3>
              <h3>
                <a href="https://stormy-mountain-32205.herokuapp.com/#/">
                  Design of WWW-services
                </a>{" "}
                <FaExternalLinkAlt className="extIcon" />
              </h3>
              <p>
                We created a website concept that would help museum visitors to
                inspect current exhibitions.
              </p>
              <div className="technique-keywords">
                {/* <h3>techniques used:</h3> */}
                #react #redux #node.js #mongoDB
              </div>
            </li>
            <li className="i3">
              <h3>
                {/* <a href="https://github.com/naumanm2/machine_learning">
                  Machine Learning
                </a>{" "}
                <FaExternalLinkAlt className="extIcon" /> */}
                <Link to="/projects/machine-learning">Machine learning</Link>
              </h3>
              <p>
                I trained a model to identify individual letters similar to
                those in CAPTCHA.
              </p>
              <div className="technique-keywords">
                {/* <h3>techniques used:</h3> */}
                #python #SVC #KNN #random forest
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
