// TIPOS DE DATOS

const string = "hola";
const numero = 3520;
const estado = true;

const usuarios = ["joe", "ryan", "martha"];

const usuario = {
  nombre: "ryan",
  puntuacion: 70.4,
  horas: 14,
  profesional: true,
};

console.log(usuario);

let password = "pepe123";
let input = "pepe123";

let result = input == password;

if (result) console.log("login correcto");
else console.log("login incorrecto");

let score = 30;

if (score > 30) console.log("you need to practice more");
else if (score > 15) console.log("Estas mejorando");
else console.log("You need to follow this tutorial");

let typeCard = "debit card";
switch (typeCard) {
  case "debit card":
    console.log("esta es una tarjeta de debito");
    break;
  case "credit card":
    console.log("esta es una tarjeta de credito");
    break;
  default:
    console.log("no coincide el tipo de tarjeta");
}

let count = 1;
while (count <= 50) {
  console.log(count);
  count++;
}

let users = ["ryan", "joe", "john"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
let usersList = users.map((user) => console.log(user));
for (let i = users.length - 1; i >= 0; i--) {
  console.log(users[i]);
}

const saludar = (nombre) => `Hola ${nombre}`;

console.log(saludar("luis"));
console.log(saludar("antonio"));

const sumar = (n1, n2) => n1 + n2;
console.log(sumar(5, 5));
