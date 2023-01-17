import {
  useGetTasksQuery,
  useDeleteTasksMutation,
  useUpdateTasksMutation,
} from "../api/apiSlice";

function TasksList() {
  const { data: tasks, isError, isLoading, error } = useGetTasksQuery();

  const [deleteTask] = useDeleteTasksMutation();

  const [updateTask] = useUpdateTasksMutation();

  if (isLoading) return <div>Cargando...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <input
            type="checkbox"
            id={task.id}
            checked={task.completed}
            onChange={(e) =>
              updateTask({
                ...task,
                completed: e.target.checked,
              })
            }
          />
          <label htmlFor={task.id}>Completed</label>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
