import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Acampadas" };

const activity = activities.find((item) => item.slug === "acampadas");

export default function AcampadasPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Próximas acampadas</h2>
      <p>Las acampadas son actividades especiales con mucha demanda. Podrán organizarse en diferentes momentos del año, como Navidad o verano, siempre que se confirmen fechas, equipo y disponibilidad.</p>
      <p>En esta página se anunciarán las próximas fechas, requisitos de participación, plazas y proceso de inscripción cuando estén disponibles.</p>
    </ActivityDetail>
  );
}
