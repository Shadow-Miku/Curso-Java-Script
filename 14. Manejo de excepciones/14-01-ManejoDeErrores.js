/*
El **manejo de excepciones** en JavaScript permite capturar y gestionar errores que ocurren durante la ejecución del código. Esto mejora la estabilidad de una aplicación y evita fallos inesperados.

Para manejar excepciones, JavaScript usa los bloques `try`, `catch`, `finally`, y la palabra clave `throw` para generar errores personalizados.

Sintaxis básica:
try {
  // Código que puede generar una excepción
} catch (error) {
  // Código que maneja el error
} finally {
  // Código que siempre se ejecuta, con o sin error (opcional)
}
*/

// Ejemplo 1: Uso básico de try y catch
try {
  let resultado = 10 / 0; // División por cero
  console.log(resultado); // Infinity, pero no genera un error en JS

  let numero = undefined;
  console.log(numero.toFixed(2)); // Aquí se genera un error
} catch (error) {
  console.log("Se produjo un error:", error.message);
}

// Ejemplo 2: Uso de throw para generar errores personalizados
function validarEdad(edad) {
  if (edad < 18) {
    throw new Error("La edad debe ser mayor o igual a 18.");
  }
  console.log("Edad válida.");
}

try {
  validarEdad(16); // Esto generará una excepción
} catch (error) {
  console.log("Error capturado:", error.message);
}

// Ejemplo 3: Uso de finally para ejecutar código siempre
try {
  console.log("Intentando ejecutar código...");
  let resultado = 5 / 1;
  console.log("Resultado:", resultado);
} catch (error) {
  console.log("Se produjo un error.");
} finally {
  console.log("Este código siempre se ejecuta.");
}

// Ejemplo 4: Captura de errores en funciones asincrónicas
async function obtenerDatos() {
  try {
    let respuesta = await fetch("https://api.ejemplo.com/datos");
    let datos = await respuesta.json();
    console.log("Datos obtenidos:", datos);
  } catch (error) {
    console.log("Error al obtener datos:", error.message);
  }
}

obtenerDatos();

/*
  Notas adicionales:
  - **El bloque `try` contiene el código que puede generar errores** durante la ejecución.
  - **El bloque `catch` captura la excepción y permite manejar el error** para evitar que la ejecución se detenga inesperadamente.
  - **El bloque `finally` siempre se ejecuta**, independientemente de si ocurrió un error o no, útil para cerrar conexiones o liberar recursos.
  - **La palabra clave `throw` permite generar errores personalizados**, lo que es útil para validar condiciones específicas.
  - **El manejo de excepciones también es importante en funciones asincrónicas**, especialmente cuando se trabaja con `fetch` o promesas.
  */
