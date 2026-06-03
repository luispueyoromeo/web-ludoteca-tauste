import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Acampadas" };

const activity = activities.find((item) => item.slug === "acampadas");

export default function AcampadasPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Actividades especiales con próximas fechas por anunciar</h2>
      <p>Las acampadas son propuestas especiales con alta demanda que pueden organizarse en diferentes momentos del año, como Navidad o verano, siempre que se confirmen fechas, equipo, plazas y condiciones.</p>
      <p>Esta página queda preparada para publicar próximas acampadas, requisitos de participación, disponibilidad y proceso de inscripción cuando la información esté cerrada.</p>
    </ActivityDetail>
  );
}
