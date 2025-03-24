// Definimos la función esAdulto
function esAdulto(edad) {
  // Verificamos si la edad es mayor o igual a 18
  return edad >= 18;
}

// Ejemplo de uso: verificar si una persona es adulta
let edadIngresada = 21; // Puedes cambiar este valor para probar con otras edades
if (esAdulto(edadIngresada)) {
  console.log(`La persona con ${edadIngresada} años es adulta.`);
} else {
  console.log(`La persona con ${edadIngresada} años no es adulta.`);
}

/* let edad = 18, adulto = 18;

if( edad >= adulto ){
    console.log( "Es un adulto" );
}
else{
    console.log( "Es menor de edad" );
} */
