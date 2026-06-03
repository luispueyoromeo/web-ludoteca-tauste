import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Los Sábados" };

const activity = activities.find((item) => item.slug === "sabados");

export default function SabadosPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Una alternativa educativa y divertida para el fin de semana</h2>
      <p>Los Sábados es una propuesta de ocio durante el curso escolar pensada para ofrecer a los niños y niñas un plan seguro, dinámico y diferente en su propio entorno.</p>
      <p>La actividad puede desarrollarse en horario de mañana y/o tarde, según la planificación de cada temporada. Aquí se podrán actualizar más adelante horarios, plazas disponibles y detalles de inscripción cuando estén confirmados.</p>
    </ActivityDetail>
  );
}
