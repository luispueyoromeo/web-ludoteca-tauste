import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Fiestas de cumpleaños" };

const activity = activities.find((item) => item.slug === "cumpleanos");

export default function CumpleanosPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Cumpleaños por las tardes</h2>
      <p>Las fiestas de cumpleaños se preparan para que cada celebración sea cómoda para las familias y divertida para los niños y niñas, con actividades adaptables al grupo y al tipo de experiencia que se busque.</p>
      <p>Existen diferentes opciones de actividades y precios, pero no se incluyen tarifas concretas hasta que estén confirmadas. Este espacio queda listo para añadir packs, horarios, duración, número de participantes, condiciones y precios más adelante.</p>
    </ActivityDetail>
  );
}
