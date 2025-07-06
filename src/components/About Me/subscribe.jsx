import React, { useState, useRef } from "react"
import "../../styles/Subscribe.css";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setEmail("");
    setChecked(false);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <div className="email">
      <p>Enter your email *</p>
      <form className="email-subscribe" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <div className="checkbox-container">
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          required
        />
        <p>Yes, subscribe me to your newsletter. *</p>
      </div>
      {showModal && (
        <div className="thankyou-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="thankyou-modal" onClick={e => e.stopPropagation()}>
            <h3>Thank you!</h3>
            <p>You have been subscribed to the newsletter.</p>
            <button className="close-modal-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Subscribe;