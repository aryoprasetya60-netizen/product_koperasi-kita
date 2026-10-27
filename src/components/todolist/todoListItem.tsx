import type { Todo } from "../../types/todo.type";

interface TodoListItemProps {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (todo: Todo) => void;
}

function ToDoListItem({
  todo,
  handleDeleteTodo,
  handleEditTodo,
}: TodoListItemProps) {
  return (
    <li key={todo.id}>
      {todo.id} - {todo.description} - {todo.isCompleted ? "done" : "todo"}
      <button
        className="p-2 bg-red-600"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
      <button
        className="p-2 bg-yellow-600"
        onClick={() => handleEditTodo(todo)}
      >
        Edit
      </button>
    </li>
  );
}

export default ToDoListItem;
