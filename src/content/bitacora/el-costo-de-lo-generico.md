---
titulo: El costo de lo genérico
resumen: Toda abstracción escrita antes del tercer caso cobra intereses. Casi siempre conviene esperar.
fecha: 2025-11-30
tags: [diseño, dominio]
---

Cuando aparece el segundo caso parecido, la tentación es inmediata: extraer la
parte común, dejar un par de parámetros y seguir. Se siente como orden.

El problema es que dos casos no alcanzan para saber qué tienen en común de verdad.
Con dos puntos podés trazar cualquier curva. La abstracción que sacás ahí no
describe el dominio: describe la coincidencia entre dos ejemplos.

## Cómo se paga

La cuenta llega con el tercer caso, que se parece en un 90%. Ese 10% restante no
cabe en la abstracción, así que entra un flag. Después otro. Al año, la función
"común" tiene seis parámetros booleanos y nadie puede leerla sin abrir las tres
implementaciones que la usan.

Y lo peor: ya nadie se atreve a tocarla, porque no se sabe cuál de los tres
comportamientos se rompe.

> Duplicar es más barato que la abstracción equivocada. La duplicación se ve;
> la abstracción equivocada se esconde detrás de un nombre razonable.

## La regla que uso

Espero al tercer caso. No porque tres sea mágico, sino porque con tres empiezan a
distinguirse las dos preguntas que importan:

- ¿Qué parte se repite **porque el dominio lo exige**?
- ¿Qué parte se repite **porque copié y pegué**?

La primera merece un nombre. La segunda merece quedarse duplicada hasta que
alguien entienda por qué se parece.

## Un detalle que ayuda

Cuando finalmente extraigo algo, le pongo el nombre del concepto del negocio, no
el de la operación técnica. `RecalcularVencimiento` envejece bien; `procesarDatos`
se convierte en el basurero al que todos le agregan un parámetro más.

Si no encontrás un nombre del dominio, probablemente todavía no es una abstracción:
es dos cosas que por ahora se parecen.
