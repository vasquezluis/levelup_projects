/**
 * * CONSTRUCTOR: manera de crear mas objetos, generador de objetos
 */

const user = {
  name: "luis",
  lastname: "ray",
  age: 30,
  showFullName() {
    return `${this.name} ${this.lastname}`;
  },
};

//! crear CONTRUCTOR
function Person() {
  (this.name = ""),
    (this.lastname = ""),
    (this.age = 0),
    //! en los constructores si hay que poner function en los metodos
    (this.showFullName = function () {
      return `${this.name} ${this.lastname}`;
    });
}

//? ejecutar CONSTRUCTOR
const user2 = new Person();
user2.name = "luis";
(user2.lastname = "vasquez"), (user2.age = 23);
console.log(user2);
console.log(user2.showFullName());
