import React from "react";
import { Navigate } from "react-router-dom";
// import useAuth from "src/hooks/useAuth";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IRoutesState } from "../../router";

interface GuestGuardProps {
  children: React.ReactNode;
  routes: IRoutesState[];
}

const GuestGuard = (props: GuestGuardProps) => {
  const { children } = props;
//   const { isAuthenticated } = useAuth();
  const  isAuthenticated  = true

  if (isAuthenticated) {
    return <Navigate to={ROUTERS_PATHS.HOME} replace />;
  }

  return <>{children}</>;
};

export default GuestGuard;
