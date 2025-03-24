/*
El ciclo `for` en JavaScript se utiliza para ejecutar repetidamente un bloque de código un número específico de veces. El ciclo `for` es útil cuando se conoce de antemano cuántas veces se debe ejecutar el bloque de código.

Sintaxis:
for (inicializacion; condicion; incremento) {
  // Bloque de código a ejecutar
}

- `inicializacion`: Se ejecuta una vez al inicio del ciclo y se utiliza para inicializar una variable de control.
- `condicion`: Se evalúa antes de cada iteración. Si la condición es verdadera, se ejecuta el bloque de código. Si es falsa, el ciclo termina.
- `incremento`: Se ejecuta después de cada iteración y se utiliza para actualizar la variable de control.
*/

// Ejemplo 1: Uso básico del ciclo for
for (let i = 0; i < 5; i++) {
  console.log("i es " + i); // Muestra el valor de `i`
}
// El ciclo se ejecuta 5 veces, desde `i = 0` hasta `i < 5` (i.e., i = 4)

// Ejemplo 2: Sumar los primeros 10 números enteros
let suma = 0;

for (let j = 1; j <= 10; j++) {
  suma += j; // Suma el valor de `j` a `suma`
}

console.log("La suma de los números del 1 al 10 es: " + suma);
// El ciclo se ejecuta 10 veces, desde `j = 1` hasta `j <= 10`

// Ejemplo 3: Recorrer un arreglo usando un ciclo for
let arreglo = ["Manzana", "Banana", "Cereza", "Dátil"];

for (let k = 0; k < arreglo.length; k++) {
  console.log("Fruta: " + arreglo[k]); // Muestra el valor de cada elemento en el arreglo
}
// El ciclo se ejecuta una vez por cada elemento en el arreglo

// Ejemplo 4: Uso de `break` en un ciclo for
for (let m = 0; m < 10; m++) {
  if (m === 5) {
    break; // Salir del ciclo cuando `m` es igual a 5
  }
  console.log("m es " + m);
}

console.log("El ciclo se ha detenido debido a la sentencia break.");
// El ciclo se ejecuta desde `m = 0` hasta `m < 10`, pero se detiene cuando `m` es 5

// Ejemplo 5: Uso de `continue` en un ciclo for
for (let n = 0; n < 10; n++) {
  if (n % 2 === 0) {
    continue; // Saltar a la siguiente iteración si `n` es par
  }
  console.log("n es " + n);
}

console.log("El ciclo ha terminado.");
// El ciclo se ejecuta desde `n = 0` hasta `n < 10`, pero se salta los valores pares
