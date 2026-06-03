import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { activities } from "@/data/site";

export const metadata = { title: "Inscripciones" };

const inscriptionTexts = {
  colonias: "Inscripción a Colonias",
  sabados: "Inscripción a Los Sábados",
  cumpleanos: "Consulta para cumpleaños",
  acampadas: "Información sobre acampadas",
};

export default function InscripcionesPage() {
  return (
    <main>
      <PageHero eyebrow="Inscripciones" title="Inscripciones y consultas" text="Próximamente las familias podrán inscribirse en las actividades disponibles. De momento esta página no está conectada a ninguna base de datos ni sistema de pago." />
      <section className="content-section">
        <div className="inscription-grid">
          {activities.map((activity) => (
            <article key={activity.slug} className={`inscription-card ${activity.color}`}>
              <span className="card-icon" aria-hidden="true">{activity.icon}</span>
              <h2>{inscriptionTexts[activity.slug]}</h2>
              <p>{activity.short}</p>
              <Link className="secondary-button" href="/contacto">Solicitar información</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
