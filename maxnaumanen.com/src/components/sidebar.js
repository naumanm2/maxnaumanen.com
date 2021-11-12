import React from "react";

import { Link } from "gatsby";

const Sidebar = ({active}) => {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li className={"i1" + (active === "home" ? " active" : "")}>
          <Link to="/">home</Link>
        </li>
        <li className={"i2" + (active === "projects" ? " active" : "")}>
          <Link to="/projects">projects</Link>
        </li>
        <li className={"i3" + (active === "aboutme" ? " active" : "")}>
          <Link to="/aboutme">aboutme</Link>
        </li>
        <li className={"i4" + (active === "contact" ? " active" : "")}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
