/**
 * * METHOD: Los objetos puede llegar a hacer cosas
 */

const user = {
  name: "ryan",
  lastname: "ray",
  age: 30,
  //? esto es un metodo, una funcion
  showFullName() {
    return "Ryan Ray";
  },
};

console.log(user.showFullName());
