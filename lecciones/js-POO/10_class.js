/**
 * * CLASS: otra forma de construir un constructor
 */

//? forma antigua
// function Person(){
//   this.name = ''
//   this.lastname = ''
// }

//? desde ES6 se usa class, ahora es un conjunto de metodos
//! ya no es necesario 'use strict'
//* Conocido como sugar sintactic
class Person {
  //* el constructor retorna las propiedades de un objeto
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }

  greet() {
    return `Hello I am ${this.name} ${this.lastname}`;
  }
}

const user1 = new Person("joe", "ray");
const user2 = new Person("ryan", "ray");

console.log(user1.greet());
console.log(user2.greet());

console.log(typeof Person);
console.log(Person.prototype);
