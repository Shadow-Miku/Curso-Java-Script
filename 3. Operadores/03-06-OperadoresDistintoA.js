/*
Los operadores de comparación en JavaScript se utilizan para comparar dos valores y devolver un valor booleano (true o false) según el resultado de la comparación. Aquí hay una lista de operadores de comparación comunes:

1. Igualdad (==): Compara dos valores para verificar si son iguales, sin tener en cuenta el tipo de dato.
2. Estrictamente igual (===): Compara dos valores para verificar si son iguales y del mismo tipo de dato.
3. Distinto (!=): Compara dos valores para verificar si son diferentes, sin tener en cuenta el tipo de dato.
4. Estrictamente distinto (!==): Compara dos valores para verificar si son diferentes y de distinto tipo de dato.
*/

let a = 3,
  b = 2,
  c = "3";

// Igualdad (==)
let z = a == c; // Se revisa el valor sin importar el tipo
console.log(z); // true, `a` y `c` tienen el mismo valor numérico (3), aunque `c` es una cadena

// Estrictamente igual (===)
z = a === c; // Se revisa el valor y también el tipo
console.log(z); // false, `a` es un número y `c` es una cadena, por lo tanto no son estrictamente iguales

// Distinto (!=)
z = a != c; // Se revisa el valor sin importar el tipo
console.log(z); // false, `a` y `c` tienen el mismo valor numérico (3), aunque `c` es una cadena

// Estrictamente distinto (!==)
z = a !== c; // Se revisa el valor y también el tipo
console.log(z); // true, `a` es un número y `c` es una cadena, por lo tanto son estrictamente distintos
