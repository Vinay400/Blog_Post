import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import "../styles/Navbar.css";
import '../styles/App.css'

// List of blog posts for navigation
const blogPosts = [
  { id: 'featured', title: 'Mastering React Hooks: Tips & Tricks', tags: ['React', 'Hooks', 'JavaScript'] },
  { id: 'vscode-extensions', title: '10 VS Code Extensions Every Web Developer Should Use', tags: ['VS Code', 'Productivity', 'Tools'] },
  { id: 'js-closures', title: 'Understanding JavaScript Closures with Real-World Examples', tags: ['JavaScript', 'Closures', 'Functions'] },
  { id: 'css-grid-flexbox', title: 'How to Build Responsive Layouts with CSS Grid and Flexbox', tags: ['CSS', 'Grid', 'Flexbox', 'Responsive'] },
];

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const handleResultClick = (id) => {
    setSearch("");
    setShowResults(false);
    navigate(`/post/${id}`);
  };

  return (
    <div className="navbar-outer">
      <div className="navbar-header">
        <div className="navbar-tagline">EVERYTHING IS PERSONAL. INCLUDING THIS BLOG.</div>
        <div className="navbar-title">
          <h1>BlogPost</h1>
        </div>
      </div>
      <nav className="navbar-nav">
        <div className="navbar-left"></div>
        <ul className="buttons">
          <li className="button">
            <Link to="/">Home</Link>
          </li>
          <li className="button" >
            <Link to="/about">About</Link>
          </li>
          <li className="button">
            <Link to="/myblog">My Blog</Link>
          </li>
          <li className="button">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="button search-button" style={{ position: 'relative' }}>
            <div className="search-container">
              <SearchIcon className="search-icon" />
              <input
                className="search"
                placeholder="Search..."
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setShowResults(e.target.value.length > 0);
                }}
                onFocus={() => setShowResults(search.length > 0)}
                onBlur={() => setTimeout(() => setShowResults(false), 150)}
              />
            </div>
            {showResults && (
              <ul style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: '#fff',
                border: '1px solid #e5e7eb',
                zIndex: 100,
                listStyle: 'none',
                margin: 0,
                padding: 0,
                maxHeight: 200,
                overflowY: 'auto',
              }}>
                {filteredPosts.length === 0 && (
                  <li style={{ padding: '0.7rem 1rem', color: '#888' }}>No results found.</li>
                )}
                {filteredPosts.map(post => (
                  <li
                    key={post.id}
                    style={{ padding: '0.7rem 1rem', cursor: 'pointer' }}
                    onMouseDown={() => handleResultClick(post.id)}
                  >
                    {post.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="blog-dropdown" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
            <span className="dropdown-label">Blog Posts ▾</span>
            {showMenu && (
              <ul className="dropdown-menu">
                {blogPosts.map(post => (
                  <li key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <div className="navbar-right">
          {/* Social icons removed for floating button */}
        </div>
      </nav>
      <hr className="navbar-divider"/>
    </div>
  );
}

export default Navbar;
