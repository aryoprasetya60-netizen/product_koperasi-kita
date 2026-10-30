import { useEffect, useState } from "react";
import type { Todo, TodoJsonPlaceholder } from "../../types/todo.type";
import ToDoListItem from "../todolist/todoListItem";
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodosById,
  getTodosById,
} from "../../services/todo.services";

function TodoList() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState<number | null>(null);

  // before (menggunakan state local)
  const [todos, setTodos] = useState<TodoJsonPlaceholder[]>([]);
  // after (menggunakan redux)
  // const todosRedux = useSelector((state: RootState) => state.todo.todos);
  // const dispatch = useDispatch<AppDispatch>();

  const isEditing = editId != null;

  // after nya after (menggunakan data hasil dari proses fetching)
  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.log("error " + error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  async function handleGetTodoById(id: number) {
    try {
      const todo = await getTodosById(id);

      console.log("Data todo berdasarkan ID:", todo);
    } catch (error) {
      console.log("Gagal mengambil todo:", error);
    }
  }

  // function untuk melakukan updating todolist
  async function handleAddTodo() {
    try {
      const newTodo = await createTodos({
        userId: 1,
        title: title,
        completed: false,
      });

      const todoWithId = {
        ...newTodo,
        id: Date.now(),
      };

      console.log("Data todo berhasil dibuat:", todoWithId);

      setTodos((prevTodos) => [...prevTodos, todoWithId]);
    } catch (error) {
      console.log("error " + error);
    }
  }

  async function handleEditTodo(id: number) {
    if (editId === null) return;
    try {
      const updatedTodo = await updateTodosById(id, {
        title: title,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      );
      console.log("Data todo berhasil diedit:", updatedTodo);
      setTitle("");
    } catch (error) {
      console.log("error " + error);
    }

    setTitle("");
    setEditId(null);
  }

  async function handleDeleteTodo(id: number) {
    try {
      await deleteTodos(id);

      console.log(`Todo dengan ID ${id} berhasil dihapus`);

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("Gagal menghapus todo:", error);
    }
  }

  return (
    <div className="flex flex-col">
      {/* title */}
      <h1>Todo List Batch 10</h1>

      {/* user input */}
      <div>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* bagian tampilan todolist */}
      <ul>
        {todos.map((val) => (
          <ToDoListItem
            key={val.id}
            todo={val}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            handleGetByIdTodo={handleGetTodoById}
          />
        ))}
      </ul>
      <button
        onClick={() =>
          isEditing && editId !== null
            ? handleEditTodo(editId)
            : handleAddTodo()
        }
        className="bg-amber-900 text-amber-100 text-2xl w-fit"
      >
        {isEditing ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default TodoList;
