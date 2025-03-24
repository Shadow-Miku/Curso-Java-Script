// Definimos la función esArreglo
function esArreglo(variable) {
  return Array.isArray(variable);
}

// Ejemplo de uso: verificar si una variable es un arreglo
let variableIngresada = [1, 2, 3]; // Puedes cambiar este valor para probar con otras variables
if (esArreglo(variableIngresada)) {
  console.log("La variable es un arreglo.");
} else {
  console.log("La variable no es un arreglo.");
}

//let autos = new Array('BMW','Mercedes Benz','Volvo');
/* const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

console.log(typeof autos);

console.log( Array.isArray(autos) );

console.log( autos instanceof Array); */
