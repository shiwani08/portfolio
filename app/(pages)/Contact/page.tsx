"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faCommentDots, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { sendEmail } from "@/app/api/sendEmail"; // Adjust path as needed
import '../../shared/styles/Contact.css';

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(formData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      setStatus("success");
      // Optional: Reset form here if desired
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-title-">Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-image-side">
          <Image 
            src="/mail.svg" 
            alt="Person working at desk" 
            width={500} 
            height={400} 
            className="contact-illustration"
          />
        </div>

        <div className="contact-form-side">
          <form action={handleSubmit} className="contact-form">
            <div className="input-wrapper">
              <FontAwesomeIcon icon={faUser} className="field-icon" />
              <input name="name" type="text" placeholder="Name" required />
            </div>

            <div className="input-wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="field-icon" />
              <input name="email" type="email" placeholder="Email" required />
            </div>

            <div className="input-wrapper">
              <FontAwesomeIcon icon={faPhone} className="field-icon" />
              <input name="phone" type="tel" placeholder="Phone" />
            </div>

            <div className="input-wrapper textarea-wrapper">
              <FontAwesomeIcon icon={faCommentDots} className="field-icon" />
              <textarea name="message" placeholder="Message" rows={5} required />
            </div>

            <button type="submit" className="submit-btn" disabled={isPending}>
              {isPending ? "Sending..." : "Submit"}{" "}
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>

            {status === "success" && (
              <p className="status-msg success">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="status-msg error">Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}