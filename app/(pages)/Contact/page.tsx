"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../../shared/styles/Contact.css";

export default function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-inner">
        {/* Header */}
        <div className="contact-header">
          <p className="contact-eyebrow">Let&apos;s connect</p>
          <h2 className="contact-title">
            Contact <em>Me</em>
          </h2>
        </div>

        <div className="contact-container">
          {/* Left Side: Illustration */}
          <div className="contact-image-side">
            <Image
              src="/mail.svg"
              alt="Contact illustration"
              width={500}
              height={400}
              className="contact-illustration"
            />
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-side">
            <form className="contact-form">
              <div className="input-wrapper">
                <FontAwesomeIcon icon={faUser} className="field-icon" />
                <input type="text" placeholder="Name" required />
              </div>

              <div className="input-wrapper">
                <FontAwesomeIcon icon={faEnvelope} className="field-icon" />
                <input type="email" placeholder="Email" required />
              </div>

              <div className="input-wrapper">
                <FontAwesomeIcon icon={faPhone} className="field-icon" />
                <input type="tel" placeholder="Phone" />
              </div>

              <div className="input-wrapper textarea-wrapper">
                <FontAwesomeIcon icon={faCommentDots} className="field-icon" />
                <textarea placeholder="Message" rows={5} required />
              </div>

              <button type="submit" className="submit-btn">
                Submit <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
