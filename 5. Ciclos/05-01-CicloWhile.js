/*
El ciclo `while` se utiliza para ejecutar repetidamente un bloque de código mientras una condición especificada sea verdadera. El ciclo while verifica la condición antes de cada iteración, 
lo que significa que si la condición es falsa desde el principio, el bloque de código dentro del ciclo no se ejecutará ni una sola vez.
*/

// Uso básico del ciclo while
let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
console.log("Fin ciclo while");

// Uso de while para sumar números
let suma = 0;
let numero = 1;

while (numero <= 10) {
  suma += numero; // Suma el valor de `numero` a `suma`
  numero++; // Incrementa el valor de `numero` en 1
}

console.log("La suma de los números del 1 al 10 es: " + suma);

// Ciclo while con una condición que se vuelve falsa

let x = 10;

while (x > 0) {
  console.log("x es " + x); // Muestra el valor de `x`
  x--; // Decrementa el valor de `x` en 1
}

console.log("El ciclo ha terminado.");

// Uso de break en un ciclo while
let y = 0;

while (y < 10) {
  console.log("y es " + y); // Muestra el valor de `y`
  if (y === 5) {
    break; // Salir del ciclo cuando `y` es igual a 5
  }
  y++;
}

console.log("El ciclo se ha detenido debido a la sentencia break.");
