import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import "../styles/Navbar.css";
import '../styles/App.css'

function Navbar(props) {
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
            <a id="Home" onClick={e => props.onChecked(e)}>Home</a>
          </li>
          <li className="button" >
            <a id="About" onClick={e => props.onChecked(e)}>About</a>
          </li>
          <li className="button">
            <a id="MyBlog" onClick={e => props.onChecked(e)}>My Blog</a>
          </li>
          <li className="button">
            <a href="#footer" id="Contact">Contact</a>
          </li>
          <li className="button search-button">
            <div className="search-container">
              <SearchIcon className="search-icon" />
              <input className="search" placeholder="Search..." />
            </div>
          </li>
        </ul>
        <div className="navbar-right">
          <ul className="navbar-social">
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
          </ul>
        </div>
      </nav>
      <hr className="navbar-divider"/>
    </div>
  );
}
export default Navbar;
