/**
 * * Principio de OOP
 * ? al menos 3 principios: encapsulacion, herencia, polimorfismo
 * * ENCAPSULACION: concentrar datos y funciones ocultando detalles internos
 */

function Company(name) {
  this.name = name;

  //* Elemento que pertenece al constructor, pero no a los objetos a partir de este
  let employees = [];

  this.getEmployees = function () {
    return employees;
  };

  this.addEmployee = function (employee) {
    employees.push(employee);
  };
}

const company = new Company("cocacola");
const company2 = new Company("pepsi");

console.log(company);
console.log(company2);

company.addEmployee({ name: "Ryan" });
company2.addEmployee({ name: "Joe" });

console.log(company.getEmployees());
console.log(company2.getEmployees());
