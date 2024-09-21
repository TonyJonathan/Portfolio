import { RiMailLine } from "@remixicon/react";
import SlideUp from "../../../utlits/animations/slideUp";
import React, { useState } from "react";

const ContactForm = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myForm = event.target;
    console.log("hello", myForm);
    const formData = new FormData(myForm);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    setShowThankYou(true);
  };

  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          {showThankYou ? (
            <h2>Thank you for your message</h2>
          ) : (
            <form id="contact" className="contactForm" name="contact" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Steve Milner"
                      required
                      data-error="Please enter your Name"
                    />
                    <label htmlFor="name" className="for-icon">
                      <i className="far fa-user"></i>
                    </label>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="hello@websitename.com"
                      required
                      data-error="Please enter your Email"
                    />
                    <label htmlFor="email" className="for-icon">
                      <i className="far fa-envelope"></i>
                    </label>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Write Your message"
                      required
                      data-error="Please Write your Message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <button className="theme-btn" type="submit">
                      Send Me Message{" "}
                      <i>
                        <RiMailLine size={15} />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
