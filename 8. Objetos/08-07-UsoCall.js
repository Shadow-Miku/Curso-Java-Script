/*
El método `call()` en JavaScript se utiliza para invocar una función con un contexto (`this`) específico. 
Esto permite reutilizar métodos de un objeto en otro, sin necesidad de duplicar código.

Sintaxis:
funcion.call(objeto, arg1, arg2, ...);

- `funcion`: La función que se desea ejecutar.
- `objeto`: El objeto que será el nuevo contexto (`this`).
- `arg1, arg2, ...`: Argumentos opcionales que se pueden pasar a la función.

El método `call()` es útil para compartir métodos entre distintos objetos y realizar herencia funcional.
*/

// Ejemplo 1: Uso básico de call() para cambiar el contexto de this
function saludar() {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
}

let persona1 = { nombre: "Juan" };
let persona2 = { nombre: "Ana" };

saludar.call(persona1); // "Hola, mi nombre es Juan."
saludar.call(persona2); // "Hola, mi nombre es Ana."

// Ejemplo 2: Pasar argumentos a una función usando call()
function presentar(edad, ocupacion) {
  console.log(
    `Hola, mi nombre es ${this.nombre}, tengo ${edad} años y soy ${ocupacion}.`
  );
}

let persona3 = { nombre: "Carlos" };

presentar.call(persona3, 40, "Ingeniero");
// "Hola, mi nombre es Carlos, tengo 40 años y soy Ingeniero."

// Ejemplo 3: Reutilización de métodos de un objeto en otro usando call()
let vehiculo = {
  tipo: "Automóvil",
  mostrarInfo: function (color, marca) {
    console.log(`Este ${this.tipo} es de color ${color} y marca ${marca}.`);
  },
};

let bicicleta = { tipo: "Bicicleta" };

vehiculo.mostrarInfo.call(bicicleta, "rojo", "Trek");
// "Este Bicicleta es de color rojo y marca Trek."

// Ejemplo 4: Uso de call() en herencia funcional
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

function Empleado(nombre, edad, cargo) {
  Persona.call(this, nombre, edad); // Reutilizar el constructor `Persona`
  this.cargo = cargo;
}

let empleado1 = new Empleado("Laura", 35, "Gerente");
console.log(empleado1); // Empleado { nombre: 'Laura', edad: 35, cargo: 'Gerente' }

/*
  Notas adicionales:
  - `call()` permite cambiar el contexto de `this`, lo que es útil para reutilizar funciones en diferentes objetos.
  - Se pueden pasar argumentos a la función cuando se usa `call()`, lo que permite mayor flexibilidad en la ejecución de métodos.
  - `call()` es útil en herencia funcional para reutilizar constructores de objetos sin duplicar código.
  - Es similar a `apply()`, pero la diferencia es que `call()` recibe argumentos individualmente, mientras que `apply()` los recibe en un arreglo.
  */
