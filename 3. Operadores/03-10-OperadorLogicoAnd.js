// Operador lógico AND (&&)
/*
El operador lógico AND (`&&`) en JavaScript se utiliza para evaluar dos expresiones lógicas y devuelve `true` solo si ambas expresiones son verdaderas. Si alguna de las expresiones es falsa, el resultado es `false`.

El operador `&&` evalúa de izquierda a derecha. Si la primera expresión es falsa, no evalúa la segunda expresión, ya que el resultado será `false` de todos modos (corto circuito).
*/

// Ejemplo 1: Ambas expresiones son verdaderas
let a = 5;
let b = 10;

let resultado = a < b && b > 0;
console.log(resultado); // true, porque ambas expresiones `(a < b)` y `(b > 0)` son verdaderas

// Ejemplo 2: Una expresión es falsa
resultado = a > b && b > 0;
console.log(resultado); // false, porque la expresión `(a > b)` es falsa

// Ejemplo 3: Ambas expresiones son falsas
resultado = a > b && b < 0;
console.log(resultado); // false, porque ambas expresiones `(a > b)` y `(b < 0)` son falsas

// Ejemplo 4: Corto circuito
let x = 3;
let y = 4;

resultado = x > 5 && ++y > 4;
console.log(resultado); // false, porque la primera expresión `(x > 5)` es falsa, la segunda no se evalúa
console.log(y); // 4, `y` no se incrementó debido al corto circuito

// Ejemplo 5: Uso en condiciones complejas
let edad = 25;
let tienePermiso = true;

if (edad >= 18 && tienePermiso) {
  console.log("Puede entrar al evento");
} else {
  console.log("No puede entrar al evento");
}
// "Puede entrar al evento", porque ambas condiciones `edad >= 18` y `tienePermiso` son verdaderas

/*
Notas adicionales:
- El operador `&&` es útil para combinar múltiples condiciones en una sola expresión lógica.
- También se puede utilizar para asegurar que se cumplan varias condiciones antes de ejecutar un bloque de código específico.
- En una expresión con `&&`, si alguna de las condiciones es falsa, no se evaluarán las condiciones restantes (corto circuito), lo cual puede ser útil para mejorar el rendimiento del código.
*/
