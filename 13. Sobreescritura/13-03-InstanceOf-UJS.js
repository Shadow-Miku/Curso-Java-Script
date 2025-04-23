/*
El operador **`instanceof`** en JavaScript se usa para verificar si un objeto es una instancia de una determinada clase o función constructora.

Sintaxis:
objeto instanceof Clase;

- `objeto`: La instancia que se quiere verificar.
- `Clase`: La clase o función constructora con la que se compara el objeto.

Si el objeto pertenece a la clase especificada (directa o indirectamente por herencia), `instanceof` devuelve `true`; de lo contrario, devuelve `false`.
*/

// Ejemplo 1: Comprobación básica con instanceof
class Animal {}
class Perro extends Animal {}

let miPerro = new Perro();

console.log(miPerro instanceof Perro); // true (miPerro es una instancia de Perro)
console.log(miPerro instanceof Animal); // true (miPerro hereda de Animal)
console.log(miPerro instanceof Object); // true (Todos los objetos en JS heredan de Object)

let miAnimal = new Animal();
console.log(miAnimal instanceof Perro); // false (miAnimal no es una instancia de Perro)

// Ejemplo 2: Verificación con funciones constructoras
function Vehiculo() {}
function Automovil() {}

Automovil.prototype = Object.create(Vehiculo.prototype);
Automovil.prototype.constructor = Automovil;

let miAuto = new Automovil();

console.log(miAuto instanceof Automovil); // true
console.log(miAuto instanceof Vehiculo); // true (Automovil hereda de Vehiculo)
console.log(miAuto instanceof Object); // true

// Ejemplo 3: Uso de instanceof en condicionales
class Figura {}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    if (this instanceof Cuadrado) {
      return this.lado ** 2;
    }
    return "Figura desconocida";
  }
}

let figura1 = new Cuadrado(4);
let figura2 = new Figura();

console.log(figura1.calcularArea()); // 16
console.log(figura2.calcularArea()); // "Figura desconocida"

/*
Notas adicionales:
- **`instanceof` verifica la cadena de prototipos**, lo que significa que considera la herencia.
- **Todos los objetos en JavaScript son instancias de `Object`** a menos que se altere el prototipo manualmente.
- **Se usa en condicionales para garantizar que un objeto sea de una clase antes de ejecutar métodos específicos.**
- **No funciona con objetos creados a partir de `Object.create(null)`** porque estos no tienen un prototipo de `Object`.
*/
