/*
El método `set` en JavaScript se usa dentro de los objetos para definir una propiedad de manera personalizada cuando se asigna un nuevo valor. 
Se usa en objetos literales, en la sintaxis de clases o mediante `Object.defineProperty()`.

Cuando se usa `set`, se ejecuta una función especial que permite controlar la modificación de la propiedad antes de asignar el nuevo valor.

Sintaxis dentro de objetos literales:
set nombrePropiedad(valor) {
  // Código que define cómo establecer el valor de la propiedad
}

Sintaxis dentro de clases:
class NombreClase {
  set nombrePropiedad(valor) {
    // Código que define cómo establecer el valor de la propiedad
  }
}
*/

// Ejemplo 1: Uso de set en un objeto literal
let persona = {
  nombre: "Juan",
  apellido: "Pérez",

  get nombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  },

  set nombreCompleto(nuevoNombre) {
    let partes = nuevoNombre.split(" "); // Separar nombre y apellido
    this.nombre = partes[0]; // Asignar la primera parte al nombre
    this.apellido = partes[1] || ""; // Asignar la segunda parte al apellido
  },
};

persona.nombreCompleto = "Carlos García"; // Establecer un nuevo nombre completo
console.log(persona.nombreCompleto); // "Carlos García"
// Aunque se asigna `nombreCompleto`, internamente modifica `nombre` y `apellido`

// Ejemplo 2: Uso de set dentro de una clase
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  get area() {
    return this.ancho * this.alto;
  }

  set dimensiones(valores) {
    let [nuevoAncho, nuevoAlto] = valores.split("x").map(Number);
    if (!isNaN(nuevoAncho) && !isNaN(nuevoAlto)) {
      this.ancho = nuevoAncho;
      this.alto = nuevoAlto;
    } else {
      console.log("Dimensiones inválidas.");
    }
  }
}

let rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.area); // 50, la propiedad `area` calcula automáticamente el área

rectangulo.dimensiones = "8x4"; // Establecer nuevas dimensiones
console.log(rectangulo.area); // 32, la propiedad `area` recalculada con nuevos valores

// Ejemplo 3: Uso de Object.defineProperty() para definir un setter
let usuario = {
  nombre: "Ana",
  edad: 25,
};

Object.defineProperty(usuario, "edad", {
  set: function (nuevaEdad) {
    if (nuevaEdad > 0) {
      this._edad = nuevaEdad; // `_edad` es una propiedad interna
    } else {
      console.log("La edad debe ser mayor que 0.");
    }
  },
  get: function () {
    return this._edad; // Devolver el valor interno de `_edad`
  },
});

usuario.edad = 30; // Asignar nueva edad válida
console.log(usuario.edad); // 30

usuario.edad = -5; // Intentar asignar una edad inválida
// "La edad debe ser mayor que 0."

/*
  Notas adicionales:
  - Un método `set` se usa para definir cómo modificar una propiedad antes de asignar su valor.
  - Se accede a los setters como si fueran propiedades normales, sin necesidad de usar paréntesis (`()`) como en una función.
  - Los setters pueden ser útiles para validar datos antes de almacenarlos, asegurando que las modificaciones sean correctas.
  - Es recomendable usar una propiedad interna (`_propiedad`) en los setters cuando se usa `Object.defineProperty()`, para evitar acceso directo a la propiedad original y permitir validaciones.
  */
