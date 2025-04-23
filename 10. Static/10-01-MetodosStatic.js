/*
Los **métodos estáticos** en JavaScript son aquellos que pertenecen a la clase en lugar de a las instancias de la clase. Esto significa que se pueden llamar directamente en la clase, sin necesidad de crear una instancia de esta.

Los métodos estáticos se definen usando la palabra clave `static` y son útiles para crear utilidades o funciones que no dependen de los datos de instancias específicas de la clase.

Sintaxis básica:
class NombreClase {
  static nombreMetodo() {
    // Código del método estático
  }
}
*/

// Ejemplo 1: Método estático básico
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }
}

// Llamar a los métodos estáticos directamente en la clase
console.log(Calculadora.sumar(10, 5)); // 15
console.log(Calculadora.restar(10, 5)); // 5

// No es necesario crear una instancia de la clase para usar los métodos estáticos
let calculadora = new Calculadora();
// console.log(calculadora.sumar(10, 5)); // Esto daría un error, ya que los métodos estáticos no son accesibles desde las instancias

// Ejemplo 2: Uso combinado de métodos estáticos y de instancia
class Conversor {
  static aDolares(pesos, tasaDeCambio) {
    return pesos / tasaDeCambio;
  }

  static aPesos(dolares, tasaDeCambio) {
    return dolares * tasaDeCambio;
  }

  mostrarMensaje() {
    console.log("Este es un método de instancia, no estático.");
  }
}

// Uso de métodos estáticos directamente en la clase
console.log(Conversor.aDolares(1000, 20)); // 50
console.log(Conversor.aPesos(50, 20)); // 1000

// Crear una instancia para acceder a métodos no estáticos
let conversor = new Conversor();
conversor.mostrarMensaje(); // "Este es un método de instancia, no estático."

// Ejemplo 3: Métodos estáticos como utilidades compartidas
class Utilidades {
  static generarId() {
    return Math.floor(Math.random() * 10000);
  }

  static formatearFecha(fecha) {
    return fecha.toISOString().split("T")[0];
  }
}

// Usar los métodos estáticos como herramientas utilitarias
console.log(Utilidades.generarId()); // Genera un ID aleatorio, por ejemplo: 8347
console.log(Utilidades.formatearFecha(new Date())); // "2025-04-21"

/*
  Notas adicionales:
  - **Los métodos estáticos pertenecen a la clase, no a las instancias.** Por lo tanto, se llaman directamente en la clase.
  - **No tienen acceso a las propiedades o métodos de instancia.** Sin embargo, pueden usar otras propiedades o métodos estáticos de la clase.
  - **Los métodos estáticos son ideales para crear herramientas compartidas, como conversores, cálculos o generadores de valores.**
  - **Intentar acceder a un método estático desde una instancia dará un error.** Solo son accesibles directamente desde la clase.
  */
