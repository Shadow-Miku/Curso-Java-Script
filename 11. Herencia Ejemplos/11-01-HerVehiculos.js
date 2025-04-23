// Definimos una clase base para un vehículo
class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  obtenerDetalles() {
    return `${this.marca} ${this.modelo} (${this.año})`;
  }
}

// Extendemos la clase Vehiculo a una clase específica: Automóvil
class Automovil extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año); // Llamamos al constructor de la clase padre
    this.puertas = puertas;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()} con ${this.puertas} puertas`;
  }
}

// Otra clase derivada de Vehiculo: Motocicleta
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, tipo) {
    super(marca, modelo, año);
    this.tipo = tipo; // Tipo puede ser 'Deportiva', 'Chopper', etc.
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()} tipo ${this.tipo}`;
  }
}

// Instanciamos algunos objetos
const auto = new Automovil("Toyota", "Corolla", 2022, 4);
const moto = new Motocicleta("Harley-Davidson", "Iron 883", 2021, "Chopper");

console.log(auto.obtenerDetalles()); // Toyota Corolla (2022) con 4 puertas
console.log(moto.obtenerDetalles()); // Harley-Davidson Iron 883 (2021) tipo Chopper
