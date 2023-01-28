import { Router } from "express";
import { validatorRegister, validatorLogin } from "../validators/auth.js";
import { encrypt, compare } from "../helpers/handlePassword.js";
import userModel from "../models/users.js";
import { tokenSign } from "../helpers/handleJWT.js";

const router = Router();

router.post("/login", validatorLogin);

router.post("/register", validatorRegister, async (req, res) => {
  const passwordHash = await encrypt(req.body.password);
  const body = { ...req.body, password: passwordHash };

  const dataUser = await userModel.create(body);
  dataUser.set("password", undefined, { strict: false });

  const data = { token: await tokenSign(dataUser), user: dataUser };

  res.json({ result });
});

export default router;
