/*
🔹 ¿Qué es `await timeout`?

`await` por sí solo no puede pausar la ejecución con `setTimeout` directamente, porque `setTimeout` **no devuelve una promesa**. Para poder "esperar" un tiempo con `await`, necesitamos envolver `setTimeout` en una **promesa**.

Esto nos permite simular pausas o "esperas" en una función `async`, algo útil por ejemplo para:
- Simular procesos de carga
- Hacer retrasos entre peticiones
- Esperar antes de continuar con otra acción

📌 El truco está en crear una función `delay` o `esperar` que devuelva una promesa resuelta tras cierto tiempo.
*/

// ✅ Ejemplo 1: Función que usa setTimeout con Promesa
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Esperado ${ms} milisegundos`);
    }, ms);
  });
}

async function ejecutarProceso() {
  console.log("Inicio del proceso...");
  const resultado = await esperar(2000); // espera 2 segundos
  console.log(resultado);
  console.log("Proceso finalizado.");
}

ejecutarProceso();

/*
  🧠 ¿Qué está pasando aquí?
  
  1. `esperar(2000)` crea una promesa que se resuelve luego de 2 segundos.
  2. El `await` pausa la ejecución hasta que esa promesa se resuelva.
  3. Luego continúa con el resto del código.
  
  🔁 Esto no bloquea el hilo principal del navegador, porque `setTimeout` es asincrónico y sigue trabajando en segundo plano.
  */

// ✅ Ejemplo 2: Repetir una acción con pausas entre ejecuciones
async function mostrarMensajesConEspera() {
  const mensajes = ["Hola", "¿Cómo estás?", "Espero que bien", "Adiós 👋"];

  for (let mensaje of mensajes) {
    console.log(mensaje);
    await esperar(1000); // pausa 1 segundo entre cada mensaje
  }

  console.log("Fin de los mensajes.");
}

mostrarMensajesConEspera();

/*
  🔍 Esto simula una salida como si alguien estuviera escribiendo los mensajes uno por uno, con pausas.
  
  📦 Esta técnica es súper útil para:
  - Interfaces de usuario con delays
  - Animaciones temporizadas
  - Test de comportamiento asíncrono
  */

// ✅ Ejemplo 3: Manejo de errores en delays usando reject
function esperarConError(ms, fallar = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fallar) {
        reject("⛔ Ocurrió un error durante la espera");
      } else {
        resolve(`✅ Espera completada tras ${ms} ms`);
      }
    }, ms);
  });
}

async function procesoConValidacion() {
  try {
    const respuesta = await esperarConError(1500, false);
    console.log(respuesta);
  } catch (err) {
    console.error("Error atrapado:", err);
  }
}

procesoConValidacion();

/*
  📚 Resumen completo:
  
  🔹 `await` no se puede usar directamente con `setTimeout`, pero sí con funciones que devuelvan promesas.
  🔹 Crear una función `esperar(ms)` usando `new Promise()` + `setTimeout` es la forma más común.
  🔹 Sirve para crear delays, animaciones, secuencias, temporizadores, etc.
  🔹 Puedes manejar errores con `reject` y `try...catch`, igual que cualquier otra promesa.
  
  ✅ Bonus: Puedes hacer que una función se comporte como un temporizador con `await`.
  
  async function temporizador(ms) {
    console.log("Esperando...");
    await esperar(ms);
    console.log(`¡Pasaron ${ms} milisegundos!`);
  }
  temporizador(3000);
  */
