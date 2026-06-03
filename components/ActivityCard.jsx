import Link from "next/link";

export function ActivityCard({ activity }) {
  return (
    <article className={`activity-card ${activity.color}`}>
      <div className="activity-image" style={{ "--activity-image": `url(${activity.image})` }}>
        <span className="card-icon" aria-hidden="true">{activity.icon}</span>
      </div>
      <div className="activity-card-body">
        <h3>{activity.title}</h3>
        <p>{activity.short}</p>
        <ul>
          {activity.highlights.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="text-link" href={activity.href}>{activity.cta}</Link>
      </div>
    </article>
  );
}
