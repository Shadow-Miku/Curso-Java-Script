/*
El **hoisting** en JavaScript es el comportamiento por el cual las declaraciones de variables y funciones se elevan al principio de su ámbito antes de que el código se ejecute.
Sin embargo, **las clases en JavaScript NO son elevadas de la misma manera que las funciones**.

A diferencia de las funciones tradicionales, **las clases no pueden ser utilizadas antes de su declaración** debido a que no son elevadas completamente. 
Intentar acceder a una clase antes de su declaración genera un **ReferenceError**.

Sintaxis de una clase:
class NombreClase {
  constructor(parametro1, parametro2) {
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }
}
*/

// Ejemplo 1: Hoisting en funciones y clases
saludar(); // Esto funciona debido al hoisting en funciones
function saludar() {
  console.log("Hola, soy una función tradicional.");
}

// Intentar acceder a una clase antes de su declaración provoca un error
try {
  let persona1 = new Persona("Juan", 30);
} catch (error) {
  console.log("Error:", error.message); // "Cannot access 'Persona' before initialization"
}

// Definición de la clase después del intento de uso
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona2 = new Persona("Ana", 25);
console.log(persona2); // Persona { nombre: 'Ana', edad: 25 }

// Ejemplo 2: Diferencias en el hoisting de clases y funciones tradicionales
console.log(typeof FuncionTradicional); // "function", la declaración se eleva
console.log(typeof ClaseEjemplo); // "undefined", porque las clases no se elevan

function FuncionTradicional() {}

class ClaseEjemplo {}

/*
Notas adicionales:
- **Las funciones tradicionales son elevadas**, lo que permite llamarlas antes de su declaración en el código.
- **Las clases NO son elevadas** como las funciones, por lo que deben definirse antes de ser utilizadas.
- Intentar acceder a una clase antes de su declaración **provoca un ReferenceError**.
- Se recomienda declarar las clases antes de utilizarlas para evitar errores de ejecución.
*/
