import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP
} from '@fortawesome/free-brands-svg-icons';
import "../../styles/Followme.css";

const FollowMe = () => {
  return (
    <div className="follow-me-section">
      <div className="follow-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterestP} />
        </a>
      </div>
    </div>
  );
};

export default FollowMe;
