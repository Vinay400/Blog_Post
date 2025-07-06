import React, { useState, useRef } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    resetForm();
  };

  const resetForm = () => {
    if (formRef.current) {
      console.log(formRef.current);
      formRef.current.reset();
    }
  };

  return (
    <>
      {/* Scroll Target for Arrow */}
      <div className="contact-section">
        {/* Upward Arrow */}
        <a href="#top" id="footer" className="arrow-up" aria-label="Scroll to top">↑</a>

        {/* Heading */}
        <h2 className="contact-heading">
          Drop Me a Line, Let Me Know <br /> What You Think
        </h2>

        {/* Form */}
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input type="hidden" name="access_key" value="db91e7b4-ebbe-468e-921a-8808e9af8868"/>
              <label>First Name *</label>
              <input type="text" name='first_name' required />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" name='last_name' required />
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input type="email" name='email' required />
          </div>

          <div className="form-group">
            <label>Message...</label>
            <textarea rows="4" name='message' required />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {showModal && (
          <div className="thankyou-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="thankyou-modal" onClick={e => e.stopPropagation()}>
              <h3>Thank you!</h3>
              <p>We will catch up soon.</p>
              <button className="close-modal-btn" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
