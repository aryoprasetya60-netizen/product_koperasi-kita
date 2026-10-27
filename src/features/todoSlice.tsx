import { createSlice } from "@reduxjs/toolkit";
import { todoList } from "../data/todos";
import type { Todo } from "../types/todo.type";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: todoList,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 2. type payload diganti
    addTodo: (state, action: { payload: Todo }) => {
      const newTodo: Todo = {
        // 3. implement payload
        id: action.payload.id,
        description: action.payload.description,
        isCompleted: action.payload.isCompleted,
      };
      state.todos.push(newTodo);
    },
    editTodo: (state, action: { payload: Todo }) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.description = action.payload.description;
        todo.isCompleted = action.payload.isCompleted;
      }
    },
    deleteTodo: (state, action: { payload: number }) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
