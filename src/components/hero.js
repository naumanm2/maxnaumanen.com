import React from "react";

import { Link } from "gatsby";

import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>
          hi<span style={{ color: "#A230C6" }}>,</span> i
          <span style={{ color: "#20322A" }}>'</span>m max
        </h1>
        <h2>designer, composer, creator of things</h2>
        <p>student of design, things that are technical</p>
        <ul className="links">
          <li className="i1">
            <a href="mailto: max.naumanen@aalto.fi">
              <FaEnvelope className="icon"/>
            </a>
          </li>
          <li className="i2">
            <a href="https://github.com/naumanm2">
              <FaGithub className="icon"/>
            </a>
          </li>
          <li className="i3">
            <a href="https://linkedin.com/in/max-naumanen-969369138">
              <FaLinkedinIn className="icon"/>
            </a>
          </li>
          {/* <li className="i4">item4</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
