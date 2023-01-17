import { useGetTasksQuery } from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button>Delete</button>
          <input type="checkbox" id={task.id} />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
