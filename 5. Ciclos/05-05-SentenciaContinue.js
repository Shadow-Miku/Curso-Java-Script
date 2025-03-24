/*
La sentencia `continue` en JavaScript se utiliza para saltar a la siguiente iteración de un ciclo. Cuando se ejecuta la sentencia `continue`, el resto del bloque de código dentro del ciclo se omite y el ciclo pasa a la siguiente iteración.

Sintaxis:
continue;

La sentencia `continue` es útil en ciclos como `for`, `while` y `do...while` para omitir el resto del código en la iteración actual y pasar a la siguiente iteración.
*/

// Ejemplo 1: Uso de continue en un ciclo for
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Saltar a la siguiente iteración si `i` es par
  }
  console.log("i es " + i);
}
console.log("El ciclo ha terminado.");
// El ciclo se ejecuta desde `i = 0` hasta `i < 10`, pero se salta los valores pares

// Ejemplo 2: Uso de continue en un ciclo while
let contador = 0;

while (contador < 10) {
  contador++;
  if (contador % 2 === 0) {
    continue; // Saltar a la siguiente iteración si `contador` es par
  }
  console.log("Contador: " + contador);
}
console.log("El ciclo ha terminado.");
// El ciclo se ejecuta mientras `contador` es menor que 10, pero se salta los valores pares

// Ejemplo 3: Uso de continue en un ciclo do...while
let x = 0;

do {
  x++;
  if (x % 2 === 0) {
    continue; // Saltar a la siguiente iteración si `x` es par
  }
  console.log("x es " + x);
} while (x < 10);
console.log("El ciclo ha terminado.");
// El ciclo se ejecuta al menos una vez y se salta los valores pares
