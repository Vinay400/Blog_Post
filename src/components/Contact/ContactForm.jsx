import React from "react";
import "../../App.css";

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
  <div className="contact-form-container">
    <h1>Drop Me a Line, Let Me Know What You Think</h1>
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
      <div className="form-group full-width">
        <label>Email *</label>
        <input type="email" required />
      </div>
      <div className="form-group full-width">
        <label>Message...</label>
        <textarea rows="5" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  );
};

export default ContactForm;
