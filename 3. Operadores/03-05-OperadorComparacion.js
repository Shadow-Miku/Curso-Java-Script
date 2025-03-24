/*
Los operadores de comparación en JavaScript se utilizan para comparar valores y devuelven un valor booleano (true o false) según si la comparación es verdadera o falsa. Aquí hay una lista de operadores de comparación comunes:

1. Igualdad (==): Compara dos valores para verificar si son iguales, sin tener en cuenta el tipo de dato.
2. Estrictamente igual (===): Compara dos valores para verificar si son iguales, teniendo en cuenta el tipo de dato.
3. Desigualdad (!=): Compara dos valores para verificar si son desiguales, sin tener en cuenta el tipo de dato.
4. Estrictamente desigual (!==): Compara dos valores para verificar si son desiguales, teniendo en cuenta el tipo de dato.
5. Mayor que (>): Verifica si el valor del operando izquierdo es mayor que el del operando derecho.
6. Mayor o igual que (>=): Verifica si el valor del operando izquierdo es mayor o igual que el del operando derecho.
7. Menor que (<): Verifica si el valor del operando izquierdo es menor que el del operando derecho.
8. Menor o igual que (<=): Verifica si el valor del operando izquierdo es menor o igual que el del operando derecho.
*/

let a = 3,
  b = 2,
  c = "3";

// Igualdad (==)
let z = a == c; // Se compara el valor, ignorando el tipo de dato
console.log(z); // true, ya que `a` (3) es igual a `c` ("3") cuando se ignora el tipo de dato

// Estrictamente igual (===)
z = a === c; // Se compara tanto el valor como el tipo de dato
console.log(z); // false, ya que `a` (3) es un número y `c` ("3") es una cadena de texto, por lo tanto, no son estrictamente iguales

// Desigualdad (!=)
z = a != c; // Se compara el valor, ignorando el tipo de dato
console.log(z); // false, ya que `a` (3) es igual a `c` ("3") cuando se ignora el tipo de dato

// Estrictamente desigual (!==)
z = a !== c; // Se compara tanto el valor como el tipo de dato
console.log(z); // true, ya que `a` (3) es un número y `c` ("3") es una cadena de texto, por lo tanto, son estrictamente desiguales

// Mayor que (>)
z = a > b; // Se compara si `a` es mayor que `b`
console.log(z); // true, ya que `a` (3) es mayor que `b` (2)

// Mayor o igual que (>=)
z = a >= b; // Se compara si `a` es mayor o igual que `b`
console.log(z); // true, ya que `a` (3) es mayor que `b` (2)

// Menor que (<)
z = a < b; // Se compara si `a` es menor que `b`
console.log(z); // false, ya que `a` (3) no es menor que `b` (2)

// Menor o igual que (<=)
z = a <= b; // Se compara si `a` es menor o igual que `b`
console.log(z); // false, ya que `a` (3)
