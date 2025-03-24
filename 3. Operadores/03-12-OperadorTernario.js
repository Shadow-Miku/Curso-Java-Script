// Operador ternario (condicional)
/*
El operador ternario en JavaScript es una forma concisa de escribir una declaración `if-else`. Tiene la siguiente sintaxis:

condicion ? expresion1 : expresion2;

- `condicion`: Una expresión que se evalúa como `true` o `false`.
- `expresion1`: La expresión que se ejecuta si la condición es `true`.
- `expresion2`: La expresión que se ejecuta si la condición es `false`.

El operador ternario devuelve el valor de `expresion1` si la condición es verdadera, y el valor de `expresion2` si la condición es falsa.
*/

// Ejemplo 1: Uso básico del operador ternario
let edad = 18;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"

// Ejemplo 2: Asignación de valores usando el operador ternario
let a = 5,
  b = 10;
let mayor = a > b ? a : b;
console.log(mayor); // 10, porque `b` es mayor que `a`

// Ejemplo 3: Anidación del operador ternario
let nota = 85;
let calificacion =
  nota >= 90
    ? "A"
    : nota >= 80
    ? "B"
    : nota >= 70
    ? "C"
    : nota >= 60
    ? "D"
    : "F";
console.log(calificacion); // "B", porque la nota está entre 80 y 89

/*
Notas adicionales:
- El operador ternario es útil para simplificar el código y hacer que las decisiones condicionales sean más legibles.
- Se debe tener cuidado al anidar operadores ternarios, ya que puede hacer que el código sea difícil de leer. En tales casos, es recomendable usar declaraciones `if-else` tradicionales para mayor claridad.
*/

// Ejemplo 4: Uso del operador ternario en una función
function obtenerPrecio(descuento) {
  return descuento ? 100 : 150;
}
console.log(obtenerPrecio(true)); // 100, porque se aplica el descuento
console.log(obtenerPrecio(false)); // 150, porque no se aplica el descuento

/*
En resumen, el operador ternario es una herramienta poderosa y concisa para tomar decisiones condicionales en una sola línea de código. Es especialmente útil para asignar valores basados en condiciones y para simplificar el flujo de control.
*/
