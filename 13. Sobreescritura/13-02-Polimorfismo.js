// Polimorfismo en detalle y profundidad
/*
El **polimorfismo** en JavaScript es un concepto de la programación orientada a objetos que permite que diferentes clases usen el mismo método pero con diferentes implementaciones. Es una técnica clave para la reutilización del código y la flexibilidad en sistemas de software.

Existen dos tipos principales de polimorfismo:
1. **Polimorfismo de sobreescritura**: Cuando una clase hija redefine un método heredado de la clase padre con una nueva implementación.
2. **Polimorfismo de sobrecarga**: No es soportado nativamente en JavaScript, pero se puede simular con diferentes formas de manejar parámetros en funciones.

Sintaxis básica:
class ClasePadre {
  metodo() {
    // Implementación original
  }
}

class ClaseHija extends ClasePadre {
  metodo() {
    // Nueva implementación específica para esta clase
  }
}
*/

// Ejemplo 1: Polimorfismo de sobreescritura
class Animal {
  hacerSonido() {
    console.log("Este animal hace un sonido.");
  }
}

// `Perro` y `Gato` sobrescriben el método `hacerSonido`
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

// Uso de polimorfismo con diferentes clases
let animales = [new Perro(), new Gato(), new Animal()];

animales.forEach((animal) => animal.hacerSonido());
// "El perro ladra: Guau Guau!"
// "El gato maulla: Miau Miau!"
// "Este animal hace un sonido."

// Ejemplo 2: Uso de polimorfismo en una estructura de herencia
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

// Ejemplo 3: Simulación de polimorfismo de sobrecarga
class Calculadora {
  operar(a, b, operador) {
    switch (operador) {
      case "+":
        console.log(`Resultado: ${a + b}`);
        break;
      case "-":
        console.log(`Resultado: ${a - b}`);
        break;
      case "*":
        console.log(`Resultado: ${a * b}`);
        break;
      case "/":
        console.log(`Resultado: ${a / b}`);
        break;
      default:
        console.log("Operador no válido.");
    }
  }
}

let calc = new Calculadora();
calc.operar(10, 5, "+"); // "Resultado: 15"
calc.operar(10, 5, "-"); // "Resultado: 5"
calc.operar(10, 5, "*"); // "Resultado: 50"
calc.operar(10, 5, "/"); // "Resultado: 2"

/*
  Notas adicionales:
  - **El polimorfismo permite definir una interfaz común con diferentes implementaciones** en clases derivadas.
  - **Facilita la extensibilidad del código**, haciendo que las funciones trabajen con múltiples tipos de objetos sin cambiar su lógica.
  - **JavaScript no soporta sobrecarga de funciones de forma nativa**, pero se puede simular mediante el manejo de parámetros opcionales.
  - **El polimorfismo de sobreescritura es ampliamente utilizado en herencia**, permitiendo que clases hijas personalicen métodos heredados.
  */
