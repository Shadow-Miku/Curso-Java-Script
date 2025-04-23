/*
El `prototype` en JavaScript es un mecanismo que permite compartir propiedades y métodos entre múltiples instancias de objetos. 
Cada objeto en JavaScript tiene un prototipo del cual puede heredar propiedades y métodos.

El sistema de `prototype` es clave en la programación orientada a objetos en JavaScript, ya que permite extender la funcionalidad de los objetos sin copiar métodos repetidamente.

Sintaxis:
NombreObjeto.prototype.nombreMetodo = function() {
  // Código del método
};
*/

// Ejemplo 1: Uso de `prototype` para agregar métodos a un objeto
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Definir un método en el prototipo de `Persona`
Persona.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Crear instancias reutilizando `prototype`
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("Ana", 25);

persona1.saludar(); // "Hola, mi nombre es Juan y tengo 30 años."
persona2.saludar(); // "Hola, mi nombre es Ana y tengo 25 años."

// Ejemplo 2: Agregar una nueva propiedad usando `prototype`
Persona.prototype.nacionalidad = "Desconocida";

console.log(persona1.nacionalidad); // "Desconocida"
console.log(persona2.nacionalidad); // "Desconocida"

// Ejemplo 3: Uso de `prototype` para extender una función constructora
function Animal(tipo) {
  this.tipo = tipo;
}

Animal.prototype.hacerSonido = function () {
  console.log(`El ${this.tipo} hace un sonido.`);
};

// Crear instancias de `Animal`
let perro = new Animal("Perro");
let gato = new Animal("Gato");

perro.hacerSonido(); // "El Perro hace un sonido."
gato.hacerSonido(); // "El Gato hace un sonido."

// Ejemplo 4: Herencia basada en `prototype`
function Empleado(nombre, edad, cargo) {
  Persona.call(this, nombre, edad); // Heredar propiedades de `Persona`
  this.cargo = cargo;
}

// Heredar el prototipo de `Persona` en `Empleado`
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

Empleado.prototype.trabajar = function () {
  console.log(`${this.nombre} está trabajando como ${this.cargo}.`);
};

let empleado1 = new Empleado("Carlos", 40, "Gerente");
empleado1.saludar(); // "Hola, mi nombre es Carlos y tengo 40 años."
empleado1.trabajar(); // "Carlos está trabajando como Gerente."

/*
  Notas adicionales:
  - El `prototype` permite compartir métodos entre todas las instancias creadas con un mismo constructor, ahorrando memoria.
  - Se puede modificar el prototipo de un objeto en cualquier momento, lo que permite agregar propiedades y métodos dinámicamente.
  - La herencia basada en `prototype` permite crear relaciones entre objetos, facilitando la reutilización de código.
  - En ES6, las clases (`class`) proporcionan una forma más estructurada de trabajar con prototipos, pero internamente siguen utilizando `prototype`.
  */
