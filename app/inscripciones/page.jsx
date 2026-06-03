import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { activities } from "@/data/site";

export const metadata = { title: "Inscripciones" };

export default function InscripcionesPage() {
  return (
    <main>
      <PageHero eyebrow="Inscripciones" title="Elige la actividad que te interesa" text="Las inscripciones y consultas se gestionan desde cada actividad concreta. Selecciona una opción para ver la información disponible y contactar con La Ludoteca de Tauste." />
      <section className="content-section">
        <div className="inscription-grid">
          {activities.map((activity) => (
            <article key={activity.slug} className={`inscription-card ${activity.color}`}>
              <span className="card-icon" aria-hidden="true">{activity.icon}</span>
              <h2>{activity.detailCta}</h2>
              <p>{activity.short}</p>
              <Link className="secondary-button" href={activity.href}>{activity.cta}</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
