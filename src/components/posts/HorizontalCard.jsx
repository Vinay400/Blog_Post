import React from 'react';
import "../../styles/HorizontalCard.css";

const HorizontalCard = ({
  date,
  readTime,
  title,
  description,
  imageUrl,
  views,
  comments,
  likes,
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      
      <div className="blog-card-content">
        <div className="blog-card-meta">
          {date} • {readTime}
        </div>
        
        <h2 className="blog-card-title">{title}</h2>
        
        <p className="blog-card-description">{description}</p>
        
        <div className="blog-card-stats">
          <div className="blog-card-engagement">
            <span>{views} views</span>
            <span>{comments} comments</span>
          </div>
          
          <div className="blog-card-likes">
            <span className="likes-count">{likes}</span>
            <svg className="heart-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
