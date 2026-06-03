import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{siteConfig.name}</strong>
        <p>{siteConfig.subtitle}</p>
        <p className="muted">Dominio previsto: {siteConfig.domain}</p>
      </div>
      <div className="footer-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
