import Link from "next/link";
import { ActivityCard } from "@/components/ActivityCard";
import { ContactPanel } from "@/components/ContactPanel";
import { activities, siteConfig, values } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Espacio de ocio educativo en Tauste</span>
          <h1>{siteConfig.name}</h1>
          <p className="hero-subtitle">{siteConfig.subtitle}</p>
          <p>{siteConfig.description}</p>
          <div className="button-row">
            <Link className="primary-button" href="/actividades">Ver actividades</Link>
            <Link className="secondary-button" href="/inscripciones">Inscripciones</Link>
            <Link className="ghost-button" href="/contacto">Contactar</Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Ilustración decorativa de juegos infantiles">
          <div className="floating-shape shape-one">🎨</div>
          <div className="floating-shape shape-two">🧩</div>
          <div className="floating-shape shape-three">⚽</div>
          <div className="hero-card">
            <strong>Juego, creatividad y convivencia</strong>
            <span>Actividades para vacaciones, sábados, cumpleaños y acampadas.</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="actividades">
        <div className="section-heading">
          <span className="eyebrow">Actividades principales</span>
          <h2>Planes pensados para peques y familias</h2>
          <p>Una primera estructura preparada para ir publicando fechas, detalles de inscripción y nuevas propuestas.</p>
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
