/*
El método `get` en JavaScript se usa dentro de los objetos para definir una propiedad que se calcula o devuelve dinámicamente en lugar de almacenarse directamente. Se utiliza dentro de `Object.defineProperty()` o en la sintaxis de clases con `get`.

Cuando se usa `get`, la propiedad se comporta como si fuera un atributo normal, pero en realidad ejecuta una función que devuelve un valor.

Sintaxis dentro de objetos literales:
get nombrePropiedad() {
  // Código que devuelve un valor
}

Sintaxis dentro de clases:
class NombreClase {
  get nombrePropiedad() {
    // Código que devuelve un valor
  }
}
*/

// Ejemplo 1: Uso de get en un objeto literal
let persona = {
  nombre: "Juan",
  apellido: "Pérez",

  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },
};

console.log(persona.nombreCompleto); // "Juan Pérez"
// Aunque `nombreCompleto` se accede como una propiedad, internamente ejecuta una función

// Ejemplo 2: Uso de get dentro de una clase
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  get area() {
    return this.ancho * this.alto;
  }
}

let rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.area); // 50, la propiedad `area` calcula automáticamente el área

// Ejemplo 3: Uso de Object.defineProperty() para definir un getter
let usuario = {
  nombre: "Ana",
  edad: 25,
};

Object.defineProperty(usuario, "descripcion", {
  get: function () {
    return `${this.nombre} tiene ${this.edad} años.`;
  },
});

console.log(usuario.descripcion); // "Ana tiene 25 años."

/*
  Notas adicionales:
  - Un método `get` se usa para definir propiedades que se calculan dinámicamente en lugar de almacenarse en la memoria.
  - Se accede a los getters como si fueran propiedades normales, sin necesidad de usar paréntesis (`()`) como en una función.
  - Los getters pueden ser útiles para proteger datos internos y proporcionar una interfaz más estructurada para acceder a valores calculados.
  - Se recomienda evitar la ejecución de código con efectos secundarios dentro de un `get`, ya que los getters no están diseñados para modificar el estado del objeto.
  */
