import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksList from "./components/TasksList";
import TasksForm from "./components/TasksForm";

// useDispatch son las funciones que queremos llamar para poder actualizar el estado
// useSelector forma de poder traer los datos que esten dentro del estado

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TasksForm />} />
            <Route path="/edit-task/:id" element={<TasksForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
