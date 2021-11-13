import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { BsArrowLeft } from "react-icons/bs";

const ProjectDescription = () => {
  return (
    <div>
      <div className="projects">
        <div className="container">
          <div className="inner-wrapper">
            <Link to="/projects">
              <BsArrowLeft className="icon" />
            </Link>
            <h1>User Inspired Design Making project</h1>
          </div>
          <p className="date">I semester 2021</p>
          <h2>Briefly</h2>
          <p>
            I worked in an international team that consisted of 5 students from
            around the world. Together, we drafted a concept of a 'doggy-bag' to
            fight income inequality. Doggy-bag's aim was to make people aware from young age of the existing resources that are reachable by everyone. Proposed contents were activity booklet, foldable poster, and resource cards.
          </p>
          <div className="image-gallery">
            <div className="image n1">
              <StaticImage
                src="../images/uid-making/visual-05.png"
                alt="a visual of the concept image"
              />
            </div>
            <div className="image n2">
              <StaticImage
                src="../images/uid-making/booklet_activity_3.jpg"
                alt="concept of activity booklet"
              />
            </div>
            <div className="image n3">
              <StaticImage
                src="../images/uid-making/foldable_poster.jpg"
                alt="a visual of a user journer"
              />
            </div>
          </div>
          <div className="img-text">illustrations by Madeleine Beltrandi</div>
          <p>
            Our team enjoyed success on this course, as our project was voted as
            one of the best amongst 20-or so projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
