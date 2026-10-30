import { createSlice } from "@reduxjs/toolkit";
import type { LoginResponse } from "../types/auth.types";

interface AuthState {
  token: string | null;
  role: string | null;
  username: string | null;
}

const initialState: AuthState = {
  token: sessionStorage.getItem("token"),
  role: sessionStorage.getItem("role"),
  username: sessionStorage.getItem("username"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: { payload: LoginResponse }) => {
      // simpan data menjadi state global untuk dibawa ketika hit endpoint lain
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.username = action.payload.username;

      // disimpan di session storage, jadi ketika browser kita refresh kita tidak harus login lagi karena jwt sudah tersimpan di session storage
      sessionStorage.setItem("token", action.payload.token);
      sessionStorage.setItem("role", action.payload.role);
      sessionStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.username = null;

      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      sessionStorage.removeItem("username");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
