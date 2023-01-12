import "./App.css";
import { useReducer, useRef } from "react";

function App() {
  // usar useRef para recuperar valores del formulario
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // reducer para modificar el estado
    // dispatch necesita un tipo de evento y valores
    dispatch({ type: "add_task", title: inputRef.current.value });
  };

  // va a recibir el estado y acciones que realice el usuario
  // va a devolver un nuevo estado
  // dispatch sirve para enviar eventos
  const [tasks, dispatch] = useReducer((state = [], action) => {
    // condicional para saber que hacer segun el action que llegue
    switch (action.type) {
      case "add_task": {
        inputRef.current.value = "";
        return [...state, { id: state.length, title: action.title }];
      }
      case "delete_task": {
        return state.filter((item) => item.id != action.id);
      }
      default: {
        return state;
      }
    }
  });

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tarea">Tarea </label>
        <input type="text" name="tarea" ref={inputRef} />
        <input type="submit" value="Enviar" />
      </form>
      <div className="tasks">
        {tasks &&
          tasks.map((task) => (
            <div className="task" key={task.id}>
              <p>{task.title}</p>
              <button
                onClick={() => dispatch({ type: "delete_task", id: task.id })}
              >
                Borrar
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
