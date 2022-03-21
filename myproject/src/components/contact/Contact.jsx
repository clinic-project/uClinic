import React from "react";

export default function Contact() {
  return (
    <div class="container">
      <div class="contact">
        <span>Contact Us </span>

        <form className="contactForm">
          <span>Your Name</span>
          <input type="text" placeholder="Enter your  here" />
          <span>Your Email</span>
          <input type="text" placeholder="Enter your email here" />
          <span>Your Message</span>
          <input type="text" placeholder="Enter your messsage here" />
        </form>
      </div>
    </div>
  );
}
