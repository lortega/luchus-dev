---
titulo: El log que nadie lee
resumen: Registrar un error y seguir adelante no es manejarlo. Es esconderlo con mejor letra.
fecha: 2026-06-11
tags: [producción, errores, ruby]
---

Hay un patrón que aparece en todos los código base que he tocado, y que casi
siempre pasa la revisión sin comentarios:

```ruby
def sincronizar(registro)
  Servicio.actualizar(registro)
rescue => e
  Rails.logger.error("Falló la sincronización: #{e.message}")
  nil
end
```

Se ve responsable. Hay un `rescue`, hay un log, no explota nada. Y sin embargo
es de las peores cosas que uno puede dejar en producción.

## El problema no es el rescue

El problema es el `nil`. Quien llama a `sincronizar` recibe exactamente lo mismo
cuando el servicio respondió "no hay nada que actualizar" que cuando el servicio
se cayó. Dos situaciones que exigen decisiones opuestas quedan comprimidas en un
solo valor, y la información que las distinguía se fue a un archivo de texto que
nadie va a mirar.

Ese log no es manejo de errores. Es una nota escrita para un lector que no existe.

## Cómo se nota

El síntoma clásico llega semanas después: alguien reporta que "los datos no
están actualizados". No hay alerta, no hay excepción, no hay ticket. El sistema
estuvo fallando en silencio todo ese tiempo, con la conciencia tranquila porque
lo estaba anotando.

Cuando finalmente entrás a buscar, el log tiene diez mil líneas iguales y ninguna
te dice para qué registro, en qué intento, ni con qué payload.

## Lo que hago ahora

Tres reglas, en orden de importancia:

1. **Si no sabés qué hacer con el error, no lo captures.** Que suba. Un error que
   llega a la superficie es visible; uno capturado y logueado es invisible.
2. **Si lo capturás, que el tipo de retorno lo diga.** Un resultado explícito
   —`Result`, una tupla, lo que use tu lenguaje— obliga a quien llama a decidir.
3. **El log es para el diagnóstico, no para el manejo.** Va con contexto: id del
   registro, intento, causa. Y va *además* de la decisión, nunca en vez de ella.

La versión corta: `rescue` sin una decisión detrás es un `# TODO` que se disfrazó
de código terminado.
