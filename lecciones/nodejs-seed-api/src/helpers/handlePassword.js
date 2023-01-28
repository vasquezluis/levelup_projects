import bcryptsjs from "bcryptjs";

/**
 * * contrase;a sin encriptar: hola.01
 * @param {*} passwordPlain
 */

export const encrypt = async (passwordPlain) => {
  const hash = await bcryptsjs.hash(passwordPlain, 10);

  return hash;
};

/**
 * pasar contrase;a sin encriptar y pasar contrase;a encriptada
 * @param {*} passwordPlain
 * @param {*} hashPassword
 */
export const compare = async (passwordPlain, hashPassword) => {
  return await bcryptsjs.compare(passwordPlain, hashPassword);
};
