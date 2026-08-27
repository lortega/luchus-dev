# Voz

Cómo escribe Luis. Este archivo existe para que cualquiera —persona o modelo—
pueda redactar un borrador que suene a él y no a prosa de blog genérica.

## Fuentes

**La única fuente válida son sus prompts**: lo que escribe él, directo, sin
asistencia. Están en `ejemplos/`.

**No válidas, y conviene saber por qué:**

- **Los ADR y todo `docs/` de `captalog-app`.** Los escribe con ayuda de IA. Se
  leen como suyos y no lo son: tienen una voz aforística y doctrinaria
  —"CLAUDE.md es caché, no casa"— que no es la de Luis. Es la trampa más fácil
  de caer en este repo, porque es material técnico, firmado por él y bien escrito.
  **No usarlos.**
- **Las tres entradas de `src/content/notes/`.** Contenido de partida del commit
  `ad513a5`, co-autoreado por un modelo. Voseo rioplatense que él no usa.
- **Los mensajes de commit.** Los anteriores a `ad513a5` (junio 2024) son suyos,
  pero "Adds custom domain" no tiene voz suficiente para servir de muestra.

Regla general: **si un texto pasó por un modelo, no es muestra.** Aunque él lo
haya dirigido, aunque esté firmado por él, aunque el contenido sea suyo.

## Rasgos observados

Cada uno con la evidencia que lo respalda.

1. **Piensa en voz alta y deja el giro visible.** Usa `....` y `…` para marcar
   dónde cambia de pensamiento, no como suspenso.
   > "Ahora.... en inglés o español .... la verdad es que en español la gente no
   > pesca tanto"

2. **Pregunta de vuelta.** Casi todos sus mensajes terminan pidiendo opinión o
   contraste. No busca confirmación: busca fricción.
   > "Piensas lo mismo?" · "No crees que sería bueno hablar de la IA?" ·
   > "Te puedo sugerir algo yo?" · "que opinan mis advisors que deberíamos hacer?"

3. **Enmarca por descubrimiento, no por doctrina.** Empieza por cuándo se dio
   cuenta, no por la conclusión.
   > "el otro día me di cuenta que es bueno tener una documentación 360"

   **Es el rasgo más importante para el blog.** Sus posts deberían abrir así, no
   enunciando una tesis.

4. **Dice la cosa, y después la dice más concreta.** Suele usar "O sea" para
   reformular.
   > "es bueno tener la documentación del código exacto y llegar a tener
   > documentado incluso que hace la empresa. Desde un lado al otro"

5. **Corrige de frente, sin suavizar.** No usa preámbulos para discrepar.
   > "No, no me gusta eso" · "No se de donde sacas que yo escribo así"

6. **Trae marcos conceptuales y los capitaliza**, mezclados con habla coloquial.
   > "es Capital Simbólico. y con el Capital Simbólico puedo obtener Capital
   > Económico"

7. **Chileno sin esfuerzo.** "la gente no pesca tanto", "Convengamos que". No
   neutraliza su español ni lo exhibe.

8. **Corto.** Rara vez pasa de cuatro oraciones. Cierra con superlativo simple:
   > "mientras más detallada sea la documentación mejor"

9. **Escribe rápido y sin editar**: tildes que faltan, espacios antes del signo
   de pregunta. No es un rasgo a imitar, pero sí la señal de que su registro
   natural es hablado, no redactado.

## Qué significa esto para escribir en inglés

Su voz vive en la informalidad y en el pensar en voz alta. Nada de eso sobrevive
una traducción hecha con cuidado — y ese es el riesgo concreto del que se habló
al elegir inglés, ya no en abstracto.

- **Registro objetivo**: técnico conversacional. Primera persona, oraciones
  cortas, admitir lo que no se sabe, abrir por el descubrimiento.
  Justin Jackson o DHH, **no** Kleppmann ni un ADR.
- **Abrir siempre por cuándo se dio cuenta**, no por la tesis. La tesis va
  después, y sale del caso.
- **Prohibido**: registro de documento —"The system is organized by…"—, prosa de
  ensayo ornamentada, frases hechas de tech Twitter ("here's the thing"),
  preguntas retóricas encadenadas, hedges ("it could be argued").
- **Obligatorio**: decir el costo de la propia decisión, y dejar a la vista lo
  que todavía no está resuelto. Él lo hace todo el tiempo.
- Un post, una cosa. Si hay dos, son dos posts.

## Cómo alimentar esto

Guardar sus prompts en `ejemplos/`, sin editar, con fecha y contexto. Nada más
califica. Si algún día escribe un texto largo sin asistencia —un correo, una
respuesta larga en Slack, un borrador crudo— eso vale más que todo lo de acá.
