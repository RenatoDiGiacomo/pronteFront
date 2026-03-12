import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
};

export function AuthRoute({ isAuthenticated }: Props) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <div>teste</div>
      <Outlet />
    </div>
  );
}