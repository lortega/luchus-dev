# luchus.dev

Bitácora personal de Luis Ortega. Sitio estático hecho con [Astro](https://astro.build),
publicado en GitHub Pages.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ como en producción
```

## Escribir una entrada

Cada entrada es un archivo Markdown en `src/content/bitacora/`. El nombre del
archivo es la URL: `mi-entrada.md` queda en `/bitacora/mi-entrada/`.

```markdown
---
titulo: El log que nadie lee
resumen: Una línea que aparece en la portada, en el RSS y en la metadata.
fecha: 2026-06-11
tags: [producción, errores]
borrador: false
---

El cuerpo de la entrada, en Markdown.
```

| Campo     | Obligatorio | Qué hace                                                        |
| --------- | ----------- | --------------------------------------------------------------- |
| `titulo`  | sí          | Título de la entrada.                                            |
| `resumen` | sí          | Bajada. Se usa en la portada, en el RSS y como `description`.     |
| `fecha`   | sí          | `AAAA-MM-DD`. Define el orden y el folio.                         |
| `tags`    | no          | Lista de etiquetas. Por defecto, vacía.                           |
| `borrador`| no          | `true` la deja fuera del build de producción, visible en `dev`.   |

También se acepta `.mdx` si necesitás componentes dentro de una entrada.

### Folios

El número que aparece junto a cada entrada (`#001`, `#002`…) se calcula solo, por
orden cronológico ascendente: la entrada más antigua es la `#001`. Si insertás una
entrada con fecha anterior, los folios posteriores se corren. Es un registro, no
un identificador permanente.

Las tres entradas que vienen en el repo son contenido de partida: reemplazalas o
borralas.

## Diseño

- **Tipografías**: Bricolage Grotesque (títulos), Literata (lectura), IBM Plex Mono
  (fechas, folios, código). Se descargan y se sirven desde el propio sitio con la
  API de fuentes de Astro; no hay pedidos a Google en producción.
- **Paleta**: papel con tinte salvia y tinta oxblood, definida como variables CSS
  en `src/styles/global.css`. El modo oscuro sigue la preferencia del sistema.
- El riel vertical de la portada es continuo y solo lo interrumpen los años.

## Estructura

```
src/
  content/bitacora/   entradas en Markdown
  content.config.ts   esquema del frontmatter
  components/         cabecera, pie, <head>
  layouts/Base.astro  cascarón HTML
  lib/bitacora.ts     lectura del registro, folios, fechas
  pages/              portada, entrada, sobre-mí, 404, rss.xml
  styles/global.css   todo el diseño
public/               favicon, CNAME, robots.txt
```

## Despliegue

`.github/workflows/deploy.yml` buildea y publica en cada push a `master`.

Para que funcione hace falta, una sola vez, en el repo de GitHub:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Pages → Custom domain**: `luchus.dev` (el archivo `public/CNAME`
   ya viaja en el build).
3. En el DNS de `luchus.dev`, apuntar el apex a GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
