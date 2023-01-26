/**
 * * Principio de composicion
 * ? Tipo fuerte de agregacion
 * ? un objeto puede pertenecer a otro objeto de rol mayor, pero no va a tener una vida independienet
 */

const Person = {
  name: "ryan",
  lastname: "ray",
  address: {
    street: "1234 street",
    city: "london",
    country: "united kingdom",
  },
};

/**
 * ! no se puede separar address de Person porque esta fuertemente relacioado
 */
