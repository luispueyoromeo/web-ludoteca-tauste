import Link from "next/link";
export function ActivityCard({ activity }) {
  return (
    <article className={`activity-card ${activity.color}`}>
      <div className="card-icon" aria-hidden="true">{activity.icon}</div>
      <h3>{activity.title}</h3>
      <p>{activity.short}</p>
      <ul>
        {activity.highlights.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="text-link" href={activity.href}>{activity.cta}</Link>
    </article>
  );
}
