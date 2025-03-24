/*
En JavaScript, `let` y `const` son dos formas de declarar variables que fueron introducidas en ECMAScript 2015 (ES6).

- `let` permite declarar variables con un alcance (scope) de bloque, lo que significa que la variable solo existe dentro del bloque donde se declaró 
   (por ejemplo, dentro de un par de llaves {}). También permite reasignar el valor de la variable.

- `const` se usa para declarar constantes, lo que significa que su valor no puede cambiar una vez asignado. Al igual que `let`, tiene un alcance de bloque.
*/

// Declaración de una variable con `let`
let nombre;
nombre = "Juan"; // Asignación del valor "Juan" a la variable `nombre`
console.log(nombre); // "Juan"

// Declaración de una constante con `const`
const apellido = "Perez";
console.log(apellido); // "Perez"

// Intentar reasignar el valor de una constante resulta en un error
// apellido = "Lara"; // Error: no se puede cambiar el valor de una constante

/*
La diferencia clave entre `let` y `const` es que `let` permite reasignar el valor de la variable, mientras que `const` no permite cambios una vez que se ha asignado un valor. Ambos tienen alcance de bloque, lo que mejora la seguridad del código al reducir el riesgo de errores por variables accidentalmente sobrescritas.
*/

// Ejemplo adicional de alcance de bloque
{
  let edad = 25; // La variable `edad` solo existe dentro de este bloque
  console.log(edad); // 25
}
// console.log(edad); // Error: `edad` no está definida fuera del bloque

{
  const pais = "México"; // La constante `pais` solo existe dentro de este bloque
  console.log(pais); // "México"
}
// console.log(pais); // Error: `pais` no está definida fuera del bloque
