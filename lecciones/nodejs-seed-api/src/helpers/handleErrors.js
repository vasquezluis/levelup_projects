export const httpErrors = (res, err) => {
  console.log(err);

  res.status(500).send({ error: "algo ocurrio" });
};
