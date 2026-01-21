import Link from "next/link";

export function Navbar() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
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
