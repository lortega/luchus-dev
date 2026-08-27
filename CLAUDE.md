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

Un archivo Markdown por entrada en `src/content/bitacora/`. El nombre del archivo
es la URL. Frontmatter validado por Zod en `src/content.config.ts`:

| Campo      | Tipo             | Obligatorio | Nota                                        |
| ---------- | ---------------- | ----------- | ------------------------------------------- |
| `titulo`   | string           | sí          |                                             |
| `resumen`  | string           | sí          | Bajada: portada, RSS y `description`.       |
| `fecha`    | `AAAA-MM-DD`     | sí          | Define orden y folio.                       |
| `tags`     | string[]         | no          | Default `[]`.                               |
| `borrador` | boolean          | no          | `true` la excluye del build de producción.  |

Los folios (`#001`, `#002`) se calculan solos por orden cronológico ascendente en
`src/lib/bitacora.ts`. Insertar una entrada con fecha anterior corre los folios
posteriores. Es un registro, no un identificador estable — no lo referencies desde
fuera del sitio.

## Estructura

```
src/
  content/bitacora/   entradas
  content.config.ts   esquema del frontmatter
  consts.ts           título, autor, descripción, idioma del sitio
  lib/bitacora.ts     lectura del registro, folios, fechas
  components/         Cabecera, Pie, BaseHead
  layouts/Base.astro  cascarón HTML
  pages/              portada, entrada, sobre-mí, 404, rss.xml
  styles/global.css   todo el diseño (variables CSS, modo oscuro por sistema)
docs/
  asesores.md         a quién leer y qué extraer
  voz.md              cómo escribe Luis
  ejemplos/           muestras reales de su escritura
```

Todo el diseño vive en `global.css`. No hay framework de estilos ni componentes
de UI: si algo se ve mal, se arregla ahí.

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

1. **Las tres entradas actuales de `src/content/bitacora/` NO son de Luis.** Las
   agregó el commit `ad513a5`, co-autoreado por un modelo, como contenido de
   partida para reemplazar. Usan voseo rioplatense que él no usa. **No derivar la
   voz de ahí, ni tomarlas como referencia de tono.**
2. **Nada de prosa de blog genérica.** El riesgo al escribir en segunda lengua no
   es el error gramatical: es sonar a nadie. Registro objetivo: llano, oraciones
   cortas, técnico sin ornamento.
3. **El rasgo a defender**: Luis trae marcos de ciencias sociales (Bourdieu,
   capital simbólico) a decisiones técnicas y comerciales. Es lo más distintivo
   que tiene y lo primero que se pierde en inglés. Si un borrador no podría
   haberlo escrito solo él, está mal.

Todo borrador es borrador. No publicar ni commitear contenido sin que lo revise.

## Decisión pendiente

El sitio está enteramente en español —`lang="es"` en `Base.astro`, `idioma:
'es-CL'` en `consts.ts`, `<language>es-cl</language>` en el RSS, campos de
frontmatter en español, rutas `/bitacora/` y `/sobre-mi/`— pero el contenido va a
ser mayoritariamente en inglés. Hay que resolverlo antes del primer post:
traducir el chrome, marcar el idioma por entrada, o asumir la mezcla a propósito.
No lo decidas por tu cuenta.

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
