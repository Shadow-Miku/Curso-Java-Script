/*
Un objeto en JavaScript es una colección de propiedades, donde cada propiedad es una combinación de un nombre (clave) y un valor. 
Los objetos son una parte fundamental de JavaScript y permiten representar datos estructurados y modelar entidades del mundo real.

Sintaxis:
let nombreObjeto = {
  clave1: valor1,
  clave2: valor2,
  ...
};

Los valores de las propiedades pueden ser cualquier tipo de dato, como números, cadenas, funciones e incluso otros objetos.
*/

// Ejemplo 1: Crear y acceder a un objeto
let persona = {
  nombre: "Aldo",
  edad: 30,
  ocupacion: "Ingeniero",
};
console.log(persona); // { nombre: "Aldo", edad: 30, ocupacion: "Ingeniero" }
console.log(persona.nombre); // "Aldo", acceso a la propiedad `nombre`
console.log(persona["edad"]); // 30, acceso a la propiedad `edad` usando notación de corchetes

// Ejemplo 2: Modificar y agregar propiedades de un objeto
persona.edad = 31; // Modificar la propiedad `edad`
persona.correo = "aldo@gmail.com"; // Agregar una nueva propiedad `correo`
console.log(persona); // { nombre: "Aldo", edad: 31, ocupacion: "Ingeniero", correo: "aldo@gmail.com" }

// Ejemplo 3: Eliminar una propiedad de un objeto
delete persona.ocupacion; // Eliminar la propiedad `ocupacion`
console.log(persona); // { nombre: "Aldo", edad: 31, correo: "aldo@gmail.com" }

// Ejemplo 4: Métodos en objetos
let calculadora = {
  sumar: function (a, b) {
    return a + b;
  },
  restar(a, b) {
    return a - b; // Otra forma de declarar métodos en un objeto
  },
};
console.log(calculadora.sumar(5, 3)); // 8, invocar el método `sumar`
console.log(calculadora.restar(5, 3)); // 2, invocar el método `restar`

// Ejemplo 5: Recorrer propiedades de un objeto
let usuario = {
  nombre: "Ana",
  edad: 25,
  pais: "México",
};

for (let clave in usuario) {
  console.log(`${clave}: ${usuario[clave]}`);
}
// Muestra cada propiedad y su valor: "nombre: Ana", "edad: 25", "pais: México"

// Ejemplo 6: Uso de objetos como parámetros de funciones
function mostrarInformacion(persona) {
  console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
}
mostrarInformacion({ nombre: "Carlos", edad: 40 }); // "Nombre: Carlos, Edad: 40"

// Ejemplo 7: Clonar un objeto
let original = { a: 1, b: 2 };
let copia = { ...original }; // Clonar el objeto usando el operador spread
console.log(copia); // { a: 1, b: 2 }

// Ejemplo 8: Uso de Object.keys(), Object.values() y Object.entries()
let producto = {
  nombre: "Laptop",
  precio: 1000,
  disponible: true,
};
console.log(Object.keys(producto)); // ["nombre", "precio", "disponible"], claves del objeto
console.log(Object.values(producto)); // ["Laptop", 1000, true], valores del objeto
console.log(Object.entries(producto)); // [["nombre", "Laptop"], ["precio", 1000], ["disponible", true]], pares clave-valor

/*
  Notas adicionales:
  - Los objetos son dinámicos, lo que significa que puedes agregar, modificar o eliminar propiedades después de crearlos.
  - Los objetos pueden contener métodos (funciones) que permiten definir comportamiento dentro del objeto.
  - Se pueden recorrer las propiedades de un objeto usando el ciclo `for...in`.
  - Métodos como `Object.keys()`, `Object.values()` y `Object.entries()` son útiles para trabajar con las propiedades y valores de un objeto.
  */
