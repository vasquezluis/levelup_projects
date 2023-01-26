/**
 * * PROTOTYPE: extender los metodos de un constructor
 */

//*  constructor
function Persona(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.displayName = function () {
    return `${this.name} ${this.lastname}`;
  };
}

const jhon = new Persona("jhon", "mcmilla");
jhon.name = "joe";

const mario = new Persona("mario", "rossi");

const maria = new Persona("maria", "perez");
const jose = new Persona("jose", "perez");

//? a;adir un nuevo metodo al constructor: se aplica a todas las instancias
Persona.prototype.saludar = function () {
  return `hello I'm ${this.name}`;
};

Persona.prototype.age = 100;

console.log(jhon.age);
console.log(mario.age);
console.log(maria.age);
console.log(jose.age);

/**
 * * Constructores que vienen con el lenguaje
 */

const s = new String("hello world");

String.prototype.concatTest = function () {
  return this + " test";
};

console.log(s.concatTest());

console.log("hola que hace".concatTest());
