//* vigila el origen de la peticion

export const checkOrigin = (req, res, next) => {
  const token = req.headers.authorization.split(" ").pop();

  if (token == "123456") {
    next();
  } else {
    res.status(409).json({ error: "tu por aqui no pasas" });
  }
};
