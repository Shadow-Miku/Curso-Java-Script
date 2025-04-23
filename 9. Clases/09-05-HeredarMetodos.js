/*
La **herencia de métodos** en JavaScript permite que una clase hija herede métodos definidos en la clase padre. Esto evita la duplicación de código y facilita la reutilización.

Para lograr esto, se usa la palabra clave `extends` para hacer que una clase herede los métodos de otra. Además, si se necesita invocar el método de la clase padre dentro de la clase hija, se usa `super()`.

Sintaxis básica:
class ClasePadre {
  metodoPadre() {
    // Código del método padre
  }
}

class ClaseHija extends ClasePadre {
  metodoHija() {
    super.metodoPadre(); // Invocar el método heredado
  }
}
*/

// Ejemplo 1: Herencia básica de métodos entre clases
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// La clase `Empleado` hereda el método `saludar` de `Persona`
class Empleado extends Persona {
  constructor(nombre, edad, cargo) {
    super(nombre, edad); // Llamar al constructor de `Persona`
    this.cargo = cargo;
  }

  presentarTrabajo() {
    console.log(`Trabajo como ${this.cargo}.`);
  }
}

// Crear instancia de `Empleado`
let empleado1 = new Empleado("Carlos", 40, "Ingeniero");

empleado1.saludar(); // "Hola, mi nombre es Carlos y tengo 40 años."
empleado1.presentarTrabajo(); // "Trabajo como Ingeniero."

// Ejemplo 2: Sobreescritura de métodos heredados
class Animal {
  constructor(tipo) {
    this.tipo = tipo;
  }

  hacerSonido() {
    console.log(`El ${this.tipo} hace un sonido.`);
  }
}

// La clase `Perro` hereda de `Animal` y sobrescribe el método `hacerSonido`
class Perro extends Animal {
  constructor(nombre) {
    super("Perro"); // Llamar al constructor de `Animal`
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log(`${this.nombre} ladra: Guau Guau!`);
  }
}

let miPerro = new Perro("Firulais");
miPerro.hacerSonido(); // "Firulais ladra: Guau Guau!"

// Ejemplo 3: Invocar el método de la clase padre usando super()
class Gato extends Animal {
  constructor(nombre) {
    super("Gato"); // Llamar al constructor de `Animal`
    this.nombre = nombre;
  }

  hacerSonido() {
    super.hacerSonido(); // Llamar al método de la clase padre
    console.log(`${this.nombre} maulla: Miau Miau!`);
  }
}

let miGato = new Gato("Whiskers");
miGato.hacerSonido();
// "El Gato hace un sonido."
// "Whiskers maulla: Miau Miau!"

/*
  Notas adicionales:
  - **La palabra clave `extends` permite que una clase herede métodos de otra.**
  - **Un método heredado puede ser sobrescrito en la clase hija para modificar su comportamiento.**
  - **El uso de `super()` dentro de un método hijo permite invocar el método de la clase padre antes de agregar lógica adicional.**
  - **La herencia de métodos mejora la reutilización del código y permite la creación de relaciones jerárquicas entre clases.**
  */
