import { useState } from "react";
import "./App.css";

// los custom hooks es usar los hooks de react y modificarlos para no tener que escribir la misma logica una y otra vez
/* tienen dos reglas
  - La funcion empieza con use
  - la funcion tiene que contener dentro un hook de React
*/
function useActive(initialState = false) {
  const [active, setActive] = useState(initialState);

  const handleToggle = () => setActive(!active);
  const handleTrue = () => setActive(true);
  const handleFalse = () => setActive(false);

  // retornar el estado
  return [active, { handleToggle, handleTrue, handleFalse }];
}

function App() {
  // la funcion retorna el valor y funciones
  const [active, { handleToggle, handleTrue, handleFalse }] = useActive();

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleTrue}>True</button>
      <button onClick={handleFalse}>False</button>
      <p>{active.toString()}</p>
      <ShowInfo />
    </div>
  );
}

function ShowInfo() {
  const [active, { handleToggle }] = useActive(false);

  return (
    <div style={{ background: "#000", color: "white", margin: "10px" }}>
      <button onClick={handleToggle}>show/hide</button>
      {active && (
        <div>
          <h1>User info</h1>
        </div>
      )}
    </div>
  );
}

export default App;
