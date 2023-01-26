/**
 * * Principio de OOP
 * ? al menos 3 principios: encapsulacion, herencia, polimorfismo
 * * HERENCIA: create un objeto especializado empezando desde uno general
 */

/**
 * * ES5
 */

function Person() {
  this.name = "";
  this.lastname = "";
}

function Programmer() {
  this.language = "";
}

Programmer.prototype = new Person();

console.log(Programmer);
console.log(Person);

const programmer = new Programmer();
programmer.name = "ryan";
programmer.lastname = "ray";
programmer.language = "javascript";
console.log(programmer);

const newPerson = new Person();
newPerson.name = "maria";
newPerson.lastname = "perez";
console.log(newPerson);

/**
 * * ES6
 */

class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.age = null;
  }
}
class Programador extends Persona {
  constructor(name, lastname, language) {
    /**
     * ? con super se heredan las propiedades de Persona
     * * al super hay que pasarle los parametros
     */
    super(name, lastname);
    this.language = language;
  }
}

const persona = new Persona("Luis", "Vasquez");
console.log(persona);
const programador = new Programador("antonio", "tiu", "javascript");
console.log(programador);
