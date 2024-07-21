import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../shared/context/AuthContext/useAuth";

interface PrivateRouteProps {
  isPrivate: boolean;
}

export function PrivateRoute({ isPrivate }: PrivateRouteProps) {
  const { signedIn, checkExpirationDate } = useAuth();

  useEffect(() => {
    checkExpirationDate();
  }, [checkExpirationDate]);

  if (!signedIn && isPrivate) {
    return <Navigate to="/sign-in" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
