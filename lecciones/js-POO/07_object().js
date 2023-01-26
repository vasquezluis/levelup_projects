/**
 * * CONSTRUCTOR OBJECT(): devuelve un objeto nuevo
 */

const person = new Object();
console.log(person);

const person2 = {};
console.log(person2.constructor === Object);

/**
 * ? new Object() y {} son lo mismo
 */

const string = new Object("hello world");
string.name = "special string";
string.test = function () {
  return this + " test";
};
console.log(string.name);

const user = {
  name: "luis",
  lastname: "vasquez",
  age: 30,
  showName() {},
};

console.log(Object.keys(user));
console.log(Object.values(user));
