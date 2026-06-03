import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ir al inicio">
        <span className="brand-mark">L</span>
        <span>{siteConfig.name}</span>
      </Link>
      <nav className="main-nav" aria-label="Navegación principal">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
