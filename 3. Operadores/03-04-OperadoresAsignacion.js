/*
Los operadores de asignación en JavaScript se utilizan para asignar valores a las variables. Además del operador de asignación simple (=), existen varios operadores compuestos que combinan una operación aritmética con la asignación. Aquí hay una lista de operadores de asignación comunes:

1. Asignación simple (=): Asigna el valor del operando derecho al operando izquierdo.
2. Asignación de suma (+=): Suma el operando derecho al operando izquierdo y asigna el resultado al operando izquierdo.
3. Asignación de resta (-=): Resta el operando derecho del operando izquierdo y asigna el resultado al operando izquierdo.
4. Asignación de multiplicación (*=): Multiplica el operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo.
5. Asignación de división (/=): Divide el operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo.
6. Asignación de módulo (%=): Calcula el residuo de la división del operando izquierdo por el operando derecho y asigna el resultado al operando izquierdo.
7. Asignación de exponente (**=): Eleva el operando izquierdo a la potencia del operando derecho y asigna el resultado al operando izquierdo.
*/

let a = 1; // Declaración e inicialización de la variable `a` con el valor 1

// Asignación de suma (+=)
a += 3; // a = a + 3
console.log(a); // 4, `a` ahora es 4

// Asignación de resta (-=)
a -= 2; // a = a - 2
console.log(a); // 2, `a` ahora es 2

// Asignación de multiplicación (*=)
a *= 3; // a = a * 3
console.log(a); // 6, `a` ahora es 6

// Asignación de división (/=)
a /= 2; // a = a / 2
console.log(a); // 3, `a` ahora es 3

// Asignación de módulo (%=)
a %= 2; // a = a % 2
console.log(a); // 1, `a` ahora es 1 (el residuo de 3 dividido por 2 es 1)

// Asignación de exponente (**=)
a **= 2; // a = a ** 2
console.log(a); // 1, `a` ahora es 1 (1 elevado a la potencia de 2 sigue siendo 1)
