import { useState } from "react";
import { todoList } from "../../data/todos";
import type { Todo } from "../../types/todo.type";
import ToDoListItem from "../todolist/todoListItem";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { addTodo, deleteTodo, editTodo } from "../../features/todoSlice";

function TodoList() {
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  // before (menggunakan state local)
  const [todos, setTodos] = useState<Todo[]>(todoList);
  // after (menggunakan redux)
  const todosRedux = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  const isEditing = editId != null;

  // function untuk melakukan updating todolist
  function handleAddTodo() {
    // 1. ditambah parameter
    dispatch(
      addTodo({
        id: Date.now(),
        description: description,
        isCompleted: false,
      }),
    );

    setDescription("");
    setEditId(null);
  }

  function handleSaveTodo() {
    if (editId === null) return;

    dispatch(
      editTodo({
        id: editId,
        description: description,
        isCompleted:
          todosRedux.find((todo) => todo.id === editId)?.isCompleted ?? false,
      }),
    );

    setDescription("");
    setEditId(null);
  }

  function handleDeleteTodo(id: number) {
    dispatch(deleteTodo(id));
  }

  function handleEditTodo(todo: Todo) {
    dispatch(editTodo(todo));
    setEditId(todo.id);
  }

  return (
    <div className="flex flex-col">
      {/* title */}
      <h1>Todo List Batch 10</h1>

      {/* user input */}
      <div>
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* bagian tampilan todolist */}
      <ul>
        {todosRedux.map((val) => (
          <ToDoListItem
            key={val.id}
            todo={val}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
          />
        ))}
      </ul>
      <button
        onClick={isEditing ? handleSaveTodo : handleAddTodo}
        className="bg-amber-900 text-amber-100 text-2xl w-fit"
      >
        {isEditing ? "Save" : "Add"}
      </button>
    </div>
  );
}

export default TodoList;
