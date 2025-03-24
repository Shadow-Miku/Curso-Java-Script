/*
Cuáles son las reglas para nombrar las variables en JavaScript?

1. Los nombres de las variables pueden contener letras, números, el símbolo del dólar ($) y guiones bajos (_).
2. Los nombres de las variables no pueden comenzar con un número.
3. Los nombres de las variables son sensibles a mayúsculas y minúsculas (case-sensitive). Esto significa que `nombreCompleto` y `nombrecompleto` son variables diferentes.
4. Los nombres de las variables no pueden ser palabras reservadas de JavaScript (por ejemplo, `let`, `class`, `return`, etc.).
*/

// Ejemplos de nombres válidos de variables
let nombreCompleto = "Juan Perez"; // Válido
let nombrecompleto = "Carlos Lara"; // Válido, diferente de `nombreCompleto` debido a la diferencia en mayúsculas/minúsculas
console.log(nombreCompleto); // "Juan Perez"
console.log(nombrecompleto); // "Carlos Lara"

let a1nombreCompleto; // Válido, puede contener números pero no al inicio
let _nombreCompleto; // Válido, puede comenzar con un guión bajo
let $nombreCompleto; // Válido, puede comenzar con el símbolo del dólar

// let 1nombreCompleto; // No está permitido iniciar el nombre de una variable con números

// Declaración e inicialización de una variable adicional
let ruptura = 10;
console.log(ruptura); // 10

/*
Otros ejemplos y notas:
- Evita usar nombres de variables que se parezcan a palabras reservadas, incluso si son válidos. Por ejemplo, `class` es una palabra reservada, pero `_class` no lo es.
- Usa nombres de variables descriptivos y significativos para mejorar la legibilidad del código.
- Adopta una convención de nomenclatura consistente, como camelCase (por ejemplo, `miVariableDeEjemplo`) para las variables y PascalCase para las clases (por ejemplo, `MiClase`).
*/

let camelCase = "Ejemplo de camelCase";
console.log(camelCase); // "Ejemplo de camelCase"

class MiClase {}
let instancia = new MiClase();
console.log(instancia); // MiClase {}
