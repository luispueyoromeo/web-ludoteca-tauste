import { ActivityDetail } from "@/components/ActivityDetail";
import { activities } from "@/data/site";

export const metadata = { title: "Colonias" };

const activity = activities.find((item) => item.slug === "colonias");

export default function ColoniasPage() {
  return (
    <ActivityDetail activity={activity}>
      <h2>Colonias en Navidad, Semana Santa y verano</h2>
      <p>Las colonias se organizan en periodos vacacionales escolares para que los niños y niñas disfruten de días activos, creativos y compartidos mientras las familias cuentan con una opción de conciliación cercana en Tauste.</p>
      <p>La programación podrá incluir juegos, deporte, talleres, dinámicas de grupo y actividades de convivencia adaptadas a cada periodo. Las fechas, horarios, plazas y condiciones se publicarán cuando estén confirmados, sin inventar precios ni datos concretos.</p>
    </ActivityDetail>
  );
}
