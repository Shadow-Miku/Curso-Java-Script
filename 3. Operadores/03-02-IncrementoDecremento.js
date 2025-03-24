/*
Los operadores de incremento (++) y decremento (--) en JavaScript se utilizan para aumentar o disminuir el valor de una variable en uno. 
Estos operadores pueden ser utilizados en dos formas: pre-incremento/decremento y post-incremento/decremento.

1. Pre-incremento (++a) / Pre-decremento (--a): El operador se coloca antes de la variable y primero incrementa/decrementa el valor de la variable, luego devuelve el valor incrementado/decrementado.
2. Post-incremento (a++) / Post-decremento (a--): El operador se coloca después de la variable y primero devuelve el valor actual de la variable, luego incrementa/decrementa el valor de la variable.
*/

let a = 3,
  b = 2;
let z = a + b; // Inicialización de `z` con la suma de `a` y `b`
console.log("Valor inicial de z: " + z); // 5

// Incremento

// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a); // 4, `a` se incrementa antes de asignar el valor a `z`
console.log(z); // 4, `z` obtiene el valor incrementado de `a`

// Post-incremento (el operador ++ después de la variable)
z = b++;
console.log(b); // 3, `b` se incrementa después de asignar el valor a `z`
console.log(z); // 2, `z` obtiene el valor original de `b` antes de que se incremente

// Decremento

// Pre-decremento (el operador -- antes de la variable)
z = --a;
console.log(a); // 3, `a` se decrementa antes de asignar el valor a `z`
console.log(z); // 3, `z` obtiene el valor decrementado de `a`

// Post-decremento (el operador -- después de la variable)
z = b--;
console.log(b); // 2, `b` se decrementa después de asignar el valor a `z`
console.log(z); // 3, `z` obtiene el valor original de `b` antes de que se decrementara
