import type { User } from "../types/user.type";
import api from "./api";

export async function getAllUser(): Promise<User[]> {
  const res = await api.get("/users");
  return res.data.data;
}
