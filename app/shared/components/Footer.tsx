"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faBookmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import { BiSubstack } from 'react-icons/bi';

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
          {/* Mail */}
          <Link
            href="mailto:shiwani.sonii08@gmail.com"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/shiwani08"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          {/* X (Twitter) */}
          <Link
            href="https://x.com/budastrophile"
            target="_blank"
            aria-label="X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>

          {/* Substack */}
          <Link
            href="https://substack.com/@astudentsnotepad?utm_campaign=profile&utm_medium=profile-page"
            target="_blank"
            aria-label="Substack"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/shiwani-soni-a33b8a21b/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          {/* LeetCode */}
          <Link
            href="https://leetcode.com/u/geekordian/"
            target="_blank"
            aria-label="LeetCode"
          >
            <FontAwesomeIcon icon={faCode} />
          </Link>
        </div>

        <hr className="footer-divider" />
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Made with ❤️ by Shiwani.
          </p>
        </div>
      </div>
    </footer>
  );
}
