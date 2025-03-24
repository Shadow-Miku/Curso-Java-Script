/*
Una función en JavaScript es un bloque de código reutilizable que se puede invocar para realizar una tarea específica. Las funciones permiten organizar el código, hacerlo más modular y fácil de mantener. Las funciones pueden aceptar parámetros y devolver un valor.

Sintaxis:
function nombreDeLaFuncion(parametro1, parametro2, ...) {
  // Bloque de código a ejecutar
}

Las funciones también pueden ser anónimas y asignadas a variables.
*/

// Ejemplo 1: Declaración de una función
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}
// Invocar la función con un argumento
saludar("Juan"); // "Hola, Juan!"

// Ejemplo 2: Función que devuelve un valor
function sumar(a, b) {
  return a + b; // Devolver la suma de `a` y `b`
}
// Invocar la función y almacenar el resultado
let resultado = sumar(3, 4);
console.log("El resultado de la suma es: " + resultado); // "El resultado de la suma es: 7"

// Ejemplo 3: Función con parámetros por defecto
function saludarConIdioma(nombre, idioma = "español") {
  if (idioma === "español") {
    console.log("Hola, " + nombre + "!");
  } else if (idioma === "inglés") {
    console.log("Hello, " + nombre + "!");
  }
}
// Invocar la función con y sin el segundo argumento
saludarConIdioma("Juan"); // "Hola, Juan!"
saludarConIdioma("John", "inglés"); // "Hello, John!"

// Ejemplo 4: Función anónima asignada a una variable
let multiplicar = function (a, b) {
  return a * b; // Devolver el producto de `a` y `b`
};
// Invocar la función anónima a través de la variable
let producto = multiplicar(3, 4);
console.log("El producto es: " + producto); // "El producto es: 12"

// Ejemplo 5: Función flecha (arrow function)
let dividir = (a, b) => a / b; // Devolver el cociente de `a` y `b`
// Invocar la función flecha
let cociente = dividir(10, 2);
console.log("El cociente es: " + cociente); // "El cociente es: 5"

// Ejemplo 6: Función de orden superior
function operacionMatematica(a, b, operacion) {
  return operacion(a, b); // Invocar la función `operacion` con `a` y `b`
}
// Usar una función anónima como argumento
let resultadoOperacion = operacionMatematica(5, 3, (x, y) => x - y);
console.log("El resultado de la operación es: " + resultadoOperacion); // "El resultado de la operación es: 2"

/*
  Notas adicionales:
  - Las funciones pueden aceptar cero o más parámetros. Los parámetros se especifican entre paréntesis y se separan por comas.
  - Las funciones pueden devolver un valor usando la sentencia `return`. Si no se especifica `return`, la función devuelve `undefined`.
  - Las funciones anónimas son funciones sin nombre que se pueden asignar a variables o pasar como argumentos a otras funciones.
  - Las funciones flecha (arrow functions) proporcionan una sintaxis más compacta y no tienen su propio `this` contexto.
  - Las funciones de orden superior son funciones que pueden aceptar otras funciones como argumentos o devolver funciones.
  */
