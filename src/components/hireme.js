import React from "react";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const HireMe = () => {
  return (
    <div className="hireme">
      <div className="container">
        <h1 className="phone">+358509176530</h1>
        <h2 className="email">
          <a href="mailto: max.naumanen@aalto.fi">max.naumanen@aalto.fi</a>
        </h2>
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default HireMe;
