// Uso de constantes estáticas en detalle
/*
Una constante estática en JavaScript es un tipo de atributo estático que representa un valor inmutable que pertenece a la clase, no a sus instancias. Se define usando la palabra clave `static` y la convención de uso en mayúsculas para constantes.

Estas constantes son útiles para representar valores que no deben cambiar, como configuraciones globales, valores predeterminados o constantes matemáticas.

Sintaxis:
class NombreClase {
  static CONSTANTE = valor;
}
*/

// Ejemplo 1: Definición de constantes estáticas
class Matematicas {
  static PI = 3.14159; // Constante para el valor de Pi
  static E = 2.71828; // Constante para el valor de Euler

  static mostrarConstantes() {
    console.log(`Valor de PI: ${this.PI}`);
    console.log(`Valor de Euler: ${this.E}`);
  }
}

// Usar constantes estáticas directamente desde la clase
console.log(Matematicas.PI); // 3.14159
console.log(Matematicas.E); // 2.71828

// Usar un método estático para mostrar valores
Matematicas.mostrarConstantes();
// "Valor de PI: 3.14159"
// "Valor de Euler: 2.71828"

// Ejemplo 2: Uso de constantes estáticas en configuración de aplicaciones
class Configuracion {
  static MAX_CONEXIONES = 10; // Constante que define el máximo de conexiones permitidas
  static TIEMPO_MAXIMO = 5000; // Constante para el tiempo máximo en milisegundos

  static mostrarConfiguracion() {
    console.log(`Máximo de conexiones: ${this.MAX_CONEXIONES}`);
    console.log(`Tiempo máximo permitido: ${this.TIEMPO_MAXIMO} ms`);
  }
}

// Usar las constantes directamente desde la clase
console.log(Configuracion.MAX_CONEXIONES); // 10
console.log(Configuracion.TIEMPO_MAXIMO); // 5000

Configuracion.mostrarConfiguracion();
// "Máximo de conexiones: 10"
// "Tiempo máximo permitido: 5000 ms"

// Ejemplo 3: Uso de constantes estáticas para valores compartidos
class Estado {
  static ACTIVO = "activo";
  static INACTIVO = "inactivo";
  static PENDIENTE = "pendiente";

  static mostrarEstados() {
    console.log(
      `Estados disponibles: ${this.ACTIVO}, ${this.INACTIVO}, ${this.PENDIENTE}`
    );
  }
}

// Usar las constantes para representar estados
console.log(Estado.ACTIVO); // "activo"
console.log(Estado.INACTIVO); // "inactivo"
console.log(Estado.PENDIENTE); // "pendiente"

Estado.mostrarEstados();
// "Estados disponibles: activo, inactivo, pendiente"

/*
  Notas adicionales:
  - **Acceso directo:** Las constantes estáticas se acceden usando el nombre de la clase, no requieren instancias.
  - **Valores inmutables:** Representan datos que no deben cambiar y son ideales para configuraciones o valores estándar.
  - **Métodos estáticos:** Las constantes estáticas suelen usarse junto con métodos estáticos para mantener la coherencia en la lógica compartida.
  - **Buenas prácticas:** Es una convención escribir nombres de constantes en mayúsculas para diferenciarlas de otros atributos.
  */
