/**
 * * Principio de agregacion
 * ? forma de asociacion, pero unos objetos tienen un rol mayor a otros
 * ? el rol mayor es el contenedor de los demas objetos y las relaciones
 * * el del rol mayor es un: aggregate
 * * los demas objetos son: components
 * ? pueden mantener una vida independiente
 */

const company = {
  name: "fazt tech",
  employees: [],
};

class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

const john = new Person("john", "ray");
const maria = new Person("maria", "perez");

company.employees.push(john);
company.employees.push(maria);

console.log(john);
console.log(maria);
console.log(company);
