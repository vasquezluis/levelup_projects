import "./App.css";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <TasksForm />
      <TasksList />
    </div>
  );
}

export default App;
