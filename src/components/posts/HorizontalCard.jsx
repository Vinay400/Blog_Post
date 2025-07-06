import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/HorizontalCard.css";

const HorizontalCard = ({
  id,
  date,
  readTime,
  title,
  description,
  imageUrl,
  views,
  comments,
  likes,
}) => {
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(likes || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  return (
    <div className="blog-card" onClick={() => navigate(`/post/${id}`)} style={{cursor: 'pointer'}}>
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
          
          <div className="blog-card-likes" onClick={handleLike} style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
            <span className="likes-count">{likeCount}</span>
            <svg className="heart-icon" viewBox="0 0 24 24" fill={liked ? '#e25555' : 'currentColor'} style={{marginLeft: 4, transition: 'fill 0.2s'}}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
