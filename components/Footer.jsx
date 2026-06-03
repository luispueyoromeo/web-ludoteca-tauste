import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{siteConfig.name}</strong>
        <p>{siteConfig.subtitle}</p>
        <div className="footer-contact" aria-label="Datos de contacto">
          <p><strong>Teléfono:</strong> {siteConfig.contact.phone}</p>
          <p><strong>Email:</strong> {siteConfig.contact.email}</p>
          <p><strong>Instagram:</strong> {siteConfig.contact.instagram}</p>
          <p><strong>Ubicación:</strong> {siteConfig.contact.location}</p>
        </div>
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
