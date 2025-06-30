import React from "react";
import Navbar from "./components/Navbar";
import FeaturedPosts from "./components/FeaturedPosts";
import Emailsection from "./components/emailsection";
import Mainsection from "./components/Mainsection";

function Homepage(){
    return (   
         <div className="Homepage">
      <div id="title">
        <h1>BlogPost</h1>
      </div>
      <div className="container">
        <Navbar />
        <FeaturedPosts />
        <hr />
        <Emailsection />
        <hr />
        <Mainsection />
        </div></div>
      )
}
export default Homepage;