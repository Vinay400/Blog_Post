import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      {/* Scroll Target for Arrow */}
      <div id="top"></div>

      <div className="contact-section">
        {/* Upward Arrow */}
        <a href="#top" id="footer" className="arrow-up" aria-label="Scroll to top">↑</a>

        {/* Heading */}
        <h2 className="contact-heading">
          Drop Me a Line, Let Me Know <br /> What You Think
        </h2>

        {/* Form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label>Message...</label>
            <textarea rows="4" />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Footer;
