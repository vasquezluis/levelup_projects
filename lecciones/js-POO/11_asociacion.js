/**
 * * Principio de asociacion
 * ? se puede asociar varios objetos, pero son independientes unos de otros
 */

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const john = new Person("john", "ray");
const maria = new Person("maria", "perez");


/**
 * * asociar maria con un padre
*/
maria.parent = john
console.log(john)
console.log(maria)