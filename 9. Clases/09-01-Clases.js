/*
Las clases en JavaScript son una forma más estructurada y clara de crear objetos y definir la lógica de su comportamiento. Fueron introducidas en ES6 y permiten crear objetos con propiedades y métodos utilizando una sintaxis más parecida a la programación orientada a objetos.

Sintaxis básica:
class NombreClase {
  constructor(parametro1, parametro2) {
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }

  metodo() {
    // Código del método
  }
}

Las clases permiten reutilizar código mediante la creación de instancias de objetos y soportan herencia entre clases.
*/

// Ejemplo 1: Definición de una clase con un constructor
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // Asignar el parámetro `nombre` a la propiedad del objeto
    this.edad = edad; // Asignar el parámetro `edad` a la propiedad del objeto
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear instancias de la clase `Persona`
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("Ana", 25);

persona1.saludar(); // "Hola, mi nombre es Juan y tengo 30 años."
persona2.saludar(); // "Hola, mi nombre es Ana y tengo 25 años."

// Ejemplo 2: Herencia entre clases
class Empleado extends Persona {
  constructor(nombre, edad, cargo) {
    super(nombre, edad); // Llamar al constructor de la clase `Persona`
    this.cargo = cargo; // Asignar la propiedad específica de `Empleado`
  }

  presentarTrabajo() {
    console.log(`${this.nombre} trabaja como ${this.cargo}.`);
  }
}

// Crear instancia de `Empleado`
let empleado1 = new Empleado("Carlos", 40, "Ingeniero");

empleado1.saludar(); // "Hola, mi nombre es Carlos y tengo 40 años."
empleado1.presentarTrabajo(); // "Carlos trabaja como Ingeniero."

// Ejemplo 3: Uso de getters y setters en clases
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this._precio = precio;
  }

  get precio() {
    return `$${this._precio.toFixed(2)}`;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this._precio = nuevoPrecio;
    } else {
      console.log("El precio debe ser mayor a 0.");
    }
  }
}

let producto1 = new Producto("Laptop", 1000);
console.log(producto1.precio); // "$1000.00"

producto1.precio = 1200; // Modificar el precio con el setter
console.log(producto1.precio); // "$1200.00"

producto1.precio = -500; // Intentar asignar un precio inválido
// "El precio debe ser mayor a 0."

/*
  Notas adicionales:
  - El método `constructor()` se ejecuta automáticamente al crear una instancia de la clase.
  - La palabra clave `extends` permite que una clase herede propiedades y métodos de otra clase.
  - `super()` se usa dentro del constructor de una clase derivada para llamar al constructor de la clase padre.
  - Los métodos `get` y `set` permiten definir propiedades calculadas y validar asignaciones de valores en clases.
  - Las clases mejoran la estructura del código en comparación con las funciones constructoras tradicionales.
  */
