let mensaje: string = "hola mundo";
mensaje = "hola chanchito";
mensaje = "chao mundo";

console.log(mensaje);
console.log(typeof []);

/*
 * tipos de JS
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * Object
 * Function
 *
 * tipos de TS
 * any | tratar de no usarlo
 * unknown
 * never
 * array
 * tuplas
 * Enums
 *
 * tipos inferidos
 */

// no es necesario indicar el tipo, si es que se inicializa des una vez
let extincionDeDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos = true;

/* Tipo arreglo */
let animales: string[] = ["chanchito", "feliz", "felipe"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
let nums2: Array<number> = [];

let animalesLength = animales.map(animal => animal.length)

/* TUPLAS */
let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito feliz"]];
tupla.push(12); // esto es un error

/* Enum */
const chica = "s";
const mediada = "m";
const larga = "l";
const extragrande = "lx";

// PascalCase
enum Talla {
  Chica = "s",
  Mediana = "m",
  Larga = "l",
  ExtraLarga = "xl",
}

const variable1 = Talla.ExtraLarga;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}
const estado = LoadingState.Success;



/* OBJECTS */

type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Persona = {
  readonly id: number;
  nombre?: string;
  talla: Talla;
  direccion: Direccion;
};

const objeto: Persona = {
  id: 1,
  nombre: "hola mundo",
  talla: Talla.Chica,
  direccion: {
    numero: 1,
    calle: "Siempre viva",
    pais: "chanchitolandia",
  },
}; // nombre? indica que nombre puede ser opcional, readonly no deja cambiar el valor

const arr: Persona[] = [];
