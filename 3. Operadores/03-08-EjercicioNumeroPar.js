// Definimos la función esPar
function esPar(numero) {
  // Utilizamos el operador de módulo (%) para verificar si el número es divisible por 2
  return numero % 2 === 0;
}

// Ejemplo de uso: verificar si un número ingresado es par
let numeroIngresado = 4; // Puedes cambiar este número para probar con otros valores
if (esPar(numeroIngresado)) {
  console.log(`${numeroIngresado} es un número par.`);
} else {
  console.log(`${numeroIngresado} no es un número par.`);
}

/* let a = 9;

if (a % 2 == 0) {
  console.log("Es un número par");
} else {
  console.log("Es un número impar");
} */
