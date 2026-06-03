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
            <Link className="primary-button" href="/contacto">{activity.detailCta}</Link>
            <Link className="secondary-button" href="/contacto">Solicitar información</Link>
          </div>
        </div>
        <div className="highlight-box activity-photo" style={{ "--activity-image": `url(${activity.image})` }}>
          <div className="highlight-content">
            <h2>Claves de la actividad</h2>
            <ul>
              {activity.highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="content-section narrow">{children}</section>
    </main>
  );
}
