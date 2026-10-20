# IRATXO — sitio público

Presentación del producto y política de privacidad, en español, euskera e inglés.
HTML y CSS. Sin backend, sin formulario y sin fuentes de terceros.

La app de Android sigue en su repositorio. Este existe para poder publicarlo en GitHub Pages
sin abrir el código de la app.

## Cómo publicarlo

1. Crea un repositorio **público** vacío en tu cuenta de GitHub. Nombre sugerido: `iratxo-site`.
   No añadas README ni licencia: este directorio ya tiene el primer commit.
2. Desde esta carpeta:

```text
git remote add origin https://github.com/TU_USUARIO/iratxo-site.git
git push -u origin main
```

3. En el repositorio de GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Espera a que el workflow `Pages` termine en verde. La URL queda en el entorno `github-pages`
   del workflow, con forma `https://TU_USUARIO.github.io/iratxo-site/`.

## Qué URL usar

| Uso | Ruta |
|---|---|
| Inicio | `/` |
| Euskera | `/eu.html` |
| Inglés | `/en.html` |
| Política para Play (español) | `/privacy/es.html` |
| Política en euskera | `/privacy/eu.html` |
| Política en inglés | `/privacy/en.html` |

Play Console quiere la de `privacy/es.html`. No escribas esa URL en la app ni en la ficha
hasta que la página responda de verdad. Cuando responda, pásala junto con lo que haya que
cambiar: el hueco está en el repo de la app, `docs/store/public-url.md`.

## Qué mirar tú

La lista está en [`TESTING.md`](TESTING.md). Anota ahí, o en el chat, lo que haya que corregir.
El vídeo del aviso de una sesión no está: se añadirá cuando exista el archivo.
