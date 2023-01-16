import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TasksForm() {
  const [task, setTask] = useState({ task: "", description: "" });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  // usedispatch para las funciones
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      // a traves del dispatch ejecutar la funcion que necesitamos
      // espera dos propiedades
      dispatch(
        addTask({
          id: uuid(),
          ...task,
          completed: false,
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, tasks]);

  return (
    <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
      <label className="block text-xs font-bold mb-2" htmlFor="task">
        Task:{" "}
      </label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="task"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.task}
      />
      <label className="block text-xs font-bold mb-2" htmlFor="description">
        Description:{" "}
      </label>
      <textarea
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1">save</button>
    </form>
  );
}
export default TasksForm;
