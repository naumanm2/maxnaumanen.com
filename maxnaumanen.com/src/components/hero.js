import React from "react";

import { Link } from 'gatsby'

import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>hi, i'm max</h1>
        <h2>designer, composer, creator of things</h2>
        <p>a brief introduction to who i am what i do</p>
        <ul className="links">
          <li className="i1"><Link to=""><FaEnvelope /></Link></li>
          <li className="i2"><Link to="https://github.com/naumanm2"><FaGithub /></Link></li>
          <li className="i3"><Link to="https://linkedin.com"><FaLinkedinIn /></Link></li>
          {/* <li className="i4">item4</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
