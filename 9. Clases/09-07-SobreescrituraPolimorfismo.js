/*
El **polimorfismo** en JavaScript permite que una clase hija sobrescriba los métodos de la clase padre y proporcione su propia implementación. Esto permite que diferentes clases usen el mismo método pero con comportamientos diferentes, dependiendo del contexto.

El polimorfismo se basa en la sobreescritura de métodos, donde una clase derivada modifica o extiende la funcionalidad de un método heredado. Este principio es clave en la programación orientada a objetos.

Sintaxis básica de polimorfismo:
class ClasePadre {
  metodo() {
    // Implementación del método en la clase padre
  }
}

class ClaseHija extends ClasePadre {
  metodo() {
    // Nueva implementación del método en la clase hija
  }
}
*/

// Ejemplo 1: Polimorfismo básico con sobreescritura de métodos
class Animal {
  hacerSonido() {
    console.log("Este animal hace un sonido.");
  }
}

// Las clases `Perro` y `Gato` heredan de `Animal` y sobrescriben el método `hacerSonido`
class Perro extends Animal {
  hacerSonido() {
    console.log("El perro ladra: Guau Guau!");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("El gato maulla: Miau Miau!");
  }
}

// Polimorfismo en acción
let animales = [new Perro(), new Gato(), new Animal()];

animales.forEach((animal) => animal.hacerSonido());
// "El perro ladra: Guau Guau!"
// "El gato maulla: Miau Miau!"
// "Este animal hace un sonido."

// Ejemplo 2: Polimorfismo con métodos adicionales
class Vehiculo {
  mostrarInfo() {
    console.log("Este es un vehículo.");
  }
}

class Automovil extends Vehiculo {
  mostrarInfo() {
    console.log("Este es un automóvil.");
  }
}

class Bicicleta extends Vehiculo {
  mostrarInfo() {
    console.log("Esta es una bicicleta.");
  }
}

// Polimorfismo en acción
let vehiculos = [new Automovil(), new Bicicleta(), new Vehiculo()];

vehiculos.forEach((vehiculo) => vehiculo.mostrarInfo());
// "Este es un automóvil."
// "Esta es una bicicleta."
// "Este es un vehículo."

// Ejemplo 3: Uso de super() en polimorfismo
class Figura {
  calcularArea() {
    console.log("El área no está definida para esta figura.");
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    console.log(`El área del cuadrado es ${this.lado ** 2}.`);
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    this.radio = radio;
  }

  calcularArea() {
    console.log(
      `El área del círculo es ${(Math.PI * this.radio ** 2).toFixed(2)}.`
    );
  }
}

let figuras = [new Cuadrado(4), new Circulo(3), new Figura()];

figuras.forEach((figura) => figura.calcularArea());
// "El área del cuadrado es 16."
// "El área del círculo es 28.27."
// "El área no está definida para esta figura."

/*
  Notas adicionales:
  - **El polimorfismo permite usar una interfaz común (el mismo método) para diferentes clases con comportamientos específicos.**
  - **La sobreescritura de métodos en clases hijas permite personalizar el comportamiento según las necesidades.**
  - **Se puede usar `super()` dentro del método sobrescrito para acceder a la implementación de la clase padre.**
  - **El polimorfismo es clave para la extensibilidad y mantenimiento del código en sistemas orientados a objetos.**
  */
