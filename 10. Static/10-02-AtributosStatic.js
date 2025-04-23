/*
Los **atributos estáticos** en JavaScript son propiedades de una clase que pertenecen a la clase misma, en lugar de a las instancias de la clase. Esto significa que se pueden acceder directamente desde la clase sin necesidad de crear una instancia.

Los atributos estáticos se definen usando la palabra clave `static`. Son útiles para almacenar valores o configuraciones que son comunes a todas las instancias de la clase.

Sintaxis básica:
class NombreClase {
  static nombreAtributo = valor;
}
*/

// Ejemplo 1: Definición de un atributo estático
class Configuracion {
  static URL_BASE = "https://api.ejemplo.com";
  static MAX_CONEXIONES = 5;
}

// Acceder a los atributos estáticos directamente desde la clase
console.log(Configuracion.URL_BASE); // "https://api.ejemplo.com"
console.log(Configuracion.MAX_CONEXIONES); // 5

// No es necesario crear una instancia de la clase para acceder a los atributos estáticos
let configuracion = new Configuracion();
// console.log(configuracion.URL_BASE); // Esto daría un error, ya que los atributos estáticos no son accesibles desde las instancias

// Ejemplo 2: Uso combinado de atributos estáticos y métodos estáticos
class Utilidades {
  static contador = 0;

  static incrementarContador() {
    this.contador++;
  }

  static obtenerContador() {
    return this.contador;
  }
}

// Modificar y acceder al atributo estático
Utilidades.incrementarContador();
Utilidades.incrementarContador();
console.log(Utilidades.obtenerContador()); // 2

// Ejemplo 3: Atributos estáticos como configuraciones compartidas
class Aplicacion {
  static nombre = "Mi Aplicación";
  static version = "1.0.0";

  static mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Versión: ${this.version}`);
  }
}

// Uso de atributos y métodos estáticos
Aplicacion.mostrarInfo(); // "Nombre: Mi Aplicación, Versión: 1.0.0"

// Ejemplo 4: Atributos estáticos en herencia
class Persona {
  static especie = "Humano";

  static mostrarEspecie() {
    console.log(`Especie: ${this.especie}`);
  }
}

class Empleado extends Persona {
  static especie = "Empleado Corporativo";
}

// Acceso a atributos estáticos en clases heredadas
Persona.mostrarEspecie(); // "Especie: Humano"
Empleado.mostrarEspecie(); // "Especie: Empleado Corporativo"

/*
  Notas adicionales:
  - **Los atributos estáticos pertenecen a la clase, no a las instancias.** Se acceden directamente desde la clase y no están disponibles en las instancias.
  - **Son útiles para valores constantes o configuraciones compartidas** entre todas las instancias de una clase.
  - **Los atributos estáticos pueden ser heredados y sobrescritos en clases derivadas**, lo que permite personalizar su valor en clases hijas.
  - **No se pueden acceder a los atributos estáticos usando `this` dentro de métodos de instancia.** Solo son accesibles desde la clase.
  */
