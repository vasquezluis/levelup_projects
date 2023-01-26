/**
 * * NEW: para poder asignar correctamente las propiedades
 * ! sin el new, las propiedades se asignan al objeto global
 */

function Person(){
  this.name = '',
  this.lastname = ''
}

const person = new Person()
console.log(person)

/**
 * * RESUMEN: Siempre usar new
 */