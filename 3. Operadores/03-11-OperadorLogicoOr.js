// Operador lógico OR (||)
/*
El operador lógico OR (`||`) en JavaScript se utiliza para evaluar dos expresiones lógicas y devuelve `true` si al menos una de las expresiones es verdadera. Si ambas expresiones son falsas, el resultado es `false`.

El operador `||` evalúa de izquierda a derecha. Si la primera expresión es verdadera, no evalúa la segunda expresión, ya que el resultado será `true` de todos modos (corto circuito).
*/

// Ejemplo 1: Ambas expresiones son verdaderas
let a = 5;
let b = 10;

let resultado = a < b || b > 0;
console.log(resultado); // true, porque ambas expresiones `(a < b)` y `(b > 0)` son verdaderas

// Ejemplo 2: Una expresión es verdadera
resultado = a > b || b > 0;
console.log(resultado); // true, porque la expresión `(b > 0)` es verdadera

// Ejemplo 3: Ambas expresiones son falsas
resultado = a > b || b < 0;
console.log(resultado); // false, porque ambas expresiones `(a > b)` y `(b < 0)` son falsas

// Ejemplo 4: Corto circuito
let x = 3;
let y = 4;

resultado = x < 5 || ++y > 4;
console.log(resultado); // true, porque la primera expresión `(x < 5)` es verdadera, la segunda no se evalúa
console.log(y); // 4, `y` no se incrementó debido al corto circuito

// Ejemplo 5: Uso en condiciones complejas
let edad = 16;
let tienePermiso = false;

if (edad >= 18 || tienePermiso) {
  console.log("Puede entrar al evento");
} else {
  console.log("No puede entrar al evento");
}
// "No puede entrar al evento", porque ambas condiciones `edad >= 18` y `tienePermiso` son falsas

/*
Notas adicionales:
- El operador `||` es útil para combinar múltiples condiciones en una sola expresión lógica y asegurarse de que al menos una de ellas se cumpla.
- También se puede utilizar para establecer valores predeterminados cuando una variable no tiene un valor asignado.
- En una expresión con `||`, si una de las condiciones es verdadera, no se evaluarán las condiciones restantes (corto circuito), lo cual puede ser útil para mejorar el rendimiento del código.
*/

// Ejemplo 6: Establecer valores predeterminados
let nombre = null;
let nombrePorDefecto = "Invitado";

let nombreUsuario = nombre || nombrePorDefecto;
console.log(nombreUsuario); // "Invitado", porque `nombre` es `null`, se usa `nombrePorDefecto`
