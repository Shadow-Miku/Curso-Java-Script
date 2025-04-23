/*
El método constructor en JavaScript se utiliza para crear múltiples instancias de un objeto con propiedades y métodos definidos previamente. Se usa con funciones constructoras o clases, permitiendo la creación eficiente de objetos con valores personalizados.

Para definir un constructor, se usa una función especial que establece las propiedades iniciales del objeto. Luego, se crea un nuevo objeto utilizando la palabra clave `new`.

Sintaxis básica de una función constructora:
function NombreObjeto(parametro1, parametro2, ...) {
  this.propiedad1 = parametro1;
  this.propiedad2 = parametro2;
}

Sintaxis con clases (ES6):
class NombreObjeto {
  constructor(parametro1, parametro2) {
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }
}
*/

// Ejemplo 1: Uso de una función constructora
function Persona(nombre, edad) {
  this.nombre = nombre; // Asignar el parámetro `nombre` a la propiedad del objeto
  this.edad = edad; // Asignar el parámetro `edad` a la propiedad del objeto
  this.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

// Crear instancias del objeto `Persona`
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("Ana", 25);

persona1.saludar(); // "Hola, mi nombre es Juan y tengo 30 años."
persona2.saludar(); // "Hola, mi nombre es Ana y tengo 25 años."

// Ejemplo 2: Uso de una clase como constructor (ES6)
class Animal {
  constructor(tipo, sonido) {
    this.tipo = tipo;
    this.sonido = sonido;
  }

  hacerSonido() {
    console.log(`El ${this.tipo} hace "${this.sonido}".`);
  }
}

// Crear instancias del objeto `Animal`
let perro = new Animal("Perro", "Guau");
let gato = new Animal("Gato", "Miau");

perro.hacerSonido(); // "El Perro hace 'Guau'."
gato.hacerSonido(); // "El Gato hace 'Miau'."

/*
  Notas adicionales:
  - El método constructor permite crear múltiples objetos sin necesidad de escribir el código repetidamente.
  - La palabra clave `this` dentro de la función constructora se refiere a la instancia del objeto que está siendo creada.
  - La sintaxis de clase (`class`) es una forma más moderna y estructurada de definir constructores en JavaScript, introducida en ES6.
  - Al usar `new NombreObjeto()`, se crea una nueva instancia del objeto y se asignan las propiedades definidas en el constructor.
  */
