/*
La reutilización de una función constructora en JavaScript permite crear múltiples instancias de un objeto sin duplicar código. 
Esto facilita la modularidad y eficiencia en la programación orientada a objetos.

Para lograr la reutilización, se usa la palabra clave `new`, que crea un nuevo objeto basado en la función constructora. También se pueden extender constructores usando `call()`, `apply()`, o la herencia con `prototype` y `class`.

Sintaxis básica de una función constructora:
function NombreObjeto(parametro1, parametro2) {
  this.propiedad1 = parametro1;
  this.propiedad2 = parametro2;
}
*/

// Ejemplo 1: Reutilización básica de una función constructora
function Persona(nombre, edad) {
  this.nombre = nombre; // Asignar el parámetro `nombre` a la propiedad del objeto
  this.edad = edad; // Asignar el parámetro `edad` a la propiedad del objeto
}

// Crear múltiples instancias reutilizando la función constructora
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("Ana", 25);

console.log(persona1); // Persona { nombre: 'Juan', edad: 30 }
console.log(persona2); // Persona { nombre: 'Ana', edad: 25 }

// Ejemplo 2: Reutilización con una función constructora extendida usando call()
function Empleado(nombre, edad, cargo) {
  Persona.call(this, nombre, edad); // Reutilizar el constructor Persona
  this.cargo = cargo; // Agregar propiedad específica de Empleado
}

let empleado1 = new Empleado("Carlos", 40, "Gerente");
console.log(empleado1); // Empleado { nombre: 'Carlos', edad: 40, cargo: 'Gerente' }

// Ejemplo 3: Reutilización mediante prototipos
Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Todas las instancias de `Persona` pueden reutilizar el método `saludar`
persona1.saludar(); // "Hola, mi nombre es Juan y tengo 30 años."
persona2.saludar(); // "Hola, mi nombre es Ana y tengo 25 años."

// Ejemplo 4: Reutilización con clases (ES6)
class Animal {
  constructor(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;
  }

  hacerSonido() {
    console.log(`El ${this.tipo} hace "${this.sonido}".`);
  }
}

// Crear múltiples instancias reutilizando la clase `Animal`
let perro = new Animal("Perro", "Guau");
let gato = new Animal("Gato", "Miau");

perro.hacerSonido(); // "El Perro hace 'Guau'."
gato.hacerSonido(); // "El Gato hace 'Miau'."

/*
  Notas adicionales:
  - La reutilización de una función constructora permite crear múltiples objetos sin duplicar código.
  - Se pueden extender funciones constructoras usando `call()` para heredar propiedades sin usar clases.
  - Los métodos definidos en el `prototype` del constructor permiten compartir funcionalidad entre todas las instancias del objeto.
  - La sintaxis de clases (`class`) en ES6 proporciona una forma más estructurada de reutilización de constructores en la programación orientada a objetos.
  */
