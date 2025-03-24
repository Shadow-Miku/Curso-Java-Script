/*
Explicación de los arreglos en JavaScript y las cadenas vacías
Los arreglos (arrays) son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Los valores dentro de un arreglo pueden ser de cualquier tipo de dato, y se accede a ellos mediante índices, que empiezan desde 0.

Las cadenas vacías (empty strings) son simplemente cadenas de texto que no contienen ningún carácter. Son útiles cuando se necesita inicializar una variable de tipo cadena sin asignarle un valor específico inicialmente.
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

// Tipo de dato boolean (booleano: true, false)
var bandera = false;
console.log(bandera); // false, valor de la variable `bandera`
console.log(typeof bandera); // "boolean", ya que `bandera` es un booleano

// Tipo de dato function (función)
function miFuncion() {}
console.log(miFuncion); // [Function: miFuncion], representación de la función
console.log(typeof miFuncion); // "function", ya que `miFuncion` es una función

// Tipo de dato Symbol (símbolo)
var simbolo = Symbol("mi simbolo");
console.log(simbolo); // Symbol(mi simbolo), representación del símbolo
console.log(typeof simbolo); // "symbol", ya que `simbolo` es un símbolo

// Tipo clase, que es una función
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona); // [class Persona], representación de la clase
console.log(typeof Persona); // "function", ya que `Persona` es una clase, y las clases son funciones en JavaScript

// Tipo undefined (indefinido)
var x;
console.log(x); // undefined, ya que `x` no ha sido inicializada
console.log(typeof x); // "undefined", ya que `x` es undefined

x = undefined;
console.log(x); // undefined, valor explícito de `x`
console.log(typeof x); // "undefined", sigue siendo undefined

// null representa la ausencia de valor
var y = null;
console.log(y); // null, valor de `y`
console.log(typeof y); // "object", un caso especial en JavaScript donde `null` es de tipo "object"

// Arreglo en JavaScript
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos); // ["BMW", "Audi", "Volvo"], contenido del arreglo `autos`
console.log(typeof autos); // "object", ya que los arreglos son objetos en JavaScript

// Acceso a elementos de un arreglo
console.log(autos[0]); // "BMW", primer elemento del arreglo `autos`
console.log(autos[1]); // "Audi", segundo elemento del arreglo `autos`
console.log(autos[2]); // "Volvo", tercer elemento del arreglo `autos`

// Cadena vacía (empty string)
var z = "";
console.log(z); // '', valor de la cadena vacía `z`
console.log(typeof z); // "string", ya que `z` es una cadena de texto
