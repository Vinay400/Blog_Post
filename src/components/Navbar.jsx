import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import '../styles/App.css'
function Navbar(props) {
  
  return (

        <div className="Nav-buttons">
          <ul className="buttons">
            <li className="button">
            <a href="#" id="Home" onClick={e => props.onChecked(e)}>Home</a>
            </li>
            <li className="button" >
              <a href="#" id="About" onClick={e => props.onChecked(e)}>About</a>
            </li>
            <li className="button">
              <a href="#" id="MyBlog" onClick={e => props.onChecked(e)}>My Blog</a>
            </li>
            <li className="button">
              <a href="#" id="Contact" onClick={e => props.onChecked(e)}>Contact</a>
            </li>
            <li className="search-container">
              <SearchIcon className="search-icon" />
              <input className="search" placeholder="Search..." />
            </li>
          </ul>
          <hr/>
        </div>
  );
}
export default Navbar;
