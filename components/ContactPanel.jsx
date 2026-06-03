import { siteConfig } from "@/data/site";

export function ContactPanel() {
  return (
    <section className="contact-grid" id="contacto">
      <div className="contact-card">
        <span className="eyebrow">Contacto</span>
        <h2>¿Hablamos?</h2>
        <p>Si quieres resolver dudas o preparar una actividad, deja tus datos y te contactaremos cuando el formulario esté conectado.</p>
        <div className="contact-list">
          <p><strong>Teléfono:</strong> {siteConfig.contact.phone}</p>
          <p><strong>Email:</strong> {siteConfig.contact.email}</p>
          <p><strong>Instagram:</strong> {siteConfig.contact.instagram}</p>
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
        <button type="button" className="primary-button">Enviar consulta próximamente</button>
      </form>
    </section>
  );
}
