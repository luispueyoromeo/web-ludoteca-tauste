import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Los Sábados" };

const activity = activities.find((item) => item.slug === "sabados");

export default function SabadosPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Ocio educativo durante el curso escolar</h2>
      <p>Los Sábados es una actividad regular durante el curso escolar. Puede organizarse en horario de mañana y/o tarde, según la planificación que se confirme para cada temporada.</p>
      <p>La finalidad es ofrecer a las familias una alternativa de ocio educativo en Tauste, con juegos, talleres y dinámicas que favorecen la convivencia, la creatividad y la autonomía.</p>
    </ActivityDetail>
  );
}
