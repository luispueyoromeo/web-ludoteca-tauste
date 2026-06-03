export const siteConfig = {
  name: "La Ludoteca de Tauste",
  domain: "laludotecadetauste.com",
  subtitle: "Ocio, deporte y tiempo libre para niños y niñas en Tauste",
  description:
    "Un espacio familiar y cercano para que los niños y niñas disfruten, se muevan, creen y compartan durante el curso escolar y las vacaciones, ayudando también a la conciliación de las familias.",
  presentationTitle: "Un espacio para jugar, aprender y disfrutar",
  presentationText:
    "En La Ludoteca de Tauste organizamos actividades educativas, recreativas y de convivencia adaptadas a diferentes momentos del año: sábados durante el curso, vacaciones escolares, fiestas de cumpleaños y actividades especiales. Nuestro objetivo es ofrecer propuestas seguras, dinámicas y alegres donde cada niño y niña pueda disfrutar del tiempo libre en compañía.",
  contact: {
    phone: "650 044 395",
    email: "5vsportlife@gmail.com",
    instagram: "@laludotecadetauste",
    instagramUrl: "https://www.instagram.com/laludotecadetauste/",
    location: "Tauste, Zaragoza",
  },
  images: {
    // Sube fotografías reales a /public/images con estos nombres para sustituir los bloques visuales.
    // Prioriza espacios, materiales, juegos, decoración o grupos no identificables.
    hero: "/images/ludoteca-espacio.jpg",
    colonias: "/images/colonias.jpg",
    sabados: "/images/sabados.jpg",
    cumpleanos: "/images/cumpleanos.jpg",
    acampadas: "/images/acampadas.jpg",
  },
};

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Actividades", href: "/actividades" },
  { label: "Colonias", href: "/colonias" },
  { label: "Los Sábados", href: "/sabados" },
  { label: "Cumpleaños", href: "/cumpleanos" },
  { label: "Acampadas", href: "/acampadas" },
  { label: "Contacto", href: "/contacto" },
];

export const activities = [
  {
    title: "Colonias",
    slug: "colonias",
    icon: "☀️",
    color: "orange",
    image: siteConfig.images.colonias,
    short:
      "Colonias en Navidad, Semana Santa y verano con ocio activo, creatividad y convivencia para facilitar la conciliación familiar.",
    description:
      "Las colonias se plantean para los periodos vacacionales escolares —Navidad, Semana Santa y verano— con propuestas de ocio activo, talleres creativos, juego cooperativo y momentos de convivencia. Son una ayuda para la conciliación familiar y una oportunidad para que los niños y niñas disfruten de sus vacaciones en un entorno cuidado.",
    highlights: ["Navidad", "Semana Santa", "Verano", "Conciliación familiar"],
    cta: "Inscribirse",
    detailCta: "Inscribirse",
    href: "/colonias",
  },
  {
    title: "Los Sábados",
    slug: "sabados",
    icon: "🎲",
    color: "blue",
    image: siteConfig.images.sabados,
    short:
      "Ocio educativo durante el curso escolar, en horario de mañana y/o tarde, para disfrutar del fin de semana con seguridad.",
    description:
      "Los Sábados es una propuesta de ocio durante el curso escolar que puede desarrollarse en horario de mañana y/o tarde. Ofrece una alternativa educativa, divertida y segura para los fines de semana, con juegos, talleres y dinámicas pensadas para compartir, aprender y pasarlo bien.",
    highlights: ["Curso escolar", "Mañana y/o tarde", "Ocio educativo", "Fin de semana seguro"],
    cta: "Solicitar información",
    detailCta: "Inscribirse",
    href: "/sabados",
  },
  {
    title: "Fiestas de cumpleaños",
    slug: "cumpleanos",
    icon: "🎂",
    color: "yellow",
    image: siteConfig.images.cumpleanos,
    short:
      "Cumpleaños por las tardes con diferentes opciones de actividades y precios, preparados para completar sin inventar tarifas.",
    description:
      "Organizamos fiestas de cumpleaños por las tardes con diferentes opciones de actividades y precios. Este espacio queda preparado para añadir más adelante packs, horarios, condiciones y tarifas concretas cuando estén confirmadas.",
    highlights: ["Por las tardes", "Opciones de actividad", "Tarifas por confirmar", "Packs editables"],
    cta: "Consultar cumpleaños",
    detailCta: "Consultar cumpleaños",
    href: "/cumpleanos",
  },
  {
    title: "Acampadas",
    slug: "acampadas",
    icon: "⛺",
    color: "green",
    image: siteConfig.images.acampadas,
    short:
      "Actividades especiales con alta demanda que podrán organizarse en distintos periodos, como Navidad o verano.",
    description:
      "Las acampadas son actividades especiales con alta demanda que pueden organizarse en diferentes periodos del año, como Navidad o verano. Esta página queda preparada para anunciar próximas fechas, plazas y condiciones cuando estén disponibles.",
    highlights: ["Alta demanda", "Navidad o verano", "Próximas fechas", "Plazas por confirmar"],
    cta: "Próximas acampadas",
    detailCta: "Próximas acampadas",
    href: "/acampadas",
  },
];

export const values = [
  { title: "Conciliación", icon: "🤝", text: "Apoyo real a las familias durante el curso y las vacaciones." },
  { title: "Diversión", icon: "🌈", text: "Actividades alegres para disfrutar del tiempo libre." },
  { title: "Seguridad", icon: "🛡️", text: "Un entorno cuidado, cercano y de confianza." },
  { title: "Educación", icon: "📚", text: "Ocio educativo con valores, convivencia y respeto." },
  { title: "Movimiento", icon: "🏃", text: "Juego activo, deporte y propuestas para moverse." },
  { title: "Creatividad", icon: "🎨", text: "Talleres e ideas para imaginar, crear y expresarse." },
];
