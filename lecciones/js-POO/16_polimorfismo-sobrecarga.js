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
 * * SOBRECARGA
 */

function CountItems(x) {
  return x.toString().length;
}

console.log(CountItems("hola mundo"));
console.log(CountItems(90));

function Sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(Sum(1, 2));
console.log(Sum(1, 2, 3));
