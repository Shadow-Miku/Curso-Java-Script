/*
La **herencia de clases** en JavaScript permite que una clase (clase hija) herede propiedades y métodos de otra clase (clase padre). Esto facilita la reutilización del código y la estructura de la programación orientada a objetos.

Para definir una clase que hereda de otra, se usa la palabra clave `extends`. Además, cuando una clase hija necesita acceder al constructor de la clase padre, se usa `super()`.

Sintaxis básica:
class ClasePadre {
  constructor(parametro1, parametro2) {
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }
}

class ClaseHija extends ClasePadre {
  constructor(parametro1, parametro2, parametro3) {
    super(parametro1, parametro2); // Llamar al constructor de la clase padre
    this.propiedad3 = parametro3;
  }
}
*/

// Ejemplo 1: Herencia básica entre clases
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// La clase `Empleado` hereda de `Persona`
class Empleado extends Persona {
  constructor(nombre, edad, cargo) {
    super(nombre, edad); // Llamar al constructor de `Persona`
    this.cargo = cargo; // Nueva propiedad específica de `Empleado`
  }

  presentarTrabajo() {
    console.log(`${this.nombre} trabaja como ${this.cargo}.`);
  }
}

// Crear instancia de `Empleado`
let empleado1 = new Empleado("Carlos", 40, "Ingeniero");

empleado1.saludar(); // "Hola, mi nombre es Carlos y tengo 40 años."
empleado1.presentarTrabajo(); // "Carlos trabaja como Ingeniero."

// Ejemplo 2: Herencia con métodos sobrescritos
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

// Ejemplo 3: Herencia en múltiples niveles
class Vehiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  mostrarTipo() {
    console.log(`Este es un ${this.tipo}.`);
  }
}

// `Automovil` hereda de `Vehiculo`
class Automovil extends Vehiculo {
  constructor(marca) {
    super("Automóvil");
    this.marca = marca;
  }

  mostrarMarca() {
    console.log(`Este automóvil es de la marca ${this.marca}.`);
  }
}

// `Electrico` hereda de `Automovil`
class Electrico extends Automovil {
  constructor(marca, autonomia) {
    super(marca);
    this.autonomia = autonomia;
  }

  mostrarAutonomia() {
    console.log(
      `Este automóvil eléctrico tiene una autonomía de ${this.autonomia} km.`
    );
  }
}

let tesla = new Electrico("Tesla", 500);

tesla.mostrarTipo(); // "Este es un Automóvil."
tesla.mostrarMarca(); // "Este automóvil es de la marca Tesla."
tesla.mostrarAutonomia(); // "Este automóvil eléctrico tiene una autonomía de 500 km."

/*
  Notas adicionales:
  - La palabra clave `extends` permite que una clase herede propiedades y métodos de otra clase.
  - La función `super()` se usa para llamar al constructor de la clase padre dentro de la clase hija.
  - Se pueden sobrescribir métodos en la clase hija, permitiendo modificar el comportamiento de métodos heredados.
  - La herencia puede aplicarse en múltiples niveles, formando una jerarquía de clases.
  - La herencia mejora la reutilización de código y facilita la estructura de objetos en la programación orientada a objetos.
  */
