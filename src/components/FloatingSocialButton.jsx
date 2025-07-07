import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import '../styles/FloatingSocialButton.css';

const socialLinks = [
  { icon: faFacebookF, url: 'https://facebook.com', label: 'Facebook' },
  { icon: faInstagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
  { icon: faPinterestP, url: 'https://pinterest.com', label: 'Pinterest' },
];

function FloatingSocialButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="floating-social-container">
      <button
        aria-label="Share"
        className="floating-social-btn"
        onClick={() => setOpen(o => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
      >
        <FontAwesomeIcon icon={faShare} />
        <span className="floating-social-tooltip">Share</span>
      </button>
      <div className={`floating-social-menu${open ? ' open' : ''}`}>
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="floating-social-link"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default FloatingSocialButton; 