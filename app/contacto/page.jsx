import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <main>
      <PageHero eyebrow="Contacto" title="Contacta con La Ludoteca de Tauste" text="Estamos en Tauste, Zaragoza. Los datos de teléfono, email e Instagram quedan preparados para completarlos cuando estén confirmados." />
      <ContactPanel />
    </main>
  );
}
