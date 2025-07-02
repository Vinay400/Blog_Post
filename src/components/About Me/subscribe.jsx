import React from "react"
import "../../styles/Subscribe.css";

function Subscribe(){
    return(
<div className="email">
            <p>Enter your email *</p>
            <span>
          <div className="email-subscribe">
  <input type="email" placeholder="Enter your email"/>
  <button type="submit">Subscribe</button>
            </div></span>
                <div className="checkbox">
                <input className="checkbox" type="checkbox"/><p>Yes, subscribe me to your newsletter. *</p></div>
        </div>
)}
export default Subscribe;