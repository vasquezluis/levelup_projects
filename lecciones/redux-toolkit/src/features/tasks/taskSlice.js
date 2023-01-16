import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    task: "task 1",
    description: "task 1 description",
    completed: false,
  },
  {
    id: "2",
    task: "task 2",
    description: "task 2 description",
    completed: false,
  },
];

// es como crear un estado
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  // funciones para actualizar el estado
  reducers: {
    // state es el estado inicial, action son los valores que le mandamos desde el formulario
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, task, description } = action.payload;

      const foundTask = state.find((task) => task.id === id);

      if (foundTask) {
        foundTask.task = task;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

// exportar solo la funcion que modifica el estado
export const { addTask, deleteTask, editTask } = taskSlice.actions;

// exportar todo el reducer
export default taskSlice.reducer;
