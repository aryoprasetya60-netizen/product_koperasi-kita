import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
