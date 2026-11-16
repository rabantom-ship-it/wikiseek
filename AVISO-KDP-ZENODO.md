# Aviso urgente: KDP Select y las copias completas

*La psiquiatrÃ­a del porvenir* ya estÃ¡ en KDP Select con el ISBN **979-8-14-307084-4**.

KDP Select exige exclusividad del eBook. Por eso **no puede haber PDF/EPUB completos** en Zenodo, GitHub ni WikiSeek. La muestra de los capÃ­tulos 1 y 2 sÃ­ puede publicarse.

## 1. Zenodo

1. Entra a https://zenodo.org/records/24205039 y pulsa **Edit**.
2. Elimina los archivos:
   - `la-psiquiatria-del-porvenir.pdf`
   - `la-psiquiatria-del-porvenir.epub`
3. Sube solo `porvenir-capitulos-1-2.pdf`.
4. Cambia la licencia a **Todos los derechos reservados**.
5. Actualiza la descripciÃ³n: â€œMuestra de los capÃ­tulos 1 y 2. El libro completo estÃ¡ en Amazon. ISBN 979-8-14-307084-4.â€
6. Publica el registro. El DOI **10.5281/zenodo.24205039** se conserva.

## 2. GitHub

En el repositorio `rabantom-ship-it/wikiseek`, elimina:

- `libros/archivos/la-psiquiatria-del-porvenir.pdf`
- `libros/archivos/la-psiquiatria-del-porvenir.epub`

Luego sube el paquete nuevo, que ya no incluye esos archivos y sÃ­ incluye `libros/muestras/`.

## 3. ComprobaciÃ³n

Abre estas URLs y confirma que dan 404:

- https://rabantom-ship-it.github.io/wikiseek/libros/archivos/la-psiquiatria-del-porvenir.pdf
- https://rabantom-ship-it.github.io/wikiseek/libros/archivos/la-psiquiatria-del-porvenir.epub

Si alguna sigue abriendo, el archivo completo sigue pÃºblico y KDP puede retirar el libro.