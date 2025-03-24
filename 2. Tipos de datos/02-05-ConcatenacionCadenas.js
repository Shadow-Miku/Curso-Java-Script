/*
La concatenación de cadenas es el proceso de unir dos o más cadenas de texto para formar una nueva cadena. En JavaScript, la concatenación se realiza usando el operador +. Es importante prestar atención a cómo se concatenan las cadenas junto con otros tipos de datos, como números, ya que esto puede afectar el resultado.
*/

// Declaramos dos variables de tipo string
var nombre = "Juan";
var apellido = "Perez";

// Concatenamos las variables `nombre` y `apellido` con un espacio en medio
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); // "Juan Perez"

// Concatenación directa de cadenas literales
var nombreCompleto2 = "Carlos" + " " + "Lara";
console.log(nombreCompleto2); // "Carlos Lara"

// Concatenación de una cadena con números
var x = nombre + 2 + 4;
console.log(x); // "Juan24"
// Aquí, `nombre` es concatenado con el número 2, resultando en "Juan2", y luego se concatena con el número 4, resultando en "Juan24"

// Uso de paréntesis para cambiar el orden de operaciones
x = nombre + (2 + 4);
console.log(x); // "Juan6"
// En este caso, se evalúa primero la expresión dentro de los paréntesis, es decir, 2 + 4, lo que da 6. Luego, el resultado se concatena con `nombre`, resultando en "Juan6"

// Concatenación de números antes de una cadena
x = 2 + 4 + nombre;
console.log(x); // "6Juan"
// Aquí, los números 2 y 4 se suman primero, resultando en 6. Luego, el resultado se concatena con `nombre`, resultando en "6Juan"
