import { useCreateTasksMutation } from "../api/apiSlice";

function TasksForm() {
  const [createTask] = useCreateTasksMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    createTask({
      name,
      description,
      completed,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <input type="text" name="description" />
      <input type="checkbox" name="completed" />
      <button>Add task</button>
    </form>
  );
}

export default TasksForm;
