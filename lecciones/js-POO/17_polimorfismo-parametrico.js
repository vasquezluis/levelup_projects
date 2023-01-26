/**
 * * Principio de OOP
 * ? al menos 3 principios: encapsulacion, herencia, polimorfismo
 * * POLIMORFISMO: Capacidad de manipular distintos tipos de datos uniformemente
 * ? beneficios: reduce el acomplamiento de nuestra aplicacion
 * * soporta la sobrecarga: methodos que aceptan parametros con diferentes tipos de datos
 * * soporta el polimorfismo parametrico: maneja tipos genericos, sin conocerla en detalle
 * * soporta el subtipo de polimorfismo o polimorfismo inclusivo: el tipo puede representar a una clase derivada de otra y poder procesarla
 */

/**
 * * POLIMORFISMO PARAMETRICO
 */

function Stack() {
  this.items = [];

  this.push = function (item) {
    this.items.push(item);
  };
}

const stack = new Stack();
stack.push("asdf");
const stack2 = new Stack();
stack2.push(23);

console.log(stack);
console.log(stack2);
