// import { Router } from "express";
// import fs from "fs";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const router = Router();

// const __dirname = dirname(fileURLToPath(import.meta.url));

// const removeExtension = (fileName) => {
//   return fileName.split(".").shift();
// };

// fs.readdirSync(__dirname).filter((file) => {
//   const fileWithoutExtension = removeExtension(file);

//   const skip = ["index"].includes(fileWithoutExtension);

//   if (!skip) {
//     router.use(`/${fileWithoutExtension}`, import(`./${fileWithoutExtension}`)); //TODO: localhost/users
//     console.log("CARGAR RUTA --->", fileWithoutExtension);
//   }
// });

// export default router;
