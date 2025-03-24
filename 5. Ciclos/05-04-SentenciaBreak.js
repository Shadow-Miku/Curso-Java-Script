// Sentencia break en detalle y profundidad
/*
La sentencia `break` en JavaScript se utiliza para salir de un ciclo o una estructura de control de manera anticipada. Cuando se ejecuta la sentencia `break`, el flujo de control se interrumpe y se salta directamente a la siguiente instrucción después del ciclo o estructura de control.

Sintaxis:
break;

La sentencia `break` es útil en ciclos como `for`, `while`, `do...while`, y en estructuras de control `switch` para salir del bloque actual cuando se cumple una condición específica.
*/

// Ejemplo 1: Uso de break en un ciclo for
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Salir del ciclo cuando `i` es igual a 5
  }
  console.log("i es " + i);
}
console.log("El ciclo se ha detenido debido a la sentencia break.");
// El ciclo se ejecuta desde `i = 0` hasta `i < 10`, pero se detiene cuando `i` es 5

// Ejemplo 2: Uso de break en un ciclo while
let contador = 0;

while (contador < 10) {
  if (contador === 5) {
    break; // Salir del ciclo cuando `contador` es igual a 5
  }
  console.log("Contador: " + contador);
  contador++;
}
console.log("El ciclo se ha detenido debido a la sentencia break.");
// El ciclo se ejecuta mientras `contador` es menor que 10, pero se detiene cuando `contador` es 5

// Ejemplo 3: Uso de break en un ciclo do...while
let x = 0;

do {
  if (x === 3) {
    break; // Salir del ciclo cuando `x` es igual a 3
  }
  console.log("x es " + x);
  x++;
} while (x < 5);
console.log("El ciclo se ha detenido debido a la sentencia break.");
// El ciclo se ejecuta al menos una vez y se detiene cuando `x` es 3

// Ejemplo 4: Uso de break en una estructura switch
let fruta = "Manzana";

switch (fruta) {
  case "Banana":
    console.log("Es una banana.");
    break;
  case "Manzana":
    console.log("Es una manzana.");
    break; // Salir del bloque switch después de encontrar el caso coincidente
  case "Cereza":
    console.log("Es una cereza.");
    break;
  default:
    console.log("Fruta desconocida.");
}
// En este ejemplo, la sentencia `break` asegura que solo se ejecuta el caso coincidente ("Manzana")

/*
  Notas adicionales:
  - La sentencia `break` es útil para salir de ciclos y estructuras de control cuando se cumple una condición específica, evitando iteraciones adicionales innecesarias.
  - En una estructura `switch`, la sentencia `break` se utiliza para salir del bloque después de ejecutar el caso coincidente, evitando que se ejecuten los casos siguientes (fall-through).
  - Es importante usar `break` correctamente para evitar ciclos infinitos y asegurar un flujo de control adecuado en el código.
  */
