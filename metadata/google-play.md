# Google Play Books

1. Entra a https://play.google.com/books/publish/ con tu cuenta de Google.
2. Acepta el acuerdo y completa el perfil de pagos/impuestos (aunque publiques gratis).
3. **Book Catalog → Add book**.
4. Elige **Sell ebook on Google Play**.
5. Book ID:
   - Si tienes ISBN, ponlo.
   - Si no, pide un **GGKEY**.
6. Book Info:
   - Título, subtítulo, autor, descripción, editorial, fecha, idioma, páginas.
   - Géneros BISAC: MED105000 (Psychiatry), MED056000 (Neurology), SCI089000 (Neuroscience).
7. Content: sube el **EPUB** y la portada.
   - EPUB: `libros/archivos/*.epub`
   - Portada: `libros/portadas/apple/*.jpg` (1600×2400)
8. Settings:
   - Preview: 10–20%.
   - DRM: opcional; para acceso abierto, desactívalo.
   - Territorios: mundial.
   - Permitir descarga de todas las páginas: sí, si el libro es gratuito.
9. Pricing: 0 (gratis) o el precio que decidas. Google paga 70% en países elegibles, incluido Perú.
10. Review → Publish. Se publica en menos de 24 horas.

Notas:
- Google acepta EPUB y PDF; para este proyecto usa EPUB.
- Si no tienes ISBN, Google te da un GGKEY; para bibliotecas es mejor tener ISBN.
- No dupliques el mismo libro con dos ISBN distintos en la misma tienda.
