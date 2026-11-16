# WikiSeek — sitio público

Sitio estático de la biblioteca WikiSeek y de los tres libros de Roger Abanto Marín.

## Qué contiene

- `index.html` — portada de WikiSeek, con la sección “Libros”.
- `libros/` — índice, fichas de los tres libros, portadas y muestras PDF de dos capítulos.
- `articulos/`, `assets/`, `documentos/` — biblioteca original.
- `metadata/` — fichas para ORCID, Google Scholar, Google Play, Apple Books y UNMSM.
- `sitemap.xml`, `robots.txt`, `.nojekyll`, `CITATION.cff`.

## Ver en local

Doble clic en `index.html` o, mejor, desde esta carpeta:

```powershell
python -m http.server 8000
```

Abre `http://localhost:8000/`.

## Publicar en GitHub Pages

1. Crea una cuenta en GitHub y un repositorio **público** llamado `wikiseek`.
2. Entra al repositorio → **Add file → Upload files**.
3. Arrastra **el contenido** de esta carpeta (no la carpeta padre): `index.html`, `libros`, `assets`, `articulos`, `documentos`, `metadata`, `sitemap.xml`, `robots.txt`, `.nojekyll`, `CITATION.cff`.
4. Commit.
5. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → Folder: /(root) → Save**.
6. Espera 1–2 minutos. La URL será:
   `https://TU-USUARIO.github.io/wikiseek/`
7. Ejecuta `configurar-url.ps1` con esa URL para reemplazar `__PUBLIC_URL__` en los metadatos, el sitemap y las citas.

## Publicar en Netlify Drop (alternativa rápida)

1. Entra a https://app.netlify.com/drop
2. Arrastra esta carpeta.
3. Netlify te da una URL temporal; crea una cuenta para conservarla.
4. Para ORCID y Google Scholar, usa GitHub Pages: es más estable.

## KDP Select: estado actual

- **Neurociencias para psiquiatras** y **Tratamientos en psiquiatría**: inscritos en KDP Select el 8 de noviembre de 2026. El período termina hacia el **6 de febrero de 2027**; confirma la fecha exacta en KDP. Hasta entonces, **no publiques sus PDF/EPUB completos**.
- **La psiquiatría del porvenir**: inscrito en KDP con ISBN **979-8-14-307084-4**. También está en KDP Select, así que **no se publica el PDF/EPUB completo**: solo la muestra de dos capítulos y el enlace a Amazon.

Este paquete público **no incluye ningún libro completo**: solo fichas, portadas y muestras PDF de los capítulos 1 y 2.

## Qué reemplazar

- `__PUBLIC_URL__` → tu URL real (lo hace `configurar-url.ps1`).
- Enlaces de Amazon: ahora son búsquedas. Cuando tengas los enlaces directos, edítalos en `libros/*.html`.
- Enlaces de Google Play y Apple Books: agrégalos cuando estén publicados.
- ISBN de *La psiquiatría del porvenir*: 979-8-14-307084-4.

## Tamaño

El paquete público pesa menos de 1 MB. GitHub Pages acepta archivos de hasta 100 MB; el repositorio completo queda muy por debajo.
