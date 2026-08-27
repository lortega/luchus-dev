# CLAUDE.md

Guía para trabajar en este repo. El `README.md` explica *cómo* funciona el sitio;
este archivo explica *para qué existe* y cómo escribir en él sin arruinarlo.

## Qué es

`luchus.dev` — bitácora personal de Luis Ortega. Astro 7, sitio estático,
GitHub Pages, dominio propio. Rama principal: `master`; cada push despliega.

## Comandos

```bash
npm run dev      # http://localhost:4321 (muestra borradores)
npm run build    # genera dist/ (excluye borradores)
npm run preview  # sirve dist/ como en producción
npm run check    # astro check (types)
```

No hay tests ni linter. `npm run check` es la única verificación antes de un push.

## Entradas

Un archivo Markdown por entrada en `src/content/notes/`. El nombre del archivo
es la URL. Frontmatter validado por Zod en `src/content.config.ts`:

| Campo     | Tipo         | Obligatorio | Nota                                       |
| --------- | ------------ | ----------- | ------------------------------------------ |
| `title`   | string       | sí          |                                            |
| `summary` | string       | sí          | Bajada: portada, RSS y `description`.      |
| `date`    | `AAAA-MM-DD` | sí          | Define orden y folio.                      |
| `tags`    | string[]     | no          | Default `[]`.                              |
| `draft`   | boolean      | no          | `true` la excluye del build de producción. |

Los folios (`#001`, `#002`) se calculan solos por orden cronológico ascendente en
`src/lib/notes.ts`. Insertar una entrada con fecha anterior corre los folios
posteriores. Es un registro, no un identificador estable — no lo referencies desde
fuera del sitio.

## Estructura

```
src/
  content/notes/      entradas
  content.config.ts   esquema del frontmatter
  consts.ts           título, autor, descripción, idioma del sitio
  lib/notes.ts        lectura del registro, folios, fechas
  components/         Cabecera, Pie, BaseHead
  layouts/Base.astro  cascarón HTML
  pages/              portada, entrada, about, 404, rss.xml
  styles/global.css   todo el diseño (variables CSS, modo oscuro por sistema)
docs/
  asesores.md         a quién leer y qué extraer
  voz.md              cómo escribe Luis
  ejemplos/           muestras reales de su escritura
```

Todo el diseño vive en `global.css`. No hay framework de estilos ni componentes
de UI: si algo se ve mal, se arregla ahí.

**El sitio es en inglés**: `lang="en"`, rutas `/notes/` y `/about/`, campos de
frontmatter y strings visibles en inglés. Los nombres de clases CSS y dos
componentes (`Cabecera`, `Pie`) siguen en español: son internos y renombrarlos no
le sirve a ningún lector. La documentación del repo se mantiene en español.

## Contexto editorial

Esto no es un blog de hobby. Es un instrumento.

- **Objetivo**: capital simbólico convertible — vender CaptaLog (SaaS de
  inspecciones en terreno, mercado chileno, competidor de referencia
  SafetyCulture), autoridad técnica, levantar capital, consultorías. Los cuatro,
  no uno.
- **Idioma por defecto: inglés.** El tema es angosto (offline-first, sync,
  conflictos, Rails) y sus canales —HN, lobste.rs, comunidades local-first y
  Rails— son en inglés. El español queda como excepción deliberada, para
  contenido de faena e industria, cuando exista material.
- **Nicho de entrada**: la conversación *local-first*, donde hay un caso de
  producción real (inspecciones en faena minera) que casi nadie más tiene.
- **La restricción técnica va en inglés; la postal chilena no.** "Sync when a
  device is offline for ten hours" es contenido técnico. La faena es evidencia,
  no ambientación.

Detalle en `docs/asesores.md`.

## Al escribir contenido en su nombre

**Lee `docs/voz.md` antes de redactar una sola línea.** Contiene los rasgos
observados con su evidencia y las reglas para escribir en inglés.

Tres reglas que no se negocian:

1. **Las tres entradas actuales de `src/content/notes/` NO son de Luis.** Las
   agregó el commit `ad513a5`, co-autoreado por un modelo, como contenido de
   partida para reemplazar. Están en español, usan voseo rioplatense que él no usa
   y quedaron marcadas `draft: true`, fuera de producción. **No derivar la voz de
   ahí, ni tomarlas como referencia de tono.** Hoy el sitio publicado no tiene
   entradas, y es preferible así a publicar contenido que no escribió.
2. **Nada de prosa de blog genérica.** El riesgo al escribir en segunda lengua no
   es el error gramatical: es sonar a nadie. Registro objetivo: llano, oraciones
   cortas, técnico sin ornamento.
3. **El rasgo a defender**: Luis trae marcos de ciencias sociales (Bourdieu,
   capital simbólico) a decisiones técnicas y comerciales. Es lo más distintivo
   que tiene y lo primero que se pierde en inglés. Si un borrador no podría
   haberlo escrito solo él, está mal.

Todo borrador es borrador. No publicar ni commitear contenido sin que lo revise.

## Posicionamiento

El título del sitio es `luchus.dev` y se queda así: el capital que Luis acumula es
personal, no de una marca temática, y un nombre de dominio propio no lo obliga a
reconstruir identidad si cambia de tema.

Toda la carga de posicionamiento la lleva la descripción, en `src/consts.ts`:

> Most software assumes a network, a desk, and a user who wants to be there.
> Notes from building for none of those.

Es una tesis con enemigo explícito, no un índice de temas. Se eligió esa forma
—por sobre nombrar el nicho o apoyarse en su nombre— **porque hoy a Luis no lo
conoce nadie**: un desconocido con una idea buena viaja más lejos que un
desconocido con un currículum. La portada (`src/pages/index.astro`) repite la
tesis y la página `/about/` es la que carga la credibilidad. Si algo cambia acá,
que cambien los tres juntos.

## Git

Trabajo en solitario, y así va a seguir. No hay ramas de feature ni pull requests:
se commitea directo a `master` y **se pushea a `origin` con frecuencia**, sin
esperar a que Luis lo pida. Un cambio terminado que quedó sin subir es el error a
evitar, no lo contrario.

Commits pequeños y frecuentes, uno por cambio con sentido propio. Mensajes en
español, con cuerpo que explique el porqué cuando el cambio no es obvio.

La excepción sigue siendo el contenido: **borradores de entradas no se publican
sin que Luis los revise.** Si hace falta subir uno para no perderlo, va con
`borrador: true`, que lo deja fuera del build de producción.

Recordar que cada push a `master` despliega el sitio.
