import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (

        <div className="Nav-buttons">
          <ul className="buttons">
            <li className="button">
              <a href="#">Home</a>
            </li>
            <li className="button">
              <a href="#">About</a>
            </li>
            <li className="button">
              <a href="#">My Blog</a>
            </li>
            <li className="button">
              <a href="#">Contact</a>
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
