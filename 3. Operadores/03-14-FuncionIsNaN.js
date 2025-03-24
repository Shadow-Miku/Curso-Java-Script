/*
La función `isNaN()` en JavaScript se utiliza para determinar si un valor es NaN (Not-a-Number). Esta función devuelve `true` si el valor es NaN, y `false` en caso contrario.

Es importante tener en cuenta que `isNaN()` primero intenta convertir el valor a un número antes de comprobar si es NaN, lo que puede llevar a resultados inesperados en algunos casos. Para una verificación más estricta, se recomienda usar `Number.isNaN()`, que no realiza la conversión.
*/

// Ejemplo 1: Comprobación de NaN con isNaN()
let valor1 = "123";
console.log(isNaN(valor1)); // false, porque "123" se puede convertir a un número

let valor2 = "123abc";
console.log(isNaN(valor2)); // true, porque "123abc" no se puede convertir a un número y resulta en NaN

let valor3 = NaN;
console.log(isNaN(valor3)); // true, porque el valor es NaN

// Ejemplo 2: Uso de isNaN() con valores numéricos
let num1 = 123;
console.log(isNaN(num1)); // false, porque 123 es un número

let num2 = 0 / 0; // Esto produce NaN
console.log(isNaN(num2)); // true, porque 0 dividido por 0 resulta en NaN

// Ejemplo 3: Comprobación estricta de NaN con Number.isNaN()
console.log(Number.isNaN(valor1)); // false, porque "123" no es NaN y no se convierte
console.log(Number.isNaN(valor2)); // false, porque "123abc" no se convierte y no es estrictamente NaN
console.log(Number.isNaN(valor3)); // true, porque el valor es estrictamente NaN
console.log(Number.isNaN(num2)); // true, porque num2 es estrictamente NaN

/*
Notas adicionales:
- `isNaN()` primero intenta convertir el valor a un número antes de comprobar si es NaN, lo que puede llevar a resultados inesperados. Por ejemplo, `isNaN("123abc")` devuelve `true` porque "123abc" no se puede convertir a un número.
- `Number.isNaN()` es una alternativa más estricta que no realiza la conversión de tipos, comprobando directamente si el valor es estrictamente NaN.
- La función `Number.isNaN()` fue introducida en ECMAScript 2015 (ES6) y es una mejor opción para evitar resultados inesperados.
*/

// Ejemplo 4: Casos especiales
let valor4 = undefined;
console.log(isNaN(valor4)); // true, porque undefined se convierte a NaN

let valor5 = null;
console.log(isNaN(valor5)); // false, porque null se convierte a 0, que no es NaN

let valor6 = "";
console.log(isNaN(valor6)); // false, porque una cadena vacía se convierte a 0, que no es NaN

/*
En resumen, `isNaN()` es útil para verificar si un valor es NaN, pero debe usarse con precaución debido a su comportamiento de conversión. `Number.isNaN()` es una alternativa más estricta y segura para verificar NaN.
*/
