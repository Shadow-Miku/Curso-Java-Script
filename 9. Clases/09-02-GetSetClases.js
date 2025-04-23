/*
Los métodos `get` y `set` en las clases de JavaScript permiten definir propiedades computadas y controlar el acceso y modificación de los valores de un objeto.

- `get`: Se usa para recuperar el valor de una propiedad y se comporta como si fuera un atributo normal, aunque internamente ejecuta una función.
- `set`: Se usa para modificar el valor de una propiedad, permitiendo validaciones o lógica antes de asignar el nuevo valor.

Sintaxis dentro de una clase:
class NombreClase {
  constructor(parametro) {
    this._propiedad = parametro; // Se usa un guion bajo para diferenciar la propiedad interna
  }

  get propiedad() {
    // Código para devolver el valor de la propiedad
  }

  set propiedad(valor) {
    // Código para modificar el valor de la propiedad con validaciones
  }
}
*/

// Ejemplo 1: Uso de get en una clase
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this._edad = edad; // Se usa `_edad` para diferenciar la propiedad interna
  }

  get edad() {
    return `${this._edad} años`;
  }
}

let persona1 = new Persona("Juan", 30);
console.log(persona1.edad); // "30 años"

// Ejemplo 2: Uso de set en una clase con validación
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

// Ejemplo 3: Uso combinado de get y set en una clase
class Rectangulo {
  constructor(ancho, alto) {
    this._ancho = ancho;
    this._alto = alto;
  }

  get area() {
    return this._ancho * this._alto;
  }

  set dimensiones(valores) {
    let [nuevoAncho, nuevoAlto] = valores.split("x").map(Number);
    if (!isNaN(nuevoAncho) && !isNaN(nuevoAlto)) {
      this._ancho = nuevoAncho;
      this._alto = nuevoAlto;
    } else {
      console.log("Dimensiones inválidas.");
    }
  }
}

let rectangulo1 = new Rectangulo(5, 10);
console.log(rectangulo1.area); // 50

rectangulo1.dimensiones = "8x4"; // Modificar dimensiones con el setter
console.log(rectangulo1.area); // 32

/*
  Notas adicionales:
  - El método `get` se usa para definir propiedades calculadas que parecen atributos normales, pero ejecutan una función.
  - El método `set` se usa para modificar valores con validaciones antes de asignarlos, protegiendo la integridad de los datos.
  - Se recomienda utilizar `_propiedad` para la propiedad interna en setters y getters, evitando conflictos con el acceso directo a la propiedad.
  - Los getters y setters ayudan a mejorar la encapsulación en las clases, haciendo que el acceso y modificación de propiedades sean más controlados.
  */
