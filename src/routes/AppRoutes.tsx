import { Route, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import NotFound from "../components/pages/NotFound";
import TodoList from "../components/pages/TodoList";
import StudentGuard from "./StudentGuard";
import Counter from "../components/pages/Counter";
import Register from "../components/pages/Register";
import AuthGuard from "./AuthGuard";
import TransactionPage from "../components/pages/TransactionPage";
import Users from "../components/pages/Users";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
        <Route element={<StudentGuard />}>
          <Route path="/todos" element={<TodoList />} />
        </Route>
      </Route>
      <Route element={<AuthGuard />}>
        <Route path="/transactions" element={<TransactionPage />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
