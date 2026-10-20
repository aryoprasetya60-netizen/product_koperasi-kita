import type { Todo } from "../../types/todo.type";

interface TodoListItemProps {
  todo: Todo;
  index: number;
  isEditing: boolean;
  handleEditTodo: (todo: Todo) => void;
  handleDeleteTodo: (id: number) => void;
}

function ToDoListItem({
  todo,
  index,
  isEditing,
  handleEditTodo,
  handleDeleteTodo,
}: TodoListItemProps) {
  return (
    <li
      className={`flex items-center gap-3 rounded-xl border p-4 transition ${
        isEditing
          ? "border-blue-300 bg-blue-50"
          : "border-gray-200 bg-gray-50 hover:border-blue-200"
      }`}
    >
      {/* Nomor Todo */}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-semibold text-blue-700">
        {index + 1}
      </span>

      {/* Deskripsi dan Status */}
      <div className="min-w-0 flex-1">
        <p
          className={`break-words text-sm font-medium ${
            todo.isCompleted ? "text-gray-400 line-through" : "text-gray-800"
          }`}
        >
          {todo.description}
        </p>

        <p
          className={`mt-1 text-xs font-medium ${
            todo.isCompleted ? "text-green-600" : "text-amber-600"
          }`}
        >
          {todo.isCompleted ? "Selesai" : "Belum selesai"}
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => handleEditTodo(todo)}
          className="rounded-lg bg-yellow-400 px-3 py-2 text-xs font-semibold text-gray-900 transition hover:bg-yellow-500"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={() => handleDeleteTodo(todo.id)}
          className="rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ToDoListItem;
