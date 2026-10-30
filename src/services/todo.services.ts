import type { TodoJsonPlaceholder } from "../types/todo.type";
import api from "./api";

// create
export async function createTodos(
  payload: Omit<TodoJsonPlaceholder, "id">,
): Promise<TodoJsonPlaceholder> {
  const res = api.post("/todos", payload);
  return (await res).data;
}

// read all
export async function getTodos(): Promise<TodoJsonPlaceholder[]> {
  const res = api.get("/todos");
  return (await res).data;
}

// read by id
export async function getTodosById(id: number): Promise<TodoJsonPlaceholder> {
  const res = api.get(`/todos/${id}`);
  return (await res).data;
}

// update
export async function updateTodosById(
  id: number,
  payload: Partial<TodoJsonPlaceholder>,
): Promise<TodoJsonPlaceholder> {
  const res = api.put(`/todos/${id}`, payload);
  return (await res).data;
}

// delete
export async function deleteTodos(id: number): Promise<void> {
  const res = await api.delete(`/todos/${id}`);
  return (await res).data;
}
