/*
### 1. ¿Qué son las funciones Callback?
Las **funciones callback** son funciones que se pasan como argumentos a otras funciones y se ejecutan posteriormente. Se utilizan para manejar eventos, procesos asincrónicos y lógica personalizada.

Sintaxis básica:
function realizarAccion(callback) {
  console.log("Ejecutando acción...");
  callback();
}

realizarAccion(() => console.log("Callback ejecutado."));
*/

// Ejemplo 1: Uso básico de una función callback
function procesarDatos(nombre, callback) {
  console.log(`Procesando datos para ${nombre}...`);
  callback();
}

procesarDatos("Miyuki", () => console.log("¡Datos procesados correctamente!"));
// "Procesando datos para Miyuki..."
// "¡Datos procesados correctamente!"

// Ejemplo 2: Callback con parámetros
function operacionMatematica(a, b, operacion) {
  console.log(`Operando con ${a} y ${b}`);
  console.log("Resultado:", operacion(a, b));
}

// Pasar diferentes funciones como callback
operacionMatematica(10, 5, (x, y) => x + y); // Suma
operacionMatematica(10, 5, (x, y) => x - y); // Resta

/*
  ### 2. ¿Qué es setTimeout?
  `setTimeout` permite ejecutar una función después de un tiempo determinado (en milisegundos). Se usa para diferir la ejecución de código.
  
  Sintaxis:
  setTimeout(funcion, tiempo);
  */

// Ejemplo 3: Uso de setTimeout
console.log("Inicio del programa...");
setTimeout(() => console.log("Mensaje retrasado 3 segundos"), 3000);
console.log("Fin del programa.");
// Se ejecutará el mensaje después de 3 segundos, sin bloquear la ejecución del resto del código.

/*
  ### 3. ¿Qué es setInterval?
  `setInterval` ejecuta una función repetidamente en intervalos de tiempo específicos.
  
  Sintaxis:
  setInterval(funcion, tiempo);
  */

// Ejemplo 4: Uso de setInterval
let contador = 0;
let intervalo = setInterval(() => {
  contador++;
  console.log(`Contador: ${contador}`);
  if (contador === 5) {
    clearInterval(intervalo); // Detener intervalo después de 5 ejecuciones
  }
}, 1000);

/*
  ### Cuándo usar cada uno:
  ✔ **Callback:** Cuando necesitas ejecutar una función después de otra o manejar procesos asincrónicos.
  ✔ **setTimeout:** Para ejecutar código después de un período de tiempo sin bloquear la ejecución.
  ✔ **setInterval:** Para repetir una acción en intervalos regulares de tiempo.
  
  ### Conclusión:
  Las **funciones callback** permiten modular el código y manejar lógica asincrónica. `setTimeout` y `setInterval` son esenciales para programar eventos temporales en JavaScript.
  */
