export const siteConfig = {
  name: "La Ludoteca de Tauste",
  domain: "laludotecadetauste.com",
  subtitle: "Ocio, conciliación y tiempo libre para niños y niñas en Tauste",
  description:
    "Un espacio cercano y familiar donde se organizan actividades de ocio educativo, tiempo libre y conciliación para niños y niñas de Tauste y alrededores.",
  contact: {
    phone: "650 044 395",
    email: "5vsportlife@gmail.com",
    instagram: "@laludotecadetauste",
    location: "Tauste, Zaragoza",
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
    short:
      "Colonias en Navidad, Semana Santa y verano para disfrutar de las vacaciones con juegos, talleres y convivencia.",
    description:
      "Actividades desarrolladas en periodos vacacionales escolares, pensadas para ayudar a la conciliación familiar y ofrecer a los niños y niñas días llenos de ocio educativo, movimiento y creatividad.",
    highlights: ["Navidad", "Semana Santa", "Verano", "Conciliación familiar"],
    cta: "Inscripción",
    href: "/colonias",
  },
  {
    title: "Los Sábados",
    slug: "sabados",
    icon: "🎲",
    color: "blue",
    short:
      "Una alternativa de ocio educativo todos los sábados durante el curso escolar, en horario de mañana y/o tarde.",
    description:
      "Un plan cercano para que los niños y niñas de la localidad compartan juegos, actividades cooperativas, talleres y propuestas de tiempo libre durante el curso escolar.",
    highlights: ["Curso escolar", "Mañana y/o tarde", "Ocio educativo", "Juego compartido"],
    cta: "Más información",
    href: "/sabados",
  },
  {
    title: "Fiestas de cumpleaños",
    slug: "cumpleanos",
    icon: "🎂",
    color: "yellow",
    short:
      "Cumpleaños por las tardes con diferentes opciones de actividades y precios preparados para completar.",
    description:
      "Celebraciones pensadas para que cada cumple sea especial, con propuestas adaptables según la edad, el grupo y el tipo de actividad que busque la familia.",
    highlights: ["Por las tardes", "Opciones editables", "Precios pendientes", "Celebración especial"],
    cta: "Consultar opciones",
    href: "/cumpleanos",
  },
  {
    title: "Acampadas",
    slug: "acampadas",
    icon: "⛺",
    color: "green",
    short:
      "Actividades especiales con mucha demanda que se anunciarán según próximas fechas disponibles.",
    description:
      "Propuestas especiales que podrán realizarse en distintos periodos del año, como Navidad o verano. Las nuevas fechas se irán publicando cuando estén confirmadas.",
    highlights: ["Próximas fechas", "Navidad o verano", "Actividad especial", "Plazas limitadas"],
    cta: "Próximas acampadas",
    href: "/acampadas",
  },
];

export const values = [
  { title: "Conciliación", icon: "🤝", text: "Apoyo a las familias en periodos lectivos y vacacionales." },
  { title: "Diversión", icon: "🌈", text: "Propuestas alegres para aprender jugando." },
  { title: "Seguridad", icon: "🛡️", text: "Un entorno cuidado, cercano y de confianza." },
  { title: "Educación", icon: "📚", text: "Ocio educativo con valores y convivencia." },
  { title: "Movimiento", icon: "🏃", text: "Juegos activos para crecer con energía." },
  { title: "Creatividad", icon: "🎨", text: "Talleres e ideas para imaginar y crear." },
];
