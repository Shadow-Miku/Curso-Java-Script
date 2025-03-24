// Obtenemos el mes actual
let fechaActual = new Date();
let mesActual = fechaActual.getMonth() + 1; // getMonth() devuelve un valor entre 0 (enero) y 11 (diciembre), así que sumamos 1

// Definimos la función determinarEstacion con switch
function determinarEstacion(mes) {
  let estacion;
  switch (mes) {
    case 3:
    case 4:
    case 5:
      estacion = "Primavera";
      break;
    case 6:
    case 7:
    case 8:
      estacion = "Verano";
      break;
    case 9:
    case 10:
    case 11:
      estacion = "Otoño";
      break;
    case 12:
    case 1:
    case 2:
      estacion = "Invierno";
      break;
    default:
      estacion = "Mes no válido";
      break;
  }
  return estacion;
}

// Determinamos la estación según el mes actual
let estacionActual = determinarEstacion(mesActual);
console.log(
  `El mes actual (${mesActual}) pertenece a la estación: ${estacionActual}.`
);

/* let mes = 11;
let estacion = "Estación desconocida";

switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "Invierno";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  default:
    estacion = "Valor incorrecto";
}
console.log(estacion);
 */
