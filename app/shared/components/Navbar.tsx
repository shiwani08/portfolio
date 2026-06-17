"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-left">
        <Link href="/" className="owner-name" aria-label="Home">
          S
        </Link>
      </div>

      <ul className={`nav-right${isOpen ? " nav-open" : ""}`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`nav-hamburger${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
