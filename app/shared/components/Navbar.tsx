// "use client"; // Required if you add interaction like scroll detection

import Link from "next/link";

const NAV_ITEMS = [
  { href: "#About", label: "About" },
  { href: "#Skills", label: "Skills" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-left">
        <Link href="/" className="owner-name" aria-label="Home">
          S
        </Link>
      </div>

      <ul className="nav-right">
        {NAV_ITEMS.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
