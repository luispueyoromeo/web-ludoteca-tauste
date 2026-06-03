import Link from "next/link";
export function ActivityDetail({ activity, children }) {
  return (
    <main>
      <section className={`detail-hero ${activity.color}`}>
        <div>
          <span className="eyebrow">Actividad</span>
          <h1><span aria-hidden="true">{activity.icon}</span> {activity.title}</h1>
          <p>{activity.description}</p>
          <div className="button-row">
            <Link className="primary-button" href="/inscripciones">Inscripciones</Link>
            <Link className="secondary-button" href="/contacto">Contactar</Link>
          </div>
        </div>
        <div className="highlight-box">
          <h2>Claves de la actividad</h2>
          <ul>
            {activity.highlights.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="content-section narrow">{children}</section>
    </main>
  );
}
