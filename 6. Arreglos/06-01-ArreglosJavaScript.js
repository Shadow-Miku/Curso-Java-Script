// Arreglos (Arrays) en detalle y profundidad
/*
Un arreglo (array) en JavaScript es una estructura de datos que permite almacenar múltiples valores en una sola variable. Los arreglos son útiles para almacenar listas de elementos y pueden contener valores de cualquier tipo, incluidos números, cadenas, objetos y otros arreglos.

Sintaxis:
let nombreDelArreglo = [elemento1, elemento2, ...];

Los elementos de un arreglo están indexados, comenzando desde 0 para el primer elemento, 1 para el segundo, y así sucesivamente.
*/

// Ejemplo 1: Declaración e inicialización de un arreglo
let frutas = ["Manzana", "Banana", "Cereza", "Dátil"];
console.log(frutas); // ["Manzana", "Banana", "Cereza", "Dátil"]
console.log(frutas[0]); // "Manzana", primer elemento del arreglo
console.log(frutas[2]); // "Cereza", tercer elemento del arreglo

// Ejemplo 2: Modificación de elementos en un arreglo
frutas[1] = "Blueberry"; // Modificar el segundo elemento
console.log(frutas); // ["Manzana", "Blueberry", "Cereza", "Dátil"]

// Ejemplo 3: Propiedades y métodos de los arreglos
console.log(frutas.length); // 4, la longitud del arreglo (número de elementos)

frutas.push("Elderberry"); // Añadir un nuevo elemento al final del arreglo
console.log(frutas); // ["Manzana", "Blueberry", "Cereza", "Dátil", "Elderberry"]

let ultimoElemento = frutas.pop(); // Eliminar el último elemento del arreglo
console.log(ultimoElemento); // "Elderberry", el elemento eliminado
console.log(frutas); // ["Manzana", "Blueberry", "Cereza", "Dátil"]

frutas.unshift("Acerola"); // Añadir un nuevo elemento al principio del arreglo
console.log(frutas); // ["Acerola", "Manzana", "Blueberry", "Cereza", "Dátil"]

let primerElemento = frutas.shift(); // Eliminar el primer elemento del arreglo
console.log(primerElemento); // "Acerola", el elemento eliminado
console.log(frutas); // ["Manzana", "Blueberry", "Cereza", "Dátil"]

// Ejemplo 4: Recorrer un arreglo usando un ciclo for
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i}: ${frutas[i]}`);
}
// Muestra cada elemento del arreglo junto con su índice

// Ejemplo 5: Métodos de arrays para manipulación avanzada
let frutasB = frutas.slice(1, 3); // Crear un nuevo arreglo con una porción del arreglo original
console.log(frutasB); // ["Blueberry", "Cereza"]

frutas.splice(1, 2, "Mango", "Papaya"); // Eliminar 2 elementos desde el índice 1 e insertar "Mango" y "Papaya"
console.log(frutas); // ["Manzana", "Mango", "Papaya", "Dátil"]

frutas.sort(); // Ordenar el arreglo alfabéticamente
console.log(frutas); // ["Dátil", "Manzana", "Mango", "Papaya"]

frutas.reverse(); // Invertir el orden del arreglo
console.log(frutas); // ["Papaya", "Mango", "Manzana", "Dátil"]

let concatenacion = frutas.concat(["Kiwi", "Lima"]); // Concatenar dos arreglos
console.log(concatenacion); // ["Papaya", "Mango", "Manzana", "Dátil", "Kiwi", "Lima"]

let busqueda = frutas.indexOf("Manzana"); // Buscar el índice de un elemento
console.log(busqueda); // 2, el índice de "Manzana"

// Ejemplo 6: Uso de map y filter
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map((num) => num * num); // Crear un nuevo arreglo con los cuadrados de los números
console.log(cuadrados); // [1, 4, 9, 16, 25]

let pares = numeros.filter((num) => num % 2 === 0); // Crear un nuevo arreglo con los números pares
console.log(pares); // [2, 4]

/*
Notas adicionales:
- Los arreglos en JavaScript son dinámicos, lo que significa que pueden cambiar de tamaño y pueden contener elementos de diferentes tipos.
- Los arreglos tienen métodos incorporados que facilitan la manipulación de los datos, como `push`, `pop`, `shift`, `unshift`, `splice`, `slice`, `sort`, `reverse`, `concat`, `map`, `filter`, y muchos más.
- Los elementos de un arreglo están indexados, lo que permite acceder a ellos usando su posición en el arreglo (índice).
*/
