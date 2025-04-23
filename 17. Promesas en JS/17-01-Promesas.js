/*
Las **promesas (Promises)** en JavaScript son objetos que representan el eventual resultado (o error) de una operación asíncrona. Permiten escribir código que trabaje con operaciones que tardan en completarse, como peticiones a servidores o temporizadores.

Una promesa puede estar en uno de estos tres estados:
- **Pendiente (pending)**: El resultado aún no está disponible.
- **Cumplida (fulfilled)**: La operación fue exitosa y se devolvió un resultado.
- **Rechazada (rejected)**: Ocurrió un error durante la operación.

Las promesas se crean con el constructor `Promise`, que recibe una función con dos parámetros: `resolve` y `reject`. Usamos `resolve` para indicar éxito y `reject` para indicar error.

Sintaxis básica:
const miPromesa = new Promise((resolve, reject) => {
  // Lógica de la operación asíncrona
});
*/

// Ejemplo 1: Promesa simple que se cumple
const promesaExitosa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación completada con éxito");
  }, 1000);
});

promesaExitosa.then((resultado) => {
  console.log(resultado); // "Operación completada con éxito"
});

// Ejemplo 2: Promesa que se rechaza
const promesaFallida = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Ocurrió un error en la operación");
  }, 1000);
});

promesaFallida
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error); // "Error: Ocurrió un error en la operación"
  });

// Ejemplo 3: Encadenamiento de promesas
const obtenerUsuario = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ id: 1, nombre: "Aldo" });
  }, 1000);
});

obtenerUsuario
  .then((usuario) => {
    console.log("Usuario obtenido:", usuario); // { id: 1, nombre: "Aldo" }
    return `Hola, ${usuario.nombre}`;
  })
  .then((saludo) => {
    console.log(saludo); // "Hola, Aldo"
  });

// Ejemplo 4: Uso de Promise.all
const promesa1 = Promise.resolve(10);
const promesa2 = Promise.resolve(20);
const promesa3 = Promise.resolve(30);

Promise.all([promesa1, promesa2, promesa3]).then((valores) => {
  console.log(valores); // [10, 20, 30]
});

/*
    Notas adicionales:
    - **Las promesas ayudan a evitar el "callback hell"** al permitir encadenar `.then()` y manejar errores con `.catch()`.
    - **Una promesa solo puede resolverse o rechazarse una vez.** Después de eso, su estado ya no puede cambiar.
    - **`then()` se usa para manejar resultados exitosos.**
    - **`catch()` se usa para manejar errores.**
    - **`finally()` se ejecuta siempre, se cumpla o se rechace la promesa.**
    - **También existen métodos como `Promise.all`, `Promise.race`, `Promise.allSettled` y `Promise.any` para manejar múltiples promesas a la vez.**
  */
