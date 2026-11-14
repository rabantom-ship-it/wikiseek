# GitHub Pages

1. Crea una cuenta en https://github.com/
2. Crea un repositorio **público** llamado `wikiseek`.
3. Sube **el contenido** de `WikiSeek-Publico` (no la carpeta padre):
   - `index.html`
   - `libros/`
   - `assets/`
   - `articulos/`
   - `documentos/`
   - `metadata/`
   - `sitemap.xml`, `robots.txt`, `.nojekyll`
4. Settings → Pages → Source: **Deploy from a branch** → Branch: **main** → Folder: **/(root)** → Save.
5. Espera 1–2 minutos.
6. URL: `https://TU-USUARIO.github.io/wikiseek/`
7. Ejecuta `configurar-url.ps1` con esa URL y vuelve a subir los archivos modificados.

## Con GitHub Desktop

1. Instala GitHub Desktop.
2. **File → Add local repository** → selecciona `WikiSeek-Publico`.
3. **Publish repository**; desmarca “Keep this code private”.
4. En github.com → Settings → Pages → configura la rama `main` y `/root`.
