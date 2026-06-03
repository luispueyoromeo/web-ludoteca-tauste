import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Fiestas de cumpleaños" };

const activity = activities.find((item) => item.slug === "cumpleanos");

export default function CumpleanosPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Cumpleaños por las tardes</h2>
      <p>Las fiestas de cumpleaños se plantean como una experiencia divertida y cómoda para las familias, con actividades por las tardes y propuestas adaptables al grupo.</p>
      <p>Habrá diferentes opciones de actividades y precios. Este espacio queda preparado para completar más adelante los packs, condiciones, duración, número de participantes y tarifas, sin inventar datos antes de confirmarlos.</p>
    </ActivityDetail>
  );
}
