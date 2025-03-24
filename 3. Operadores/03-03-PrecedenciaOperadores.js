/*
La precedencia de operadores determina el orden en que se evalúan las expresiones que tienen múltiples operadores. Los operadores con mayor precedencia se evalúan antes que los operadores con menor precedencia.

Aquí hay una lista de algunos operadores comunes en orden de precedencia (de mayor a menor):
1. Paréntesis ()
2. Exponente **
3. Multiplicación *, División /, Módulo %
4. Suma +, Resta -

En caso de tener operadores con la misma precedencia, se evalúan de izquierda a derecha.
*/

let a = 3,
  b = 2,
  c = 1,
  d = 4;

// Evaluación de la expresión: a * b + c / d
let z = a * b + c / d;
console.log(z); // Resultado: 6.25
/*
Explicación:
1. a * b = 3 * 2 = 6 (Multiplicación se evalúa primero)
2. c / d = 1 / 4 = 0.25 (División se evalúa segundo)
3. 6 + 0.25 = 6.25 (Suma se evalúa al final)
*/

// Evaluación de la expresión: c + a * b / d
z = c + (a * b) / d;
console.log(z); // Resultado: 2.5
/*
Explicación:
1. a * b = 3 * 2 = 6 (Multiplicación se evalúa primero)
2. 6 / d = 6 / 4 = 1.5 (División se evalúa segundo)
3. c + 1.5 = 1 + 1.5 = 2.5 (Suma se evalúa al final)
*/

// Evaluación de la expresión con paréntesis: (c + a) * b / c
z = ((c + a) * b) / c;
console.log(z); // Resultado: 8
/*
Explicación:
1. (c + a) = (1 + 3) = 4 (Paréntesis se evalúan primero)
2. 4 * b = 4 * 2 = 8 (Multiplicación se evalúa segundo)
3. 8 / c = 8 / 1 = 8 (División se evalúa al final)
*/
