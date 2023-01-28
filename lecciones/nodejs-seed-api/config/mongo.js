import mongoose from "mongoose";

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;

  mongoose.connect(
    DB_URI,
    {
      useNewURLParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      if (!err) {
        console.log("Conexion con mongodb");
      } else {
        console.log("Error de conexion con mongodb");
      }
    }
  );
};

export { dbConnect };
