// Crear una función que tome un objeto y devuelva las keys y values como matrices separadas.
// Devuelve las keys ordenadas alfabéticamente, y sus correspondientes values en el mismo orden

let objeto1 = { b: 2, a: 1, c: 3 };
let objeto2 = { b: "Microsoft", a: "Apple", c: "Google" };
let objeto3 = { key3: undefined, key1: true, key2: false };

let separeteValues = (object) => {
  // ordernar el objeto
  let sortedObject = Object.keys(object)
    .sort()
    .reduce((acumulador, item) => {
      acumulador[item] = object[item];
      return acumulador;
    }, {});

  // ontener llaves y valores
  let llaves = Object.keys(sortedObject);
  let valores = Object.values(sortedObject);

  // retornar array de resultado
  let resultado = [llaves, valores];
  return resultado;
};

// prueba
console.log(separeteValues(objeto1));
console.log(separeteValues(objeto2));
console.log(separeteValues(objeto3));
