/*
El ciclo `do...while` en JavaScript se utiliza para ejecutar repetidamente un bloque de código mientras una condición especificada sea verdadera. A diferencia del ciclo `while`, el ciclo `do...while` ejecuta el bloque de código al menos una vez antes de verificar la condición.

Sintaxis:
do {
  // Bloque de código a ejecutar al menos una vez y mientras la condición sea verdadera
} while (condicion);
*/

// Ejemplo 1: Uso básico del ciclo do...while
let contador = 0;

do {
  console.log("Contador: " + contador); // Muestra el valor del contador
  contador++; // Incrementa el valor del contador en 1
} while (contador < 5);
// El ciclo se ejecuta al menos una vez y luego verifica la condición (contador < 5)

console.log("El ciclo ha terminado.");

// Ejemplo 2: Uso de do...while para sumar números
let suma = 0;
let numero = 1;

do {
  suma += numero; // Suma el valor de `numero` a `suma`
  numero++; // Incrementa el valor de `numero` en 1
} while (numero <= 10);

console.log("La suma de los números del 1 al 10 es: " + suma);
// El ciclo se ejecuta al menos una vez y luego verifica la condición (numero <= 10)

// Ejemplo 3: Ciclo do...while con una condición que se vuelve falsa
let x = 10;

do {
  console.log("x es " + x); // Muestra el valor de `x`
  x--; // Decrementa el valor de `x` en 1
} while (x > 0);

console.log("El ciclo ha terminado.");
// El ciclo se ejecuta al menos una vez y luego verifica la condición (x > 0)
