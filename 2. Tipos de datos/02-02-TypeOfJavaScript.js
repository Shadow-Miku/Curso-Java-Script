/*
El operador `typeof` se utiliza para determinar el tipo de dato de una variable o expresión en JavaScript.
Devuelve una cadena que indica el tipo del operando. Es útil para realizar verificaciones de tipo en tiempo de ejecución.
*/

// Tipo de dato string (cadena de texto)
var nombre = "Carlos";
console.log(typeof nombre); // "string", ya que `nombre` es una cadena de texto

// Cambio del valor de `nombre` a un número
nombre = 10.5;
console.log(typeof nombre); // "number", ahora `nombre` es un número

// Tipo de dato numérico
var numero = 1000;
console.log(numero); // 1000, valor de la variable `numero`
console.log(typeof numero); // "number", ya que `numero` es un número

// Tipo de dato object (objeto)
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "55443322",
};
console.log(objeto); // {nombre: "Juan", apellido: "Perez", telefono: "55443322"}, representación del objeto
console.log(typeof objeto); // "object", ya que `objeto` es un objeto
