function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function obtenerDatosSecuencialmente() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];

  for (const url of urls) {
    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(`🔹 Datos de ${url}:`, data);

      // Esperar 2 segundos antes de la siguiente petición
      await esperar(2000);
    } catch (error) {
      console.error("⛔ Error al obtener datos:", error);
    }
  }

  console.log("✅ Todas las peticiones han terminado.");
}

obtenerDatosSecuencialmente();
