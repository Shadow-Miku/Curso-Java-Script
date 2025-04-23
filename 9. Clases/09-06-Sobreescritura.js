/*
La **sobreescritura de métodos** en JavaScript permite modificar el comportamiento de un método heredado de una clase padre en la clase hija. Esto se usa para personalizar la funcionalidad sin cambiar el método original.

Cuando una clase hija define un método con el mismo nombre que uno heredado, el nuevo método **reemplaza** al original dentro de la instancia de la clase hija.

Para acceder al método de la clase padre dentro del método sobreescrito, se usa `super`.

Sintaxis:
class ClasePadre {
  metodo() {
    // Código del método original
  }
}

class ClaseHija extends ClasePadre {
  metodo() {
    super.metodo(); // Opcional: llamar al método de la clase padre
    // Código del método modificado
  }
}
*/

// Ejemplo 1: Sobreescritura de un método heredado
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// La clase `Empleado` sobreescribe el método `saludar`
class Empleado extends Persona {
  constructor(nombre, edad, cargo) {
    super(nombre, edad);
    this.cargo = cargo;
  }

  saludar() {
    console.log(
      `Hola, soy ${this.nombre}, tengo ${this.edad} años y trabajo como ${this.cargo}.`
    );
  }
}

let empleado1 = new Empleado("Carlos", 40, "Ingeniero");
empleado1.saludar(); // "Hola, soy Carlos, tengo 40 años y trabajo como Ingeniero."

// Ejemplo 2: Uso de super() para conservar parte del método original
class Estudiante extends Persona {
  constructor(nombre, edad, grado) {
    super(nombre, edad);
    this.grado = grado;
  }

  saludar() {
    super.saludar(); // Llamar al método de la clase padre
    console.log(`Soy estudiante y curso el grado ${this.grado}.`);
  }
}

let estudiante1 = new Estudiante("Ana", 20, "Universidad");
estudiante1.saludar();
// "Hola, mi nombre es Ana y tengo 20 años."
// "Soy estudiante y curso el grado Universidad."

// Ejemplo 3: Sobreescritura en múltiples niveles de herencia
class Animal {
  hacerSonido() {
    console.log("Este animal hace un sonido.");
  }
}

// `Perro` hereda de `Animal` y sobreescribe `hacerSonido`
class Perro extends Animal {
  hacerSonido() {
    console.log("El perro ladra: Guau Guau!");
  }
}

// `Gato` hereda de `Animal` y sobreescribe `hacerSonido`
class Gato extends Animal {
  hacerSonido() {
    console.log("El gato maulla: Miau Miau!");
  }
}

let perro = new Perro();
let gato = new Gato();

perro.hacerSonido(); // "El perro ladra: Guau Guau!"
gato.hacerSonido(); // "El gato maulla: Miau Miau!"

/*
  Notas adicionales:
  - **Si una clase hija define un método con el mismo nombre que uno heredado, se sobreescribe el método original.**
  - **Se puede usar `super()` dentro del método sobreescrito para conservar parte del comportamiento original del método padre.**
  - **La sobreescritura permite adaptar el comportamiento de una clase según sus necesidades sin modificar el código de la clase base.**
  - **Es útil en estructuras de herencia para personalizar el comportamiento de clases derivadas sin afectar la clase padre.**
  */
