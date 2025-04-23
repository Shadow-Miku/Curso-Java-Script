/*
El método `apply()` en JavaScript se utiliza para invocar una función con un contexto (`this`) específico, similar a `call()`, pero con la diferencia de que `apply()` recibe los argumentos como un array.

Sintaxis:
funcion.apply(objeto, [arg1, arg2, ...]);

- `funcion`: La función que se desea ejecutar.
- `objeto`: El objeto que será el nuevo contexto (`this`).
- `[arg1, arg2, ...]`: Argumentos opcionales que se pasan en un array.

El método `apply()` es útil cuando se tiene un conjunto de argumentos en forma de array y se necesita pasarlos a una función.
*/

// Ejemplo 1: Uso básico de apply() para cambiar el contexto de this
function presentar(edad, ocupacion) {
  console.log(
    `Hola, mi nombre es ${this.nombre}, tengo ${edad} años y soy ${ocupacion}.`
  );
}

let persona1 = { nombre: "Carlos" };
let persona2 = { nombre: "Laura" };

presentar.apply(persona1, [40, "Ingeniero"]);
// "Hola, mi nombre es Carlos, tengo 40 años y soy Ingeniero."

presentar.apply(persona2, [35, "Diseñadora"]);
// "Hola, mi nombre es Laura, tengo 35 años y soy Diseñadora."

// Ejemplo 2: Uso de apply() para reutilizar métodos entre objetos
let vehiculo = {
  tipo: "Automóvil",
  mostrarInfo: function (color, marca) {
    console.log(`Este ${this.tipo} es de color ${color} y marca ${marca}.`);
  },
};

let bicicleta = { tipo: "Bicicleta" };

vehiculo.mostrarInfo.apply(bicicleta, ["Rojo", "Trek"]);
// "Este Bicicleta es de color Rojo y marca Trek."

// Ejemplo 3: Uso de apply() con funciones matemáticas
let numeros = [3, 7, 1, 9, 5];

let maximo = Math.max.apply(null, numeros);
console.log("El número máximo es: " + maximo); // "El número máximo es: 9"

let minimo = Math.min.apply(null, numeros);
console.log("El número mínimo es: " + minimo); // "El número mínimo es: 1"

/*
  Notas adicionales:
  - `apply()` es similar a `call()`, pero permite pasar los argumentos en forma de array.
  - Se usa `apply()` cuando los argumentos están almacenados en una lista o en un array y se necesita pasarlos a una función.
  - Se puede usar `apply()` para invocar métodos en objetos que no los tienen, reutilizando funciones en diferentes contextos.
  - Es útil en funciones como `Math.max()` y `Math.min()` para encontrar valores dentro de un array sin necesidad de recorrerlo.
  */
