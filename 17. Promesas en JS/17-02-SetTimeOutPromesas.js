/*
La función **`setTimeout()`** en JavaScript se utiliza para ejecutar una función una sola vez después de que haya pasado un determinado periodo de tiempo (en milisegundos). Es una de las formas más comunes de manejar operaciones asincrónicas en el lenguaje.

**`setTimeout` NO devuelve una promesa**, pero puede ser envuelto en una para usarlo dentro de flujos asincrónicos modernos como `async/await` o encadenamiento con `.then()`.

🔹 ¿Qué hace internamente?
`setTimeout` registra un "temporizador" en la cola de tareas (task queue) del navegador o entorno (como Node.js) y ejecuta la función cuando el hilo principal está libre y ha pasado el tiempo especificado.

📌 Sintaxis básica:
setTimeout(función, tiempoEnMilisegundos [, argumento1, argumento2, ...]);

- `función`: La función que se ejecutará después del retraso.
- `tiempoEnMilisegundos`: El tiempo a esperar antes de ejecutar la función (1000 ms = 1 segundo).
- `argumentos` (opcional): Argumentos que se pasan a la función cuando se ejecuta.

Devuelve un **ID de temporizador**, útil para cancelarlo con `clearTimeout`.
*/

// Ejemplo 1: Ejecutar un mensaje después de 2 segundos
setTimeout(() => {
  console.log("Este mensaje aparece luego de 2 segundos");
}, 2000);

// Ejemplo 2: Pasar argumentos a la función
function saludar(nombre) {
  console.log(`Hola, ${nombre}`);
}

setTimeout(saludar, 1500, "Aldo"); // "Hola, Aldo" después de 1.5 segundos

// Ejemplo 3: Cancelar un temporizador
const id = setTimeout(() => {
  console.log("Esto no se va a ejecutar");
}, 3000);

clearTimeout(id); // El temporizador se cancela antes de ejecutarse

/*
  💡 setTimeout con Promesas:
  Aunque `setTimeout` no trabaja con promesas por defecto, se puede envolver manualmente en una `Promise` para hacerlo más compatible con flujos asincrónicos modernos.
  */

// Ejemplo 4: Envolver setTimeout en una promesa
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperaste ${ms} milisegundos`);
    }, ms);
  });
}

esperar(2000).then((mensaje) => {
  console.log(mensaje); // "Esperaste 2000 milisegundos"
});

/*
  🔍 Usar `resolve` y `reject` con setTimeout
  
  - `resolve(valor)` se llama cuando quieres indicar que la promesa se completó con éxito.
  - `reject(error)` se usa para indicar que hubo un error durante el proceso asincrónico.
  */

function esperarConCondicion(ms, permitir = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (permitir) {
        resolve(`✅ Promesa resuelta tras ${ms} ms`);
      } else {
        reject(`❌ Promesa rechazada tras ${ms} ms`);
      }
    }, ms);
  });
}

esperarConCondicion(1500, true)
  .then(console.log) // ✅ Promesa resuelta tras 1500 ms
  .catch(console.error);

esperarConCondicion(1500, false).then(console.log).catch(console.error); // ❌ Promesa rechazada tras 1500 ms

/*
  🧠 ¿Por qué es útil combinar setTimeout y promesas?
  - Permite **crear demoras artificiales** durante flujos asíncronos (por ejemplo, en tests, animaciones, loaders).
  - Facilita el uso de `async/await` en vez de callbacks.
  
  🧪 Ejemplo práctico con async/await:
  */

async function cargarConEspera() {
  console.log("Cargando...");
  const resultado = await esperar(2000); // espera 2 segundos
  console.log(resultado);
  console.log("Carga completada");
}

cargarConEspera();

/*
  📋 Resumen importante:
  - `setTimeout` ejecuta una función después de cierto tiempo.
  - **No bloquea el hilo principal**, el resto del código sigue ejecutándose.
  - Devuelve un ID que puedes usar para cancelarlo con `clearTimeout`.
  - Puede usarse junto con promesas para integrarse mejor en flujos asincrónicos modernos.
  - Puedes envolverlo para que retorne una promesa que **resuelve** (o **rechaza**) después del retraso.
  
  📌 Consejo:
  Siempre que necesites pausas simuladas, loaders o diferir acciones, puedes usar esta combinación de `setTimeout + Promise`.
  
  🔁 Para acciones repetitivas, considera usar `setInterval()` en lugar de `setTimeout`.
  */
