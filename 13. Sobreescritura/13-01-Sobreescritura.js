/*
La **sobreescritura de métodos** en JavaScript permite que una clase hija redefina un método heredado de una clase padre. Esto permite modificar o extender el comportamiento del método sin cambiar la implementación original en la clase base.

Cuando una clase hija define un método con el mismo nombre que un método de la clase padre, el nuevo método reemplaza la versión heredada. Si se desea conservar parte del comportamiento original, se puede llamar al método de la clase padre usando `super`.

Sintaxis:
class ClasePadre {
  metodo() {
    // Implementación original
  }
}

class ClaseHija extends ClasePadre {
  metodo() {
    super.metodo(); // Llamar al método original (opcional)
    // Nueva implementación del método en la clase hija
  }
}
*/

// Ejemplo 1: Sobreescritura de un método heredado
class Animal {
  hacerSonido() {
    console.log("Este animal hace un sonido.");
  }
}

// La clase `Perro` sobrescribe el método `hacerSonido`
class Perro extends Animal {
  hacerSonido() {
    console.log("El perro ladra: Guau Guau!");
  }
}

// La clase `Gato` sobrescribe el método `hacerSonido`
class Gato extends Animal {
  hacerSonido() {
    console.log("El gato maulla: Miau Miau!");
  }
}

let perro = new Perro();
let gato = new Gato();

perro.hacerSonido(); // "El perro ladra: Guau Guau!"
gato.hacerSonido(); // "El gato maulla: Miau Miau!"

// Ejemplo 2: Uso de super() para mantener parte del comportamiento original
class Figura {
  calcularArea() {
    console.log("El área no está definida para esta figura.");
  }
}

// `Cuadrado` sobrescribe `calcularArea` pero usa `super` para conservar la lógica original
class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    super.calcularArea(); // Llamar al método de la clase padre
    console.log(`El área del cuadrado es ${this.lado ** 2}.`);
  }
}

let cuadrado = new Cuadrado(4);
cuadrado.calcularArea();
// "El área no está definida para esta figura."
// "El área del cuadrado es 16."

// Ejemplo 3: Sobreescritura en múltiples niveles de herencia
class Vehiculo {
  mostrarInfo() {
    console.log("Este es un vehículo.");
  }
}

// `Automovil` sobrescribe `mostrarInfo`
class Automovil extends Vehiculo {
  mostrarInfo() {
    console.log("Este es un automóvil.");
  }
}

// `Electrico` sobrescribe nuevamente `mostrarInfo`
class Electrico extends Automovil {
  mostrarInfo() {
    console.log("Este es un automóvil eléctrico.");
  }
}

let auto = new Automovil();
let tesla = new Electrico();

auto.mostrarInfo(); // "Este es un automóvil."
tesla.mostrarInfo(); // "Este es un automóvil eléctrico."

/*
  Notas adicionales:
  - **Sobreescribir un método** significa reemplazar la lógica heredada con una nueva implementación en la clase hija.
  - **Se puede usar `super.metodo()`** para conservar el comportamiento original antes de añadir nueva lógica.
  - **La sobreescritura se aplica en herencias múltiples**, lo que permite modificar métodos a través de distintos niveles de la jerarquía de clases.
  - **Ayuda a personalizar y mejorar la funcionalidad**, permitiendo que diferentes clases usen métodos con comportamientos adaptados.
  */
