// Definimos la función numeroATexto
function numeroATexto(numero) {
  let texto;
  switch (numero) {
    case 0:
      texto = "cero";
      break;
    case 1:
      texto = "uno";
      break;
    case 2:
      texto = "dos";
      break;
    case 3:
      texto = "tres";
      break;
    case 4:
      texto = "cuatro";
      break;
    case 5:
      texto = "cinco";
      break;
    case 6:
      texto = "seis";
      break;
    case 7:
      texto = "siete";
      break;
    case 8:
      texto = "ocho";
      break;
    case 9:
      texto = "nueve";
      break;
    default:
      texto = "Número fuera de rango";
      break;
  }
  return texto;
}

// Ejemplo de uso: convertir un número a texto
let numeroIngresado = 7; // Puedes cambiar este valor para probar con otros números
let texto = numeroATexto(numeroIngresado);
console.log(`El número ${numeroIngresado} se escribe como: ${texto}.`);

/* let numero = 1;

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';                
}

console.log(numeroTexto); */
