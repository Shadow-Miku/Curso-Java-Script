// Obtenemos el mes actual
let fechaActual = new Date();
let mesActual = fechaActual.getMonth() + 1; // getMonth() devuelve un valor entre 0 (enero) y 11 (diciembre), así que sumamos 1

// Definimos la función determinarEstacion
function determinarEstacion(mes) {
  if (mes === 3 || mes === 4 || mes === 5) {
    return "Primavera";
  } else if (mes === 6 || mes === 7 || mes === 8) {
    return "Verano";
  } else if (mes === 9 || mes === 10 || mes === 11) {
    return "Otoño";
  } else if (mes === 12 || mes === 1 || mes === 2) {
    return "Invierno";
  } else {
    return "Mes no válido";
  }
}

// Determinamos la estación según el mes actual
let estacionActual = determinarEstacion(mesActual);
console.log(
  `El mes actual (${mesActual}) pertenece a la estación: ${estacionActual}.`
);

// Definimos la función determinarEstacion
/* function determinarEstacion(mes) {
    if (mes === 3 || mes === 4 || mes === 5) {
        return "Primavera";
    } else if (mes === 6 || mes === 7 || mes === 8) {
        return "Verano";
    } else if (mes === 9 || mes === 10 || mes === 11) {
        return "Otoño";
    } else if (mes === 12 || mes === 1 || mes === 2) {
        return "Invierno";
    } else {
        return "Mes no válido";
    }
} */

// Ejemplo de uso: determinar la estación según el mes ingresado
//let mesIngresado = 4; // Puedes cambiar este valor para probar con otros meses
//let estacion = determinarEstacion(mesIngresado);
//console.log(`El mes ${mesIngresado} pertenece a la estación: ${estacion}.`);
