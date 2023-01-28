import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";

import { dbConnect } from "../config/mongo.js";
const PORT = process.env.PORT || 3000;
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);

dbConnect();
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
