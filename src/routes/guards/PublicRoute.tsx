import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
};

export function PublicRoute({ isAuthenticated }: Props) {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}