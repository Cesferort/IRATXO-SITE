# IRATXO

Tu concentración construye tu mundo. Mientras tú te concentras, los Iratxos salen de expedición y
la aldea crece con lo que traen. La aplicación vive en el teléfono: sin cuentas, sin anuncios y
sin servidor.

Este repositorio es la web pública: la presentación, quién la hace y la política de privacidad.
Español, euskera e inglés. HTML y CSS, sin backend y sin fuentes de terceros.

El código de la app está en otro repositorio.

## Páginas

| Página | Ruta |
|---|---|
| Inicio | `/` |
| Euskera | `/eu.html` |
| Inglés | `/en.html` |
| Sobre mí | `/about/es.html`, `/about/eu.html`, `/about/en.html` |
| Privacidad | `/privacy/es.html`, `/privacy/eu.html`, `/privacy/en.html` |

Play Console usa `privacy/es.html`.

## Publicación

GitHub Pages, con el workflow de `.github/workflows/pages.yml`: **Settings → Pages → Source:
GitHub Actions**. El workflow copia el sitio a `_site` y añade el identificador del commit a la
hoja de estilos, para que un cambio de CSS no se quede cacheado en el navegador.

La dirección publicada es `https://cesferort.github.io/IRATXO-SITE/`.

## Al compartir el enlace

La miniatura de las redes sociales es `art/share-2026-11.jpg`, de 1200×630. Las redes cachean esa
imagen **por su URL**: si se cambia el dibujo, hay que cambiar también el nombre del archivo y el
`og:image` de las nueve páginas, o seguirán enseñando el anterior.

## Qué es la app, en corto

Eliges cuánto vas a estar trabajando y mandas a los Iratxos de expedición. El teléfono mide ese
rato de verdad, y con lo que traen crece la aldea: población, obras de noche y lo que cuentan al
volver. La inspiración es la mitología vasca, sin combate. El protagonista es quien se concentra.
