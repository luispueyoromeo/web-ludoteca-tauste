import Link from "next/link";
import { ActivityCard } from "@/components/ActivityCard";
import { ContactPanel } from "@/components/ContactPanel";
import { activities, siteConfig, values } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Ocio, deporte y tiempo libre en Tauste</span>
          <h1>{siteConfig.name}</h1>
          <p className="hero-subtitle">{siteConfig.subtitle}</p>
          <p>{siteConfig.description}</p>
          <div className="button-row">
            <Link className="primary-button" href="/actividades">Ver actividades</Link>
            <Link className="secondary-button" href="/contacto">Solicitar información</Link>
            <Link className="ghost-button" href="/contacto">Contactar</Link>
          </div>
        </div>
        <div className="hero-visual image-ready" style={{ "--hero-image": `url(${siteConfig.images.hero})` }} aria-label="Espacio preparado para una fotografía real de La Ludoteca de Tauste">
          <div className="floating-shape shape-one">🎨</div>
          <div className="floating-shape shape-two">🧩</div>
          <div className="floating-shape shape-three">⚽</div>
          <div className="hero-card">
            <strong>Juego, deporte, creatividad y convivencia</strong>
            <span>Actividades para sábados, vacaciones escolares, cumpleaños y propuestas especiales.</span>
          </div>
        </div>
      </section>

      <section className="content-section intro-section">
        <div className="intro-card">
          <span className="eyebrow">Nuestra ludoteca</span>
          <h2>{siteConfig.presentationTitle}</h2>
          <p>{siteConfig.presentationText}</p>
        </div>
      </section>

      <section className="content-section" id="actividades">
        <div className="section-heading">
          <span className="eyebrow">Actividades principales</span>
          <h2>Planes pensados para peques y familias</h2>
          <p>Propuestas para acompañar a las familias durante el curso escolar y en los periodos vacacionales, combinando diversión, movimiento, creatividad y conciliación.</p>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => <ActivityCard key={activity.slug} activity={activity} />)}
        </div>
      </section>

      <section className="content-section values-section">
        <div className="section-heading">
          <span className="eyebrow">Valores</span>
          <h2>Un lugar para disfrutar con confianza</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <span aria-hidden="true">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel />
    </main>
  );
}
