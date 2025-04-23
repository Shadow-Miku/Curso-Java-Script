/*
Los parámetros en JavaScript permiten pasar información a funciones o métodos. Esto proporciona flexibilidad para reutilizar funciones con diferentes valores.

El método `call()` se usa para ejecutar una función en un contexto específico, permitiendo que un objeto reutilice métodos de otro objeto.

Sintaxis básica de parámetros en funciones:
function nombreFuncion(parametro1, parametro2) {
  // Código que utiliza los parámetros
}

Sintaxis básica de `call()`:
funcion.call(objeto, arg1, arg2, ...);
*/

// Ejemplo 1: Uso de parámetros en una función
function saludar(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Juan", 30); // "Hola, mi nombre es Juan y tengo 30 años."
saludar("Ana", 25); // "Hola, mi nombre es Ana y tengo 25 años."

// Ejemplo 2: Uso de call() para cambiar el contexto de this
let persona1 = { nombre: "Carlos", edad: 40 };
let persona2 = { nombre: "Laura", edad: 35 };

function presentar() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}

presentar.call(persona1); // "Hola, mi nombre es Carlos y tengo 40 años."
presentar.call(persona2); // "Hola, mi nombre es Laura y tengo 35 años."

// Ejemplo 3: Pasar parámetros a una función usando call()
function mostrarDatos(pais, profesion) {
  console.log(
    `${this.nombre} tiene ${this.edad} años, vive en ${pais} y trabaja como ${profesion}.`
  );
}

mostrarDatos.call(persona1, "México", "Ingeniero");
// "Carlos tiene 40 años, vive en México y trabaja como Ingeniero."

mostrarDatos.call(persona2, "España", "Diseñadora");
// "Laura tiene 35 años, vive en España y trabaja como Diseñadora."

// Ejemplo 4: Reutilización de métodos en distintos objetos con call()
let vehiculo = {
  tipo: "Automóvil",
  mostrarInfo: function (color, marca) {
    console.log(`Este ${this.tipo} es de color ${color} y marca ${marca}.`);
  },
};

let bicicleta = { tipo: "Bicicleta" };

vehiculo.mostrarInfo.call(bicicleta, "Rojo", "Trek");
// "Este Bicicleta es de color Rojo y marca Trek."

/*
  Notas adicionales:
  - Los parámetros permiten personalizar la ejecución de funciones según los valores pasados.
  - `call()` se usa para invocar una función con un contexto (`this`) diferente, permitiendo reutilizar métodos en distintos objetos.
  - Se pueden pasar múltiples argumentos a `call()`, lo que permite mayor flexibilidad en la ejecución de funciones.
  - `call()` es útil en herencia funcional para compartir propiedades y métodos sin duplicar código.
  */
