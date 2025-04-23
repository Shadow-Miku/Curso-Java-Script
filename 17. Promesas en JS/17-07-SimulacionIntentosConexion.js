function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simula una función que falla con probabilidad
function intentarConexion() {
  return new Promise((resolve, reject) => {
    const exito = Math.random() > 0.7; // 30% de probabilidad de éxito
    setTimeout(() => {
      exito
        ? resolve("📶 Conectado exitosamente")
        : reject("💥 Error de conexión");
    }, 500);
  });
}

async function conectarConReintentos(maxIntentos = 3) {
  for (let intento = 1; intento <= maxIntentos; intento++) {
    try {
      console.log(`🔁 Intento ${intento} de ${maxIntentos}...`);
      const resultado = await intentarConexion();
      console.log(resultado);
      return; // salir si tiene éxito
    } catch (error) {
      console.warn(error);
      if (intento < maxIntentos) {
        console.log("🔄 Reintentando en 2 segundos...");
        await esperar(2000);
      } else {
        console.error("❌ Todos los intentos fallaron.");
      }
    }
  }
}

conectarConReintentos();
