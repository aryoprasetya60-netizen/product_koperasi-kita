import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate } from "react-router";

function AdminGuard() {
  const role = useSelector((state: RootState) => state.auth.role);
  if (role != "ROLE_STUDENT") {
    return <Navigate to="/login" replace />;
  }
  return <div>AdminGuard</div>;
}

export default AdminGuard;
