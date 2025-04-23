// Clase base Usuario
class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  mostrarInformacion() {
    return `Usuario: ${this.nombre}, Email: ${this.correo}`;
  }
}

// Clase Cliente que extiende Usuario
class Cliente extends Usuario {
  constructor(nombre, correo, saldo) {
    super(nombre, correo);
    this.saldo = saldo;
  }

  comprar(producto) {
    if (this.saldo >= producto.precio) {
      this.saldo -= producto.precio;
      return `Compra realizada: ${producto.nombre}. Saldo restante: ${this.saldo}`;
    } else {
      return `Saldo insuficiente para comprar ${producto.nombre}.`;
    }
  }
}

// Clase Vendedor que extiende Usuario
class Vendedor extends Usuario {
  constructor(nombre, correo, tienda) {
    super(nombre, correo);
    this.tienda = tienda;
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
    return `Producto ${producto.nombre} agregado por ${this.nombre}`;
  }

  listarProductos() {
    return this.productos
      .map((prod) => `${prod.nombre}: $${prod.precio}`)
      .join("\n");
  }
}

// Clase Producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Ejemplo de uso
const cliente1 = new Cliente("Miyuki", "miyuki@example.com", 500);
const vendedor1 = new Vendedor("Carlos", "carlos@example.com", "Tienda Tech");

const producto1 = new Producto("Laptop", 450);
const producto2 = new Producto("Mouse", 30);

vendedor1.agregarProducto(producto1);
vendedor1.agregarProducto(producto2);

console.log(vendedor1.listarProductos()); // Lista de productos vendidos por Carlos
console.log(cliente1.comprar(producto1)); // Compra realizada
console.log(cliente1.comprar(producto2)); // Saldo insuficiente si no queda dinero
