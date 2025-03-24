/* 
	En JavaScript, a veces es necesario convertir una cadena de texto (string) a un número (number) para realizar operaciones matemáticas. Aquí hay varias formas de hacerlo:

	1. Función Number(): Convierte una cadena a un número.
	2. Función parseInt(): Convierte una cadena a un número entero.
	3. Función parseFloat(): Convierte una cadena a un número de punto flotante.
	4. Operador unario +: Convierte una cadena a un número.
*/

// Conversión de String a Número usando Number()
let str1 = "123";
let num1 = Number(str1);
console.log(num1); // 123
console.log(typeof num1); // "number"

// Conversión de String a Número usando parseInt()
let str2 = "123.45";
let num2 = parseInt(str2);
console.log(num2); // 123
console.log(typeof num2); // "number"

// Conversión de String a Número usando parseFloat()
let str3 = "123.45";
let num3 = parseFloat(str3);
console.log(num3); // 123.45
console.log(typeof num3); // "number"

// Conversión de String a Número usando el operador unario +
let str4 = "123";
let num4 = +str4;
console.log(num4); // 123
console.log(typeof num4); // "number"

/* 
En JavaScript, también puede ser necesario convertir un número a una cadena de texto para operaciones que involucren concatenación de cadenas. Aquí hay varias formas de hacerlo:

	1. Método toString(): Convierte un número a una cadena.
	2. Función String(): Convierte un número a una cadena.
	3. Concatenación con una cadena vacía: Convierte un número a una cadena.
*/

// Conversión de Número a String usando toString()
let num5 = 123;
let str5 = num5.toString();
console.log(str5); // "123"
console.log(typeof str5); // "string"

// Conversión de Número a String usando String()
let num6 = 123;
let str6 = String(num6);
console.log(str6); // "123"
console.log(typeof str6); // "string"

// Conversión de Número a String usando concatenación con una cadena vacía
let num7 = 123;
let str7 = num7 + "";
console.log(str7); // "123"
console.log(typeof str7); // "string"
