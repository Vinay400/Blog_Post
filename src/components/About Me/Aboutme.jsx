import React from 'react';

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
          <p className="about-me-description">{description}</p>
          <a href="#" className="read-more-link">{readMoreText}</a>
        </div>
      </div>
  );
};

export default AboutMe;
