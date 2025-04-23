/*
El **modo strict** en JavaScript es una directiva que activa un conjunto de restricciones 
para mejorar la calidad del código, evitando errores comunes y comportamientos inesperados.

### Cómo se usa:
Se habilita agregando `"use strict";` al inicio de un archivo o dentro de una función.

Ejemplo de uso global:
*/
"use strict"; // Activa el modo estricto en todo el archivo

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // 8

/*
Ejemplo de uso local en una función:
*/

function ejecutarEnModoStrict() {
  "use strict"; // Solo afecta el código dentro de esta función
  let mensaje = "Este código usa modo strict.";
  console.log(mensaje);
}

ejecutarEnModoStrict(); // "Este código usa modo strict."

/*
### Dónde aplicarlo en sistemas:
1. **Proyectos modernos**: Se recomienda habilitarlo en todo el código para mejorar su calidad.
2. **Bibliotecas y frameworks**: Permite gestionar mejor el comportamiento del código y prevenir errores.
3. **Código legado**: Se puede habilitar en nuevas funciones sin afectar código antiguo.
4. **Aplicaciones críticas**: Evita errores como variables globales accidentales o asignaciones incorrectas.

### Características principales:
- **Prevención de variables globales accidentales**:
  Intentar usar una variable sin declararla provoca un error.
*/
("use strict");
try {
  x = 10; // Error: x no está declarada
} catch (error) {
  console.log("Error:", error.message); // "x is not defined"
}

/*
- **Eliminación de usos peligrosos**:
  No se permite usar `with`, lo que mejora la predictibilidad del código.
- **Duplicación de parámetros**:
  Intentar usar nombres duplicados en parámetros genera error.
*/
try {
  function pruebaDuplicado(a, a) {
    // Error en modo strict
    return a;
  }
} catch (error) {
  console.log("Error:", error.message);
}

/*
- **Mayor seguridad en eval y this**:
  `this` en funciones sin contexto será `undefined` en lugar del objeto global.
*/

function pruebaThis() {
  "use strict";
  console.log(this); // undefined en modo strict
}

pruebaThis();

/*
### Conclusión:
El **modo strict** mejora la calidad y seguridad del código, evitando errores 
comunes y optimizando la compatibilidad con ECMAScript futuro. Se recomienda
habilitarlo en nuevos proyectos y refactorizaciones.

*/
