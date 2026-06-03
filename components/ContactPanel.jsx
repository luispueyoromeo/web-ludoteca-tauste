import { siteConfig } from "@/data/site";

export function ContactPanel() {
  return (
    <section className="contact-grid" id="contacto">
      <div className="contact-card">
        <span className="eyebrow">Contacto</span>
        <h2>¿Hablamos?</h2>
        <p>Las familias pueden contactar para resolver dudas, consultar disponibilidad o solicitar información sobre próximas actividades de La Ludoteca de Tauste.</p>
        <div className="contact-list">
          <p><strong>Teléfono:</strong> <a href={`tel:${siteConfig.contact.phone.replaceAll(" ", "")}`}>{siteConfig.contact.phone}</a></p>
          <p><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
          <p><strong>Instagram:</strong> <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noreferrer">{siteConfig.contact.instagram}</a></p>
          <p><strong>Ubicación:</strong> {siteConfig.contact.location}</p>
        </div>
      </div>
      <form className="form-card" aria-label="Formulario visual no funcional">
        {/* Formulario visual: conectar a un servicio o base de datos cuando se decida el sistema real. */}
        <label>Nombre y apellidos<input type="text" placeholder="Nombre de la familia" /></label>
        <label>Teléfono<input type="tel" placeholder="Teléfono de contacto" /></label>
        <label>Email<input type="email" placeholder="correo@ejemplo.com" /></label>
        <label>Actividad de interés<select defaultValue=""><option value="" disabled>Selecciona una actividad</option><option>Colonias</option><option>Los Sábados</option><option>Cumpleaños</option><option>Acampadas</option></select></label>
        <label>Mensaje<textarea placeholder="Cuéntanos qué necesitas" rows={4} /></label>
        <button type="button" className="primary-button">Solicitar información</button>
      </form>
    </section>
  );
}
