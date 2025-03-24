/*
Ejemplos de 
tipos de datos 
en JavaScript
*/

// Tipo de dato string (cadena de texto)
var nombre = "Carlos";
console.log(typeof nombre); // "string"

nombre = 10.5;
console.log(typeof nombre); // "number"

// Tipo de dato numérico
var numero = 1000;
console.log(numero); // 1000
console.log(typeof numero); // "number"

// Tipo de dato object (objeto)
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "55443322",
};
console.log(objeto); // {nombre: "Juan", apellido: "Perez", telefono: "55443322"}
console.log(typeof objeto); // "object"

// Tipo de dato boolean (booleano: true, false)
var bandera = false;
console.log(bandera); // false
console.log(typeof bandera); // "boolean"

// Tipo de dato function (función)
function miFuncion() {}
console.log(miFuncion); // [Function: miFuncion]
console.log(typeof miFuncion); // "function"

// Tipo de dato Symbol (símbolo)
var simbolo = Symbol("mi simbolo");
console.log(simbolo); // Symbol(mi simbolo)
console.log(typeof simbolo); // "symbol"

// Tipo clase, que es una función
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona); // [class Persona]
console.log(typeof Persona); // "function"

// Tipo undefined (indefinido)
var x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

x = undefined;
console.log(x); // undefined
console.log(typeof x); // "undefined"

// null representa la ausencia de valor
var y = null;
console.log(y); // null
console.log(typeof y); // "object" (es un caso especial en JavaScript)
