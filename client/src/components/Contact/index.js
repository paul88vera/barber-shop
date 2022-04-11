import React from 'react';

function Contact() {
  return (
    <div>
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <form id="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
