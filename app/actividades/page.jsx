import { ActivityCard } from "@/components/ActivityCard";
import { PageHero } from "@/components/PageHero";
import { activities } from "@/data/site";

export const metadata = { title: "Actividades" };

export default function ActividadesPage() {
  return (
    <main>
      <PageHero eyebrow="Actividades" title="Actividades de La Ludoteca de Tauste" text="Colonias, sábados, cumpleaños y acampadas: propuestas de ocio educativo y conciliación para diferentes momentos del año." />
      <section className="content-section">
        <div className="activity-grid">
          {activities.map((activity) => <ActivityCard key={activity.slug} activity={activity} />)}
        </div>
      </section>
    </main>
  );
}
