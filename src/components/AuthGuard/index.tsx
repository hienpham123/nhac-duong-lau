import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ROUTERS_PATHS from "../../shared/constants/router-path";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children } = props;
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={ROUTERS_PATHS.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
