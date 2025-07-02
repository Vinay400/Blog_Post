import React from "react";
import "../styles/ProfileCard.css";

const ProfileCard = ({ imageUrl, name, title, description, style, className }) => (
  <div className={`profile-card ${className || ''}`} style={style}>
    <img className="profile-image" src={imageUrl} alt={name} />
    <h2 className="profile-name">{name}</h2>
    <h3 className="profile-title">{title}</h3>
    <p className="profile-description">{description}</p>
  </div>
);

export default ProfileCard; 