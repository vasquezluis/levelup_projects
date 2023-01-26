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
 * * SUBTIPO POLIMORFISMO
 */

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends Person {
  constructor(name, lastname, language) {
    super(name, lastname);
    this.language = language;
  }
}

const john = new Person("john", "ray");
const joe = new Programmer("joe", "ray", "python");

console.log(john);
console.log(joe);

function writeFullname(p) {
  console.log(p.name + " " + p.lastname);
}

writeFullname(john);
writeFullname(joe);
