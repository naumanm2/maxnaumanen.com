import React from "react";

import { Link } from 'gatsby'

const error = () => {
  return (
    <div>
      <div className="hireme">
        <div className="container">
          <h1 className="phone">what happened?</h1>
          <h2 className="email">
            idk, go <Link className="icon" to="/">home</Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default error;
