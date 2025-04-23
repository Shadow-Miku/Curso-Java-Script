/*
Las **funciones flecha** en JavaScript son una forma concisa de definir funciones introducida en ES6 (ECMAScript 2015). 
Permiten escribir funciones de manera más corta y manejan el contexto `this` de forma diferente a las funciones tradicionales.

### Sintaxis básica:
const nombreFuncion = (parametros) => {
  // Código de la función
};

Si la función tiene un solo parámetro, se pueden omitir los paréntesis:
const saludar = nombre => console.log(`Hola, ${nombre}`);

Si la función tiene una sola línea que retorna un valor, se pueden omitir las llaves `{}` y la palabra `return`:
const sumar = (a, b) => a + b;

### Características principales:
- **Sintaxis más corta**: Reduce la cantidad de código necesario para definir una función.
- **No tienen su propio `this`**: Usan el `this` del contexto en el que fueron definidas.
- **No pueden ser usadas como constructores** (`new` no funciona con ellas).
- **Siempre son funciones anónimas**: No tienen un nombre fijo, aunque pueden ser asignadas a una variable.
*/

// Ejemplo 1: Función flecha básica
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 5)); // 15

// Ejemplo 2: Función flecha sin paréntesis en un solo parámetro
const saludar = (nombre) => console.log(`Hola, ${nombre}`);
saludar("Miyuki"); // "Hola, Miyuki"

// Ejemplo 3: Función flecha en una función de orden superior
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((n) => n * n);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// Ejemplo 4: Diferencia entre `this` en funciones flecha y funciones tradicionales
function Persona(nombre) {
  this.nombre = nombre;

  setTimeout(function () {
    console.log("Función tradicional:", this.nombre); // Undefined, ya que `this` apunta al contexto global
  }, 1000);

  setTimeout(() => {
    console.log("Función flecha:", this.nombre); // Correcto, `this` mantiene el contexto de Persona
  }, 1000);
}

let usuario = new Persona("Carlos");

/*
Ejemplo 5: Funciones flecha como métodos de objetos
Las funciones flecha **no** pueden ser usadas como métodos de objetos si necesitan `this`,
ya que no crean su propio contexto.
*/

const objeto = {
  nombre: "Ejemplo",
  mostrarNombre: () => console.log(this.nombre), // `this` aquí no apunta al objeto
};

objeto.mostrarNombre(); // Undefined (porque `this` apunta al contexto global)

/*
Ejemplo 6: Usando una función normal para acceder al contexto `this` en un objeto
*/

const persona = {
  nombre: "Ana",
  mostrarNombre() {
    console.log(this.nombre);
  },
};

persona.mostrarNombre(); // "Ana"

/*
### Cuándo usar funciones flecha y cuándo no:
✔ **Usarlas en funciones de orden superior** (`map`, `filter`, `reduce`).
✔ **Usarlas en funciones cortas y sin `this`**.
❌ **No usarlas como métodos de objetos** si requieren `this`.
❌ **No usarlas si necesitas un constructor con `new`**.
❌ **No usarlas si necesitas acceder al objeto `arguments`**, ya que las funciones flecha no tienen su propio `arguments`.

### Conclusión:
Las funciones flecha mejoran la legibilidad y concisión del código en JavaScript, 
pero es importante comprender sus particularidades, especialmente con `this`, para evitar errores.
*/
