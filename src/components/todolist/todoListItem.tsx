import type { Todo, TodoJsonPlaceholder } from "../../types/todo.type";

interface TodoListItemProps {
  todo: TodoJsonPlaceholder;
  handleEditTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
  handleGetByIdTodo: (id: number) => void;
  // handleEditTodo: (todo: TodoJsonPlaceholder) => void;
}

function ToDoListItem({
  todo,
  handleDeleteTodo,
  handleEditTodo,
  handleGetByIdTodo,
}: TodoListItemProps) {
  return (
    <li key={todo.id}>
      {todo.userId} - {todo.id} - {todo.title} -{" "}
      {todo.completed ? "done" : "todo"}
      <button
        className="p-2 bg-red-600"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
      <button
        className="p-2 bg-yellow-600"
        onClick={() => handleEditTodo(todo.id)}
      >
        Edit
      </button>
      <button
        className="p-2 bg-green-600"
        onClick={() => handleGetByIdTodo(todo.id)}
      >
        GetById
      </button>
    </li>
  );
}

export default ToDoListItem;
