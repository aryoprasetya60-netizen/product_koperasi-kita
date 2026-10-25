import { useEffect, useMemo, useRef, useState } from "react";
import TodoListItem from "../todolist/todoListItem";
import { todoList } from "../../data/todos";
import type { Todo } from "../../types/todo.type";
import useArray from "../../hooks/useArray";
import useDebounce from "../../hooks/useDebounce";

type TodoFilter = "all" | "todo" | "done";

function TodoList() {
  const [description, setDescription] = useState("");
  const {
    items: todos,
    push,
    remove,
    update,
    clear,
    move,
  } = useArray<Todo>(todoList);
  const [isCompleted, setIsCompleted] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [search, setSearch] = useState("");

  const isEditing = editId !== null;
  const inputRef = useRef<HTMLInputElement>(null);

  // Custom Hook untuk debounce search
  const debouncedSearch = useDebounce(search, 1000);

  // Fokus ke input ketika edit
  useEffect(() => {
    if (editId !== null) {
      inputRef.current?.focus();
    }
  }, [editId]);

  // Menghitung jumlah todo dan done
  const todoCounter = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos],
  );

  const doneCounter = useMemo(
    () => todos.filter((todo) => todo.isCompleted).length,
    [todos],
  );

  // Filter berdasarkan status
  const filteredTodos = useMemo(() => {
    if (filter === "todo") {
      return todos.filter((todo) => !todo.isCompleted);
    }

    if (filter === "done") {
      return todos.filter((todo) => todo.isCompleted);
    }

    return todos;
  }, [todos, filter]);

  // Search berdasarkan deskripsi
  const searchedTodos = useMemo(() => {
    return filteredTodos.filter((todo) =>
      todo.description.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [filteredTodos, debouncedSearch]);

  // Menambahkan todo baru
  function handleAddTodo() {
    if (!description.trim()) return;

    push({
      id: Date.now(),
      description: description.trim(),
      isCompleted,
    });

    setDescription("");
    setIsCompleted(false);
  }

  // Menyimpan perubahan todo
  function handleSaveTodo() {
    if (!description.trim() || editId === null) return;

    const index = todos.findIndex((todo) => todo.id === editId);

    if (index === -1) return;

    update(index, {
      ...todos[index],
      description: description.trim(),
      isCompleted,
    });

    setDescription("");
    setIsCompleted(false);
    setEditId(null);
  }

  // Menghapus todo
  function handleDeleteTodo(id: number) {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      remove(index);
    }

    if (editId === id) {
      setDescription("");
      setIsCompleted(false);
      setEditId(null);
    }
  }

  // Memasukkan data todo ke input untuk diedit
  function handleEditTodo(todo: Todo) {
    setDescription(todo.description);
    setIsCompleted(todo.isCompleted);
    setEditId(todo.id);
  }

  // Membatalkan edit
  function handleCancelEdit() {
    setDescription("");
    setIsCompleted(false);
    setEditId(null);
  }

  // menghapus semua data todo
  function handleClearTodos() {
    clear();
    setEditId(null);
    setDescription("");
    setIsCompleted(false);
  }

  //mengubah urutan todo
  function handleMoveTodo(id: number, direction: number) {
    const currentIndex = todos.findIndex((todo) => todo.id === id);

    move(currentIndex, currentIndex + direction);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            Todo List
          </h1>
        </div>

        {/* Form Add dan Edit */}
        <form
          className="mb-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();

            if (isEditing) {
              handleSaveTodo();
            } else {
              handleAddTodo();
            }
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Masukkan Todo?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />

          <select
            value={isCompleted ? "done" : "todo"}
            onChange={(e) => setIsCompleted(e.target.value === "done")}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700"
          >
            <option value="todo">Todo</option>
            <option value="done">Done</option>
          </select>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className={`flex-1 rounded-xl px-5 py-3 font-medium text-white ${
                isEditing
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isEditing ? "Save Changes" : "+ Add Task"}
            </button>

            {isEditing && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="rounded-xl border border-gray-300 px-4 py-3 font-medium text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Search */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Cari deskripsi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Ringkasan Tugas dan Filter */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-gray-800">Daftar Tugas</h2>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Show All ({todos.length})
            </button>

            <button
              type="button"
              onClick={() => setFilter("todo")}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
                filter === "todo"
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              }`}
            >
              Todo ({todoCounter})
            </button>

            <button
              type="button"
              onClick={() => setFilter("done")}
              className={`rounded-full px-3 py-2 text-xs font-semibold ${
                filter === "done"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              Done ({doneCounter})
            </button>
            <button
              type="button"
              onClick={handleClearTodos}
              className="rounded-full px-3 py-2 text-xs font-semibold bg-red-500 text-white"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Daftar Todo */}
        {searchedTodos.length > 0 ? (
          <ul className="space-y-3">
            {searchedTodos.map((todo, index) => {
              const currentIndex = todos.findIndex(
                (item) => item.id === todo.id,
              );

              return (
                <div key={todo.id} className="flex items-center gap-2">
                  {/* Component TodoListItem yang sudah ada */}
                  <div className="min-w-0 flex-1">
                    <TodoListItem
                      todo={todo}
                      index={index}
                      isEditing={editId === todo.id}
                      handleEditTodo={handleEditTodo}
                      handleDeleteTodo={handleDeleteTodo}
                    />
                  </div>

                  {/* Tombol mengubah urutan Todo */}
                  <div className="flex shrink-0 flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => handleMoveTodo(todo.id, -1)}
                      disabled={currentIndex === 0}
                      className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Move todo up"
                    >
                      ↑
                    </button>

                    <button
                      type="button"
                      onClick={() => handleMoveTodo(todo.id, 1)}
                      disabled={currentIndex === todos.length - 1}
                      className="rounded bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Move todo down"
                    >
                      ↓
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 px-4 py-10 text-center">
            <p className="font-medium text-gray-600">Belum ada tugas</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoList;
