import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <div className="container">
        <div className="education details">
          <div className="overall">
            <div className="programme">Information Networks (M. Sc)</div>
            <div className="time">oct 2020–</div>
          </div>
          <div className="specifics">
            User, Data & Design
            </div>
        </div>
        <div className="education details">
          <div className="overall">
            <div className="programme">Information Networks (B. Sc)</div>
            <div className="time">oct 2017 – dec 2020</div>
          </div>
          <div className="specifics">
            Bachelor of Science
            <br />
            Graduated with honors
          </div>
        </div>
        <div className="education details">
          <div className="overall">
            <div className="programme">Current credits:</div>
            <div className="time">218</div>
          </div>
          <div className="specifics">
            gpa situation: ba, 4.25 / ma, 4.67 
          </div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
