---
title: Una clave no basta
summary: Una clave larga que abre todas las demás parece suficiente. No lo es. Le falta algo que tienes, además de algo que sabes.
date: 2026-10-19
tags: [seguridad, claves]
draft: false
---

Una clave larga y única, que abre un [gestor con todas las
demás](/notas/una-sola-clave/), parece suficiente. No lo es. Si alguien te la ve
mientras la escribes, o te la saca con un correo falso, abre la caja entera. Da
lo mismo lo larga que sea.

Por eso se le agrega un segundo factor: <mark>algo que tienes, además de algo que sabes</mark>.
Ya lo conoces. Es la clave dinámica que te pide el banco para transferir: aunque
alguien sepa tu clave, sin tu celular no entra.

![Antes, solo con una clave: un atacante que tiene tu clave abre tu caja fuerte. Después, con la clave y algo que tienes: tú entras con tu clave y tu celular; el atacante tiene tu clave pero no tu celular, y no entra.](/imagenes/segundo-factor.svg)

Actívale un segundo factor a tu <span class="nota"><span class="nota__gatillo">gestor</span>,<span class="nota__texto">En
1Password ya viene de fábrica: guarda una llave secreta en tu celular y en tu
computador, y desde otro equipo tu clave sola no basta. En Bitwarden lo activas
tú. Si usas el del iPhone o el de Google, el segundo factor va en tu cuenta de
Apple o de Google.</span></span> y de paso a tu correo. Yo uso una app autenticadora en el celular;
para partir sirven [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=es-419)
o [Authy](https://www.authy.com/). Hay <span class="nota"><span class="nota__gatillo">otras
opciones</span>,<span class="nota__texto">Un código por SMS, que es mejor que nada
pero te pueden robar el número, o una llave física, una especie de pendrive que
conectas para entrar.</span></span> y cuál te conviene da para otro post.

El costo es que ahora el celular también importa. Si lo pierdes, quedas fuera. Por
eso tu gestor y los demás servicios te dan unos <span class="nota"><span class="nota__gatillo">códigos
de respaldo</span>.<span class="nota__texto">En 1Password se llaman kit de
emergencia: un PDF con lo necesario para entrar desde un equipo
nuevo.</span></span> Imprímelos y guárdalos en papel, lejos del computador. Y en
1Password o Bitwarden tu clave no tiene "olvidé mi clave": nadie te la puede
devolver. Anótala en ese mismo papel.

Hoy, entra a la configuración de seguridad de tu correo y mira si tiene segundo
factor. Si no tiene, actívalo. Si es por SMS, cámbialo por una app autenticadora.

Así lo hago yo. Si tú lo haces distinto, cuéntame por
[LinkedIn](https://www.linkedin.com/in/luis-ortega-araneda/).
