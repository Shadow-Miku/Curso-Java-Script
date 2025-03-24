// Operadores relacionales en detalle y profundidad
/*
Los operadores relacionales en JavaScript se utilizan para comparar dos valores y determinar la relación entre ellos. Devuelven un valor booleano (true o false) basado en el resultado de la comparación. Aquí hay una lista de operadores relacionales comunes:

1. Menor que (<): Verifica si el operando de la izquierda es menor que el operando de la derecha.
2. Menor o igual que (<=): Verifica si el operando de la izquierda es menor o igual que el operando de la derecha.
3. Mayor que (>): Verifica si el operando de la izquierda es mayor que el operando de la derecha.
4. Mayor o igual que (>=): Verifica si el operando de la izquierda es mayor o igual que el operando de la derecha.
*/

let a = 3,
  b = 2,
  c = "3";

// Operador menor que (<)
let z = a < b;
console.log(z); // false, porque 3 no es menor que 2

// Operador menor o igual que (<=)
z = a <= b;
console.log(z); // false, porque 3 no es menor o igual que 2

// Operador mayor que (>)
z = a > b;
console.log(z); // true, porque 3 es mayor que 2

// Operador mayor o igual que (>=)
z = a >= b;
console.log(z); // true, porque 3 es mayor o igual que 2

/*
Notas adicionales:
- Los operadores relacionales comparan los valores numéricos y devuelven true o false según la relación entre ellos.
- Cuando se comparan valores de diferentes tipos, JavaScript intenta convertir los valores a un tipo común antes de realizar la comparación.
- En el caso de `a` y `c`, aunque `c` es una cadena, JavaScript lo convertirá a número antes de la comparación si es necesario.
*/

// Comparaciones adicionales con `c`
z = a < c;
console.log(z); // false, porque 3 no es menor que "3" (convertido a número 3)

z = a <= c;
console.log(z); // true, porque 3 es igual a "3" (convertido a número 3)

z = a > c;
console.log(z); // false, porque 3 no es mayor que "3" (convertido a número 3)

z = a >= c;
console.log(z); // true, porque 3 es igual a "3" (convertido a número 3)
