import React from "react";

const Contact = () => {
  return (
    <div className="contact-us">
      <p>Contact Us</p>
      <p>
        If your have an enquiry about any of our products, wed love to hear from
        you.
      </p>
      <form action="/send-data-here" method="post" className="contact-us-form">
        <p>Fields marked with a • are required</p>
        <label htmlFor="fullname">your full name:</label>
        <div className="contact-field">
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="your full name"
            required
          />
          <span>*</span>
        </div>
        <label htmlFor="email">your email address:</label>
        <div className="contact-field">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          />
          <span>*</span>
        </div>
        <label htmlFor="enquiry">your enquiry:</label>
        <div className="contact-field">
          <textarea
            rows={5}
            cols={60}
            name="qnquiry"
            placeholder="your enquiry"
          ></textarea>
        </div>
        <button type="submit" className="contact-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
