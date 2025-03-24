/*
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

// Obtenemos la hora actual
let fechaActual = new Date();
let horaActual = fechaActual.getHours();

// Determinamos el mensaje según la hora del día
if (horaActual >= 6 && horaActual <= 11) {
  console.log("¡Buenos días!");
} else if (horaActual >= 12 && horaActual <= 18) {
  console.log("¡Buenas tardes!");
} else if (horaActual >= 19 && horaActual <= 24) {
  console.log("¡Buenas noches!");
} else if (horaActual >= 0 && horaActual < 6) {
  console.log("¡Durmiendo!");
} else {
  console.log("Hora no válida.");
}

/* 
let horaDia = 23;
let mensaje;

if( horaDia >= 6 && horaDia <= 11 ){
    mensaje = "Buenos días";
}
else if( horaDia >= 12 && horaDia <= 18 ){
    mensaje = "Buenas tardes";
}
else if( horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas noches";
}
else if( horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje); */
