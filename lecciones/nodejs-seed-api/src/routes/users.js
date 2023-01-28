import { Router } from "express";
import {
  createItems,
  deleteItems,
  getItem,
  getItems,
  updateItems,
} from "../controllers/users.js";
import { checkOrigin } from "../middlewares/origin.js";

const router = Router();

router.get("/users", getItems);

router.get("/users/:id", getItem);

router.post("/users/", checkOrigin, createItems);

router.patch("/users/:id", updateItems);

router.delete("/users/:id", deleteItems);

export default router;
