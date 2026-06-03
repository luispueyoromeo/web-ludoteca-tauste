# La Ludoteca de Tauste

Primera versión de la web de **La Ludoteca de Tauste**, preparada con Next.js para publicarse en Vercel y asociar en el futuro el dominio `laludotecadetauste.com`.

## Desarrollo

```bash
npm install
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Producción

```bash
npm run build
npm run start
```

## Dónde editar el contenido

- Textos generales, dominio previsto, navegación, contacto, actividades, valores y rutas de imágenes: `data/site.js`.
- Páginas de actividad: `app/colonias/page.jsx`, `app/sabados/page.jsx`, `app/cumpleanos/page.jsx` y `app/acampadas/page.jsx`.
- Contacto e inscripciones: `app/contacto/page.jsx`, `app/inscripciones/page.jsx` y `components/ContactPanel.jsx`.
- Colores y estilos responsive: `app/globals.css`, especialmente las variables CSS del bloque `:root`.
- Imágenes reales: `public/images`. Usa los nombres `ludoteca-espacio.jpg`, `colonias.jpg`, `sabados.jpg`, `cumpleanos.jpg` y `acampadas.jpg` para que la web las cargue automáticamente.

## Despliegue en Vercel

1. Subir el repositorio a GitHub.
2. Crear un proyecto en Vercel importando el repositorio.
3. Usar la configuración automática de Next.js.
4. Cuando se compre el dominio, asociar `laludotecadetauste.com` desde el panel de dominios de Vercel.
