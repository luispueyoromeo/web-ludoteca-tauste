import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <main>
      <PageHero eyebrow="Contacto" title="Contacta con La Ludoteca de Tauste" text="Escríbenos o llámanos para resolver dudas, consultar disponibilidad o solicitar información sobre colonias, sábados, cumpleaños y próximas actividades especiales." />
      <ContactPanel />
    </main>
  );
}
