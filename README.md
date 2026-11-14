# WikiSeek — sitio público

Sitio estático de la biblioteca WikiSeek y de los tres libros de Roger Abanto Marín.

## Qué contiene

- `index.html` — portada de WikiSeek, con la sección “Libros”.
- `libros/` — índice, fichas de los tres libros, portadas, PDF y EPUB.
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
7. Ejecuta `configurar-url.ps1` con esa URL para reemplazar `https://rabantom-ship-it.github.io/wikiseek` en los metadatos, el sitemap y las citas.

## Publicar en Netlify Drop (alternativa rápida)

1. Entra a https://app.netlify.com/drop
2. Arrastra esta carpeta.
3. Netlify te da una URL temporal; crea una cuenta para conservarla.
4. Para ORCID y Google Scholar, usa GitHub Pages: es más estable.

## KDP Select: estado actual

- **Neurociencias para psiquiatras** y **Tratamientos en psiquiatría**: inscritos en KDP Select el 8 de noviembre de 2026. El período termina hacia el **6 de febrero de 2027**; confirma la fecha exacta en KDP. Hasta entonces, **no publiques sus PDF/EPUB completos**.
- **La psiquiatría del porvenir**: no está en Select. Es el libro de lanzamiento en acceso abierto y sí incluye PDF/EPUB completos. **DOI:** 10.5281/zenodo.24205039 · **Licencia:** CC BY 4.0.

Este paquete público incluye solo el PDF/EPUB completo del tercer libro. Cuando termine Select, agrega los otros dos y actualiza sus fichas.

## Qué reemplazar

- `https://rabantom-ship-it.github.io/wikiseek` → tu URL real (lo hace `configurar-url.ps1`).
- Enlaces de Amazon: ahora son búsquedas. Cuando tengas los enlaces directos, edítalos en `libros/*.html`.
- Enlaces de Google Play y Apple Books: agrégalos cuando estén publicados.
- ISBN de *La psiquiatría del porvenir*: cuando lo tengas, agrégalo en `libros/porvenir.html` y en `metadata/orcid.md`.

## Tamaño

El paquete público con el tercer libro completo ronda los 3 MB. GitHub Pages acepta archivos de hasta 100 MB; el repositorio completo queda muy por debajo.
