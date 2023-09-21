import React from "react";
// import { LOGO_IMG } from "../utils/common";

const Contact = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Contact us</h1>
    
      <div className="contact-us">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="enter your name"
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="enter your email"
        />
        <input
          type="textarea"
          className="form-control mb-3 h-100"
          placeholder="enter your message"
        />
        <button type="button" className="btn btn-danger">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
