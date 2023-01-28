import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Para el objeto del usuario
 * @param {*} user
 */
export const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  return sign;
};

/**
 * Pasar token de sesion
 * @param {*} tokenJWT
 * @returns
 */
export const verifyToken = async (tokenJWT) => {
  try {
    return jwt.verify(tokenJWT, JWT_SECRET);
  } catch (error) {
    return null;
  }
};
