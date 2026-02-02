import Link from "next/link";

export function Navbar() {
  const navItems = [
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="nav-left">
        <Link href="/" className="owner-name ">
          S
        </Link>
      </div>

      {/* Right */}
      <ul className="nav-right">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
