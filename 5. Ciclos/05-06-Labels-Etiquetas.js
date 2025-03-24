/*
Las etiquetas (labels) en JavaScript permiten nombrar un ciclo o un bloque de código. Se utilizan principalmente junto con las sentencias `break` y `continue` para controlar el flujo del programa, especialmente en estructuras de bucles anidados.

Sintaxis:
label: {
  // Bloque de código
}

Las etiquetas pueden ser cualquier identificador válido seguido de dos puntos `:`. Aquí hay algunos ejemplos para ilustrar cómo se usan.
*/

// Ejemplo 1: Uso de una etiqueta con break
cicloExterno: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      break cicloExterno; // Salir del ciclo etiquetado "cicloExterno"
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
console.log(
  "El ciclo se ha detenido debido a la sentencia break con etiqueta."
);
// El ciclo se detiene completamente cuando `j` es igual a 2, saliendo del ciclo etiquetado "cicloExterno"

// Ejemplo 2: Uso de una etiqueta con continue
cicloExterno: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      continue cicloExterno; // Saltar a la siguiente iteración del ciclo etiquetado "cicloExterno"
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
console.log(
  "El ciclo ha terminado debido a la sentencia continue con etiqueta."
);
// Cuando `j` es igual a 2, salta a la siguiente iteración del ciclo etiquetado "cicloExterno", omitiendo el resto del ciclo interno
