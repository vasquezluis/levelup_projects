import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
    },
    password: {
      type: String
    }
  },
  { timestamps: true, versionKey: false }
);

const userModel = model("users", UserSchema);
export default userModel;
