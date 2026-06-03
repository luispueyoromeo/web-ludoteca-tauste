import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Colonias" };

const activity = activities.find((item) => item.slug === "colonias");

export default function ColoniasPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Colonias en periodos vacacionales escolares</h2>
      <p>Las colonias están pensadas para Navidad, Semana Santa y verano. Son una opción de ocio educativo para que los niños y niñas disfruten de sus vacaciones en un entorno cercano, acompañado y lleno de propuestas variadas.</p>
      <p>La programación podrá incluir juegos, talleres creativos, dinámicas de grupo, movimiento y actividades adaptadas a cada periodo. Las fechas, horarios definitivos y plazas disponibles se podrán actualizar en esta página.</p>
    </ActivityDetail>
  );
}
