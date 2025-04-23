/*
En JavaScript, las clases pueden tener tanto **atributos estáticos** como **atributos no estáticos**.

1. **Atributos estáticos (`static`)**:
   - Pertenecen a la clase y no a las instancias.
   - Se acceden directamente desde la clase.
   - Son útiles para valores o configuraciones que son comunes a todas las instancias.

2. **Atributos no estáticos**:
   - Pertenecen a las instancias de la clase.
   - Se acceden a través de las instancias.
   - Representan datos únicos o específicos para cada instancia.

Sintaxis:
class NombreClase {
  static atributoEstatico = "Valor estático";
  atributoNoEstatico = "Valor no estático";
}
*/

// Ejemplo 1: Definición y acceso a atributos estáticos y no estáticos
class MiClase {
  static atributoEstatico = "Este es un atributo estático";
  atributoNoEstatico = "Este es un atributo no estático";

  mostrarAtributos() {
    console.log(`Atributo estático: ${MiClase.atributoEstatico}`);
    console.log(`Atributo no estático: ${this.atributoNoEstatico}`);
  }
}

// Acceso al atributo estático directamente desde la clase
console.log(MiClase.atributoEstatico); // "Este es un atributo estático"

// Acceso al atributo no estático mediante una instancia de la clase
let instancia = new MiClase();
console.log(instancia.atributoNoEstatico); // "Este es un atributo no estático"

// Uso de método para mostrar ambos atributos
instancia.mostrarAtributos();
// "Atributo estático: Este es un atributo estático"
// "Atributo no estático: Este es un atributo no estático"

// Ejemplo 2: Modificación de atributos estáticos y no estáticos
class Producto {
  static impuestos = 16; // Atributo estático común para todos los productos
  precioBase;

  constructor(precioBase) {
    this.precioBase = precioBase; // Atributo no estático único para cada producto
  }

  calcularPrecioConImpuestos() {
    return this.precioBase + (this.precioBase * Producto.impuestos) / 100;
  }
}

let producto1 = new Producto(100);
let producto2 = new Producto(200);

// Calcular precio con impuestos para diferentes instancias
console.log(producto1.calcularPrecioConImpuestos()); // 116
console.log(producto2.calcularPrecioConImpuestos()); // 232

// Modificar el atributo estático y recalcular
Producto.impuestos = 20;
console.log(producto1.calcularPrecioConImpuestos()); // 120
console.log(producto2.calcularPrecioConImpuestos()); // 240

// Ejemplo 3: Diferencias entre atributos estáticos y no estáticos
class Usuario {
  static cantidadUsuarios = 0; // Atributo estático para contar usuarios
  nombre;

  constructor(nombre) {
    this.nombre = nombre; // Atributo no estático único para cada usuario
    Usuario.cantidadUsuarios++; // Incrementar el contador estático
  }

  mostrarUsuario() {
    console.log(`Nombre: ${this.nombre}`);
  }

  static mostrarCantidadUsuarios() {
    console.log(`Cantidad de usuarios: ${Usuario.cantidadUsuarios}`);
  }
}

// Crear instancias de Usuario
let usuario1 = new Usuario("Ana");
let usuario2 = new Usuario("Carlos");

usuario1.mostrarUsuario(); // "Nombre: Ana"
usuario2.mostrarUsuario(); // "Nombre: Carlos"

// Acceder al atributo estático desde la clase
Usuario.mostrarCantidadUsuarios(); // "Cantidad de usuarios: 2"

/*
  Notas adicionales:
  - **Atributos estáticos (`static`)** pertenecen a la clase y no a sus instancias. Son compartidos y se acceden directamente desde la clase.
  - **Atributos no estáticos** pertenecen a las instancias y son únicos para cada objeto creado.
  - Los atributos estáticos son ideales para valores globales o contadores, mientras que los no estáticos representan propiedades específicas de cada instancia.
  - Se debe usar `this` para acceder a atributos no estáticos dentro de métodos de instancia, y el nombre de la clase para atributos estáticos.
  */
