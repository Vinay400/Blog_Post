import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const socialLinks = [
  { icon: faFacebookF, url: 'https://facebook.com', label: 'Facebook' },
  { icon: faInstagram, url: 'https://instagram.com', label: 'Instagram' },
  { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
  { icon: faPinterestP, url: 'https://pinterest.com', label: 'Pinterest' },
];

function FloatingSocialButton() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 2000 }}>
      <button
        aria-label="Share"
        style={{
          background: '#6c63ff',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          fontSize: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
        }}
        onClick={() => setOpen(o => !o)}
      >
        <FontAwesomeIcon icon={faShare} />
      </button>
      {open && (
        <div style={{
          position: 'absolute',
          bottom: 70,
          right: 0,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          padding: '0.7rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          minWidth: 56,
          alignItems: 'center',
        }}>
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{ color: '#6c63ff', fontSize: 22, margin: 4, transition: 'color 0.2s' }}
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default FloatingSocialButton; 