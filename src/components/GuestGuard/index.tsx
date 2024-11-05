import React from "react";
import { Navigate } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IRoutesState } from "../../router";
import useAuth from "../hooks/useAuth";

interface GuestGuardProps {
  children: React.ReactNode;
  routes: IRoutesState[];
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props;
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTERS_PATHS.HOME} replace />;
  }

  return <>{children}</>;
};

export default GuestGuard;
