// Definimos la función numeroATexto
function numeroATexto(numero) {
  if (numero === 0) {
    return "cero";
  } else if (numero === 1) {
    return "uno";
  } else if (numero === 2) {
    return "dos";
  } else if (numero === 3) {
    return "tres";
  } else if (numero === 4) {
    return "cuatro";
  } else if (numero === 5) {
    return "cinco";
  } else if (numero === 6) {
    return "seis";
  } else if (numero === 7) {
    return "siete";
  } else if (numero === 8) {
    return "ocho";
  } else if (numero === 9) {
    return "nueve";
  } else {
    return "Número fuera de rango";
  }
}

// Ejemplo de uso: convertir un número a texto
let numeroIngresado = 7; // Puedes cambiar este valor para probar con otros números
let texto = numeroATexto(numeroIngresado);
console.log(`El número ${numeroIngresado} se escribe como: ${texto}.`);

/* let numero = 2;

if( numero == 1 ){
    console.log("Número uno");
}
else if( numero == 2 ){
    console.log("Número dos");
}
else if( numero == 3 ){
    console.log("Número tres");
}
else if( numero == 4 ){
    console.log("Número cuatro");
}
else{
    console.log("Número desconocido");
} */
