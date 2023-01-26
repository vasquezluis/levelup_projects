/**
 * * THIS: Para acceder a un valor dentro del objeto
 */

const user = {
  name: "luis",
  lastname: "ray",
  age: 30,
  //? esto es un metodo, una funcion
  showFullName() {
    return this.name + " " + this.lastname;
  },
};

console.log(user.showFullName());

const acount = {
  number: "123456789",
  amount: 100,
  deposit(quantity) {
    this.amount += quantity;
  },
  withdraw(quantity) {
    this.amount -= quantity;
  },
};

acount.deposit(100);
acount.deposit(50);
acount.deposit(10);
console.log(acount);
acount.withdraw(10);
acount.withdraw(200);
console.log(acount);
