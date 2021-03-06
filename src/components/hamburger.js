import React, { useState } from "react";

import { Link } from "gatsby";

const Hamburger = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="hamburger">
        <div
          className={"burger-container " + (active ? "active" : "")}
          onClick={() => {
            setActive(!active);
          }}
        >
          <div className="burger b--1" />
          {/* <div className="burger --2" /> */}
          <div className="burger b--3" />
        </div>
      </div>
      <div className={"mobilnav" + (active ? "-active" : "")}>
        <div className="container">
          <div className="mobil-menu">
            <ul className="mobil-list">
              <li>
                <Link to="/" onClick={() => setActive(false)}>home</Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setActive(false)}>projects</Link>
              </li>
              <li>
                <Link to="/aboutme" onClick={() => setActive(false)}>about me</Link>
              </li>
              <li>
                <Link to="/yesineedtohireyou" onClick={() => setActive(false)}>yes you need to hire me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
