import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";

// dividir el estado el multipleas archivos
// objeto que devuelve el configureStore
// es como definir un useState pero aparte de la aplicacion
export const store = configureStore({
  // reducer son operaciones para alterar el estado
  reducer: {
    tasks: taskReducer,
  },
});
