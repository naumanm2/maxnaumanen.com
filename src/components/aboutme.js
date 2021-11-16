import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="container">
        <div className="intro">
          <div className="i1">
            <h1>about <span className="common-color"></span>me</h1>
            <h2>Max Naumanen</h2>
            <div className="aboutprofessional">
              I like things that are visual and technical. I like to think that
              I approach solving problems from users' perspective. I work good
              with people.
            </div>
          </div>
          <div className="i2">
            <div className="imageofme">
              <StaticImage
                src="../images/me.png"
                alt="a stickfigure of myself"
              />
            </div>
          </div>
        </div>

        <div className="abouthobbies">
          I adore running. That is my priority numero uno. I also fancy art,
          fashion, music and other things that relate to culture. I am a fan of
          traveling in and around the globe.
        </div>
        <div className="keywords">
            keyword jungle for my interests/skills: 
        </div>
        <div className="jungle">
            #ux #react #design #gatsby #ui
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
