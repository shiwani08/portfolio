"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faHashnode,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../../shared/styles/Footer.css";

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
        {/* NEW WRAPPER: Navigation (Left) and Image (Right) */}
        <div className="footer-main-content">
          <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-gratitude-section">
            <h3 className="gratitude-heading">Gratitude</h3>
            <p className="gratitude-text">
              Thank you for visiting my portfolio! I hope you found it
              insightful and engaging. If you have any questions, feedback, or
              just want to say hi, feel free to reach out through the contact
              form or connect with me on social media. Your support means a lot
              to me, and I'm always eager to connect with fellow developers,
              tech enthusiasts, and potential collaborators. Looking forward to
              hearing from you soon!
            </p>
          </div>
        </div>

        {/* Socials Section - Stays Unchanged in layout */}
        <div className="footer-socials">
          <Link
            href="mailto:shiwani.sonii08@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link
            href="https://github.com/shiwani08"
            target="_blank"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://x.com/budastrophile"
            target="_blank"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link
            href="https://substack.com/@astudentsnotepad"
            target="_blank"
            aria-label="Substack"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shiwani-soni-a33b8a21b/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://leetcode.com/u/geekordian/"
            target="_blank"
            aria-label="LeetCode"
          >
            <FontAwesomeIcon icon={faCode} />
          </Link>
          <Link
            href="https://hashnode.com/@shiwani08"
            target="_blank"
            aria-label="Hashnode"
          >
            <FontAwesomeIcon icon={faHashnode} />
          </Link>
          <Link
            href="https://dev.to/shiwani08"
            target="_blank"
            aria-label="DevTo"
          >
            <FontAwesomeIcon icon={faDev} />
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
