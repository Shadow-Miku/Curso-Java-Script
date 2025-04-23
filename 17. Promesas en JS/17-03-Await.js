/*
La palabra clave **`async`** en JavaScript se utiliza para declarar funciones asíncronas. Estas funciones permiten trabajar con promesas de forma más legible, clara y estructurada, utilizando la palabra clave `await` dentro de ellas para "esperar" a que una promesa se resuelva.

📌 ¿Qué hace exactamente `async`?
Cuando se declara una función con `async`, esta automáticamente devuelve una **promesa**, incluso si internamente retorna un valor simple.

📌 ¿Por qué usar `async`?
- Permite escribir código asincrónico que se **lee como si fuera síncrono**.
- Mejora la **legibilidad** y **mantenimiento** del código.
- Facilita el manejo de errores con `try...catch`.

🔧 Sintaxis básica:
async function nombreFuncion() {
  // Aquí se puede usar "await"
}

o también con funciones flecha:
const funcionAsincrona = async () => {
  // ...
}
*/

// Ejemplo 1: Una función async siempre devuelve una promesa
async function saludo() {
  return "Hola, mundo";
}

saludo().then((mensaje) => {
  console.log(mensaje); // "Hola, mundo"
});

/*
  🔍 En el ejemplo anterior, aunque devolvemos un string, `async` lo convierte en una promesa automáticamente.
  Equivale a: return Promise.resolve("Hola, mundo");
  */

// Ejemplo 2: Usar await para esperar una promesa
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Esperaste ${ms} ms`), ms);
  });
}

async function proceso() {
  console.log("Inicia...");
  const resultado = await esperar(2000); // espera 2 segundos
  console.log(resultado);
  console.log("Finaliza...");
}

proceso();

/*
  📌 ¿Qué hace `await`?
  - Solo puede usarse dentro de funciones `async`.
  - Hace que la ejecución **espere a que una promesa se resuelva** antes de continuar.
  - Suspende temporalmente la función, sin bloquear el hilo principal.
  
  🛑 ¡Ojo! Si la promesa es rechazada y no se maneja, causará un error. Por eso se recomienda usar `try...catch`.
  */

// Ejemplo 3: Manejo de errores con try...catch
async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
  }
}

obtenerDatos();

/*
  🔁 También puedes usar `await` con funciones que usen `resolve` o `reject` como en este ejemplo:
  */

function promesaCondicional(ms, exito = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve("✅ ¡Éxito!");
      } else {
        reject("❌ Algo salió mal");
      }
    }, ms);
  });
}

async function probarCondicional() {
  try {
    const mensaje = await promesaCondicional(1500, true);
    console.log("Resultado:", mensaje);
  } catch (error) {
    console.error("Error:", error);
  }
}

probarCondicional();

/*
  📚 Resumen completo:
  
  🔹 `async`:
  - Convierte automáticamente el valor de retorno en una promesa.
  - Permite el uso de `await` dentro de la función.
  - Mejora la legibilidad del código asíncrono.
  
  🔹 `await`:
  - Espera el resultado de una promesa antes de continuar.
  - Solo puede usarse dentro de funciones `async`.
  - Pausa la ejecución de la función async, sin bloquear el hilo principal.
  
  🔹 `resolve` y `reject` (revisado del tema anterior):
  - `resolve(valor)`: indica que una promesa se resolvió correctamente.
  - `reject(error)`: indica que una promesa fue rechazada con un error.
  - Con `await`, puedes capturar ambos usando `try...catch`.
  
  🧠 Ventajas:
  - Código más limpio que con `.then()` y `.catch()`.
  - Facilita flujos de lógica compleja (como múltiples pasos asincrónicos).
  - Ideal para integrarse con `fetch`, bases de datos, archivos, temporizadores, etc.
  
  ⚠️ Consejo práctico:
  Evita mezclar `.then()` con `await` en la misma función si no es necesario; mantén la consistencia para claridad y limpieza de código.
  */
