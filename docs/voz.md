# Voz

Cómo escribe Luis. Este archivo existe para que cualquiera —persona o modelo—
pueda redactar un borrador que suene a él y no a prosa de blog genérica.

> **Estado: confirmado para inglés técnico, provisional para ensayo.** Los ADR de
> `captalog-app` confirmaron el registro; su voz de ensayo en inglés sigue sin
> muestra. Ver "Cómo alimentar esto" al final.

## Fuentes

**Válidas** (escritas por él):
- Mensajes de conversación — ver `ejemplos/`.
- Mensajes de commit anteriores a `ad513a5` (junio 2024, en inglés).
- Los ADR de `captalog-app` que él firma —`docs/adr/008` y `docs/adr/014`— en
  inglés técnico. **Ese repo es privado y este es público: no copiar su contenido
  acá.** Se leen allá; acá solo quedan las observaciones.

**Ojo con la autoría**: en `captalog-app` también escribe Garri Figueroa (ADR 021
y 030). Verificar con `git log` antes de tomar un ADR como muestra.

**No válidas**:
- Las tres entradas en `src/content/bitacora/`. Las agregó el commit `ad513a5`,
  co-autoreado por un modelo, y el propio mensaje dice que son contenido de
  partida para reemplazar. **No derivar la voz de ahí.** Usan voseo rioplatense
  ("escribís", "sacás") que él no usa.

## Rasgos observados

Cada uno con la evidencia que lo respalda. Si un rasgo no tiene evidencia, no está.

1. **Piensa en voz alta y deja las costuras visibles.** Usa `....` para marcar el
   giro de un pensamiento a otro, no como suspenso.
   > "Ahora.... en inglés o español .... la verdad es que en español la gente no
   > pesca tanto"

2. **Trae marcos de ciencias sociales a decisiones técnicas y comerciales**, y los
   capitaliza como conceptos.
   > "es Capital Simbólico. y con el Capital Simbólico puedo obtener Capital Económico"

   Esto es lo más distintivo que tiene. Hay cientos escribiendo sobre CRDTs;
   ninguno aplicando Bourdieu a un SaaS de inspecciones mineras. **Es el primer
   rasgo que se pierde al escribir en inglés. Defenderlo.**

3. **Pide fricción, no confirmación.**
   > "Piensas lo mismo?" / "quizá entrevistame para que veamos qué expertos
   > adicionales me pueden ayudar"

4. **Admite lo que no sabe, sin adorno.**
   > "No sé qué más...." / "no sé .... quizá"

5. **Chileno sin esfuerzo, nunca impostado.** "la gente no pesca tanto",
   "Convengamos que". No neutraliza su español, pero tampoco lo exhibe.

6. **Enumera sin jerarquizar, y luego admite que lo quiere todo.**
   > "quiero vender CaptaLog, ser referente técnico, levantar capital y poder
   > hacer consultorías"

7. **Frases cortas. Pocas subordinadas. Cero emoji. Cero jerga de marketing.**

8. **En inglés (commits): tercera persona del presente, sin punto final, sin
   prefijos de scope.** "Adds custom domain", "Removes search", "Restores search".
   Directo, sin adjetivos.

9. **En inglés técnico (ADR), rasgos observados en el 014:**
   - Razona por alternativas pesadas, no por narrativa: contexto → opciones →
     decisión → costos → consecuencias.
   - Aterriza el problema en un caso numérico concreto en vez de dejarlo
     abstracto.
   - Cita con precisión —capítulos, no nombres sueltos.
   - Declara el costo de su propia decisión sin suavizarlo, y no vende la
     solución que eligió.
   - Oraciones cortas, voz activa, cero adjetivos de venta.

   Esto **confirma** el registro recomendado abajo: la conjetura era correcta.

## Reglas para escribir en inglés

El inglés es segunda lengua. El riesgo no es cometer errores: es sonar a nadie.

- **Registro objetivo**: Kleppmann o patio11 — llano, oraciones cortas, técnico
  sin ornamento. **No** el registro ensayístico-literario; ahí se pierde.
- **Prohibido**: modismos que él no usaría al hablar, frases hechas de tech
  Twitter ("here's the thing", "let that sink in"), aliteración, tricolon
  retórico, preguntas retóricas encadenadas.
- **Obligatorio**: el marco conceptual explícito cuando lo haya. Si un post trata
  de sync, y la razón por la que importa es que la evidencia legal de una
  inspección no puede perderse, eso se dice.
- **La restricción técnica va en inglés; la postal chilena no.** "Sync when a
  device is offline for ten hours" es contenido técnico. La faena es evidencia,
  no ambientación.
- Un post, una tesis. Si hay dos, son dos posts.

## Cómo alimentar esto

Este archivo mejora con muestras reales. Lo más útil, en orden:

1. Descripciones largas de pull request escritas por él.
2. Respuestas largas suyas en Slack, sobre todo desacuerdos técnicos.
3. Correos a clientes de CaptaLog.
4. Cualquier texto en inglés que haya escrito sin asistencia.

Guardarlas en `ejemplos/` como archivos separados, con fecha y contexto en la
cabecera. Con 5–6 muestras reales, los rasgos de arriba se pueden confirmar,
corregir o descartar.
