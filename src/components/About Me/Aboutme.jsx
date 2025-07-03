import React from 'react';
import "../../styles/Aboutme.css";

const AboutMe = ({
  imageUrl,
  description,
  readMoreText = "Read More >"
}) => {
  return (
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={imageUrl} alt="About me" />
        </div>
        
        <div className="about-me-text">
          <p className="about-description">
            I'm a passionate web developer sharing coding tutorials, project ideas, and the latest trends in web technologies. Join me as I explore the world of JavaScript, React, CSS, and more!
          </p>
          <a href="#" className="read-more-link">{readMoreText}</a>
        </div>
      </div>
  );
};

export default AboutMe;
