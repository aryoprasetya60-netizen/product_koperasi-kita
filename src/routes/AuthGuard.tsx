import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet, useLocation } from "react-router";

function AuthGuard() {
  const token = useSelector((state: RootState) => state.auth.token);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default AuthGuard;
