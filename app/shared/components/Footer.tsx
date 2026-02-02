"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const navItems = [
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-top">
      <div className="footer-nav">
        <h3>Navigation</h3>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-form">
        <h3>Contact Me</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea placeholder="Your thoughts..." rows={3} required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    <div className="footer-socials">
       {/* Icons here */}
    </div>

    <hr className="footer-divider" />
    <div className="footer-bottom">
      <p className="copyright-text">© {new Date().getFullYear()} Made with ❤️ by Shiwani.</p>
    </div>
  </div>
</footer>
  );
}